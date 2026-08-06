import { useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";

import Card from "../../ui/Card";

import WizardHeader from "./WizardHeader";
import WizardNavigation from "./WizardNavigation";

import TaskInfoStep from "../steps/TaskInfoStep";
import AssignmentStep from "../steps/AssignmentStep";
import ScheduleStep from "../steps/ScheduleStep";
import ReviewStep from "../steps/ReviewStep";

const TaskWizard = () => {
    const { currentStep, draft } = useSelector((state) => state.tasks.wizard);

    const methods = useForm({
        mode: "onChange",
        defaultValues: draft,
    });

    const steps = {
        1: TaskInfoStep,
        2: AssignmentStep,
        3: ScheduleStep,
        4: ReviewStep,
    };

    const StepComponent = steps[currentStep] || TaskInfoStep;

    return (
        <FormProvider {...methods}>
            <Card className="p-8">
                <WizardHeader currentStep={currentStep} />

                <div className="my-10">
                    <StepComponent />
                </div>

                <WizardNavigation />
            </Card>
        </FormProvider>
    );
};

export default TaskWizard;
