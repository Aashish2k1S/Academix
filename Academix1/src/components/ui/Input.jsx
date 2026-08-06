import { forwardRef } from "react";
import clsx from "clsx";

const Input = forwardRef(
    (
        {
            label,
            error,
            helperText,
            leftIcon: LeftIcon,
            rightIcon: RightIcon,
            className,
            ...props
        },
        ref,
    ) => {
        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={props.id}
                        className="block text-sm font-medium"
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    {LeftIcon && (
                        <LeftIcon
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
                        />
                    )}

                    <input
                        id={props.id}
                        ref={ref}
                        {...props}
                        className={clsx(
                            "w-full rounded-xl border bg-transparent px-4 py-3 outline-none transition-all",
                            "border-white/10",
                            "focus:border-[accent]",
                            "focus:ring-2 focus:ring-[accent]/20",
                            LeftIcon && "pl-10",
                            RightIcon && "pr-10",
                            error &&
                                "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                            className,
                        )}
                    />

                    {RightIcon && (
                        <RightIcon
                            size={18}
                            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
                        />
                    )}
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                {!error && helperText && (
                    <p className="text-sm opacity-60">{helperText}</p>
                )}
            </div>
        );
    },
);

Input.displayName = "Input";

export default Input;
