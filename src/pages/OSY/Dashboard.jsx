import React from "react";
import { DUMMY_DATA_INFO } from "../../components/lib/consts/dummy/dummy";
import { IoCalendar } from "react-icons/io5";
import DashboardStatsGrid from "../../components/DashboardStatsGrid";
import JobAvailable from "../../components/JobAvailable";

export default function Dashboard() {
  const handleCalendarClick = () => {
    // Add your functionality for when the calendar is clicked
    alert("Calendar button clicked!");
    // You can perform any actions you want here
  };

  return (
    <>
      <div className="p-3">
        {DUMMY_DATA_INFO.map((item) => (
          <div key={item.id} className="md:flex md:flex-col md:h-28">
            <div className="md:flex md:flex-row md:items-center">
              <div className="md:flex-1 md:flex md:flex-col md:gap-3">
                <span className="font-black text-4xl">
                  Good morning, {item.name}
                </span>
                <span className="text-base">
                  Here is your job listing statistic report from {item.date}
                </span>
              </div>
              <button
                onClick={handleCalendarClick}
                className="w-full md:w-48 p-3 bg-blue rounded-md cursor-pointer"
              >
                <span className="justify-center items-center text-white font-bold flex flex-row gap-2.5">
                  {item.date}
                  <IoCalendar className="text-white" />
                </span>
              </button>
            </div>
          </div>
        ))}
        <DashboardStatsGrid />
        <div className="flex flex-col md:flex-row md:gap-4 w-full py-3">
          <JobAvailable />
        </div>
      </div>
    </>
  );
}
