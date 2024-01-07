import * as React from "react";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InfoIcon from "@mui/icons-material/Info";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DoneIcon from "@mui/icons-material/Done";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { jsx as _jsx } from "react/jsx-runtime";
const StyledChip = styled(Chip)(({ theme }) => ({
  justifyContent: "left",
  "& .icon": {
    color: "inherit",
  },
  "&.Shortlisted": {
    color: (theme.vars || theme).palette.info.dark,
    border: `1px solid ${(theme.vars || theme).palette.info.main}`,
    padding: "3px",
  },
  "&.Accepted": {
    color: (theme.vars || theme).palette.success.dark,
    border: `1px solid ${(theme.vars || theme).palette.success.main}`,
    padding: "3px",
  },
  "&.Interview": {
    color: (theme.vars || theme).palette.warning.dark,
    border: `1px solid ${(theme.vars || theme).palette.warning.main}`,
    padding: "3px",
  },
  "&.Declined": {
    color: (theme.vars || theme).palette.error.dark,
    border: `1px solid ${(theme.vars || theme).palette.error.main}`,
    padding: "3px",
  },
}));
const Status = /*#__PURE__*/ React.memo((props) => {
  const { status } = props;
  let icon = null;
  if (status === "Declined") {
    icon = /*#__PURE__*/ _jsx(ReportProblemIcon, {
      className: "icon",
    });
  } else if (status === "Shortlisted") {
    icon = /*#__PURE__*/ _jsx(InfoIcon, {
      className: "icon",
    });
  } else if (status === "Interview") {
    icon = /*#__PURE__*/ _jsx(AutorenewIcon, {
      className: "icon",
    });
  } else if (status === "Accepted") {
    icon = /*#__PURE__*/ _jsx(DoneIcon, {
      className: "icon",
    });
  }
  let label = status;
  if (status === "Interview") {
    label = "Interview";
  }
  return /*#__PURE__*/ _jsx(StyledChip, {
    className: status,
    // icon: icon,
    size: "small",
    label: label,
    variant: "outlined",
  });
});
export function renderStatus(params) {
  if (params.value == null) {
    return "";
  }
  return /*#__PURE__*/ _jsx(Status, {
    status: params.value,
  });
}
