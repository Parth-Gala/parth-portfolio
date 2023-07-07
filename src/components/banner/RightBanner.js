import React from "react";
import { bannerimg2 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img
        className="w-[420px] h-[420px] lgl:w-[600px] lgl:h-[620px] z-20"
        src={bannerimg2}
        alt="Banner image"
      />
      <div className="absolute bottom-0 w-[320px] h-[385px] lgl:w-[550px] lgl:h-[490px] bg-gradient-to-r from-[#1c2526] to-[#131518] shadow-shadowOne flex justify-center items-center z-15"></div>
    </div>
  );
};

export default RightBanner;
