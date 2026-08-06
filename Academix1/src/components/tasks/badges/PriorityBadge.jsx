import clsx from "clsx";

const variants = {
    Low: "bg-green-500/10 text-green-500",

    Medium: "bg-yellow-500/10 text-yellow-500",

    High: "bg-red-500/10 text-red-500",
};

const PriorityBadge = ({ priority }) => {
    return (
        <span
            className={clsx(
                "rounded-full px-3 py-1 text-xs font-semibold",
                variants[priority],
            )}
        >
            {priority}
        </span>
    );
};

export default PriorityBadge;
