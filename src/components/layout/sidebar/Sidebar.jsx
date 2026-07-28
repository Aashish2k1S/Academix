import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { navigation } from "../../config/navigation";
import AppLogo from "../AppLogo";
import NavItem from "../NavItem";

const Sidebar = () => {
    const role = useSelector((state) => state.auth.user?.role);

    const menu = navigation[role] || [];

    return (
        <motion.aside
            animate={{ width: sidebarOpen ? 280 : 88 }}
            transition={{ duration: 0.25 }}
            className="flex h-screen w-72 flex-col border-r border-white/10 bg-[surface] p-6"
        >
            <AppLogo />

            <nav className="mt-10 flex flex-1 flex-col gap-2">
                {menu.map((item) => (
                    <NavItem key={item.path} {...item} />
                ))}
            </nav>
        </motion.aside>
    );
};

export default Sidebar;
