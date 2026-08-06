import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export const publicRoutes = [
    {
        path: "",
        element: <div>Login</div>,
    },
    {
        path: "register",
        element: <div>register</div>,
    },
    {
        path: "forgot-password",
        element: <div>forgot-password</div>,
    },
];

const PublicRoute = () => {
    let user = useSelector((store) => store.authUser.user);

    if (user) return <Navigate to="/home" />;

    return <Outlet />;
};

export default PublicRoute;
