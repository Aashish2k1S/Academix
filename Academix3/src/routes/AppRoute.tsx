// import { lazy, Suspense } from 'react';
// import { createBrowserRouter, RouterProvider, redirect } from 'react-router';
// import RootLayout from '../layouts/RootLayout';
// import ErrorBoundary from '../components/shared/ErrorBoundary';
// import Skeleton from '../components/shared/Skeleton';
// import { authService } from '../services/auth.service';

// import { authRoutes } from './auth/AuthRoute';
// import { adminRoutes } from './admin/AdminRoute';
// import { teacherRoutes } from './teacher/TeacherRoute';
// import { studentRoutes } from './student/StudentRoute';

// const NotFound = lazy(() => import('./notfound/NotFound'));

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     errorElement: <ErrorBoundary />,
//     children: [
//       {
//         index: true,
//         loader: async () => {
//           const user = authService.getCurrentUser();
//           if (!user) throw redirect('/auth/login');
//           if (user.role === 'admin') throw redirect('/admin');
//           if (user.role === 'teacher') throw redirect('/teacher');
//           if (user.role === 'student') throw redirect('/student');
//           throw redirect('/auth/login');
//         },
//       },
//       authRoutes,
//       adminRoutes,
//       teacherRoutes,
//       studentRoutes,
//       {
//         path: '*',
//         element: (
//           <Suspense fallback={<Skeleton type="page" />}>
//             <NotFound />
//           </Suspense>
//         ),
//       },
//     ],
//   },
// ]);

// export default function AppRoutes() {
//   return <RouterProvider router={router} />;
// }

import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { authRoutes } from "./auth/AuthRoute";

const SessionManage = lazy(
    () => import("../features/auth/pages/SessionManage"),
);
const Skeleton = lazy(() => import("../shared/components/Skeleton"));

// const NotFound = lazy(() => import("./notfound/NotFound"));

export default function AppRoutes() {
    const router = createBrowserRouter([
        authRoutes,
        {
            path: "/sessionmanage",
            element: <SessionManage />,
        },
        {
            path: "/auth",
            element: <Skeleton type="auth" />,
        },
        {
            path: "/card",
            element: <Skeleton type="card" />,
        },
        {
            path: "/page",
            element: <Skeleton type="page" />,
        },
    ]);

    return <RouterProvider router={router} />;
}
