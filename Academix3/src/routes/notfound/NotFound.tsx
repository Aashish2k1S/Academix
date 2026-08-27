import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 p-4">
            <AlertTriangle className="h-16 w-16 text-amber-500 mb-4" />
            <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
            <p className="text-slate-400 mb-6">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-medium transition"
            >
                Return Home
            </Link>
        </div>
    );
}
