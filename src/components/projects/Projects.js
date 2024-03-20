import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard';
import { Healthify, Prayaas, Vidhik, clothingimg, portfolioimg,Pandas , projectTwo, voicebotimg, whatnextimg } from '../../assets';
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PROJECTS" des="My Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12">
        <ProjectCard
          title="Panda Bagpackers"
          des="Designed and implemented a responsive hotel booking web application with authentication,
          email functionality, and offline page download capabilities. Developed using MongoDB, React, Node.js, and Express. Successfully deployed
          on Render and Netlify."
          src={Pandas}
          gitlink={"https://github.com/Parth-Gala/HotelBooking-Backend"}
          hostlink={"https://regal-valkyrie-10fa0b.netlify.app/"}
        />
        
        <ProjectCard
          title="Arduino Codes"
          des="Basic Codes of Arduino(AtMega/UNO) for interfacing with sensors using various communication methods also integrated the robots 3 & 4 wheel holonomic drive with I.P live feed and PS5 Bluetooth.  Implemented P.I.D. control for optimal drive performance"
          src={projectTwo}
          gitlink={"https://github.com/Parth-Gala/Arduino-Codes"}
          
        />
        <ProjectCard
          title="Clothing Store Website"
          des="Designed an aesthetic responsive clothing website by seamlessly integrating backend and frontend, featuring captivating login and signup pages along with a classmate"
          src={clothingimg}
          gitlink={"https://github.com/Parth-Gala/responsivewebsite.github.io"}
          hostlink={"https://parth-gala.github.io/responsivewebsite.github.io/"}

        />
        <ProjectCard
          title="Param(Voice-Assistant TalkBot)"
          des="Developed a voice assistant bot in Python that can respond to user queries. It utilizes an API to retrieve news and read them aloud. Additionally, the bot is capable of sending emails, playing songs, and setting alarms and timers."
          src={voicebotimg}
          gitlink={"https://github.com/Parth-Gala/Voice-Assistant-"}
        />

        <ProjectCard
          title="Healthify"
          des="A Progressive Web Application built to help an individual achieve healthier and more balanced diet plan. Uses Open Source AI to generate tailored nutrition plans for every individual based on their goals and lifestyle, with additional features such as regular diet analyzer, intelligent recipe suggestions , goal tracking and progress monitoring."
          src={Healthify}
          gitlink={"https://github.com/Parth-Gala/Nutrition_App"}
          ytlink={"https://www.youtube.com/watch?v=m0M-XTkIWiY&ab_channel=Meetgala37"}

        />
        <ProjectCard
          title="Vidhik"
          des="Vidhik is your one-stop solution for connecting with qualified legal professionals, offering seamless access to a wide range of legal services, with features like weighted rating algorithms, review validation, and recommendation systems, it prioritize quality interactions.It serves as a hub for legal professionals, fostering connections, promoting opportunities, and enhancing networking within the legal community.It streamlines lawyer-client interactions, providing secure virtual consultations, trust-building through client reviews, and transparent, verified lawyer profiles."
          src={Vidhik}
          gitlink={"https://github.com/Team-Evidently/Vidhik"}
          ytlink={"https://www.youtube.com/watch?v=xwWfK9nx3Ig&ab_channel=MilindNair"}

        />
        <ProjectCard
          title="Prayaas"
          des="A Progressive Web App built to uplift the lives of small and marginal farmers in India.It established a farmer community with key components like a micro-credit loan system and contract farming,fostering collective growth. Additional features included a marketplace, plant disease detection, multi-language support, and news updates .This Project was among the Top 10 finalist at a National Level Hackathon 'Hack4Change' hosted by Google and T-Hub"
          src={Prayaas}
          gitlink={"https://github.com/HackForChange23/36_PixelPundit_Prayaas"}
          ytlink={"https://www.youtube.com/watch?v=nDpMw6HI5V0&ab_channel=Meetgala37"}

        />
        <ProjectCard
          title="Portfolio Website"
          des="Created a personal portfolio website in Reactjs as a part of learning and creativity"
          src={portfolioimg}
          gitlink={"https://github.com/Parth-Gala/parth-portfolio"}
          hostlink={"https://parth-gala.github.io/parth-portfolio/"}
        />
        <ProjectCard
          title="Upcoming Next"
          des="Wait for more such projects"
          src={whatnextimg}
        />
 
      </div>
    </section>
  );
}

export default Projects
