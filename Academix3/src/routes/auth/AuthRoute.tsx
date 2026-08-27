// import React, { lazy, Suspense } from 'react';
// import { type RouteObject, Navigate } from 'react-router';
// import AuthLayout from './AuthLayout';
// import Skeleton from '../../components/shared/Skeleton';

// const Login = lazy(() => import('../../pages/auth/Login'));
// const ForgotPassword = lazy(() => import('../../pages/auth/ForgotPassword'));
// const ResetPassword = lazy(() => import('../../pages/auth/ResetPassword'));

// const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
//   <Suspense fallback={<Skeleton type="page" />}>{children}</Suspense>
// );

// export const authRoutes: RouteObject = {
//   path: 'auth',
//   element: <AuthLayout />,
//   children: [
//     { index: true, element: <Navigate to="login" replace /> },
//     {
//       path: 'login',
//       element: <SuspenseWrapper><Login /></SuspenseWrapper>,
//     },
//     {
//       path: 'forgot-password',
//       element: <SuspenseWrapper><ForgotPassword /></SuspenseWrapper>,
//     },
//     {
//       path: 'reset-password',
//       element: <SuspenseWrapper><ResetPassword /></SuspenseWrapper>,
//     },
//   ],
// };

import { lazy, Suspense } from "react";
import { type RouteObject } from "react-router";

const AuthLayout = lazy(() => import("../auth/AuthLayout"));

const Skeleton = lazy(() => import("../../shared/components/Skeleton"));

const Login = lazy(() => import("../../features/auth/pages/Login"));
const ForgetPassword = lazy(
    () => import("../../features/auth/pages/ForgetPassword"),
);
const ResetPassword = lazy(
    () => import("../../features/auth/pages/ResetPassword"),
);
const FindRole = lazy(() => import("../../features/auth/pages/FindRole"));

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
    <Suspense fallback={<Skeleton type="auth" />}>{children}</Suspense>
);

export const authRoutes: RouteObject = {
    path: "/",
    element: <AuthLayout />,
    children: [
        {
            index: true,
            element: <Login />,
        },
        {
            path: "",
            element: (
                <SuspenseWrapper>
                    <Login />
                </SuspenseWrapper>
            ),
        },
        {
            path: "/forgetpassword",
            element: (
                <SuspenseWrapper>
                    <ForgetPassword />
                </SuspenseWrapper>
            ),
        },
        {
            path: "/resetpassword",
            element: (
                <SuspenseWrapper>
                    <ResetPassword />
                </SuspenseWrapper>
            ),
        },
        {
            path: "/findrole",
            element: (
                <SuspenseWrapper>
                    <FindRole />
                </SuspenseWrapper>
            ),
        },
    ],
};
