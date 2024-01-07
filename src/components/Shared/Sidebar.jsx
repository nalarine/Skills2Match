import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Typography } from "@material-tailwind/react";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/consts/navigation";
import { PROFILE } from "../lib/consts/dummy/dummy";

const linkClasses =
  "flex items-center gap-2 font-regular px-3 py-2 hover:bg-light-green hover:no-underline rounded-sm text-base";

export default function Sidebar() {
  return (
    <div className="bg-light-blue w-72 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        {/* <Logo width="60px" height="60px" /> */}
        <img
          src="../../src/assets/logo.svg"
          alt="LOGO"
          className="h-[60px] w-[60px]"
        />
        <span className="font-bold">Skills2.0Match</span>
      </div>
      <div className="flex-2 py-5 flex flex-col gap-1.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex-1 py-5 flex flex-col gap-1.5 pt-2 border-t border-blue">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-6 items-center py-5">
        <div className="flex items-center gap-4">
          <Avatar src={PROFILE[0].profile_pic} alt="avatar" />
          <div>
            <Typography variant="h6">{PROFILE[0].name}</Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {PROFILE[0].email}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation(); // getting current route

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname == item.path ? "bg-light-green" : "",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
