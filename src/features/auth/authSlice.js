import { createSlice } from "@reduxjs/toolkit";
import { loadAuth } from "../../utils/localStorage";

const storedAuth = loadAuth();

const initialState = {
    isAuthenticated: storedAuth?.isAuthenticated || false,
    user: storedAuth?.user || null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },

        setError: (state, action) => {
            state.error = action.payload;
        },

        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { loginSuccess, logout, setError, clearError } = authSlice.actions;

export default authSlice.reducer;
