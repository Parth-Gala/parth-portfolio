import React from "react";
import Title from "../layouts/Title";
import Cards from "../layouts/Cards";
import {AiFillAppstore, AiFillRobot, AiOutlineStock} from "react-icons/ai"
import { SiFigma} from "react-icons/si";
import {FaBrain, FaGlobe} from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
      <Title title="Features" des="What I Do" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20">
        <Cards
          title="Application Development"
          des="Flutter-learned developer adept in application development. Utilizes Flutter framework to create cross-platform apps with visually appealing UI and smooth performance for enhanced user experience."
          icon={<AiFillAppstore/>}
        />
        <Cards
          title="Web Development"
          des="Skilled web developer proficient in HTML, CSS, JavaScript, and React.js. Creates dynamic and interactive websites with modern designs, seamless navigation, and responsive layouts for optimal user engagement with integrated backend."
          icon={<FaGlobe/>}
        />
        <Cards
          title="Robotics"
          des="Experienced in robotics with Arduino proficiency. Participated in DD Robocon competition, integrating IP with embedded coding to program and operate robots for diverse functionalities."
          icon={<AiFillRobot/>}
        />
        <Cards
          title="Artificial Intelligence"
          des="Dedicated AI enthusiast pursuing an honors degree in Artificial Intelligence. Extensive coursework in data science, AI, machine learning, and neural networks for comprehensive understanding and application in real-world scenarios."
          icon={<FaBrain/>}
        />
        <Cards
          title="Investments"
          des="Active investor in stocks and mutual funds. Implements a diversified investment strategy to capitalize on market opportunities and achieve long-term financial growth and wealth accumulation."
          icon={<AiOutlineStock/>}
        />
        <Cards
          title="UI Designs"
          des="Proficient in photo editing, transforming images with precision and creativity. Also skilled in crafting UI designs using Adobe Photoshop and Figma, delivering visually stunning and user-friendly interfaces."
          icon={<SiFigma/>}
        />
      </div>
    </section>
  );
};

export default Features;
