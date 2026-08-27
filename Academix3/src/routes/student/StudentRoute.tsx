// import React, { lazy, Suspense } from 'react';
// import { type RouteObject, redirect } from 'react-router';
// import StudentLayout from './StudentLayout';
// import { authService } from '../../services/auth.service';
// import Skeleton from '../../components/shared/Skeleton';

// const StudentDashboard = lazy(() => import('../../pages/student/Dashboard'));
// const StudentTasks = lazy(() => import('../../pages/student/MyTasks'));
// const StudentTaskDetails = lazy(() => import('../../pages/student/TaskDetails'));
// const SubmitAssignment = lazy(() => import('../../pages/student/SubmitAssignment'));
// const StudentAttendance = lazy(() => import('../../pages/student/Attendance'));
// const StudentGrades = lazy(() => import('../../pages/student/Grades'));
// const StudentCalendar = lazy(() => import('../../pages/student/Calendar'));
// const StudentAnnouncements = lazy(() => import('../../pages/student/Announcements'));
// const StudentProfile = lazy(() => import('../../pages/student/Profile'));
// const StudentSettings = lazy(() => import('../../pages/student/Settings'));

// const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
//   <Suspense fallback={<Skeleton type="page" />}>{children}</Suspense>
// );

// const studentLoader = async () => {
//   const user = authService.getCurrentUser();
//   if (!user || user.role !== 'student') {
//     throw redirect('/auth/login');
//   }
//   return { user };
// };

// export const studentRoutes: RouteObject = {
//   path: 'student',
//   element: <StudentLayout />,
//   loader: studentLoader,
//   children: [
//     { index: true, element: <SuspenseWrapper><StudentDashboard /></SuspenseWrapper> },
//     {
//       path: 'tasks',
//       children: [
//         { index: true, element: <SuspenseWrapper><StudentTasks /></SuspenseWrapper> },
//         { path: ':id', element: <SuspenseWrapper><StudentTaskDetails /></SuspenseWrapper> },
//         { path: ':id/submit', element: <SuspenseWrapper><SubmitAssignment /></SuspenseWrapper> },
//       ],
//     },
//     { path: 'attendance', element: <SuspenseWrapper><StudentAttendance /></SuspenseWrapper> },
//     { path: 'grades', element: <SuspenseWrapper><StudentGrades /></SuspenseWrapper> },
//     { path: 'calendar', element: <SuspenseWrapper><StudentCalendar /></SuspenseWrapper> },
//     { path: 'announcements', element: <SuspenseWrapper><StudentAnnouncements /></SuspenseWrapper> },
//     { path: 'profile', element: <SuspenseWrapper><StudentProfile /></SuspenseWrapper> },
//     { path: 'settings', element: <SuspenseWrapper><StudentSettings /></SuspenseWrapper> },
//   ],
// };

function StudentRoute() {
  return (
    <div>StudentRoute</div>
  )
}

export default StudentRoute