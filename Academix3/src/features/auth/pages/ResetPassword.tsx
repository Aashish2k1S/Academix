// src/pages/ResetPassword.tsx
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
    GraduationCap,
    Lock,
    Eye,
    EyeOff,
    ArrowLeft,
    CheckCircle2,
    Circle,
} from "lucide-react";
import ThemeToggle from "../../../shared/components/ThemeToggle";
import { Link } from "react-router";

interface FormInputs {
    newPassword: string;
    confirmPassword: string;
}

const ResetPassword = () => {
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        },
    });

    const newPasswordValue = watch("newPassword", "");

    // Password criteria indicators
    const hasMinLength = newPasswordValue.length >= 8;
    const hasSpecialOrNumber = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
        newPasswordValue
    );

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log("Password updated successfully:", data);
        setIsSubmitted(true);
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-app-bg p-4 text-app-text transition-colors duration-200">
            {/* Theme Toggle Position */}
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>

            {/* Header & Subtitle */}
            <div className="flex flex-col items-center mb-8">
                <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-8 h-8 text-crimson" />
                    <span className="text-3xl font-bold tracking-tight text-app-text">
                        Academix
                    </span>
                </div>
                <p className="text-sm opacity-60">
                    Reset your academic credentials
                </p>
            </div>

            {/* Card Container */}
            <div className="w-full max-w-md bg-app-surface border border-app-border backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-colors duration-200">
                <h1 className="text-2xl font-semibold text-app-text tracking-wide mb-1">
                    Create New Password
                </h1>
                <p className="text-sm opacity-60 mb-6">
                    Please enter a strong password that you haven't used before.
                </p>

                {isSubmitted ? (
                    <div className="w-full text-center space-y-4 py-4">
                        <div className="p-4 bg-crimson/10 border border-crimson/20 rounded-lg text-sm text-app-text">
                            Your password has been updated successfully.
                        </div>
                        <a
                            href="#login"
                            className="inline-flex items-center gap-2 text-sm text-crimson hover:underline"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Login</span>
                        </a>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                        noValidate
                    >
                        {/* New Password Field */}
                        <div>
                            <label
                                htmlFor="newPassword"
                                className="block text-xs font-mono uppercase tracking-wider opacity-70 mb-2"
                            >
                                New Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-crimson opacity-70" />
                                </div>
                                <input
                                    id="newPassword"
                                    type={showNewPassword ? "text" : "password"}
                                    placeholder="Enter new password"
                                    {...register("newPassword", {
                                        required: "New password is required",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be at least 8 characters",
                                        },
                                        validate: (value) =>
                                            /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
                                                value
                                            ) ||
                                            "Must contain a special character or number",
                                    })}
                                    className="w-full pl-11 pr-11 py-2.5 bg-field-bg text-app-text border border-app-border rounded-lg placeholder:opacity-40 text-sm focus:outline-none focus:ring-2 focus:ring-crimson transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowNewPassword((prev) => !prev)
                                    }
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-crimson opacity-70 hover:opacity-100 focus:outline-none cursor-pointer"
                                    aria-label={
                                        showNewPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showNewPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            {errors.newPassword && (
                                <p className="mt-1 text-xs text-crimson">
                                    {errors.newPassword.message}
                                </p>
                            )}

                            {/* Password Guidelines Checklist */}
                            <div className="mt-3 space-y-2 text-xs font-mono opacity-80">
                                <div className="flex items-center gap-2">
                                    {hasMinLength ? (
                                        <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                                    ) : (
                                        <Circle className="w-4 h-4 opacity-40 shrink-0" />
                                    )}
                                    <span
                                        className={
                                            hasMinLength
                                                ? "text-app-text"
                                                : "opacity-60"
                                        }
                                    >
                                        At least 8 characters
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {hasSpecialOrNumber ? (
                                        <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                                    ) : (
                                        <Circle className="w-4 h-4 opacity-40 shrink-0" />
                                    )}
                                    <span
                                        className={
                                            hasSpecialOrNumber
                                                ? "text-app-text"
                                                : "opacity-60"
                                        }
                                    >
                                        Contains a special character or number
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Confirm New Password Field */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-xs font-mono uppercase tracking-wider opacity-70 mb-2"
                            >
                                Confirm New Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-crimson opacity-70" />
                                </div>
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm new password"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (value) =>
                                            value === newPasswordValue ||
                                            "Passwords do not match",
                                    })}
                                    className="w-full pl-11 pr-11 py-2.5 bg-field-bg text-app-text border border-app-border rounded-lg placeholder:opacity-40 text-sm focus:outline-none focus:ring-2 focus:ring-crimson transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword((prev) => !prev)
                                    }
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-crimson opacity-70 hover:opacity-100 focus:outline-none cursor-pointer"
                                    aria-label={
                                        showConfirmPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-xs text-crimson">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-4 bg-crimson hover:bg-crimson-hover disabled:opacity-50 text-white font-mono uppercase tracking-wider text-xs font-semibold rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-200 cursor-pointer mt-6"
                        >
                            <span>UPDATE PASSWORD</span>
                        </button>
                    </form>
                )}

                {/* Back to Login Link */}
                <div className="mt-8 pt-4 border-t border-app-border text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs opacity-70 hover:opacity-100 text-app-text transition-opacity"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to Login</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default ResetPassword; 