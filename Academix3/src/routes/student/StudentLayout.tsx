import { Outlet, Link } from "react-router";
import { BookOpen, CheckSquare, Award, Calendar } from "lucide-react";

export default function StudentLayout() {
    return (
        <div className="flex min-h-screen bg-slate-950 text-slate-100">
            <aside className="w-64 border-r border-slate-800 bg-slate-900 p-4">
                <div className="flex items-center gap-2 px-2 py-4 mb-6 border-b border-slate-800">
                    <BookOpen className="h-6 w-6 text-sky-400" />
                    <span className="font-bold text-lg">Student Portal</span>
                </div>
                <nav className="space-y-1">
                    <Link
                        to="/student"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/student/tasks"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300"
                    >
                        <CheckSquare className="h-4 w-4" /> My Tasks
                    </Link>
                    <Link
                        to="/student/grades"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300"
                    >
                        <Award className="h-4 w-4" /> Grades
                    </Link>
                    <Link
                        to="/student/calendar"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 text-slate-300"
                    >
                        <Calendar className="h-4 w-4" /> Calendar
                    </Link>
                </nav>
            </aside>
            <main className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}
