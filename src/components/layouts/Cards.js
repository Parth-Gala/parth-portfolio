import React from "react";
import {HiArrowRight} from "react-icons/hi"

const Cards = ({ title, des, icon }) => {
  return (
    <div className="w-full h-80 px-12 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className=" h-50 overflow-y-hidden">
        <div className="flex flex-col gap-4 h-full translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
          {/* <div> */}
            <span className="text-3xl md:text-4xl text-designColor -mb-2">{icon}</span>
          {/* </div> */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className=" text-base">{des}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
