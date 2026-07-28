import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../features/theme/themeSlice";

const ThemeToggle = () => {
    const dispatch = useDispatch();

    const mode = useSelector((state) => state.theme.mode);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className="rounded-xl p-2 hover:bg-white/10"
        >
            {mode === "light" ? <Moon /> : <Sun />}
        </button>
    );
};

export default ThemeToggle;
