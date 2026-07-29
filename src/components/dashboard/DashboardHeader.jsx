import { useSelector } from "react-redux";

const DashboardHeader = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <section className="mb-8">
            <h1 className="text-4xl font-bold">
                Welcome back, {user?.name}
                👋
            </h1>

            <p className="mt-2 opacity-70">Here's what's happening today.</p>
        </section>
    );
};

export default DashboardHeader;
