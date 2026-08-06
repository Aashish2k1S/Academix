import AttendanceChart from "./AttendanceChart";
import TaskChart from "./TaskChart";

const AnalyticsSection = () => {
    return (
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
            <AttendanceChart />

            <TaskChart />
        </section>
    );
};

export default AnalyticsSection;
