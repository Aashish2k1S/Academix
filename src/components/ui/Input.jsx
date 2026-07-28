const Input = ({ label, error, className = "", ...props }) => {
    return (
        <div className="space-y-2">
            {label && <label className="text-sm font-medium">{label}</label>}

            <input
                {...props}
                className={`w-full rounded-xl border border-[border] bg-transparent p-3 outline-none focus:border-[accent] ${className}`}
            />

            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
