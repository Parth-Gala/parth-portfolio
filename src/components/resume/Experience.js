import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-20"
    >
      <div>
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
      </div>
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            Skill Enhancement
          </p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div>
          <div className="w-full mt-14 h-[1000px] border-l-[6px] border-l-black flex flex-col gap-10 border-opacity-30">
            <ResumeCard
              title="Building RESTful APIs using Node.js and Express"
              result={
                <span
                  onClick={() =>
                    window.open(
                      "https://www.coursera.org/account/accomplishments/certificate/WRL2PKUCEHLN"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  View Here
                </span>
              }
              subTitle="NIIT"
              des="Certificate for completing the course on building RESTful APIs using Node.js and Express from NIIT."
            />
            <ResumeCard
              title="Building Modern Node.js Applications on AWS"
              result={
                <span
                  onClick={() =>
                    window.open(
                      "https://www.coursera.org/account/accomplishments/certificate/UYWRBK4CEVLX"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  View Here
                </span>
              }
              subTitle="Amazon Web Services"
              des="Certificate for completing the course on building modern Node.js applications on AWS from Amazon Web Services."
            />
            <ResumeCard
              title="Developing Back-End Apps with Node.js and Express"
              result={
                <span
                  onClick={() =>
                    window.open(
                      "https://www.coursera.org/account/accomplishments/certificate/AF9G8R4VWD9U"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  View Here
                </span>
              }
              subTitle="IBM"
              des="Certificate for completing the course on developing back-end apps with Node.js and Express from IBM."
            />
            <ResumeCard
              title="Developing Front-End Apps with React"
              result={
                <span
                  onClick={() =>
                    window.open(
                      "https://www.coursera.org/account/accomplishments/certificate/5QSRYFMYVDWD"
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  View Here
                </span>
              }
              subTitle="IBM"
              des="Certificate for completing the course on developing front-end apps with React from IBM."
            />
            {/* <ResumeCard
        title="UI Design Templates"
        result="Figma"
        subTitle=""
        des="Various UI design templates created using Figma, including:
        - Travel Application: Mobile UI design for a travel application with interactive pages.
        - Lawyers LinkedIn: Web UI design for a seamless Lawyer-Client interface like LinkedIn.
        - Farmers App: Mobile UI design for creating a Farmers App to help marginal farmers avail different facilities."
      /> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
