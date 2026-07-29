import { ClipboardList, Plus } from "lucide-react";

import PageHeader from "../../components/common/PageHeader";
import TaskFilters from "../../components/tasks/TaskFilters";
import TaskGrid from "../../components/tasks/TaskGrid";

const Tasks = () => {
    return (
        <div className="space-y-8">
            <PageHeader
                icon={ClipboardList}
                badge="Task Management"
                title="Manage Academic Tasks"
                description="Create, assign and monitor assignments across departments."
                action={{
                    label: "Create Task",
                    to: "/admin/tasks/new",
                    icon: Plus,
                }}
            />

            <TaskFilters />

            <TaskGrid />
        </div>
    );
};

export default Tasks;
