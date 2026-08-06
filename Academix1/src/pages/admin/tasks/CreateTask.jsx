import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

import PageHeader from "../../../components/common/PageHeader";
import TaskWizard from "../../../components/tasks/wizard/TaskWizard";

const CreateTask = () => {
    return (
        <div className="space-y-8">
            <PageHeader
                title="Create New Task"
                description="Follow the steps below to publish a new academic task."
            />

            <Link
                to="/admin/tasks"
                className="inline-flex items-center gap-2 text-sm hover:text-[accent]"
            >
                <ArrowLeft size={18} />
                Back to Tasks
            </Link>

            <TaskWizard />
        </div>
    );
};

export default CreateTask;
