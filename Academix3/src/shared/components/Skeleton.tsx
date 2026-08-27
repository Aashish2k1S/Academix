export interface SkeletonProps {
    type?: "page" | "auth" | "card";
}

const Skeleton: React.FC<SkeletonProps> = ({ type = "page" }) => {
    // Skeleton variant for Auth card pages
    if (type === "auth") {
        return (
            <div className="w-full space-y-4 animate-pulse p-2">
                <div className="h-7 w-36 bg-field-bg rounded mb-6" />
                <div className="space-y-2">
                    <div className="h-4 w-20 bg-field-bg rounded" />
                    <div className="h-10 w-full bg-field-bg rounded-lg" />
                </div>
                <div className="space-y-2">
                    <div className="h-4 w-20 bg-field-bg rounded" />
                    <div className="h-10 w-full bg-field-bg rounded-lg" />
                </div>
                <div className="h-10 w-full bg-crimson/20 border border-crimson/40 rounded-lg mt-6" />
            </div>
        );
    }

    // Default Full-Page Layout Skeleton
    return (
        <div className="min-h-screen w-full bg-app-bg text-app-text flex flex-col transition-colors duration-200">
            {/* Top Navigation Bar */}
            <header className="w-full px-6 py-4 flex items-center justify-between border-b border-app-border/40">
                <span className="text-xl font-bold tracking-tight text-crimson">
                    Academix
                </span>

                <div className="hidden md:flex items-center gap-6 animate-pulse">
                    <div className="h-4 w-20 bg-field-bg rounded" />
                    <div className="h-4 w-16 bg-field-bg rounded" />
                    <div className="h-4 w-20 bg-field-bg rounded" />
                    <div className="h-4 w-16 bg-field-bg rounded" />
                </div>

                <div className="flex items-center gap-3 animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-field-bg" />
                    <div className="w-8 h-8 rounded-full bg-field-bg" />
                    <div className="w-9 h-9 rounded-full bg-field-bg border border-app-border" />
                </div>
            </header>

            {/* Main Layout (Sidebar + Content Body) */}
            <div className="flex-1 flex w-full">
                {/* Left Sidebar Skeleton */}
                <aside className="w-64 border-r border-app-border/40 p-4 flex-col justify-between shrink-0 hidden md:flex">
                    <div className="space-y-6">
                        <div className="flex flex-col gap-2.5 p-2 animate-pulse">
                            <div className="w-10 h-10 rounded-full bg-field-bg mb-1" />
                            <div className="h-4 w-32 bg-field-bg rounded" />
                            <div className="h-3 w-20 bg-field-bg rounded opacity-70" />
                        </div>

                        <div className="space-y-2 animate-pulse">
                            <div className="h-9 w-full bg-field-bg rounded-lg" />
                            <div className="h-9 w-full bg-field-bg rounded-lg" />
                            <div className="h-9 w-full bg-field-bg rounded-lg" />
                            <div className="h-9 w-full bg-field-bg rounded-lg" />
                            <div className="h-9 w-full bg-crimson/15 border-l-4 border-l-crimson rounded-r-lg" />
                        </div>
                    </div>

                    <div className="space-y-2 animate-pulse pt-6">
                        <div className="h-9 w-full bg-field-bg rounded-lg" />
                        <div className="h-9 w-full bg-field-bg rounded-lg" />
                        <div className="h-9 w-full bg-field-bg rounded-lg" />
                    </div>
                </aside>

                {/* Main Content Area Skeleton */}
                <main className="flex-1 p-6 md:p-10 max-w-5xl space-y-8 animate-pulse">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-2">
                            <div className="h-8 w-64 bg-field-bg rounded-lg" />
                            <div className="h-4 w-96 max-w-full bg-field-bg rounded opacity-70" />
                        </div>
                        <div className="h-10 w-48 bg-crimson/10 border border-crimson/40 rounded-lg shrink-0" />
                    </div>

                    <div className="w-full border-b border-app-border/40 relative">
                        <div className="absolute top-0 left-0 w-full border-b border-crimson/80" />
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-field-bg shrink-0" />
                            <div className="space-y-2 flex-1">
                                <div className="h-5 w-64 bg-field-bg rounded" />
                                <div className="h-4 w-48 bg-field-bg rounded opacity-70" />
                            </div>
                        </div>
                        <div className="h-8 w-28 bg-field-bg rounded-lg" />
                    </div>

                    <div className="space-y-4 pt-2">
                        <div className="h-5 w-44 bg-field-bg rounded mb-4" />

                        <div className="p-4 rounded-xl border border-app-border/40 bg-app-surface/50 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-field-bg shrink-0" />
                                <div className="space-y-2">
                                    <div className="h-4 w-36 bg-field-bg rounded" />
                                    <div className="h-3 w-24 bg-field-bg rounded opacity-70" />
                                </div>
                            </div>
                            <div className="h-8 w-20 bg-field-bg rounded-lg shrink-0" />
                        </div>

                        <div className="p-4 rounded-xl border border-app-border/40 bg-app-surface/50 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-field-bg shrink-0" />
                                <div className="space-y-2">
                                    <div className="h-4 w-32 bg-field-bg rounded" />
                                    <div className="h-3 w-28 bg-field-bg rounded opacity-70" />
                                </div>
                            </div>
                            <div className="h-8 w-20 bg-field-bg rounded-lg shrink-0" />
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-app-border/40 bg-app-surface/50 border-l-4 border-l-crimson flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-field-bg shrink-0 mt-0.5" />
                        <div className="space-y-2.5 flex-1">
                            <div className="h-4 w-48 bg-field-bg rounded" />
                            <div className="h-3 w-full bg-field-bg rounded opacity-70" />
                            <div className="h-3 w-4/5 bg-field-bg rounded opacity-70" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Skeleton;
