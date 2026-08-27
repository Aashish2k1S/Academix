// src/pages/SessionManage.tsx
import { useState } from "react";
import {
    Shield,
    Laptop,
    Smartphone,
    LogOut,
    X,
    Info,
    Bell,
    Settings,
    MapPin,
    Clock,
} from "lucide-react";
import ThemeToggle from "../../../shared/components/ThemeToggle";

interface Session {
    id: string;
    device: string;
    browser: string;
    location: string;
    ip: string;
    lastActive: string;
    isCurrent: boolean;
    type: "desktop" | "mobile";
}

const initialSessions: Session[] = [
    {
        id: "1",
        device: "Windows",
        browser: "Chrome",
        location: "New York, USA",
        ip: "192.168.1.1",
        lastActive: "Active now",
        isCurrent: true,
        type: "desktop",
    },
    {
        id: "2",
        device: "iOS",
        browser: "Mobile App",
        location: "Boston, USA",
        ip: "10.0.0.45",
        lastActive: "Last active: 2 hours ago",
        isCurrent: false,
        type: "mobile",
    },
    {
        id: "3",
        device: "Windows",
        browser: "Firefox",
        location: "London, UK",
        ip: "82.14.55.12",
        lastActive: "Last active: 3 days ago",
        isCurrent: false,
        type: "desktop",
    },
];

const SessionManage = () => {
    const [sessions, setSessions] = useState<Session[]>(initialSessions);

    const handleTerminateSession = (id: string) => {
        setSessions((prev) => prev.filter((session) => session.id !== id));
    };

    const handleTerminateAllOtherSessions = () => {
        setSessions((prev) => prev.filter((session) => session.isCurrent));
    };

    return (
        <div className="min-h-screen w-full flex flex-col justify-between bg-app-bg text-app-text transition-colors duration-200">
            {/* Navigation Bar */}
            <header className="w-full px-8 py-4 flex items-center justify-between border-b border-app-border/40">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-bold tracking-tight text-crimson">
                        Academix
                    </span>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium opacity-80">
                        <a
                            href="#dashboard"
                            className="hover:opacity-100 hover:text-crimson transition-colors"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#courses"
                            className="hover:opacity-100 hover:text-crimson transition-colors"
                        >
                            Courses
                        </a>
                        <a
                            href="#students"
                            className="hover:opacity-100 hover:text-crimson transition-colors"
                        >
                            Students
                        </a>
                        <a
                            href="#reports"
                            className="hover:opacity-100 hover:text-crimson transition-colors"
                        >
                            Reports
                        </a>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="p-2 text-app-text opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                        aria-label="Notifications"
                    >
                        <Bell className="w-5 h-5" />
                    </button>
                    <button
                        type="button"
                        className="p-2 text-app-text opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                        aria-label="Settings"
                    >
                        <Settings className="w-5 h-5" />
                    </button>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-app-border cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                            alt="User avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center px-4 py-10 max-w-4xl mx-auto w-full">
                {/* Shield Header Badge */}
                <div className="w-12 h-12 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center text-crimson mb-4">
                    <Shield className="w-6 h-6" />
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-center mb-2">
                    Session Management
                </h1>
                <p className="text-sm opacity-60 text-center max-w-md mb-8">
                    View and manage your active sessions across different
                    devices.
                </p>

                {/* Log out all other sessions action */}
                <div className="w-full flex justify-end mb-4">
                    <button
                        type="button"
                        onClick={handleTerminateAllOtherSessions}
                        disabled={sessions.length <= 1}
                        className="px-4 py-2 bg-app-surface border border-app-border text-xs font-mono tracking-wider rounded-lg text-app-text hover:bg-crimson/10 hover:border-crimson/40 disabled:opacity-40 transition-all flex items-center gap-2 cursor-pointer"
                    >
                        <LogOut className="w-3.5 h-3.5 text-crimson" />
                        <span>Log out from all other sessions</span>
                    </button>
                </div>

                {/* Active Sessions Card */}
                <div className="w-full bg-app-surface border border-app-border rounded-2xl p-6 shadow-xl transition-colors duration-200 mb-6">
                    <h2 className="text-lg font-semibold mb-5 text-app-text">
                        Active Sessions
                    </h2>

                    <div className="space-y-3">
                        {sessions.map((session) => (
                            <div
                                key={session.id}
                                className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                                    session.isCurrent
                                        ? "bg-field-bg/60 border-l-4 border-l-crimson border-y-app-border border-r-app-border"
                                        : "bg-field-bg/30 border-app-border hover:border-app-border/80"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-app-surface border border-app-border flex items-center justify-center text-app-text shrink-0">
                                        {session.type === "desktop" ? (
                                            <Laptop className="w-5 h-5 opacity-80" />
                                        ) : (
                                            <Smartphone className="w-5 h-5 opacity-80" />
                                        )}
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-semibold text-sm">
                                                {session.device} •{" "}
                                                {session.browser}
                                            </span>
                                            {session.isCurrent && (
                                                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-crimson/15 text-crimson border border-crimson/30">
                                                    CURRENT
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs opacity-60 font-mono">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {session.location} ({session.ip}
                                                )
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {session.lastActive}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {!session.isCurrent && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleTerminateSession(session.id)
                                        }
                                        className="self-start sm:self-center px-3 py-1.5 border border-app-border rounded-lg text-xs font-mono text-app-text opacity-70 hover:opacity-100 hover:bg-crimson/10 hover:border-crimson/30 transition-all flex items-center gap-1.5 cursor-pointer"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                        <span>Logout</span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Academic Integrity & Security Banner */}
                <div className="w-full bg-app-surface border border-app-border border-l-4 border-l-crimson rounded-2xl p-5 shadow-lg flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center text-crimson shrink-0 mt-0.5">
                        <Info className="w-4 h-4" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold mb-1 text-app-text">
                            Academic Integrity & Security
                        </h3>
                        <p className="text-xs opacity-60 leading-relaxed">
                            Managing your active sessions is crucial for
                            maintaining academic integrity. By ensuring you are
                            only logged in on trusted devices, you protect your
                            academic records, prevent unauthorized access to
                            examination materials, and secure sensitive personal
                            data within the Academix Enterprise Suite.
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full px-8 py-4 border-t border-app-border/40 text-xs opacity-60 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <span className="font-bold text-app-text opacity-100 mr-2">
                        Academix
                    </span>
                    © {new Date().getFullYear()} Academix Enterprise. All rights
                    reserved.
                </div>
                <div className="flex items-center gap-6">
                    <a
                        href="#privacy"
                        className="hover:opacity-100 transition-opacity"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#terms"
                        className="hover:opacity-100 transition-opacity"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#security"
                        className="hover:opacity-100 transition-opacity"
                    >
                        Security Architecture
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default SessionManage;
