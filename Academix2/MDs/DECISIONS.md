# 📑 Academix — Architecture Decision Records (ADR)

> This document formally records the key technical decisions, trade-offs, and architectural strategies adopted during the engineering of **Academix**.

---

## 🧭 ADR Index & Status Overview

| Index | Title | Category | Status | Date |
| --- | --- | --- | --- | --- |
| **ADR-001** | [Choice of Core Framework & Build Tooling]() | Infrastructure | `ACCEPTED` | Q3 2026 |
| **ADR-002** | [State Management Architecture (Redux Toolkit + Redux Thunk)]() | Architecture | `ACCEPTED` | Q3 2026 |
| **ADR-003** | [Client-Side Persistence via LocalStorage]() | Data Layer | `TEMPORARY` | Q3 2026 |
| **ADR-004** | [Decoupled Service Layer Abstraction]() | Architecture | `ACCEPTED` | Q3 2026 |
| **ADR-005** | [Domain-Driven / Feature-Based Directory Structure]() | Organization | `ACCEPTED` | Q3 2026 |
| **ADR-006** | [Form Handling & Validation Strategy]() | UI / Forms | `ACCEPTED` | Q3 2026 |
| **ADR-007** | [Utility-First Styling Engine (Tailwind CSS)]() | Styling | `ACCEPTED` | Q3 2026 |
| **ADR-008** | [Multi-Step Wizard Draft State Management]() | State / UX | `ACCEPTED` | Q3 2026 |
| **ADR-009** | [UI Aesthetic: Glassmorphism & Soft Neumorphism]() | Design System | `ACCEPTED` | Q3 2026 |
| **ADR-010** | [Client-Side Routing & Access Control]() | Routing / Auth | `ACCEPTED` | Q3 2026 |

---

## 🛠️ Detailed Architecture Decision Records

---

### ADR-001: Choice of Core Framework & Build Tooling

* **Status:** `ACCEPTED`
* **Context:** The team needed a high-performance, fast-iterating frontend stack for an enterprise-level LMS/ERP hackathon submission capable of handling rich interactive dashboards, complex data tables, and dynamic UI state.

#### Considered Options

1. **React 19 + Vite**
2. **Next.js (App Router)**
3. **Create React App (CRA) / Standard Webpack**

#### Decision & Rationale

We selected **React 19 paired with Vite**.

* **Vite** delivers near-instant Instant Server Start (ES modules) and sub-second Hot Module Replacement (HMR), maximizing development speed.
* **React 19** offers modern concurrent rendering, predictable hook patterns, and seamless component composition.
* **Next.js** was rejected because SSR/SSG adds unnecessary complexity for an application heavily reliant on client-side state, role-restricted single-page dashboards, and client local storage.

#### Trade-offs & Consequences

* **Positive:** Unrivaled Developer Experience (DX), minimal bundle overhead, simple static deployment (Vercel/Netlify).
* **Negative:** No server-side rendering out of the box (acceptable for an authenticated app behind a login screen).

---

### ADR-002: State Management Architecture (Redux Toolkit + Redux Thunk)

* **Status:** `ACCEPTED`
* **Context:** Academix contains multiple business domains including Authentication, Tasks, Students, Teachers, Attendance, Announcements, and Analytics. These modules share data across multiple layouts and routes while requiring predictable state updates and asynchronous workflows.

The architecture ensures that UI components remain focused on presentation and user interactions, without containing business logic or persistence logic.

#### Considered Options

1. **React Context API + `useReducer**`
2. **Zustand**
3. **Redux Toolkit**
4. **Redux Toolkit + Redux Thunk**

#### Decision

Academix adopts **Redux Toolkit** as the centralized state management solution and **Redux Thunk** as the middleware for handling asynchronous business logic.

Redux Toolkit manages the global application state, while Redux Thunks act as the orchestration layer between Redux and the Service Layer.

```text
UI Components
      │
      ▼
Redux Action
      │
      ▼
Redux Thunk
      │
      ▼
Service Layer
      │
      ▼
Persistence Layer
(LocalStorage → REST API)

```

#### Rationale

##### Predictable Global State

Redux Toolkit provides:

* Centralized Store
* Immutable Updates via Immer
* Feature-based Slices
* Excellent DevTools
* Selector Pattern

##### Separation of Concerns

Business logic should never live inside React components.

```text
Component ➔ dispatch(createTask()) ➔ Thunk ➔ taskService.create() ➔ LocalStorage

```

The component dispatches an action and renders state without handling data persistence or side effects directly.

##### Async-Ready Architecture

Although the current persistence layer is LocalStorage (synchronous), every CRUD operation is implemented through Redux Thunks.

This ensures that migrating to an asynchronous backend (REST API, Firebase, Supabase, Appwrite, etc.) requires no changes to the UI layer. Only the Service Layer implementation changes.

##### Scalable Business Logic

Redux Thunks become the single location for:

* API Calls
* Error Handling
* Loading States
* Success Notifications
* Optimistic Updates
* Retry Logic
* Data Transformation

This keeps slices focused on state mutations while avoiding duplicated business logic across components.

#### Alternatives Considered

