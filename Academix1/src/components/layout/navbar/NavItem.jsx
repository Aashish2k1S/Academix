import { NavLink } from "react-router";

const NavItem = ({ to, icon: Icon, label }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                    isActive
                        ? "bg-[accent] text-white"
                        : "hover:bg-white/10"
                }`
            }
        >
            <Icon size={20} />
            <span>{label}</span>
        </NavLink>
    );
};

export default NavItem;