import clsx from "clsx";

const Card = ({ children, className = "", glass = false }) => {
    return (
        <div
            className={clsx(
                "rounded-3xl border transition-all duration-300",
                glass
                    ? "border-white/10 bg-white/5 backdrop-blur-xl"
                    : "border-[border] bg-[surface]",
                "shadow-lg",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Card;
