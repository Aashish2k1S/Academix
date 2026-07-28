import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";

import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import TeacherDashboard from "../pages/teacher/Dashboard";
import StudentDashboard from "../pages/student/Dashboard";
import NotFound from "../pages/shared/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },

    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <RoleRoute allowedRole="admin" />,
                children: [
                    {
                        path: "/admin",
                        element: <AdminLayout />,
                        children: [
                            {
                                index: true,
                                element: <AdminDashboard />,
                            },
                        ],
                    },
                ],
            },

            {
                element: <RoleRoute allowedRole="teacher" />,
                children: [
                    {
                        path: "/teacher",
                        element: <TeacherLayout />,
                        children: [
                            {
                                index: true,
                                element: <TeacherDashboard />,
                            },
                        ],
                    },
                ],
            },

            {
                element: <RoleRoute allowedRole="student" />,
                children: [
                    {
                        path: "/student",
                        element: <StudentLayout />,
                        children: [
                            {
                                index: true,
                                element: <StudentDashboard />,
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

const AppRoute = () => {
    return <RouterProvider router={router} />;
};

export default AppRoute;