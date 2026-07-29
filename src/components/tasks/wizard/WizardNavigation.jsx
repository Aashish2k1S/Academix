import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../ui/Button";

import {
    nextStep,
    previousStep,
    setDraft,
    resetWizard,
    addTask,
} from "../../../features/tasks/taskSlice";

const WizardNavigation = () => {
    const dispatch = useDispatch();

    const { currentStep, draft } = useSelector((state) => state.tasks.wizard);

    const handleNext = (data) => {
        dispatch(setDraft(data));
        dispatch(nextStep());
    };

    const handlePrevious = () => {
        dispatch(setDraft(getValues()));
        dispatch(previousStep());
    };

    const handlePublish = (data) => {
        const task = {
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
            ...draft,
            ...data,
        };

        dispatch(addTask(task));
        dispatch(resetWizard());

        // navigate later
    };

    return (
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <Button
                variant="secondary"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                leftIcon={ArrowLeft}
            >
                Previous
            </Button>

            {currentStep < 4 ? (
                <Button
                    type="button"
                    onClick={handleSubmit(handleNext)}
                    rightIcon={ArrowRight}
                >
                    Next
                </Button>
            ) : (
                <Button
                    type="button"
                    onClick={handleSubmit(handlePublish)}
                    leftIcon={Check}
                >
                    Publish Task
                </Button>
            )}
        </div>
    );
};

export default WizardNavigation;
