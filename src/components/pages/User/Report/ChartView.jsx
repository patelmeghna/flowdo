import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

const data = [
    { date: "2022-01-01", value: 10 },
    { date: "2022-01-02", value: 20 },
    { date: "2022-01-03", value: 15 },
    { date: "2022-01-04", value: 35 },
    { date: "2022-01-05", value: 25 },
    { date: "2022-01-06", value: 30 },
    { date: "2022-01-07", value: 20 }
];

const ChartView = () => {
    const [start, setStart] = useState(data[0].date);
    const [end, setEnd] = useState(data[data.length - 1].date);

    return (
        <div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
            <div>
                <label>Start date:</label>
                <input
                    type="date"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                />
                <label>End date:</label>
                <input
                    type="date"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ChartView;
