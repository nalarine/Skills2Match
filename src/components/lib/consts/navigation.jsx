import { AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCalendar, IoSettingsSharp } from "react-icons/io5";
import { PiQuestionDuotone } from "react-icons/pi";
import { TbNotes } from "react-icons/tb";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <AiFillHome className="text-blue" />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <AiOutlineMessage className="text-blue" />,
  },
  {
    key: "profile",
    label: "Profile",
    path: "/profile",
    icon: <BiBuildings className="text-blue" />,
  },
  {
    key: "skillsAssessment",
    label: "Skill Assessment",
    path: "/skills-assessment",
    icon: <FaPeopleGroup className="text-blue" />,
  },
  {
    key: "allApplication",
    label: "All Application",
    path: "/all-application",
    icon: <TbNotes className="text-blue" />,
  },
  {
    key: "mySchedule",
    label: "My Schedule",
    path: "/my-schedule",
    icon: <IoCalendar className="text-blue" />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <IoSettingsSharp className="text-blue" />,
  },
  {
    key: "helpCenter",
    label: "Help Center",
    path: "/help-center",
    icon: <PiQuestionDuotone className="text-blue" />,
  },
];
