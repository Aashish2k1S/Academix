# 🎯 Academix — Engineering Roadmap & Task Tracker

> **System Status:** Phase 3 & 4 Active | **Core Stack:** React 19 + Redux Toolkit + Vite + Tailwind CSS

---

## 📊 Milestone Overview & Status Key

### Status Legend

| Symbol | Status | Description |
| --- | --- | --- |
| ✅ | **Completed** | Production-ready, fully integrated, and tested |
| 🚧 | **In Progress** | Active development in current sprint |
| ⏳ | **Planned** | Backlog item scheduled for upcoming phase |
| ❌ | **Deprecated** | Removed or superseded by architectural revision |

### Phase Completion Matrix

```text
Phase 1: Project Setup & Foundation     [████████████████████] 100% (Completed)
Phase 2: Authentication & Auth Guards   [████████████░░░░░░░░]  60% (In Progress)
Phase 3: Role-Based Layouts & Shells    [██████░░░░░░░░░░░░░░]  30% (In Progress)
Phase 4: Comprehensive Task Management  [████░░░░░░░░░░░░░░░░]  20% (In Progress)
Phase 5: Student Portal & Directory     [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
Phase 6: Teacher Portal & Reviews       [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
Phase 7: Department & Course Admin      [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
Phase 8: Attendance Management Engine   [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
Phase 9: Announcements & Notifications  [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
Phase 10: Reporting & Data Export       [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
Phase 11: UI/UX Polish & Optimization   [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
Phase 12: Production Backend Migration  [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)

```

---

## 🏗️ Detailed Task Breakdown

### Phase 1: Project Setup & Core Foundation

* [x] ✅ Initialize Vite + React 19 project scaffolding
* [x] ✅ Configure Tailwind CSS (Glassmorphism design tokens & utility classes)
* [x] ✅ Configure Redux Toolkit store architecture (`store/index.js`)
* [x] ✅ Configure React Router v7 layout routes
* [x] ✅ Implement global Theme Engine (`useTheme` hook with Light/Dark modes)
* [x] ✅ Establish domain-driven directory structure (`/components`, `/features`, `/services`, `/layouts`)
* [x] ✅ Build base UI primitive component library (`Button`, `Input`, `Card`, `Badge`, `Modal`, `Table`)

---

### Phase 2: Authentication & Access Control

* [x] ✅ Implement mock authentication service (`auth.service.js` with LocalStorage session)
* [x] ✅ Build `ProtectedRoute` higher-order wrapper for session verification
* [x] ✅ Build `RoleRoute` component for role-level access control (`ADMIN`, `TEACHER`, `STUDENT`)
* [ ] ⏳ Implement persistent "Remember Me" session handling
* [ ] ⏳ Add Logout confirmation modal with session purge trigger

---

### Phase 3: Application Shells & Layout Architecture

#### Admin Layout

* [x] ✅ Responsive Collapsible Sidebar with navigation items
* [ ] 🚧 Top Navbar (Global search trigger, role badge, profile drawer)
* [ ] ⏳ Admin Overview Dashboard & Metrics summary

#### Teacher Layout

* [ ] ⏳ Teacher Navigation Sidebar
* [ ] ⏳ Teacher Top Navbar & Quick Class selector
* [ ] ⏳ Teacher Workspace Dashboard

#### Student Layout

* [ ] ⏳ Student Navigation Sidebar
* [ ] ⏳ Student Top Navbar & Progress quick-view
* [ ] ⏳ Student Personal Dashboard

---

### Phase 4: Task Management Module *(Core System)*

#### Task Wizard (Multi-Step Creation Tool)

* [x] ✅ Wizard Shell Layout & Step Navigation Bar
* [x] ✅ Draft State Redux Slice (`taskSlice.js` draft state persistence)
* [ ] 🚧 **Step 1:** Task Basic Information Form *(Title, Description, Priority, Tags)*
* [ ] ⏳ **Step 2:** Assignment Matrix *(Department, Semester, Assigned Teachers/Students)*
* [ ] ⏳ **Step 3:** Schedule & Deadlines *(Due Date, Late Submission Policy, Grace Period)*
* [ ] ⏳ **Step 4:** Final Review & Publish Action

#### Task View Modes

* [ ] ⏳ Grid View (Card layout with completion progress rings)
* [ ] ⏳ Table View (Sortable, filterable, paginated enterprise list)
* [ ] ⏳ Interactive Kanban Board (Drag-and-Drop state transitions)
* [ ] ⏳ Calendar View (Deadline timeline visualization)

