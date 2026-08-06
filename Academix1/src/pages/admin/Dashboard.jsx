import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsGrid from "../../components/dashboard/StatsGrid";
import AnalyticsSection from "../../components/dashboard/AnalyticsSection";

const Dashboard = () => {
    return (
        <>
            <DashboardHeader />

            <StatsGrid />

            <AnalyticsSection />
        </>
    );
};

export default Dashboard;
