Here is the fully rewritten and structured **`context.md`** file. It reorganizes all your specifications into a clean, developer-friendly, enterprise-grade architecture context document.

---

# 🎓 Academix — System Architecture & Context Specification

> **Academix** is an enterprise-grade, modern Academic Management System (LMS/ERP) built with React 19, Redux Toolkit, React Router v7, Tailwind CSS, and LocalStorage.

---

## 📋 Table of Contents

1. [Executive Summary & Vision]()
2. [Tech Stack]()
3. [System Architecture & Data Flow]()
4. [Folder & Directory Structure]()
5. [State Management Philosophy]()
6. [Data Schema & Entity Relationships]()
7. [User Roles & Access Control]()
8. [Core Feature Modules]()
9. [UI/UX & Design System]()
10. [Coding Standards & Conventions]()
11. [Expansion Roadmap]()
12. [Future Integrations]()

---

## 🎯 Executive Summary & Vision

### Primary Goal

Build a production-ready, highly scalable frontend architecture that demonstrates enterprise React practices. Academix is designed to seamlessly evolve from a `LocalStorage`-powered application into a full-stack academic platform with zero changes to the UI layer.

### Long-Term Vision

Academix goes beyond basic CRUD operations. It is designed to look, feel, and function like top-tier productivity and learning management tools such as **Jira**, **Notion**, **ClickUp**, **Canvas LMS**, **Google Classroom**, and **Microsoft Teams (Education)**.

---

## 🧰 Tech Stack

| Category | Technology | Purpose |
| --- | --- | --- |
| **Core Framework** | React 19 + Vite | UI Layer & Build Tooling |
| **Routing** | React Router v7 | Layouts, Nested & Protected Routes |
| **State Management** | Redux Toolkit & React Redux | Global State Management |
| **Form Handling** | React Hook Form | Dynamic Forms & Validation |
| **Styling** | Tailwind CSS v4 + `clsx` | Utility-first Glassmorphism Design |
| **Icons** | Lucide React | Modern SVG Icon Suite |
| **Data Visualization** | Recharts | Analytics, Graphs & Metrics |
| **Persistence (Current)** | LocalStorage | Browser-side Mock Database |
| **Persistence (Future)** | REST / PostgreSQL / Firebase / Supabase / Appwrite | Pluggable Backend Layer |

---

## 🏗️ System Architecture & Data Flow

### The Layered Architecture

```
┌────────────────────────────────────────────────────────┐
│                      UI Pages                          │
│     (AdminLayout / TeacherLayout / StudentLayout)      │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                    UI Components                       │
│    (TaskCard, TaskWizard, AttendanceCalendar, etc.)    │
└───────────────────────────┬────────────────────────────┘
                            │
                    dispatch / select
                            │ 
┌───────────────────────────▼────────────────────────────┐
│                     Redux Slices                       │
│     (auth, tasks, students, teachers, theme, etc.)     │
└───────────────────────────┬────────────────────────────┘
                            │
                    async thunks / calls
                            │ 
┌───────────────────────────▼────────────────────────────┐
│                    Service Layer                       │
│    (task.service.js, auth.service.js, etc.)            │
└───────────────────────────┬────────────────────────────┘
                            │
                    direct storage call
                            │ 
            ┌───────────────┴───────────────┐
            │                               │
┌───────────▼────────────┐     ┌────────────▼───────────┐
│ LocalStorage (Current) │     │ REST / Cloud API (Next)│
└────────────────────────┘     └────────────────────────┘

```

### Key Architectural Rule

> **The UI Layer must NEVER directly touch `LocalStorage` or backend endpoints.** All state interactions pass through **Redux Slices**, which delegate data operations to abstract **Services**.

---

## 📁 Folder & Directory Structure

```
src/
├── assets/          # Static assets (images, logos, fonts)
├── components/      # Reusable UI components ONLY (Button, Modal, Card, Table)
├── configs/         # App-wide configurations (routes, navigation, app settings)
├── constants/       # Immutable application constants (roles, statuses, routes)
├── features/        # Business logic modules (auth, tasks, attendance, management)
├── hooks/           # Reusable custom React hooks (useTheme, usePagination, useModal)
├── layouts/         # Application shell structures (AuthLayout, AdminLayout, etc.)
├── pages/           # Route-level page views (Dashboard, TaskDetails, Analytics)
├── services/        # Abstraction layer for persistence (storage/API calls)
├── store/           # Redux store initialization and root reducers
└── utils/           # Pure, side-effect-free helper functions (dates, math, formatters)
```

### Responsibilities

