import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    Tooltip,
} from "recharts";

import Card from "../ui/Card";
import { attendanceData } from "../../utils/analyticsData";

const AttendanceChart = () => {
    return (
        <Card className="p-6">
            <h3 className="mb-6 text-xl font-semibold">Attendance Trend</h3>

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={attendanceData}>
                    <defs>
                        <linearGradient
                            id="attendance"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#DC143C"
                                stopOpacity={0.4}
                            />

                            <stop
                                offset="95%"
                                stopColor="#DC143C"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="attendance"
                        stroke="#DC143C"
                        fill="url(#attendance)"
                        strokeWidth={3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default AttendanceChart;
