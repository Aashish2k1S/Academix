import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import clsx from "clsx";

const SidebarItem = ({ icon: Icon, label, path }) => {
    const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

    return (
        <NavLink to={path}>
            {({ isActive }) => (
                <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={clsx(
                        "group relative flex items-center rounded-2xl px-4 py-3 transition-all",
                        isActive
                            ? "bg-[accent] text-white"
                            : "hover:bg-white/10",
                    )}
                >
                    <Icon size={20} />

                    {sidebarOpen && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="ml-4"
                        >
                            {label}
                        </motion.span>
                    )}
                </motion.div>
            )}
        </NavLink>
    );
};

export default SidebarItem;
