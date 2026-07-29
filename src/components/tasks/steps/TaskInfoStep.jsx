import { useFormContext } from "react-hook-form";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Select from "../../ui/Select";

import { departmentOptions } from "../../../constants/departments";
import { semesterOptions } from "../../../constants/semesters";
import { useDispatch } from "react-redux";

const TaskInfoStep = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useFormContext();

    const dispatch = useDispatch();

    const onNext = (data) => {
        dispatch(setDraft(data));
        dispatch(nextStep());
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold">Task Information</h2>

                <p className="mt-2 opacity-70">
                    Enter the basic details about this academic task.
                </p>
            </div>

            <form onSubmit={handleSubmit(onNext)}>
                <Input
                    id="title"
                    label="Task Title"
                    placeholder="React Authentication Assignment"
                    error={errors.title?.message}
                    {...register("title", {
                        required: "Task title is required",
                    })}
                />

                <Textarea
                    id="description"
                    label="Description"
                    rows={5}
                    placeholder="Describe the assignment..."
                    error={errors.description?.message}
                    {...register("description", {
                        required: "Description is required",
                    })}
                />

                <div className="grid gap-6 md:grid-cols-2">
                    <Input
                        id="subject"
                        label="Subject"
                        placeholder="Web Development"
                        error={errors.subject?.message}
                        {...register("subject", {
                            required: "Subject is required",
                        })}
                    />

                    <Select
                        id="department"
                        label="Department"
                        options={departmentOptions}
                        placeholder="Select Department"
                        error={errors.department?.message}
                        {...register("department", {
                            required: "Department is required",
                        })}
                    />

                    <Select
                        id="semester"
                        label="Semester"
                        options={semesterOptions}
                        placeholder="Select Semester"
                        error={errors.semester?.message}
                        {...register("semester", {
                            required: "Semester is required",
                        })}
                    />
                </div>
                <Button disabled={!isValid}>Next</Button>
            </form>
        </div>
    );
};

export default TaskInfoStep;