* **`components/`**: Standard, stateless, reusable primitives.
* **`features/`**: Domain-driven feature code (Redux slices, specific forms, complex widgets).
* **`pages/`**: Connects route parameters to feature components. Keep logic minimal here.
* **`services/`**: Encapsulates data persistence logic (`task.service.js`, `student.service.js`).

---

## 🧠 State Management Philosophy

### Redux Toolkit Slices

The global Redux store handles cross-component and domain data:

```
store/
├── authSlice
├── studentsSlice
├── teachersSlice
├── tasksSlice
├── attendanceSlice
├── announcementsSlice
├── analyticsSlice
├── notificationsSlice
├── themeSlice
└── uiSlice
```

### State Storage Strategy

| State Type | Location | Examples |
| --- | --- | --- |
| **Global App State** | Redux Store | Authenticated User, Theme Mode, Global Search, Active Drafts |
| **Domain State** | Redux Store | Task List, Student Directory, Notifications, Announcements |
| **Multi-step Draft State** | Redux Store | Task Wizard Form state (shared across step components) |
| **Transient UI State** | Component State (`useState`) | Modal Open/Close, Dropdown Toggles, Hover Tooltips |

---

## 🗄️ Data Schema & Entity Relationships

### LocalStorage Database Collections

The mock database consists of the following key collections stored as JSON arrays/objects in `localStorage`:

* `users`
* `students`
* `teachers`
* `admins`
* `departments`
* `subjects`
* `tasks`
* `attendance`
* `submissions`
* `announcements`
* `notifications`
* `grades`
* `settings`
* `activityLogs`

### Entity Relationship Map

```
[Admin] ──manages──► [Teachers] & [Students]
  │
  └──assigns──► [Departments] ──contains──► [Subjects]
                       │                          │
                       └──owns─────────────────► [Tasks]
                                                   │
                            [Students] ──assigned to───► [Tasks]
                            │                               │
                                └──creates──────────► [Submissions]
                                                            │
                                    [Teacher] ──────────evaluates──► [Grades & Feedback]
```

---

## 🔒 User Roles & Access Control

Access control is enforced via `ProtectedRoute` and `RoleRoute` components in React Router v7.

```
               ┌──────────┐
               │  Guest   │
               └────┬─────┘
                    │
                  Login
                    │ 
            ┌───────▼────────┐
            │ Role Detection │
            └───────┬────────┘
  ┌─────────────────┼─────────────────┐
  │                 │                 │
┌─▼───────────┐ ┌───▼───────────┐ ┌───▼───────────┐
│ Admin Role  │ │ Teacher Role  │ │ Student Role  │
└─────────────┘ └───────────────┘ └───────────────┘
```

| Feature / Module | Admin | Teacher | Student |
| --- | --- | --- | --- |
| **System Settings & Backups** | Full Access | ❌ No | ❌ No |
| **Manage Teachers & Students** | Full Access | View Only | ❌ No |
| **Department Management** | Full Access | ❌ No | ❌ No |
| **Task Creation (Wizard)** | Full Access | Publish/Edit Assigned | ❌ No |
| **Task Submission** | ❌ No | ❌ No | Full Access |
| **Grading & Feedback** | View | Full Access | View Own Only |
| **Attendance Marking** | Full Access | Assigned Classes | View Own Only |
| **Announcements** | Global Create | Class/Dept Create | View Only |

---

## 📦 Core Feature Modules

### 1. Task Management Module *(Core/Largest Feature)*

* **Views**: Grid, Table, Interactive Drag-and-Drop Kanban Board, Calendar.
* **Task Wizard**: 4-Step Wizard *(1. Info ➔ 2. Assignment ➔ 3. Schedule ➔ 4. Review & Publish)*.
* **Task Drawer**: Side drawer displaying complete history, timeline, attachments, comments, and activity logs.
* **Analytics**: Detailed metrics on completion rates, late submissions, department-wise progress, and teacher velocity.

### 2. Role-Based Dashboards

* **Admin Dashboard**: Analytics charts, activity feeds, total entity counts, quick system action triggers.
* **Teacher Dashboard**: Daily schedule, pending task submissions to grade, assigned classes, attendance shortcuts.
* **Student Dashboard**: Upcoming deadlines, task completion progress, recent grades, monthly attendance overview.

### 3. Attendance Management

* Daily log calendar, bulk class marking, monthly attendance charts, export options.

### 4. Announcements & Notifications

* Targeted announcements by audience *(All, Teachers, Students, Specific Department)* with optional scheduled publishing. Real-time unread/read state notifications.

### 5. Advanced System Utilities

