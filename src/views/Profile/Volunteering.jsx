import React from "react";
import { BsCalendar, BsPin, BsPinMap } from "react-icons/bs";

const Volunteering = () => {
  return (
    <div>
      <div className="flex gap-4 border rounded p-2 mt-3">
        <img src="https://picsum.photos/400" className="size-24" alt="" />
        <div>
          <div className="font-bold">This is the title of the drive</div>
          <div>
            <div className="flex items-center gap-2 mt-2">
              <BsPinMap /> <span className="text-sm">Lucknow</span>{" "}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <BsCalendar /> <span className="text-sm">2024-6-01</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
