import React from "react";
import { DUMMY_JOB_LISTING } from "../components/lib/consts/dummy/dummy";
import { HiPencilAlt } from "react-icons/hi";

export default function JobListing() {
  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center overflow-x-auto">
      {DUMMY_JOB_LISTING.map((item, index) => (
        <div
          key={index}
          className="flex flex-col p-6 border border-gray min-w-[36rem] gap-1"
        >
          <div className="flex flex-3 justify-between items-center mb-4">
            <div>
              <span className="font-bold text-xl">{item.position}</span>
            </div>
            <div
              className="p-3 bg-light-blue flex flex-row items-center gap-1 border w-24 justify-center"
              onClick={null}
              style={{ cursor: "pointer" }}
            >
              <HiPencilAlt />
              <span>edit</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <span className="font-bold text-base text-gray">
                {item.workplaceType} - {item.location}
              </span>
            </div>
            <div>
              <span className="font-bold text-base text-gray">
                ₱{item.salary}/month
              </span>
            </div>
          </div>
          <div className="py-3">
            <div className="flex flex-col">
              <span className="font-bold">Required Skills</span>
              <ul>
                {item.reqSkills.map((item) => (
                  <li>⦿ {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Job Type</span>
            <span>{item.jobType}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
