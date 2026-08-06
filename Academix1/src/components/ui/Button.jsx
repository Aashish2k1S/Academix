import clsx from "clsx";

const Button = ({
    children,
    variant = "primary",
    size = "md",
    loading = false,
    disabled = false,
    fullWidth = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    className,
    ...props
}) => {
    return (
        <button
            disabled={disabled || loading}
            className={clsx(
                "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300",

                size === "sm" && "px-3 py-2 text-sm",
                size === "md" && "px-5 py-3",
                size === "lg" && "px-6 py-4 text-lg",

                variant === "primary" &&
                    "bg-[accent] text-white hover:opacity-90",

                variant === "secondary" &&
                    "border border-[border] hover:bg-white/5",

                variant === "ghost" && "hover:bg-white/10",

                disabled && "cursor-not-allowed opacity-50",

                fullWidth && "w-full",

                className,
            )}
            {...props}
        >
            {LeftIcon && <LeftIcon size={18} />}

            {loading ? "Loading..." : children}

            {RightIcon && <RightIcon size={18} />}
        </button>
    );
};

export default Button;
