import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { DATA1, DUMMY_DATA_INFO } from "./lib/consts/dummy/dummy";

export default function JobStatistics() {
  return (
    <div className="bg-white h-[26rem] p-4 rounded-md border border-gray flex flex-col flex-1">
      <strong className="font-bold text-3xl">Job Statistics</strong>
      <span className="text-base text-gray">
        Showing job statistics from {DUMMY_DATA_INFO.map((item) => item.date)}
      </span>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={DATA1}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" vertical="false" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend verticalAlign="top" align="left" />
          <Bar
            dataKey="jobViews"
            name="Jobs Viewed"
            stackId="a"
            fill="#E8A01A"
          />
          <Bar
            dataKey="jobApplied"
            name="Jobs Applied"
            stackId="a"
            fill="#0E64B4"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
