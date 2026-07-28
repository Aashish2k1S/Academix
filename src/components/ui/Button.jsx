import clsx from "clsx";

const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => {
    return (
        <button
            {...props}
            className={clsx(
                "rounded-xl px-5 py-3 font-medium transition-all duration-300",

                variant === "primary" &&
                    "bg-[accent] text-white hover:opacity-90",

                variant === "secondary" && "border border-[border]",

                variant === "ghost" && "hover:bg-white/10",

                className,
            )}
        >
            {children}
        </button>
    );
};

export default Button;
