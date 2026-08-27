import { useState } from "react";
import { Link } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
    GraduationCap,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
} from "lucide-react";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import ThemeToggle from "../../../shared/components/ThemeToggle";

interface FormInputs {
    email: string;
    password: string;
    rememberMe: boolean;
}

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-app-bg p-4 text-app-text transition-colors duration-200">
            {/* Top Bar Theme Toggle Position */}
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>

            <div className="w-full max-w-md bg-app-surface border border-app-border backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-colors duration-200">
                {/* Logo & Header */}
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <GraduationCap className="w-7 h-7 text-crimson" />
                        <span className="text-2xl font-bold tracking-tight text-app-text">
                            Academix
                        </span>
                    </div>
                    <h1 className="text-2xl font-semibold text-app-text tracking-wide">
                        Welcome Back
                    </h1>
                    <p className="text-sm opacity-60 mt-1">
                        Sign in to continue your academic journey.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                >
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-xs font-mono uppercase tracking-wider opacity-70 mb-2"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-crimson opacity-70" />
                            </div>
                            <input
                                id="email"
                                type="email"
                                placeholder="student@university.edu"
                                {...register("email", {
                                    required: "Email address is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                className="w-full pl-11 pr-4 py-2.5 bg-field-bg text-app-text border border-app-border rounded-lg placeholder:opacity-40 text-sm focus:outline-none focus:ring-2 focus:ring-crimson transition-all"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-xs text-crimson">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-xs font-mono uppercase tracking-wider opacity-70 mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-crimson opacity-70" />
                            </div>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be at least 6 characters",
                                    },
                                })}
                                className="w-full pl-11 pr-11 py-2.5 bg-field-bg text-app-text border border-app-border rounded-lg placeholder:opacity-40 text-sm focus:outline-none focus:ring-2 focus:ring-crimson transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-crimson opacity-70 hover:opacity-100 focus:outline-none cursor-pointer"
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-xs text-crimson">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between text-xs">
                        <label className="flex items-center gap-2 cursor-pointer opacity-80 select-none">
                            <input
                                type="checkbox"
                                {...register("rememberMe")}
                                className="w-4 h-4 rounded bg-field-bg border-app-border accent-crimson focus:ring-crimson cursor-pointer"
                            />
                            Remember me
                        </label>
                        <Link
                            to="/forgetpassword"
                            className="text-crimson hover:underline transition-colors"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-crimson hover:bg-crimson-hover disabled:opacity-50 text-white font-medium rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-200 cursor-pointer"
                    >
                        <span>Login</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-app-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-app-surface px-3 font-mono opacity-50">
                            OR
                        </span>
                    </div>
                </div>

                {/* Social Authentication */}
                <div className="space-y-3">
                    <button
                        type="button"
                        className="w-full py-2.5 px-4 bg-field-bg hover:bg-app-border border border-app-border text-app-text text-sm font-medium rounded-lg flex items-center justify-center gap-3 transition-colors cursor-pointer"
                    >
                        <FaGoogle />
                        Sign in with Google
                    </button>

                    <button
                        type="button"
                        className="w-full py-2.5 px-4 bg-field-bg hover:bg-app-border border border-app-border text-app-text text-sm font-medium rounded-lg flex items-center justify-center gap-3 transition-colors cursor-pointer"
                    >
                        <FaMicrosoft />
                        Sign in with Microsoft
                    </button>
                </div>
            </div>
        </div>
    );
}
