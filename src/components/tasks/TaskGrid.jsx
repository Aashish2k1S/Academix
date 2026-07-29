import { useSelector } from "react-redux";

import TaskCard from "./TaskCard";

const TaskGrid = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </section>
    );
};

export default TaskGrid;
