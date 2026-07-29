const steps = ["Task Info", "Assignment", "Schedule", "Review"];

const WizardHeader = ({ currentStep }) => {
    return (
        <div className="border-b border-white/10 p-6">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                    const number = index + 1;

                    const active = number === currentStep;

                    const completed = number < currentStep;

                    return (
                        <div key={step} className="flex flex-1 items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition
                                    ${
                                        completed
                                            ? "border-red-600 bg-red-600 text-white"
                                            : active
                                              ? "border-red-600 text-red-600"
                                              : "border-white/20 text-gray-500"
                                    }`}
                                >
                                    {number}
                                </div>

                                <p className="mt-2 text-sm">{step}</p>
                            </div>

                            {index !== steps.length - 1 && (
                                <div className="mx-3 h-0.5 flex-1 bg-white/10" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WizardHeader;
