import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const RoleRoute = ({ allowedRole }) => {
    const user = useSelector((state) => state.auth.user);

    if (!user) {
        return <Navigate to="/" replace />;
    }

    if (user.role !== allowedRole) {
        return <Navigate to={`/${user.role}`} replace />;
    }

    return <Outlet />;
};

export default RoleRoute;