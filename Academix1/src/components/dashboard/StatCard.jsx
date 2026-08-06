import { motion } from "framer-motion";
import Card from "../ui/Card";

const StatCard = ({ title, value, change, icon: Icon }) => {
    return (
        <motion.div
            whileHover={{
                y: -6,
            }}
        >
            <Card className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm opacity-70">{title}</p>

                        <h2 className="mt-2 text-4xl font-bold">{value}</h2>

                        <span className="mt-3 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-500">
                            {change}
                        </span>
                    </div>

                    {Icon && (
                        <div className="rounded-2xl bg-[accent]/10 p-4">
                            <Icon className="text-[accent]" />
                        </div>
                    )}
                </div>
            </Card>
        </motion.div>
    );
};

export default StatCard;