#### Task Ecosystem Features

* [ ] ⏳ Task Details Side Drawer (Activity logs, attachment previews)
* [ ] ⏳ Interactive Audit Timeline (Creation ➔ Assignment ➔ Submission ➔ Grading)
* [ ] ⏳ Task Comment & Discussion Thread
* [ ] ⏳ Task Analytics Widget (Completion velocity, late submission metrics)

---

### Phase 5: Student Directory & Management

* [ ] ⏳ Student Directory CRUD Operations (List, Filter, Search, Edit, Suspend)
* [ ] ⏳ Detailed Student Profile View (Enrolled courses, overall attendance, active tasks)
* [ ] ⏳ Student Individual Attendance Tracker
* [ ] ⏳ Student Gradebook & Transcript View

---

### Phase 6: Teacher Directory & Management

* [ ] ⏳ Teacher Directory CRUD Operations (List, Assign Departments, Edit Profile)
* [ ] ⏳ Teacher Workload & Assigned Tasks Manager
* [ ] ⏳ Assignment Submission Review & Evaluation Interface
* [ ] ⏳ Class Attendance Recording View

---

### Phase 7: Department & Curriculum Management

* [ ] ⏳ Department CRUD Management (CS, Mechanical, Civil, Business, etc.)
* [ ] ⏳ Assign Head of Department (HOD) and faculty mappings
* [ ] ⏳ Department Distribution & Performance Analytics Dashboard

---

### Phase 8: Attendance Management Engine

* [ ] ⏳ Daily Class-wise Attendance Marker Component
* [ ] ⏳ Bulk Attendance Grid for rapid logging
* [ ] ⏳ Monthly Attendance Trends & Percentage Calculations
* [ ] ⏳ Low Attendance Alert Triggering System

---

### Phase 9: Announcements & Notification Center

* [ ] ⏳ Broadcast Announcement Creator with Audience Targeting *(All, Faculty, Students, Dept)*
* [ ] ⏳ Scheduled Announcement Publishing Engine
* [ ] ⏳ Notification Center (Real-time unread counter, read state toggle, filtering)

---

### Phase 10: Reporting & Data Export Engine

* [ ] ⏳ PDF Report Generation Engine (Student Transcripts, Attendance Summaries)
* [ ] ⏳ Excel (`.xlsx`) Data Exporter for Gradebooks and Task Metrics
* [ ] ⏳ CSV Data Exporter for Directory Data

---

### Phase 11: UI/UX Polish, Accessibility & Performance

* [ ] ⏳ Page Transition Animations & Micro-interactions (Framer Motion / Tailwind transitions)
* [ ] ⏳ Content Skeleton Loaders for initial data fetches
* [ ] ⏳ Reusable Empty States & Error Fallback Boundaries
* [ ] ⏳ Keyboard Accessibility & Focus Traps for Modals
* [ ] ⏳ Command Palette (`Ctrl + K` / `Cmd + K`) for instant navigation
* [ ] ⏳ Responsive Mobile Drawer & Layout Adjustments

---

### Phase 12: Production Backend Migration Layer

* [ ] ⏳ Replace `LocalStorage` adapters inside `/services` with Axios API Clients
* [ ] ⏳ Implement Service API abstraction layer for external REST / Firebase / Supabase
* [ ] ⏳ Integrate Real-time JWT Authentication & Token Refresh Flow
* [ ] ⏳ Cloud File Attachment Upload Service (S3 / Cloudinary integration)
* [ ] ⏳ Web Push Notification Service worker implementation

---

## 🔮 Future Backlog & AI Expansion

```text
┌───────────────────────────────────────────────────────────────────────────┐
│                        Future Innovation Backlog                          │
├───────────────────────────────────────────────────────────────────────────┤
│ 🤖 AI-Powered Assignment Generator (Prompts to Structured Task Schema)    │
│ 📝 AI Submission Feedback & Automated Essay Grading Assistant             │
│ 📷 OCR-based Physical Attendance Sheet Scanning                           │
│ 💬 Real-Time Peer & Faculty Chat Threads                                  │
│ 📅 Google Calendar & Microsoft Outlook Sync                               │
│ 📁 Google Drive / OneDrive Direct Attachment Picker                       │
│ ✉️ Transactional Email Service Integration (Resend / SendGrid)            │
└───────────────────────────────────────────────────────────────────────────┘

```