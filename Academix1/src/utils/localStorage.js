const AUTH_KEY = "academix_auth";

export const saveAuth = (authData) => {
    try {
        localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
    } catch (error) {
        console.error("Failed to save auth data:", error);
    }
};

export const loadAuth = () => {
    try {
        const data = localStorage.getItem(AUTH_KEY);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Failed to load auth data:", error);
        return null;
    }
};

export const removeAuth = () => {
    try {
        localStorage.removeItem(AUTH_KEY);
    } catch (error) {
        console.error("Failed to remove auth data:", error);
    }
};