import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Soft Skills</h2>
        </div>
        <div>
          <div className="w-full flex flex-col gap-6">
            <div className=" overflow-x-hidden">
              <p className="text-md font-semibold ">Teamwork & Creativity</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-full h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Pressure & Time Management
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%]  h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">90%</span>
                </motion.span>
              </span>
            </div>
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Problem Solving & Critical thinking
              </p>
              <span className="w-full  h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[85%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Communication & Curiosity
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[95%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">
                Conflict Resolution & Leadership
              </p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[80%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Development Skills */}

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className=" text-3xl md:text-4xl font-bold">
            Development Skills
          </h2>
        </div>
        <div className="w-full flex flex-col lgl:flex-row gap-6 lgl:gap-30">
          {/* <div> */}
          <div className="w-full flex flex-col gap-6">
            <div className=" overflow-x-hidden">
              <p className="text-md font-semibold ">C/C++/Embedded C</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-full h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
            
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Python</p>
              <span className="w-full  h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[80%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">React Js</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[95%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Express Js</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[85%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>
            {/* </div> */}
          </div>

          {/* <div> */}
          <div className="w-full flex flex-col gap-6">
            
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Node js</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%]  h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">MongoDb</p>
              <span className="w-full  h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[85%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>
            <div className=" overflow-x-hidden">
              <p className="text-md font-semibold ">MySQL</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[75%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>
            <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Git & Github</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[95%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            {/* <div className=" overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Firebase</p>
              <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className=" w-[75%] h-full bg-gradient-to-r from-blue-700 via-green-400 to-cyan-300 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
