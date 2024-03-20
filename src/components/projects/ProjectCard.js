import React from "react";
import { FaGlobe,FaYoutube } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ title, des, src, gitlink, hostlink, ytlink }) => {
  const openGitLink = () => {
    window.open(gitlink, "_blank");
  };

  const openHosting = () => {
    window.open(hostlink, "_blank");
  };

  const openYoutube = () => {
    window.open(ytlink, "_blank");
  };

  // const scrollbarStyles = {
  //   "&::-webkit-scrollbar-thumb:hover": {
  //     backgroundColor: "darkcyan",
  //   },
  //   "&::-webkit-scrollbar-track": {
  //     backgroundColor: "#f1f1f1",
  //   },
  //   "&::-webkit-scrollbar-thumb": {
  //     backgroundColor: "cyan",
  //     borderRadius: "4px",
  //   },
  // };

  return (
    <div className="w-full h-auto p-4 xl:px-12 xl:py-10 rounded-lg shadow-shadowOne flex flex-col items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300"
          src={src}
          alt="my projects"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-2 items-center">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-xl">{title}</h3>
          <div className="flex gap-2">
            <span
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-200 cursor-pointer"
              onClick={openGitLink}
            >
              <BsGithub />
            </span>
            {ytlink ? (
               <span
               className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-200 cursor-pointer"
               onClick={openYoutube}
             >
               <FaYoutube />
             </span>
            ):(

            <span
              className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-200 cursor-pointer"
              onClick={openHosting}
            >
              <FaGlobe />
            </span>
            )}
          </div>
        </div>
        <div className="w-full h-24 overflow-x-auto scrollbar-hide">
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
