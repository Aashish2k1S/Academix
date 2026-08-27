// src/pages/ForgetPassword.tsx
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
    GraduationCap,
    Mail,
    ArrowRight,
    ArrowLeft,
    RotateCcw,
} from "lucide-react";

import ThemeToggle from "../../../shared/components/ThemeToggle";
import { Link } from "react-router";

interface FormInputs {
    email: string;
}

const ForgetPassword = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        defaultValues: {
            email: "",
        },
    });

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log("Reset password request sent for:", data.email);
        setIsSubmitted(true);
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-app-bg p-4 text-app-text transition-colors duration-200">
            {/* Theme Toggle Position */}
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>

            {/* Header / Logo */}
            <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="w-8 h-8 text-crimson" />
                <span className="text-2xl font-bold tracking-tight text-app-text">
                    Academix
                </span>
            </div>

            {/* Card Container */}
            <div className="w-full max-w-md bg-app-surface border border-app-border backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-colors duration-200 flex flex-col items-center">
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center text-crimson mb-4">
                    <RotateCcw className="w-5 h-5" />
                </div>

                {/* Title & Subtitle */}
                <h1 className="text-2xl font-semibold text-app-text tracking-wide text-center">
                    Reset Password
                </h1>
                <p className="text-sm opacity-60 text-center mt-1.5 mb-6">
                    Enter your email to receive a password reset link.
                </p>

                {isSubmitted ? (
                    <div className="w-full text-center space-y-4">
                        <div className="p-4 bg-crimson/10 border border-crimson/20 rounded-lg text-sm text-app-text">
                            If an account exists for that email, a password reset link has been sent.
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsSubmitted(false)}
                            className="text-xs text-crimson hover:underline cursor-pointer"
                        >
                            Try another email
                        </button>
                    </div>
                ) : (
                    /* Reset Form */
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full space-y-5"
                        noValidate
                    >
                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-70 mb-2"
                            >
                                <Mail className="w-4 h-4 text-crimson" />
                                <span>Email Address</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@university.edu"
                                {...register("email", {
                                    required: "Email address is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                className="w-full px-4 py-2.5 bg-field-bg text-app-text border border-app-border rounded-lg placeholder:opacity-40 text-sm focus:outline-none focus:ring-2 focus:ring-crimson transition-all"
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-crimson">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 px-4 bg-crimson hover:bg-crimson-hover disabled:opacity-50 text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-200 cursor-pointer"
                        >
                            <span>Send Reset Link</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                )}

                {/* Back to Login Link */}
                <div className="mt-8 pt-4 w-full border-t border-app-border text-center">
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

export default ForgetPassword; 