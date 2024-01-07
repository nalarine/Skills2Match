import React from "react";
import { Avatar } from "@material-tailwind/react";

export const Profile = () => {
  return (
    <div className="p-3">
      <div class="flex">
        <div>
          <div class="flex-auto w-80 text-6xl font-bold">
            Sophie Guevarra
            <p class="text-xl font-semibold">sqguevarra@gmail.com</p>
            <div class="grid grid-cols-3 gap-80 ">
              <div class="text-sm">
                <p>May 1, 1984</p>
              </div>
              <div class="text-sm">
                Phone Number<p>096472916471</p>
              </div>
              <div class="text-sm">
                Location<p>Quezon City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-start-1 col-end-3">
          {" "}
          <p class="text-3xl font-bold">Profile Summary</p>
          <div class="text-xl">
            As an out-of-school youth actively seeking employment opportunities
            online, I bring a dynamic set of skills and a strong work ethic to
            contribute effectively in a professional setting. My goal is to
            secure a position that allows me to leverage my skills and grow both
            personally and professionally.
            <hr></hr>
            <br></br>
            <p class="text-3xl font-bold">Key Qualification</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              repudiandae sunt ipsa beatae fuga neque iure. Aut, dignissimos
              omnis iure, nesciunt id maiores eveniet architecto sapiente quidem
              cupiditate est cum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolore repudiandae sunt ipsa beatae fuga neque
              iure. Aut, dignissimos omnis iure, nesciunt id maiores eveniet
              architecto sapiente quidem cupiditate est cum.
            </p>
          </div>
        </div>

        <div class="...">
          <p class="text-3xl font-bold">Skills</p>
          <div class="grid grid-cols-3 gap-2">
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class=" ...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr> <br></br>
      <div class="grid grid-cols-2 gap-6">
        <div class=" ...">
          <div class="text-3xl font-bold">Job Applied</div>
          <div className="flex flex-col py-5 gap-3">
            <PositionWrapper></PositionWrapper>
            <PositionWrapper></PositionWrapper>
            <PositionWrapper></PositionWrapper>
            <PositionWrapper></PositionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

function PositionWrapper() {
  return (
    <div className="flex flex-row border p-5 gap-5">
      <Avatar src="src/assets/dell-logo.svg" size="xl" />
      <div className="flex flex-col">
        <span className="font-bold text-xl">Social Media Assistant</span>
        <span className="font-bold text-gray">Dell - Philippines</span>
        <div className="flex flex-row py-3 gap-3">
          <div className="bg-light-yellow p-2 rounded-md">
            <span className="font-bold">Full Time</span>
          </div>
          <div className="border border-dark-yellow p-2 rounded-md">
            <span className="font-bold text-dark-yellow">Marketing</span>
          </div>
          <div className="border border-green p-2 rounded-md">
            <span className="font-bold text-green">Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}
