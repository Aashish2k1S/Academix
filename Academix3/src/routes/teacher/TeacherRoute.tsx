// import React, { lazy, Suspense } from 'react';
// import { type RouteObject, redirect } from 'react-router';
// import TeacherLayout from './TeacherLayout';
// import { authService } from '../../services/auth.service';
// import Skeleton from '../../components/shared/Skeleton';

// const TeacherDashboard = lazy(() => import('../../pages/teacher/Dashboard'));
// const TeacherStudents = lazy(() => import('../../pages/teacher/MyStudents'));
// const TeacherClasses = lazy(() => import('../../pages/teacher/MyClasses'));
// const TeacherAttendance = lazy(() => import('../../pages/teacher/Attendance'));
// const TeacherTasks = lazy(() => import('../../pages/teacher/AssignedTasks'));
// const ReviewSubmission = lazy(() => import('../../pages/teacher/ReviewSubmission'));
// const TeacherCalendar = lazy(() => import('../../pages/teacher/Calendar'));
// const TeacherAnnouncements = lazy(() => import('../../pages/teacher/Announcements'));
// const TeacherReports = lazy(() => import('../../pages/teacher/Reports'));
// const TeacherProfile = lazy(() => import('../../pages/teacher/Profile'));
// const TeacherSettings = lazy(() => import('../../pages/teacher/Settings'));

// const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
//   <Suspense fallback={<Skeleton type="page" />}>{children}</Suspense>
// );

// const teacherLoader = async () => {
//   const user = authService.getCurrentUser();
//   if (!user || user.role !== 'teacher') {
//     throw redirect('/auth/login');
//   }
//   return { user };
// };

// export const teacherRoutes: RouteObject = {
//   path: 'teacher',
//   element: <TeacherLayout />,
//   loader: teacherLoader,
//   children: [
//     { index: true, element: <SuspenseWrapper><TeacherDashboard /></SuspenseWrapper> },
//     { path: 'students', element: <SuspenseWrapper><TeacherStudents /></SuspenseWrapper> },
//     { path: 'classes', element: <SuspenseWrapper><TeacherClasses /></SuspenseWrapper> },
//     { path: 'attendance', element: <SuspenseWrapper><TeacherAttendance /></SuspenseWrapper> },
//     {
//       path: 'tasks',
//       children: [
//         { index: true, element: <SuspenseWrapper><TeacherTasks /></SuspenseWrapper> },
//         { path: ':id/review', element: <SuspenseWrapper><ReviewSubmission /></SuspenseWrapper> },
//       ],
//     },
//     { path: 'calendar', element: <SuspenseWrapper><TeacherCalendar /></SuspenseWrapper> },
//     { path: 'announcements', element: <SuspenseWrapper><TeacherAnnouncements /></SuspenseWrapper> },
//     { path: 'reports', element: <SuspenseWrapper><TeacherReports /></SuspenseWrapper> },
//     { path: 'profile', element: <SuspenseWrapper><TeacherProfile /></SuspenseWrapper> },
//     { path: 'settings', element: <SuspenseWrapper><TeacherSettings /></SuspenseWrapper> },
//   ],
// };

function TeacherRoute() {
  return (
    <div>TeacherRoute</div>
  )
}

export default TeacherRoute