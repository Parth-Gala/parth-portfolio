import React from "react";
import { Link } from "react-scroll/modules";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaDiscord,
  FaInstagram,
  FaGithub,
  FaSnapchat,
} from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-24 mx-auto  my-0 sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex flex-row justify-center gap-4 items-center">
        <img src={logo} alt="logo" className=" w-20 h-20" />
        <p className=" text-4xl text-designColor">P.G</p>
      </div>
      <div>
        <ul className="hidden md:inline-flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-3xl md:hidden bg-black w-14 h-14 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 -left-3 bg-gray-800 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2">
              <div>
                <div className="flex flex-row  gap-4 items-center">
                  <img src={logo} alt="logo" className=" w-16 h-16" />
                  <p className=" text-2xl text-designColor">Parth Gala</p>
                </div>
                <p className="text-sm text-gray-400 mt-2 border-t-[1px] border-t-gray-600">
                I am eager and exhilarated to enhance my current skills, augment my knowledge, and embrace industry challenges as an inquisitive learner.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col xl:flex-row gap-3  justify-between">
                <h2 className="text-base uppercase font-titleFont mt-3">
                  Find me on
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaLinkedinIn onClick={()=> window.open('https://www.linkedin.com/in/parth-gala-b55083232')}/>
                  </span>
                  <span className="bannerIcon">
                    <FaGithub onClick={()=> window.open('https://github.com/Parth-Gala')}/>
                  </span>
                  <span className="bannerIcon">
                    <FaDiscord onClick={()=> window.open('https://discordapp.com/users/parthgala6703')}/>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaWhatsapp onClick={()=> window.open('https://wa.me/+919819615731?text=Hi%20Parth,%20I%20would%20like%20to%20connect%20with%20you.')}/>
                  </span>
                  <span className="bannerIcon">
                    <FaInstagram  onClick={()=> window.open('https://www.instagram.com/p_rthgala')}/>
                  </span>
                  <span className="bannerIcon">
                    <FaSnapchat onClick={()=> window.open('https://www.snapchat.com/add/parth6722?share_id=qa6L-kWvS6U&locale=en-US')}/>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
            <div className="w-full">
              <p className=" text-center text-gray-500 text-sm">
                © 2023 All rights reserved by Parth Gala
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
