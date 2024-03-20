import React from 'react';
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-wrap justify-around mt-5"
    >
      {/* Achievement Card */}
      <div className="bg-black bg-opacity-30 shadow-shadowOne rounded-lg w-full lg:w-[calc(50%-10px)] xl:w-[calc(33%-10px)] p-6 mb-5 ">
        <h2 className="text-xl md:text-3xl text-designColor font-bold uppercase mb-4">Accomplishments</h2>
        <ul className="text-gray-400 list-disc px-2">
          <li>Took part in Cultural Programs during school also won many prizes in Art Competition</li>
          <li>Secured B Grade in Intermediate Drawing Exam</li>
          <li>Got 1st prize in the school zonal level competition wherein our team created a smart city model to segregate dry waste and wet waste.</li>
          <li>Took part in the organizing Committee of College fest like Symphony2022.</li>
          <li>Organized a Robotics Workshop for newbies and delivered a Speech explaining the Bluetooth module and the code to control the robot using a mobile.</li>
          <li>Secured a top 10 position out of 400+ participating teams, competing against startups, students, and industry professionals in a Google and G.O.I organized hackathon </li>
        </ul>
      </div>

      {/* UI Design Templates */}
      <div className="bg-black bg-opacity-30 shadow-shadowOne rounded-lg w-full lg:w-[calc(33%-10px)] p-6 mb-5">
        <h2 className="text-xl md:text-3xl text-designColor font-bold uppercase mb-4">UI Design Templates</h2>
        <div className="mb-5 ">
          {/* Travel Application */}
          <div className="mb-5 border-b pb-3">
            <h3 className="text-lg md:text-lg text-designColor font-bold mb-2">Travel Application</h3>
            <p className="text-gray-400">Mobile UI design for a travel application with interactive pages.</p>
            <p className="text-blue-500 underline hover:text-blue-700" onClick={() =>
                    window.open(
                      "https://www.figma.com/file/OKLQjv9kTx9bqUK2VsbB7T/Travel-App?type=design&node-id=0-1&mode=design"
                    )
                  }
                  style={{ cursor: "pointer" }}>View it</p>
          </div>
          
          {/* Lawyers LinkedIn */}
          <div className="mb-5 border-b pb-3">
            <h3 className="text-lg md:text-lg text-designColor font-bold mb-2">Lawyers LinkedIn</h3>
            <p className="text-gray-400">Web UI design for a seamless Lawyer-Client interface like LinkedIn, streamlining lawyer discovery and interaction for efficient and user-friendly access to legal services.</p>
            <p className="text-blue-500 underline hover:text-blue-700" onClick={() =>
                    window.open(
                      "https://www.figma.com/file/c6VssdAiDDiBPsNdtVPKdB/SIH23?type=design&node-id=0-1&mode=design"
                    )
                  }
                  style={{ cursor: "pointer" }}>View it</p>
          </div>
          
          {/* Farmers App */}
          <div>
            <h3 className="text-lg md:text-lg text-designColor font-bold mb-2">Farmers App</h3>
            <p className="text-gray-400">Mobile UI design for creating a Farmers App to help marginal farmers to avail different facilities with some unique approach.</p>
            <p className="text-blue-500 underline hover:text-blue-700" onClick={() =>
                    window.open(
                      "https://www.figma.com/file/o8Uc84kbFA86p2HeuTzwie/Pixel-pundits?type=design&node-id=0-1&mode=design"
                    )
                  }
                  style={{ cursor: "pointer" }}>View it</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Achievements;
