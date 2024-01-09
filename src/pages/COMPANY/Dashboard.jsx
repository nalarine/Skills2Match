import React from "react";
import { DUMMY_DATA_INFO } from "../components/lib/consts/dummy/dummy";
import { IoCalendar } from "react-icons/io5";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import JobStatistics from "../components/JobStatistics";
import ApplicantsSummary from "../components/ApplicantsSummary";
import JobUpdates from "../components/JobUpdates";

export default function Dashboard() {
  return (
    <>
      <div className="p-3">
        {DUMMY_DATA_INFO.map((item) => (
          <div className="h-28 flex flex-col">
            <div className="items-center flex flex-row">
              <div className="flex-1 flex flex-col gap-3">
                <span className="font-black text-4xl">
                  Good morning, {item.name}
                </span>
                <span className="text-base">
                  Here is your job listing statistic report from {item.date}
                </span>
              </div>
              <div className="w-48 p-3 bg-blue rounded-md">
                <span className="justify-center items-center text-white font-bold flex flex-row gap-2.5">
                  {item.date}
                  <IoCalendar className="text-white" />
                </span>
              </div>
            </div>
          </div>
        ))}
        <DashboardStatsGrid />
        <div className="flex flex-row gap-4 w-full py-3">
          <JobStatistics />
          <ApplicantsSummary />
        </div>
        <div className="flex flex-row gap-4 w-full py-3">
          <JobUpdates />
        </div>
      </div>
    </>
  );
}
