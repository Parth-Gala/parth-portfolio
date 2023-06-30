import React from 'react'
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div className="bg-black flex items-center justify-center mt-10 shadow-shadowOne rounded-lg w-[100%]">
      <div className=" p-6">
        <h2 className=" text-xl md:text-3xl text-designColor font-bold uppercase mb-4">Accomplishments</h2>
        <ul className=" text-gray-400 list-disc px-2">
          <li>Took part in Cultural Programs during school also won many prizes in Art Competition</li>
          <li>Secured B Grade in Intermediate Drawing Exam</li>
          <li>Got 1st prize in the school zonal level competition wherein our team created a smart city model to segregate dry waste and wet waste.</li>
          <li>Took part in the organizing Committee of College fest like Symphony2022.</li>
          <li>Organized a Robotics Workshop for newbies and delivered a Speech explaining the Bluetooth module and the code to control the robot using a mobile.</li>
          <li>Currently learning Blockchain and Trying to integrate it into my next project.</li>
        </ul>
      </div>
    </div>
      
    </motion.div>
  );
}

export default Achievements
