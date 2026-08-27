// src/pages/FindRole.tsx
import { useState } from "react";
import {
    GraduationCap,
    LogOut,
    User,
    BookOpen,
    ShieldCheck,
} from "lucide-react";
import ThemeToggle from "../../../shared/components/ThemeToggle";
import { Link } from "react-router";

interface RoleOption {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

const roles: RoleOption[] = [
    {
        id: "student",
        title: "Student",
        description:
            "Access your courses, submit assignments, view grades, and communicate with instructors.",
        icon: User,
    },
    {
        id: "teacher",
        title: "Teacher",
        description:
            "Manage curriculum, grade submissions, track student progress, and organize class schedules.",
        icon: BookOpen,
    },
    {
        id: "admin",
        title: "Admin",
        description:
            "Oversee system configurations, manage user accounts, analyze institutional data, and handle billing.",
        icon: ShieldCheck,
    },
];

const FindRole = () => {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const handleSelectRole = (roleId: string) => {
        setSelectedRole(roleId);
        console.log("Selected workspace role:", roleId);
    };

    return (
        <div className="min-h-screen w-full flex flex-col justify-between bg-app-bg text-app-text transition-colors duration-200">
            {/* Header Navigation */}
            <header className="w-full px-6 py-4 flex items-center justify-between border-b border-app-border/40">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-crimson text-white">
                        <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-app-text">
                        Academix
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Link 
                        to="/"
                        className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-app-surface border border-app-border rounded-lg text-app-text hover:bg-field-bg transition-all flex items-center gap-2 cursor-pointer opacity-80 hover:opacity-100"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                    </Link>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 max-w-6xl mx-auto w-full">
                {/* Status Pill */}
                <div className="mb-4 px-3.5 py-1 rounded-full bg-crimson/10 border border-crimson/20 text-crimson text-xs font-mono uppercase tracking-widest">
                    AUTHENTICATION SUCCESS
                </div>

                {/* Main Heading & Description */}
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-3">
                    Select your workspace
                </h1>
                <p className="text-sm md:text-base opacity-60 text-center max-w-xl mb-12 leading-relaxed">
                    Choose a role to access your personalized Academix
                    dashboard. Your permissions and toolsets will be configured
                    accordingly.
                </p>

                {/* Role Selection Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
                    {roles.map((role) => {
                        const IconComponent = role.icon;
                        const isSelected = selectedRole === role.id;

                        return (
                            <button
                                key={role.id}
                                type="button"
                                onClick={() => handleSelectRole(role.id)}
                                className={`group text-left p-6 rounded-2xl bg-app-surface border transition-all duration-200 cursor-pointer flex flex-col justify-between h-64 hover:border-crimson/50 hover:shadow-lg hover:-translate-y-1 ${
                                    isSelected
                                        ? "border-crimson ring-2 ring-crimson/20"
                                        : "border-app-border"
                                }`}
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-field-bg border border-app-border flex items-center justify-center text-app-text group-hover:border-crimson/30 group-hover:text-crimson transition-colors mb-6">
                                        <IconComponent className="w-6 h-6" />
                                    </div>

                                    <h2 className="text-xl font-semibold mb-2 text-app-text group-hover:text-crimson transition-colors">
                                        {role.title}
                                    </h2>
                                    <p className="text-xs text-app-text opacity-60 leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Support Link */}
                <p className="text-xs opacity-60">
                    Need help?{" "}
                    <a
                        href="#support"
                        className="text-app-text font-medium hover:underline hover:text-crimson transition-colors"
                    >
                        Contact IT Support
                    </a>
                </p>
            </main>

            {/* Footer */}
            <footer className="w-full px-6 py-4 border-t border-app-border/40 text-xs opacity-60 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="font-bold tracking-tight text-app-text opacity-100">
                    Academix
                </span>
                <div>© {new Date().getFullYear()} Academix. All rights reserved.</div>
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
                        href="#contact"
                        className="hover:opacity-100 transition-opacity"
                    >
                        Contact
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default FindRole;
