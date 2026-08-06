import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

import Card from "../ui/Card";

import { taskCompletionData } from "../../utils/analyticsData";

const COLORS = ["#DC143C", "#E5E7EB"];

const TaskChart = () => {
    return (
        <Card className="p-6">
            <h3 className="mb-6 text-xl font-semibold">Task Completion</h3>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={taskCompletionData}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={100}
                    >
                        {taskCompletionData.map((_, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                        ))}
                    </Pie>

                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default TaskChart;
