// import React, { lazy, Suspense } from 'react';
// import { type RouteObject, redirect } from 'react-router';
// import AdminLayout from './AdminLayout';
// import { authService } from '../../services/auth.service';
// import Skeleton from '../../components/shared/Skeleton';

// const AdminDashboard = lazy(() => import('../../pages/admin/Dashboard'));
// const StudentList = lazy(() => import('../../pages/admin/students/StudentList'));
// const StudentDetails = lazy(() => import('../../pages/admin/students/StudentDetails'));
// const CreateStudent = lazy(() => import('../../pages/admin/students/CreateStudent'));
// const EditStudent = lazy(() => import('../../pages/admin/students/EditStudent'));
// const TeacherList = lazy(() => import('../../pages/admin/teachers/TeacherList'));
// const TeacherDetails = lazy(() => import('../../pages/admin/teachers/TeacherDetails'));
// const CreateTeacher = lazy(() => import('../../pages/admin/teachers/CreateTeacher'));
// const EditTeacher = lazy(() => import('../../pages/admin/teachers/EditTeacher'));
// const DepartmentList = lazy(() => import('../../pages/admin/departments/DepartmentList'));
// const DepartmentDetails = lazy(() => import('../../pages/admin/departments/DepartmentDetails'));
// const CreateDepartment = lazy(() => import('../../pages/admin/departments/CreateDepartment'));
// const EditDepartment = lazy(() => import('../../pages/admin/departments/EditDepartment'));
// const TaskDashboard = lazy(() => import('../../pages/admin/tasks/TaskDashboard'));
// const CreateTaskWizard = lazy(() => import('../../pages/admin/tasks/CreateTaskWizard'));
// const TaskDetails = lazy(() => import('../../pages/admin/tasks/TaskDetails'));
// const EditTask = lazy(() => import('../../pages/admin/tasks/EditTask'));
// const TaskAnalytics = lazy(() => import('../../pages/admin/tasks/TaskAnalytics'));
// const AdminAttendance = lazy(() => import('../../pages/admin/Attendance'));
// const AdminAnnouncements = lazy(() => import('../../pages/admin/Announcements'));
// const AdminReports = lazy(() => import('../../pages/admin/Reports'));
// const AdminCalendar = lazy(() => import('../../pages/admin/Calendar'));
// const AdminNotifications = lazy(() => import('../../pages/admin/Notifications'));
// const AdminProfile = lazy(() => import('../../pages/admin/Profile'));
// const AdminSettings = lazy(() => import('../../pages/admin/Settings'));

// const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
//   <Suspense fallback={<Skeleton type="page" />}>{children}</Suspense>
// );

// const adminLoader = async () => {
//   const user = authService.getCurrentUser();
//   if (!user || user.role !== 'admin') {
//     throw redirect('/auth/login');
//   }
//   return { user };
// };

// export const adminRoutes: RouteObject = {
//   path: 'admin',
//   element: <AdminLayout />,
//   loader: adminLoader,
//   children: [
//     { index: true, element: <SuspenseWrapper><AdminDashboard /></SuspenseWrapper> },
//     {
//       path: 'students',
//       children: [
//         { index: true, element: <SuspenseWrapper><StudentList /></SuspenseWrapper> },
//         { path: 'create', element: <SuspenseWrapper><CreateStudent /></SuspenseWrapper> },
//         { path: ':id', element: <SuspenseWrapper><StudentDetails /></SuspenseWrapper> },
//         { path: ':id/edit', element: <SuspenseWrapper><EditStudent /></SuspenseWrapper> },
//       ],
//     },
//     {
//       path: 'teachers',
//       children: [
//         { index: true, element: <SuspenseWrapper><TeacherList /></SuspenseWrapper> },
//         { path: 'create', element: <SuspenseWrapper><CreateTeacher /></SuspenseWrapper> },
//         { path: ':id', element: <SuspenseWrapper><TeacherDetails /></SuspenseWrapper> },
//         { path: ':id/edit', element: <SuspenseWrapper><EditTeacher /></SuspenseWrapper> },
//       ],
//     },
//     {
//       path: 'departments',
//       children: [
//         { index: true, element: <SuspenseWrapper><DepartmentList /></SuspenseWrapper> },
//         { path: 'create', element: <SuspenseWrapper><CreateDepartment /></SuspenseWrapper> },
//         { path: ':id', element: <SuspenseWrapper><DepartmentDetails /></SuspenseWrapper> },
//         { path: ':id/edit', element: <SuspenseWrapper><EditDepartment /></SuspenseWrapper> },
//       ],
//     },
//     {
//       path: 'tasks',
//       children: [
//         { index: true, element: <SuspenseWrapper><TaskDashboard /></SuspenseWrapper> },
//         { path: 'create', element: <SuspenseWrapper><CreateTaskWizard /></SuspenseWrapper> },
//         { path: 'analytics', element: <SuspenseWrapper><TaskAnalytics /></SuspenseWrapper> },
//         { path: ':id', element: <SuspenseWrapper><TaskDetails /></SuspenseWrapper> },
//         { path: ':id/edit', element: <SuspenseWrapper><EditTask /></SuspenseWrapper> },
//       ],
//     },
//     { path: 'attendance', element: <SuspenseWrapper><AdminAttendance /></SuspenseWrapper> },
//     { path: 'announcements', element: <SuspenseWrapper><AdminAnnouncements /></SuspenseWrapper> },
//     { path: 'reports', element: <SuspenseWrapper><AdminReports /></SuspenseWrapper> },
//     { path: 'calendar', element: <SuspenseWrapper><AdminCalendar /></SuspenseWrapper> },
//     { path: 'notifications', element: <SuspenseWrapper><AdminNotifications /></SuspenseWrapper> },
//     { path: 'profile', element: <SuspenseWrapper><AdminProfile /></SuspenseWrapper> },
//     { path: 'settings', element: <SuspenseWrapper><AdminSettings /></SuspenseWrapper> },
//   ],
// };



function AdminRoute() {
  return (
    <div>AdminRoute</div>
  )
}

export default AdminRoute