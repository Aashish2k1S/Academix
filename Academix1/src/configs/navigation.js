import {
    LayoutDashboard,
    Users,
    GraduationCap,
    Building2,
    ClipboardList,
    Bell,
    BarChart3,
    Settings,
} from "lucide-react";

export const navigation = {
    admin: [
        {
            label: "Dashboard",
            path: "/admin",
            icon: LayoutDashboard,
        },
        {
            label: "Students",
            path: "/admin/students",
            icon: Users,
        },
        {
            label: "Teachers",
            path: "/admin/teachers",
            icon: GraduationCap,
        },
        {
            label: "Departments",
            path: "/admin/departments",
            icon: Building2,
        },
        {
            label: "Tasks",
            path: "/admin/tasks",
            icon: ClipboardList,
        },
        {
            label: "Announcements",
            path: "/admin/announcements",
            icon: Bell,
        },
        {
            label: "Analytics",
            path: "/admin/analytics",
            icon: BarChart3,
        },
        {
            label: "Settings",
            path: "/admin/settings",
            icon: Settings,
        },
    ],

    teacher: [],

    student: [],
};
