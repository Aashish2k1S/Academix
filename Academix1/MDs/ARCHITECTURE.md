# Academix 
```
Academix
│
├── Authentication
│   ├── Login
│   ├── Forgot Password
│   ├── Reset Password
│   ├── Role Detection
│   └── Session Management
│
├── Admin Portal
├── Teacher Portal
└── Student Portal
```

# ADMIN PORTAL 
```
Admin Dashboard
│
├── Dashboard
│
├── Student Management
│
├── Teacher Management
│
├── Department Management
│
├── Task Management
│
├── Attendance
│
├── Announcements
│
├── Reports
│
├── Calendar
│
├── Notifications
│
├── Profile
│
└── Settings
```

## Admin Dashboard
```
Admin Dashboard
│
├── Welcome Banner
├── Quick Stats
│      ├── Students
│      ├── Teachers
│      ├── Departments
│      ├── Active Tasks
│      ├── Pending Reviews
│      └── Attendance %
├── Analytics
│      ├── Task Completion
│      ├── Attendance
│      ├── Department Wise
│      ├── Teacher Performance
│      └── Student Performance
├── Recent Activities
├── Recent Students
├── Recent Teachers
├── Upcoming Deadlines
├── Announcements
└── Quick Actions
```

## Student Management 
```
Students
│
├── Student List
│      ├── Grid View
│      ├── Table View
│      └── Kanban (optional)
├── Student Details
│      ├── Personal Information
│      ├── Academic Information
│      ├── Attendance
│      ├── Tasks
│      ├── Grades
│      ├── Timeline
│      └── Documents
├── Create Student
├── Edit Student
├── Delete Student
├── Bulk Import
├── Export CSV
├── Assign Department
├── Assign Semester
└── Search & Filters
```

## TEACHER MANAGEMENT
```
Teachers
│
├── Teacher List
├── Teacher Details
│      ├── Profile
│      ├── Subjects
│      ├── Assigned Departments
│      ├── Assigned Tasks
│      ├── Attendance
│      └── Performance
├── Create Teacher
├── Edit Teacher
├── Delete Teacher
├── Assign Subjects
├── Assign Department
└── Search & Filters
```

## DEPARTMENT MANAGEMENT
```
Departments
│
├── Department List
├── Department Details
│      ├── HOD
│      ├── Teachers
│      ├── Students
│      ├── Subjects
│      └── Analytics
├── Create Department
├── Edit Department
├── Delete Department
└── Department Statistics
```

## TASK MANAGEMENT
```
Tasks
│
├── Dashboard
├── Grid View
├── Table View
├── Kanban Board
├── Calendar View
├── Create Task Wizard
│      ├── Step 1
│      │      Basic Info
│      │
│      ├── Step 2
│      │      Assignment
│      │
│      ├── Step 3
│      │      Schedule
│      │
│      ├── Step 4
│      │      Review
│      │
│      └── Publish
├── Edit Task
├── Duplicate Task
├── Archive Task
├── Delete Task
├── Task Details
│      ├── Overview
│      ├── Timeline
│      ├── Attachments
│      ├── Assigned Teacher
│      ├── Assigned Students
│      ├── Comments
│      └── Activity
├── Task Analytics
│      ├── Completion
│      ├── Submission
│      ├── Late
│      ├── Average Time
│      └── Department Wise
├── Filters
└── Search
```

## ATTENDANCE
```
Attendance
│
├── Dashboard
├── Daily Attendance
├── Bulk Attendance
├── Calendar
├── Monthly Report
├── Student Attendance
├── Teacher Attendance
├── Department Attendance
├── Analytics
└── Export
```

## ANNOUNCEMENTS
```
Announcements
│
├── All
├── Draft
├── Published
├── Scheduled
├── Create
├── Edit
├── Delete
├── Audience
│      ├── All
│      ├── Teachers
│      ├── Students
│      └── Department
└── Analytics
```

## REPORTS
```
Reports
│
├── Student Report
├── Teacher Report
├── Attendance Report
├── Task Report
├── Department Report
├── Charts
├── PDF
├── Excel
└── CSV
```

## CALENDAR
```
Calendar
│
├── Tasks
├── Exams
├── Holidays
├── Attendance
├── Events
└── Meetings
```

## NOTIFICATIONS
```
Notifications
│
├── Task Assigned
├── Submission
├── Announcement
├── Attendance
├── Reminder
├── Mark Read
└── Archive
```

## RPOFILE 
```
Profile
│
├── Basic Info
├── Avatar
├── Security
├── Activity
└── Preferences
```

## SETTINGS 
```
Settings
│
├── Theme
├── Language
├── Notification
├── Local Storage
├── Backup
├── Restore
└── About
```

# TEACHER PORTAL
```
Teacher Dashboard
│
├── Dashboard
├── My Students
├── My Classes
├── Attendance
├── Assigned Tasks
│      ├── Review
│      ├── Grade
│      ├── Feedback
│      └── Submission
├── Calendar
├── Announcements
├── Reports
├── Profile
└── Settings
```

# STUDENT PORTAL
```
Student Dashboard
│
├── Dashboard
├── My Tasks
│      ├── Pending
│      ├── Submitted
│      ├── Completed
│      ├── Overdue
│      └── Draft
├── Task Details
├── Submit Assignment
├── Attendance
├── Grades
├── Calendar
├── Announcements
├── Profile
└── Settings
```

# Shared Components
```
Shared
│
├── Navbar
├── Sidebar
├── Breadcrumb
├── Theme Toggle
├── Search
├── Filters
├── Tables
├── Cards
├── Charts
├── Empty State
├── Error State
├── Skeleton
├── Modal
├── Drawer
├── Wizard
├── Pagination
├── Toast
├── Dialog
└── Forms
```

# Services Layer
```
services
│
├── auth.service
├── student.service
├── teacher.service
├── task.service
├── attendance.service
├── department.service
├── announcement.service
├── analytics.service
├── report.service
└── notification.service
```

# Redux Store
```
store
│
├── auth
├── students
├── teachers
├── departments
├── tasks
├── attenance
├── announcements
├── notifications
├── analytics
├── theme
└── ui
```

# LocalStorage Collections (Current "Database")
```
localStorage
│
├── users
├── students
├── teachers
├── admins
├── departments
├── subjects
├── tasks
├── submissions
├── attendance
├── announcements
├── notifications
├── grades
├── settings
└── activityLogs
```

# Entity Relationships
```
        Admin
         │
 ┌───────┼──────────┐
 │                  │
 ▼                  ▼
Teachers     Students
 │                  │
 └──────────┬───────┘
            │
            ▼
        Departments
            │
            ▼
        Subjects
            │
            ▼
        Tasks
            │
 ┌──────────┼──────────────┐
 ▼          ▼              ▼
Teacher     Students   Attachments
            │
            ▼
        Submissions
            │
            ▼
        Feedback
            │
            ▼
        Grades
```