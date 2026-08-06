import { useFormContext } from "react-hook-form";
import {
    Building2,
    GraduationCap,
    UserRound,
    Users,
    CheckCircle2,
} from "lucide-react";

const AssignmentMode = () => {
    const modes = [
        {
            value: "Department",
            title: "Department",
            description: "Assign the task to an entire department.",
            icon: Building2,
        },
        {
            value: "Semester",
            title: "Semester",
            description: "Assign the task to a specific semester.",
            icon: GraduationCap,
        },
        {
            value: "Teacher",
            title: "Teacher",
            description: "Assign the task to students under a teacher.",
            icon: UserRound,
        },
        {
            value: "Students",
            title: "Individual Students",
            description: "Choose students manually.",
            icon: Users,
        },
    ];

    const { watch, setValue } = useFormContext();

    const selectedMode = watch("assignmentMode");

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Assignment Mode</h3>

            <div className="grid gap-4 md:grid-cols-2">
                {modes.map((mode) => {
                    const Icon = mode.icon;

                    const active = selectedMode === mode.value;

                    return (
                        <button
                            key={mode.value}
                            type="button"
                            onClick={() =>
                                setValue("assignmentMode", mode.value)
                            }
                            className={`
                                relative rounded-2xl border p-5 text-left transition-all duration-300

                                ${
                                    active
                                        ? "border-[accent] bg-[accent]/10 shadow-lg shadow-[accent]/10"
                                        : "border-white/10 hover:border-[accent]/40 hover:bg-white/5"
                                }
                            `}
                        >
                            {active && (
                                <CheckCircle2
                                    size={20}
                                    className="absolute right-4 top-4 text-[accent]"
                                />
                            )}

                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[accent]/10 text-[accent]">
                                <Icon size={22} />
                            </div>

                            <h4 className="font-semibold">{mode.title}</h4>

                            <p className="mt-2 text-sm opacity-70">
                                {mode.description}
                            </p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default AssignmentMode;
