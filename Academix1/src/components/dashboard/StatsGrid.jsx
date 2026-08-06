import { Users, GraduationCap, Building2, ClipboardList } from "lucide-react";

import StatCard from "./StatCard";

import { dashboardStats } from "../../utils/dashboardData";

const icons = [Users, GraduationCap, Building2, ClipboardList];

const StatsGrid = () => {
    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dashboardStats.map((item, index) => (
                <StatCard key={item.title} {...item} icon={icons[index]} />
            ))}
        </section>
    );
};

export default StatsGrid;
