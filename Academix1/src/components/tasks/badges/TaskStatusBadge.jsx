import clsx from "clsx";

const variants = {
    Draft: "bg-gray-500/10 text-gray-500",

    Assigned: "bg-blue-500/10 text-blue-500",

    "In Progress": "bg-yellow-500/10 text-yellow-500",

    Submitted: "bg-purple-500/10 text-purple-500",

    Completed: "bg-green-500/10 text-green-500",

    Overdue: "bg-red-500/10 text-red-500",
};

const TaskStatusBadge = ({ status }) => {
    return (
        <span
            className={clsx(
                "rounded-full px-3 py-1 text-xs font-semibold",
                variants[status],
            )}
        >
            {status}
        </span>
    );
};

export default TaskStatusBadge;
