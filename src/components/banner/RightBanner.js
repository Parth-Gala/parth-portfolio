import React from "react";
import { bannerimg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative ">
      <img
        className="w-[320px] h-[390px] lgl:w-[500px] lgl:h-[650px] z-20"
        src={bannerimg}
        alt="Banner image"
      />
      <div className="absolute bottom-0 w-[320px] h-[385px] lgl:w-[460px] lgl:h-[500px] bg-gradient-to-r from-[#1c2526] to-[#131518] shadow-shadowOne flex justify-center items-center z-15"></div>
    </div>
  );
};

export default RightBanner;
