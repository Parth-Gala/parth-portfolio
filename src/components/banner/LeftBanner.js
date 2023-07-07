import React from "react";
import { SiPython, SiFigma, SiHtml5,SiJavascript, SiFlutter, SiC, SiFirebase, SiTailwindcss } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaCog,
  FaLinkedinIn,
  FaWhatsapp,
  FaDiscord,
  FaInstagram,
  FaReact,
  FaSnapchat,
  FaJava
} from "react-icons/fa";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "Robotics & A.I Enthusiast.",
        "Web & App Developer.",
        "Software Engineer.",
      ],
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 40,
      delaySpeed: 1200,
    });
  return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            {" "}
            Hi, I'm {""}
            <span className="text-designColor capitalize">Parth Gala</span>
          </h1>
          <div className=" h-[80px] w-[340px] md:w-[400px]">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              an aspiring{" "}
              <span>
                {text}
                {""}
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="."
                  cursorColor="#01e1ff"
                />
                <FaCog className=" animate-spin text-designColor inline"></FaCog>
              </span>
            </h2>
          </div>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
          Passionate about technology, acquiring technical expertise while fostering effective communication and problem-solving skills for a successful career.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-10 justify-between">
          <div>
            <h2 className=" text-base uppercase font-titleFont mb-4">
              Find me on
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaLinkedinIn onClick={()=> window.open('https://www.linkedin.com/in/parth-gala-b55083232')}/>
              </span>
              <span className="bannerIcon">
                <FaWhatsapp onClick={()=> window.open('https://wa.me/+919819615731?text=Hi%20Parth,%20I%20would%20like%20to%20connect%20with%20you.')}/>
              </span>
              <span className="bannerIcon">
                <FaSnapchat onClick={()=> window.open('https://www.snapchat.com/add/parth6722?share_id=qa6L-kWvS6U&locale=en-US')}/>
              </span>
              <span className="bannerIcon">
                <FaInstagram onClick={()=> window.open('https://www.instagram.com/p_rthgala')}/>
              </span>
            </div>
          </div>
          <div className="z-30">
            <h2 className="text-base uppercase font-titleFont mb-4">
              BEST SKILL ON
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <SiC onClick={()=> window.open('https://www.w3schools.com/cpp/cpp_intro.asp')}/>
              </span>
              <span className="bannerIcon">
                <SiPython onClick={()=> window.open('https://www.geeksforgeeks.org/python-programming-language/')}/>
              </span>
              <span className="bannerIcon">
                <FaJava onClick={()=> window.open('https://www.youtube.com/watch?v=BGTx91t8q50&ab_channel=Telusko')}/>
              </span>
            </div>
            <div className="flex gap-4 mt-4">
              <span className="bannerIcon">
                <FaReact onClick={()=> window.open('https://www.w3schools.com/REACT/DEFAULT.ASP')}/>
              </span>
              <span className="bannerIcon">
                <SiTailwindcss onClick={()=> window.open('https://tailwindcss.com/')}/>
              </span>
              <span className="bannerIcon">
                <SiFirebase onClick={()=> window.open('https://firebase.google.com/docs/')}/>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LeftBanner
