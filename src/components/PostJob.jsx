import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import Button from "@mui/material/Button";
import {
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { DUMMY_JOB_LISTING } from "./lib/consts/dummy/dummy";

export function PostJob() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [newListing, setNewListing] = useState({
    position: "",
    location: "",
    salary: "",
    reqSkills: [],
    jobType: "",
  });

  const handleAddListing = () => {
    if (
      newListing.position &&
      newListing.location &&
      newListing.salary &&
      newListing.reqSkills.length > 0 &&
      newListing.jobType
    ) {
      // Add the new listing to DUMMY_JOB_LISTING
      DUMMY_JOB_LISTING.push(newListing);

      // Clear the form
      setNewListing({
        position: "",
        location: "",
        salary: "",
        reqSkills: [],
        jobType: "",
      });
    } else {
      alert("Please fill out all fields before adding a new listing.");
    }
  };

  const handleInputClick = (e) => {
    e.stopPropagation(); // Prevent event propagation when clicking on Input
  };

  return (
    <Button
      variant="contained"
      startIcon={<HiOutlinePlusSm />}
      onClick={handleOpen}
    >
      <Dialog size="xs" open={open} handler={handleOpen} className="bg-white">
        <Card className="mx-auto w-full max-w-screen bg-green">
          <CardHeader
            variant="gradient"
            className="mb-4 grid h-28 place-items-center bg-blue"
          >
            <Typography variant="h4" color="white">
              Post a Job Now
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Job Title"
              size="lg"
              onClick={handleInputClick}
              onChange={(e) =>
                setNewListing({ ...newListing, position: e.target.value })
              }
            />
            <Input
              label="Location"
              size="lg"
              onClick={handleInputClick}
              onChange={(e) =>
                setNewListing({ ...newListing, position: e.target.value })
              }
            />
            <Input
              label="Job Type"
              size="lg"
              onClick={handleInputClick}
              onChange={(e) =>
                setNewListing({ ...newListing, position: e.target.value })
              }
            />
            <Input
              label="Workspace Type"
              size="lg"
              onClick={handleInputClick}
              onChange={(e) =>
                setNewListing({ ...newListing, position: e.target.value })
              }
            />
            <Input
              label="Estimated Salary"
              size="lg"
              onClick={handleInputClick}
              onChange={(e) =>
                setNewListing({ ...newListing, position: e.target.value })
              }
            />
            <Input
              label="Skills Requirement"
              size="lg"
              onClick={handleInputClick}
              onChange={(e) =>
                setNewListing({ ...newListing, position: e.target.value })
              }
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={handleAddListing}
              fullWidth
              className="bg-blue"
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
      Post a job listing
    </Button>
  );
}
