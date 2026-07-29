import { Outlet } from "react-router";
import { ClipboardList, Plus } from "lucide-react";

import PageHeader from "../components/common/PageHeader";

const TasksLayout = () => {
    return (
        <section className="space-y-8">
            <PageHeader
                icon={ClipboardList}
                badge="Task Management"
                title="Manage Academic Tasks"
                description="Create, assign and monitor assignments across departments, semesters and students."
                action={{
                    label: "Create Task",
                    to: "/admin/tasks/new",
                    icon: Plus,
                }}
            />

            <Outlet />
        </section>
    );
};

export default TasksLayout;
