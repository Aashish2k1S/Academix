import { Link } from "react-router";
import { motion } from "framer-motion";

const PageHeader = ({ icon: Icon, badge, title, description, action }) => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-6 border-b border-[border] pb-6 lg:flex-row lg:items-center lg:justify-between"
        >
            <div>
                {(Icon || badge) && (
                    <div className="mb-3 flex items-center gap-2">
                        {Icon && <Icon size={20} className="text-[accent]" />}

                        {badge && (
                            <span className="rounded-full bg-[accent]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[accent]">
                                {badge}
                            </span>
                        )}
                    </div>
                )}

                <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

                {description && (
                    <p className="mt-2 max-w-2xl text-sm opacity-70">
                        {description}
                    </p>
                )}
            </div>

            {action && (
                <Link
                    to={action.to}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[accent] px-5 py-3 font-medium text-white transition hover:scale-[1.02] hover:opacity-90"
                >
                    {action.icon && <action.icon size={18} />}

                    {action.label}
                </Link>
            )}
        </motion.header>
    );
};

export default PageHeader;
