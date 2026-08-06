import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: true,
};

export const authSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {

        hydrateUser: (state) => {            
            state.user = JSON.parse(localStorage.getItem("user"));
        }, 
        addUser: (state, actions) => {
            state.user = actions.payload;
        },
        removeUser: (state) => {
            state = initialState;
        },
    },
});

export const { hydrateUser, addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
