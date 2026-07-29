import { CalendarDays, Users, User } from "lucide-react";
import { motion } from "framer-motion";

import Card from "../ui/Card";
import TaskStatusBadge from "./badges/TaskStatusBadge";
import PriorityBadge from "./badges/PriorityBadge";

const TaskCard = ({ task, onClick }) => {
    return (
        <motion.div
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            transition={{
                duration: 0.2,
            }}
        >
            <Card className="cursor-pointer p-6" onClick={onClick}>
                <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold">{task.title}</h3>

                    <PriorityBadge priority={task.priority} />
                </div>

                <p className="mt-3 line-clamp-2 text-sm opacity-70">
                    {task.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    <TaskStatusBadge status={task.status} />
                </div>

                <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                        <User size={16} />

                        {task.assignedTeacher}
                    </div>

                    <div className="flex items-center gap-2">
                        <Users size={16} />
                        {task.assignedStudents.length} Students
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays size={16} />

                        {task.dueDate}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};

export default TaskCard;