* **Command Palette (`Ctrl + K` / `Cmd + K`)**: Quick search and jump-to navigation across tasks, users, and pages.
* **Global Search**: Debounced search across all collections.
* **Reports Generator**: Printable or exportable PDF/Excel summaries for grades, tasks, and attendance.

---

## 🎨 UI/UX & Design System

### Design Language

* **Aesthetic**: Glassmorphism with soft neumorphic elements, minimal borders, subtle glows, and dark mode support.
* **Design Philosophy**: Fast, accessible, responsive layout with loading skeletons, empty states, error states, and toast notifications.

### Color Palette Matrix

| Theme Mode | Background | Surface | Primary Text | Accent Color |
| --- | --- | --- | --- | --- |
| **Light Theme** | `#FAFAFA` | `#FFFFFF` | `#111111` | `#DC143C` *(Crimson)* |
| **Dark Theme** | `#0D0D0D` | `#171717` | `#F5F5F5` | `#DC143C` *(Crimson)* |

### Standard Page Blueprint

Every page must conform to this component layout structure:

```text
PageHeader ➔ Toolbar (Search/Filters/Sort) ➔ Content View (Grid/Table) ➔ Pagination / EmptyState

```

### Shared UI Component Library

`Button`, `Input`, `Textarea`, `Select`, `Modal`, `Drawer`, `Card`, `Avatar`, `Badge`, `LoadingSpinner`, `EmptyState`, `Table`, `Pagination`, `Search`, `Filters`.

---

## 💻 Coding Standards & Conventions

### Hard Architectural Rules

1. **Component Size**: Keep components focused. Limit to **~200 lines of code** maximum where practical.
2. **Component Separation**:
* `TaskCard`: Displays a single card.
* `TaskGrid`: Renders a grid of cards.
* `TaskWizard`: Orchestrates multi-step forms.


3. **No Direct LocalStorage Manipulation**: Always route persistence calls through a service module (`/services`).
4. **No Hardcoded Roles or Endpoints**: Reference application roles and routes via `/constants`.
5. **Redux Selectors**: Use memoized selectors (`useSelector`) for performance optimization.
6. **Form Validation**: Always handle validation using `React Hook Form` with `onChange` or `onBlur` dynamic validation.

### Naming Conventions

| Artifact | File Name Format | Example |
| --- | --- | --- |
| **Page Components** | PascalCase | `src/pages/TaskDetails.jsx` |
| **UI Components** | PascalCase | `src/components/TaskCard.jsx` |
| **Custom Hooks** | camelCase | `src/hooks/usePagination.js` |
| **Services** | camelCase + `.service` | `src/services/task.service.js` |
| **Redux Slices** | camelCase + `Slice` | `src/features/tasks/taskSlice.js` |
| **Redux Selectors** | camelCase + `Selectors` | `src/features/tasks/taskSelectors.js` |

---

## 🗺️ Expansion Roadmap

```
Phase 1: Foundation
├── Setup Vite + React 19 + Tailwind CSS
├── Routing, Themes (Light/Dark), Auth Layouts
└── Core Shared UI Library (Buttons, Modals, Inputs)

Phase 2: Core Admin & Directory
├── Admin Dashboard & Analytics (Recharts)
├── Student & Teacher CRUD Management
└── Department & Subject Configuration

Phase 3: Comprehensive Task Management
├── Task Wizard, Task Grid & Table Views
├── Task Drawer, Timeline & Activity Feed
└── Kanban Board (Drag-and-Drop) & Calendar Views

Phase 4: Teacher Portal
├── Class Attendance Marking & History
├── Assignment Review System & Grading Tool
└── Student Performance Reports

Phase 5: Student Portal
├── Student Task Center & Submission Flow (Uploads)
├── Personal Gradebook & Attendance Tracker
└── Student Dashboard & Schedule

Phase 6: Enterprise Utilities
├── Command Palette (Ctrl + K) & Global Search
├── System-wide Activity Logs & Audit Trails
└── PDF / Excel Export Engine for Reports

Phase 7: Backend Migration
├── Swap service layer methods from LocalStorage to REST/Firebase/Supabase
└── Zero changes to UI/Component layer required!
```

---

## 🔮 Future Integrations

Academix is pre-architected to integrate with:

* **Backend Engines**: Node.js/Express, Supabase, Firebase Auth, Appwrite, MongoDB, PostgreSQL, Redis.
* **Third-Party APIs**: Cloudinary/S3 (file uploads), OpenAI API (AI grading/summarization), Google Calendar, Google Drive, Resend/SendGrid (Email Notifications), Web Push Notifications.