##### React Context API

* **Rejected because:** Difficult to scale, frequent unnecessary re-renders, provider nesting becomes unmaintainable, lacks a middleware ecosystem, and offers a weak debugging experience.

##### Zustand

* **Rejected because:** Excellent for small-to-medium projects, but offers a less opinionated architecture. Missing a standardized async workflow, making team collaboration less structured in larger enterprise applications.

##### RTK Query

* **Deferred:** Current project uses LocalStorage. Once a real backend is introduced, RTK Query may be evaluated if the application benefits from automated caching and server-state management.

#### Consequences

* **Positive:** Clean architecture, predictable state flow, UI remains presentation-only, easy testing, excellent DevTools debugging, seamless backend migration, supports complex enterprise workflows.
* **Negative:** Additional boilerplate compared to lightweight libraries; developers must understand middleware concepts (slightly longer learning curve).

#### Future Outlook

When the backend is introduced, Redux Thunks will continue to orchestrate asynchronous workflows, while only the internal Service Layer implementations change from LocalStorage to external APIs.

---

### ADR-003: Client-Side Persistence via LocalStorage

* **Status:** `TEMPORARY` (Roadmap Target for Backend Migration)
* **Context:** For a hackathon deployment, setting up external databases can delay UI/UX velocity. The app requires immediate zero-latency persistence that functions completely offline without requiring API keys or backend servers during judging.

#### Considered Options

1. **Browser `LocalStorage` API (Mock Storage Engine)**
2. **IndexedDB (via Dexie.js)**
3. **External BaaS (Firebase / Supabase)**

#### Decision & Rationale

We chose **LocalStorage** as an interim mock database layer.

* Zero configuration setup for reviewers and hackathon evaluators.
* Instant synchronous execution allowing reliable local state seed data.

#### Trade-offs & Consequences

* **Positive:** 100% offline capability, zero hosting cost, fast execution.
* **Negative:** ~5MB storage cap, no native security/encryption, synchronous thread blocking on large data parsing.
* **Mitigation:** The application MUST NOT call `localStorage` directly from React components. All reads/writes pass through abstract **Services** (`ADR-004`).

---

### ADR-004: Decoupled Service Layer Architecture

* **Status:** `ACCEPTED`
* **Context:** To ensure long-term viability, Academix must be able to switch from `LocalStorage` to a real backend API (Node.js, Firebase, or Supabase) without requiring rewrites of Redux slices or React components.

#### Architectural Flow

```
React Component
        │
        ▼
dispatch(fetchTasks())
        │
        ▼
Redux Thunk
        │
        ▼
Task Service
        │
        ▼
Persistence Layer
(LocalStorage / REST API / Firebase / Supabase)
```

#### Why Redux Thunk?

The Service Layer should never be imported directly into React components. Instead, components dispatch Redux Thunks, which coordinate asynchronous workflows and invoke the appropriate Service methods.

This establishes a strict layering:

* **Presentation Layer:** React Components
* **Application Layer:** Redux Thunks
* **Business Logic Layer:** Services
* **Persistence Layer:** LocalStorage / Backend

#### Decision & Rationale

We mandated a strict **Service Layer Abstraction** (`/src/services/`).

* Redux Actions trigger Redux Thunks, which invoke service functions (e.g., `taskService.getTasks()`).
* The UI layer is completely ignorant of *where* data is saved.
* Switching to a REST API only requires swapping method implementations inside `/services` files.

#### Trade-offs & Consequences

* **Positive:** Clean architecture, decoupling of storage from UI, seamless backend migration in Phase 12.
* **Negative:** Requires creating wrapper service classes/objects even for basic CRUD actions.

---

### ADR-005: Domain-Driven / Feature-Based Directory Structure

* **Status:** `ACCEPTED`
* **Context:** Organizing projects solely by artifact type (`/components`, `/reducers`, `/actions`) becomes unmanageable as features grow. Developers spend time jumping between disparate directories to work on a single module.

#### Folder Structure Blueprint

```
src/
├── features/        # Business Domain Modules
│   ├── tasks/       # Slices, Selectors, Task-Specific Components
│   ├── attendance/
│   └── auth/
├── components/      # Generic Shared UI Primitives (Button, Modal, Input)
└── services/        # Data Layer Adapters
```

#### Decision & Rationale

We implemented a **Hybrid Domain-Driven Structure**. Core shared UI components live in `src/components/`, while domain-specific code (slices, components, selectors) is grouped under `src/features/[feature-name]/`.

#### Trade-offs & Consequences

* **Positive:** High cohesion, easy code navigation, modular feature deletion or expansion.
* **Negative:** Requires discipline to prevent feature modules from importing directly from sibling feature internals without shared interfaces.

---

### ADR-006: Form Handling & Validation Strategy

* **Status:** `ACCEPTED`
* **Context:** Academix contains multiple complex data entry forms, including the multi-step Task Wizard, Student/Teacher onboarding forms, and Department configurations.

#### Considered Options

1. **React Hook Form (RHF)**
2. **Formik**
3. **Uncontrolled native HTML forms**

#### Decision & Rationale

We selected **React Hook Form (RHF)**.

