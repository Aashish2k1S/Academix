import { Bell, Menu, Moon, Search, UserCircle } from "lucide-react";

import { useDispatch } from "react-redux";

import { toggleSidebar } from "../../../features/ui/uiSlice";
import MenuButton from "./MenuButton";
import Breadcrumb from "./Breadcrumb";
import ThemeToggle from "./ThemeToggle";
import NotificationMenu from "./NotificationMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <header className="flex h-20 items-center justify-between border-b border-[border] bg-[surface] px-8">
            <div className="flex items-center gap-4">
                <MenuButton />
                <Breadcrumb />
            </div>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                <NotificationMenu />
                <UserMenu />
            </div>
        </header>
    );
};

export default Navbar;
