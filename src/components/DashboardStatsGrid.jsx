import React from "react";
import { IoPeopleSharp, IoPersonAdd } from "react-icons/io5";
import { DUMMY_DATA_INFO } from "./lib/consts/dummy/dummy";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function DashboardStatsGrid() {
  return (
    <>
      {DUMMY_DATA_INFO.map((item) => (
        <div className="flex gap-2 py-3">
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 bg-blue flex items-center justify-center">
              <IoPeopleSharp className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm font-semibold">Job Applied</span>
              <div className="flex items-center">
                <strong className="text-xl font-bold">
                  {item.candidatesReview} New Job Suited
                </strong>
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 bg-dark-yellow flex items-center justify-center">
              <IoPersonAdd className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm font-semibold">
                Schedule for Interivew
              </span>
              <div className="flex items-center">
                <strong className="text-xl font-bold">
                  {item.toInterview} Candidates for Interview
                </strong>
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <div className="rounded-full h-12 w-12 bg-green flex items-center justify-center">
              <BiSolidMessageDetail className="text-2xl text-white" />
            </div>
            <div className="pl-4">
              <span className="text-sm font-semibold">Messages Received</span>
              <div className="flex items-center">
                <strong className="text-xl font-bold">
                  {item.receivedMessages} messages
                </strong>
              </div>
            </div>
          </BoxWrapper>
        </div>
      ))}
    </>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-md border border-gray rounded p-4 flex-1 flex items-center h-24">
      {children}
    </div>
  );
}
