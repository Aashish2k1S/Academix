import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
    let user = useSelector((store) => store.authUser.user);

    if (!user) return <Navigate to="/" />;

    return <Outlet />;
};

export default ProtectedRoute;
