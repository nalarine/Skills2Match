import React from "react";
import { DUMMY_DATA_ABOUT } from "../lib/consts/dummy/dummy";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="p-3">
      <div className="items-center h-28 px-5 py-5 flex flex-row pt-2 border-b border-blue gap">
        <div className="flex-1 flex flex-row gap-3">
          {DUMMY_DATA_ABOUT.map((item, index) => (
            <React.Fragment key={index}>
              <div>
                <img src={item.image} height={"72px"} width={"72px"} />
              </div>
              <div className="flex-1 flex flex-col py-2">
                <span className="font-normal text-gray">Applicant</span>
                <span className="font-bold text-lg">{item.name}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-3 p-3">
          <IoIosNotificationsOutline fontSize={36} />
        </div>
        <Link to="/">
          <button className="bg-light-yellow border border-dark-yellow text-black font-bold py-2 px-4 rounded">
            Apply now
          </button>
        </Link>
      </div>
    </div>
  );
}
