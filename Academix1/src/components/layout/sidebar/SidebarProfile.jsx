import { useSelector } from "react-redux";
import { UserCircle } from "lucide-react";

const SidebarProfile = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="flex items-center gap-3 rounded-2xl p-3 hover:bg-white/10">
            <UserCircle size={42} />

            <div>
                <h4 className="font-semibold">{user?.name}</h4>

                <p className="text-xs capitalize opacity-70">{user?.role}</p>
            </div>
        </div>
    );
};

export default SidebarProfile;
