import { Outlet, Link } from "react-router";
import {
    Shield,
    Users,
    BookOpen,
    CheckSquare,
    User,
    LogOut,
} from "lucide-react";

export default function AdminLayout() {
    return (
        <div className="flex min-h-screen bg-slate-950 text-slate-100">
            <aside className="w-64 border-r border-slate-800 bg-slate-900 flex flex-col justify-between p-4">
                <div>
                    <div className="flex items-center gap-2 px-2 py-4 mb-6 border-b border-slate-800">
                        <Shield className="h-6 w-6 text-indigo-400" />
                        <span className="font-bold text-lg">Admin Portal</span>
                    </div>
                    <nav className="space-y-1">
                        <Link
                            to="/admin"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300"
                        >
                            <Shield className="h-4 w-4" /> Dashboard
                        </Link>
                        <Link
                            to="/admin/students"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300"
                        >
                            <Users className="h-4 w-4" /> Students
                        </Link>
                        <Link
                            to="/admin/teachers"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300"
                        >
                            <BookOpen className="h-4 w-4" /> Teachers
                        </Link>
                        <Link
                            to="/admin/tasks"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300"
                        >
                            <CheckSquare className="h-4 w-4" /> Tasks
                        </Link>
                    </nav>
                </div>
                <div className="border-t border-slate-800 pt-4 flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-slate-400" />
                        <span className="text-sm font-medium">
                            Administrator
                        </span>
                    </div>
                    <button className="text-slate-400 hover:text-red-400">
                        <LogOut className="h-4 w-4" />
                    </button>
                </div>
            </aside>
            <main className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}
