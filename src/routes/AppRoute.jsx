import { createBrowserRouter, RouterProvider } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";
import TasksLayout from "../layouts/TasksLayout";

import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/Dashboard";
import TeacherDashboard from "../pages/teacher/Dashboard";
import StudentDashboard from "../pages/student/Dashboard";

import Tasks from "../pages/admin/tasks/Tasks";
import CreateTask from "../pages/admin/tasks/CreateTask";
import TaskDetails from "../pages/admin/tasks/TaskDetails";
import EditTask from "../pages/admin/tasks/EditTask";

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
                            {
                                path: "/tasks",
                                element: <TasksLayout />,
                                children: [
                                    {
                                        path: "",
                                        element: <Tasks />,
                                    },

                                    {
                                        path: "/new",
                                        element: <CreateTask />,
                                    },

                                    {
                                        path: "/:taskId",
                                        element: <TaskDetails />,
                                    },

                                    {
                                        path: "/:taskId/edit",
                                        element: <EditTask />,
                                    },
                                ],
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
