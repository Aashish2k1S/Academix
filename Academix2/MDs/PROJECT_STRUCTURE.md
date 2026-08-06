# 📁 Academix — Project Architecture & Directory Structure

## Overview

**Academix** follows a **feature-oriented architecture** with strict separation of concerns. It is engineered to scale seamlessly from a LocalStorage-backed MVP to an enterprise, production-ready application powered by a REST API or cloud backend.

---

## 🌳 Root Structure

```bash
src/
├── app/          # App bootstrapping & global providers
├── assets/       # Static assets (images, fonts, icons)
├── components/   # Shared UI & modular components
├── configs/      # Static application configurations
├── constants/    # Fixed global values & enums
├── context/      # Light React context for UI-only state
├── features/     # Feature-based Redux slices & logic
├── hooks/        # Generic, reusable React hooks
├── layouts/      # Route layout wrappers & shells
├── pages/        # Route views & page composition
├── routes/       # Routing setup, guards & access control
├── services/     # Data & API abstraction layer
├── styles/       # Global CSS, Tailwind layers & design tokens
├── utils/        # Pure utility/helper functions
├── App.jsx       # Root React component
└── main.jsx      # Application entry point

```

---

## 📂 Directory Breakdown

### 🛠️ Core & Routing

* **`app/`** — Bootstrapping layer containing Redux Store setup (`store.js`) and global provider wrappers (`providers.jsx`).
> ⚠️ **Rule:** Never place business logic here.


* **`layouts/`** — Structural layout shells (`AdminLayout`, `TeacherLayout`, `StudentLayout`, `AuthLayout`). Defines page structure and persistent UI.
* **`pages/`** — Views mapped directly to routes (`admin/`, `teacher/`, `student/`, `auth/`, `shared/`). Pages compose UI components; avoid heavy business logic here.
* **`routes/`** — Route definitions and access controllers (`ProtectedRoute`, `RoleRoute`, `AppRoute`) handling auth checks and nested layouts.

### 🎨 UI & Presentation

* **`assets/`** — Static media files (`icons/`, `images/`, `logo/`, `fonts/`, `animations/`).
* **`styles/`** — Global styles (`globals.css`, `index.css`), Tailwind directives, CSS variables, and design tokens.
* **`components/`** — Reusable UI building blocks, organized by scope:
* **`components/ui/`** — Atomic components (`Button`, `Input`, `Select`, `Card`, `Modal`). Pure, dumb components with **no API, Redux, or business logic**.
* **`components/common/`** — Reusable layout sections (`PageHeader`, `PageToolbar`, `EmptyState`, `PageContainer`).
* **`components/layout/`** — App shell components (`Sidebar`, `Navbar`, `Breadcrumb`, `ThemeToggle`, `UserMenu`).
* **`components/dashboard/`** — Dashboard widgets (`AnalyticsSection`, `TaskChart`, `StatsGrid`).
* **`components/tasks/`** — Domain UI for tasks (`TaskCard`, `TaskTable`, drawers, modals, filters).



### ⚡ State & Data Layer

* **`features/`** — Domain-driven Redux modules (`auth/`, `tasks/`, `users/`, `attendance/`, `analytics/`). Each module owns its `slice`, `selectors`, `thunks`, `utils`, and `index.js`.
* **`services/`** — Data persistence abstraction (`task.service.js`, `auth.service.js`). Encapsulates LocalStorage, REST API, or BaaS (Firebase/Supabase) operations. UI components **never** access storage directly.
* **`context/`** — React Context for light, UI-only state (e.g., `ThemeProvider`). Complex state must live in Redux.
* **`hooks/`** — Reusable UI logic (`useModal`, `usePagination`, `useLocalStorage`, `useDebounce`). Free of page-specific logic.

### ⚙️ Utilities & Configs

* **`configs/`** — App configurations (`navigation.js`, `charts.js`, `roles.js`, `theme.js`).
* **`constants/`** — Static application enums (`roles.js`, `priority.js`, `status.js`, `departments.js`).
* **`utils/`** — Pure helper functions (`cn.js`, `date.js`, `validators.js`, `mockTasks.js`). Free of side effects or UI rendering.

---

## 🔄 Data Flow Architecture

Data flows unidirectionally to maintain predictability and loose coupling:

```
[ Page / Component ]
         │
         ▼ (Dispatches Action)
     [ Thunk ]
         │
         ▼ (Calls)
    [ Service ]
         │
         ▼ (Reads/Writes)
[ LocalStorage / API ]
         │
         ▼ (Updates)
   [ Redux Store ]
         │
         ▼ (Selects via Selector)
[ Page / Component ]
```

---

## 📋 Folder Responsibility Matrix

| Folder | Core Responsibility | Can Use Redux? | Can Access Storage/API? |
| --- | --- | --- | --- |
| **`app/`** | Global bootstrapping & wrappers | ❌ | ❌ |
| **`components/ui/`** | Pure, presentational UI elements | ❌ | ❌ |
| **`components/`** | Reusable domain UI sections | ✅ | ❌ |
| **`pages/`** | Route composition & layout | ❌ (Minimal) | ❌ |
| **`features/`** | Redux domain state & thunks | ✅ | Via Services |
| **`services/`** | API & persistence layer | ❌ | ✅ |
| **`utils/`** | Pure helper functions | ❌ | ❌ |

---

## 📐 Naming Conventions

```javascript
// Components (PascalCase)
TaskCard.jsx
StudentTable.jsx
TeacherModal.jsx

// Custom Hooks (camelCase with 'use')
useTheme.js
useModal.js

// Services & Redux Files (camelCase with dot notation)
task.service.js
auth.service.js
taskSlice.js
taskSelectors.js

// Constants & Configs (camelCase)
roles.js
priority.js

```

---

## 🚀 Scalability & Migration Strategy

The UI layer communicates exclusively through Redux and Service interfaces. Upgrading the backend requires **zero changes to the UI layer**:

```text
Current (MVP):
React ──► Redux ──► Thunk ──► Service ──► LocalStorage

Future (Production):
React ──► Redux ──► Thunk ──► Service ──► REST API / Cloud DB

```

---

## 🎯 Key Architecture Goals

* **Feature-First:** Self-contained domains for effortless scaling.
* **Low Coupling & High Cohesion:** Clear separation between presentation, state, and API layers.
* **Backend Agnostic:** Seamless transition from mock/local storage to live server APIs.
* **Testability:** Decoupled logic and pure utilities enable rapid unit and integration testing.