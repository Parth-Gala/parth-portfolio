import React, { useState } from 'react'
import Title from '../layouts/Title'
// import ResumeCard from './ResumeCard';
import Education from './Education';
import Skills from './Skills';
import Achievements from './Achievements';
import Experience from './Experience';
const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementsData, setAchievementsData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Experience" des="My Resume" />
      </div>
      <div> 
        <ul className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false)  &
              setExperienceData(false) &
              setAchievementsData(false)
            }
            className={`${
              educationData
                ? "border border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}>
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &           
              setExperienceData(false) &
              setAchievementsData(false) 
            }
            className={`${
              skillData
                ? "border border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementsData(false)              
            }
            className={`${
              experienceData
                ? "border border-designColor rounded-lg"
                : " border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setAchievementsData(true) &
              setExperienceData(false)
            }
            className={`${
              achievementsData
                ? " border border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementsData && <Achievements />}
      {experienceData && <Experience />}
    </section>
  );
}

export default Resume
 