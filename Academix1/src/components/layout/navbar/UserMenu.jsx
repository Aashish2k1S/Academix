import { UserCircle } from "lucide-react";

const UserMenu = () => {
    return (
        <button className="rounded-full transition hover:scale-105">
            <UserCircle size={34} />
        </button>
    );
};

export default UserMenu;
