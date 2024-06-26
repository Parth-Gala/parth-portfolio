import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-20"
    >
      {/* part one */}
      <div>
        <div className=" py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            2010-present
          </p>
          <h2 className=" text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div>
          <div className=" mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black flex flex-col gap-10 border-opacity-30">
            <ResumeCard
              title="B.
        Tech in Information Technology"
              subTitle="K.J Somaiya College of Engineering(2021-2025)"
              result="8.6/10.0"
              des="Completing my engineering career in the field of Information Technology and related courses also advancing, learning & exploring various domains of Computer Science and related fields"
            />
            <ResumeCard
              title="Science"
              subTitle="Shri T P Bhatia College of Science(2019-2021)"
              result="86%"
              des="Higher education in science with PCM subjects equiped with a strong foundation for careers in engineering, technology, research, and scientific fields.Also various entrance exams like JEE & CET makes a strong foundation in scientific knowledge and problem-solving skills"
            />
            <ResumeCard
              title="Secondary Education"
              subTitle="Children’s Academy(2010-2021)"
              result="90%"
              des="The initial years of formal education where students learn fundamental subjects such as mathematics, language arts, science, social studies, and physical education."
            />
          </div>
        </div>
      </div>
      {/* part two */}

      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            Community service
          </p>
          <h2 className="text-4xl font-bold">Voluntary Work</h2>
        </div>
        <div>
          <div className="w-full mt-14 h-[1000px] border-l-[6px] border-l-black flex flex-col gap-10 border-opacity-30">
            <ResumeCard
              title="Jivdaya Malad"
              result="Animal Rescuer"
              subTitle="Birds & Animal Rescue"
              des="Field worker specializing in emergency response for saving and providing basic treatment to birds and animals in emergency. Managed support line, coordinating rescue efforts and deploying personnel for prompt assistance"
            />
            <ResumeCard
              title="Private Classes"
              subTitle="Tutor and Mentor"
              result="Tutor"
              des="Tutored Class 8 and 9 students in Maths and Science, developing personalized lesson plans and achieving notable grade improvements along with my mother"
            />
            <ResumeCard
              title="Upcoming Work"
              subTitle=""
              des="Looking forward for more such wroks"
            />
          </div>
        </div>
      </div>
      {/* <div>
        <div className=" py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            2021-present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black flex flex-col gap-10 border-opacity-30">
            <ResumeCard
              title="The KJSCE Robocon"
              subTitle="Coding Team Member"
              result="Aug 2022 - present"
              des="Experienced coding team member specializing in robot control integration, adept in embedded systems, and successfully recruited 40+ applicants for various team positions"
            />
            <ResumeCard
              title="Bargad.ai"
              subTitle="Java Developer"
              result="June 2023 - present"
              des="Skilled Java developer creating and integrating a rule engine for rule checking, coordinating with the team to implement it in both backend and frontend simultaneously"
            />
            <ResumeCard
              title="Global Shala"
              subTitle="Data Analytics"
              result="May 2022 - June 2022"
              des="Used Python (matplotlib) to analyze the Data for the Ad campaign to effectively save money for
              the company by giving insights to stop the Ad campaigns that aren't feasible for the company"
            />
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
