import React from "react";
import { ResponsiveContainer, Cell, Legend, PieChart, Pie } from "recharts";
import { APPLICANTS } from "./lib/consts/dummy/dummy";

const COLORS = ["#0E64B4", "#E8A01A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function ApplicantsSummary() {
  const values = APPLICANTS.map((item) => item.value);
  const totalApplicants = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-white w-[20rem] h-[6rem] p-4 flex flex-col rounded-md border border-gray">
          <strong className="font-semibold text-l">Successful Interview</strong>
          <strong className="font-bold text-2xl py-1 text-dark-yellow">
            12 Done Interview
          </strong>
        </div>
        <div className="bg-white w-[20rem] h-[19rem] p-4 flex flex-col rounded-md border border-gray">
          <strong className="font-semibold text-l">Job Applied Summary</strong>
          <strong className="font-bold text-2xl py-1 text-blue">
            {totalApplicants} Total Application
          </strong>
          <div className="w-full mt-1 flex-1 text-s">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={300}>
                <Pie
                  data={APPLICANTS}
                  cx="50%"
                  cy="55%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {APPLICANTS.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend verticalAlign="top" align="left" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
