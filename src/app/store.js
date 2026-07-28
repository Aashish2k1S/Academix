import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import uiReducer from "../features/ui/uiSlice";
import themeReducer from "../features/theme/themeSlice";
import { saveAuth } from "../utils/localStorage";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        theme: themeReducer,
    },
});

store.subscribe(() => {
    const { auth } = store.getState();

    saveAuth({
        isAuthenticated: auth.isAuthenticated,
        user: auth.user,
    });
});
