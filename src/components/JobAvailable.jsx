import { JOB_AVAILABLE } from "./lib/consts/dummy/dummy";
import React, { useState } from "react";
import { Avatar } from "@material-tailwind/react";

export default function JobAvailable() {
  return (
    <div
      className="bg-white p-4 rounded-lg border border-gray flex flex-col flex-2"
      style={{ height: "32rem" }}
    >
      {" "}
      <div className="flex flex-row justify-between items-center">
        <strong className="font-bold text-3xl">Job Available</strong>
        <strong className="font-bold text-xl">View All</strong>
      </div>
      <div className="flex gap-2 py-4">
        {JOB_AVAILABLE.map((item, index) => (
          <BoxWrapper key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

function BoxWrapper({ data }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleApplyClick = () => {
    // Alert that the job is applied
    alert("Job Applied for " + data.job_role);
  };

  return (
    <div className="bg-white rounded-md border border-gray p-4 h-[26rem] flex-1">
      <div className="flex flex-row justify-between items-center py-4">
        <Avatar src={data.image} size="xl" />
        {/* Button with heart image */}
        <button onClick={handleLikeClick}>
          <img
            src={
              isLiked
                ? "/src/assets/heartRed.svg"
                : "/src/assets/heartPlain.svg"
            }
            alt="Heart"
            className="w-6 h-6 cursor-pointer"
          />
        </button>
        {/* Apply button */}
        <div className="bg-light-yellow rounded-lg p-3">
          <button className="font-bold" onClick={handleApplyClick}>
            Apply
          </button>
        </div>
      </div>
      <div className="flex flex-col py-4">
        <span className="font-bold text-md">Job Role: </span>
        <span className="font text-lg">{data.job_role}</span>
        <span className="font-bold text-md">Location: </span>
        <span className="font text-md">{data.location}</span>
        <span className="font-bold text-md">Salary: </span>
        <span className="font text-sm">{data.salary}</span>
        <span className="font-bold text-md">Required Skills: </span>
        <span className="font text-md">{data.required_skills}</span>
      </div>
      <div className="flex flex-row justify-between gap-1.5">
        <div>
          <span className="font-bold text-md">Job Type: {data.job_type}</span>
        </div>
      </div>
    </div>
  );
}