* RHF utilizes uncontrolled inputs to minimize component re-renders on every keystroke.
* Extremely lightweight with straightforward schema validation integration.
* Clean integration with custom Tailwind inputs via `Controller` wrappers.

#### Trade-offs & Consequences

* **Positive:** Excellent performance, reduced re-renders, intuitive API.
* **Negative:** Requires standard `Controller` wrappers for non-native UI inputs.

---

### ADR-007: Utility-First Styling Engine (Tailwind CSS)

* **Status:** `ACCEPTED`
* **Context:** Developing a custom CSS design system during a hackathon leads to inconsistent spacing, bloated CSS files, and naming friction (BEM naming fatigue).

#### Decision & Rationale

We selected **Tailwind CSS**.

* Provides a standardized, constraint-based spacing, typography, and color scale.
* Allows effortless dark mode switching via class strategy (`dark:bg-neutral-900`).
* Eliminates dead CSS code in production builds through automatic purge functionality.

#### Trade-offs & Consequences

* **Positive:** High iteration speed, zero context switching between JS and CSS files, unified theme tokens.
* **Negative:** HTML markup can appear cluttered due to utility class density (mitigated via `clsx` and component abstractions).

---

### ADR-008: Multi-Step Wizard Draft State Management

* **Status:** `ACCEPTED`
* **Context:** The **Task Wizard** is a 4-step workflow (Info ➔ Assignment ➔ Schedule ➔ Review). Users must be able to move backward and forward without losing form input state, and save uncompleted drafts.

#### Decision & Rationale

We decided to maintain active **Wizard Form Drafts directly inside Redux** (`taskSlice.js`) rather than isolated step-level component state.

* Preserves form inputs if a user navigates between steps or switches tabs.
* Allows global UI triggers (e.g., Quick Action Modals) to inspect or load wizard drafts.

#### Trade-offs & Consequences

* **Positive:** Seamless multi-step UX, zero state loss on tab switches, draft saving capability.
* **Negative:** Redux store holds transient form input until submission or explicit cancel.

---

### ADR-009: Visual Identity: Glassmorphism & Soft Neumorphism

* **Status:** `ACCEPTED`
* **Context:** Enterprise applications often look rigid and outdated. Academix requires a modern, polished visual identity that impresses hackathon judges while maintaining accessibility and text legibility.

#### Design Tokens

* **Backdrop Blur:** `backdrop-blur-md` combined with semi-transparent surfaces (`bg-white/70`, `dark:bg-neutral-900/70`).
* **Borders:** Thin, high-contrast borders (`border-white/20`, `dark:border-neutral-800`).
* **Accents:** Crimson Red (`#DC143C`) for high-priority CTA focus points.

#### Decision & Rationale

Adopt a **Modern Glassmorphic Hybrid Aesthetic**. It delivers a premium SaaS desktop feel (resembling macOS and modern productivity apps like Notion/Linear) while keeping contrast ratios high for legibility.

#### Trade-offs & Consequences

* **Positive:** Professional, visually compelling UI that stands out in demonstrations.
* **Negative:** Heavy use of backdrop filters can impact GPU performance on low-end mobile devices (mitigated with simplified fallback borders).

---

### ADR-010: Client-Side Routing & Access Control

* **Status:** `ACCEPTED`
* **Context:** The application contains 3 distinct user roles (Admin, Teacher, Student). Unauthenticated users must be blocked from private routes, and users with one role must not access dashboards meant for another.

#### Component Structure

```jsx
<BrowserRouter>
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
    </Route>
    
    <Route element={<ProtectedRoute />}>
      <Route element={<RoleRoute allowedRoles={['ADMIN']} />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Route>
    </Route>
  </Routes>
</BrowserRouter>

```

#### Decision & Rationale

Use **React Router v7** with wrapped higher-order route guards (`ProtectedRoute` and `RoleRoute`).

* `ProtectedRoute` verifies active session presence in `authSlice`.
* `RoleRoute` validates user role claims and redirects unauthorized access attempts to their respective home dashboard.

#### Trade-offs & Consequences

* **Positive:** Declarative security boundary, clean layout isolation per role.
* **Negative:** Requires keeping route guard configurations synchronized with role permissions.

---

## ⏳ Pending & Future Decision Pipeline

The following architectural decisions are scheduled for evaluation during **Phase 12 (Backend Migration)**:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Future ADR Pipeline                          │
├─────────────────┬───────────────────────────────────────────────┤
│ Decision Topic  │ Candidates Under Evaluation                   │
├─────────────────┼───────────────────────────────────────────────┤
│ Backend Engine  │ Node.js/Express vs. Supabase vs. Appwrite     │
│ Auth Provider   │ Custom JWT vs. Firebase Auth vs. Clerk        │
│ Database Storage│ PostgreSQL vs. MongoDB                        │
│ Real-Time Sync  │ Socket.IO vs. Supabase Realtime Channels      │
│ File Uploads    │ AWS S3 vs. Cloudinary                         │
│ AI Copilot      │ OpenAI API vs. Google Gemini API Integration  │
└─────────────────┴───────────────────────────────────────────────┘

```