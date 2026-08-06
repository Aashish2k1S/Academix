import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { hydrateUser } from "../features/auth/services/authSlice.js";
import {publicRoutes} from './PublicRoute'

const AppRoute = () => {
    let user = 
    null
    // { name: "aashish", password: "123" };
    localStorage.setItem("user", JSON.stringify(user));

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(hydrateUser(user));
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoute />,
            children: publicRoutes,
        },
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "home",
                    element: <div>Home</div>,
                },
                {
                    path: "about",
                    element: <div>About</div>,
                },
                {
                    path: "contact",
                    element: <div>Contact</div>,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoute;
