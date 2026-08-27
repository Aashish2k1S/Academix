import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            type="button"
            className="self-end mt-2 mr-2 p-2.5 rounded-lg bg-field-bg text-app-text border border-app-border hover:opacity-90 transition-all cursor-pointer flex items-center gap-2 text-sm"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <>
                    <Sun className="w-4 h-4 text-app-text opacity-80" />
                    <span>Light Mode</span>
                </>
            ) : (
                <>
                    <Moon className="w-4 h-4 text-app-text opacity-80" />
                    <span>Dark Mode</span>
                </>
            )}
        </button>
    );
};

export default ThemeToggle;
