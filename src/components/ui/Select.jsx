import { forwardRef } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const Select = forwardRef(
    (
        {
            label,
            error,
            helperText,
            options = [],
            placeholder = "Select an option",
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
                    <select
                        id={props.id}
                        ref={ref}
                        {...props}
                        className={clsx(
                            "w-full appearance-none rounded-xl border bg-transparent px-4 py-3 pr-10 outline-none transition-all",
                            "border-white/10",
                            "focus:border-[accent]",
                            "focus:ring-2 focus:ring-[accent]/20",
                            error &&
                                "border-red-500 focus:border-red-500 focus:ring-red-500/20",
                            className,
                        )}
                    >
                        <option value="">{placeholder}</option>

                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <ChevronDown
                        size={18}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
                    />
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                {!error && helperText && (
                    <p className="text-sm opacity-60">{helperText}</p>
                )}
            </div>
        );
    },
);

Select.displayName = "Select";

export default Select;
