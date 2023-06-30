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
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20">
        <Cards
          title="Application Development"
          des="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi amet molestias eius aut atque minima nam. Laudantium numquam corporis earum doloribus molestiae."
          icon={<AiFillAppstore/>}
        />
        <Cards
          title="Web Development"
          des="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi amet molestias eius aut atque minima nam. Laudantium numquam corporis earum doloribus molestiae."
          icon={<FaGlobe/>}
        />
        <Cards
          title="Robotics"
          des="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi amet molestias eius aut atque minima nam. Laudantium numquam corporis earum doloribus molestiae."
          icon={<AiFillRobot/>}
        />
        <Cards
          title="Artificial Intelligence"
          des="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi amet molestias eius aut atque minima nam. Laudantium numquam corporis earum doloribus molestiae."
          icon={<FaBrain/>}
        />
        <Cards
          title="Investments"
          des="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi amet molestias eius aut atque minima nam. Laudantium numquam corporis earum doloribus molestiae."
          icon={<AiOutlineStock/>}
        />
        <Cards
          title="UI Designs"
          des="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sequi amet molestias eius aut atque minima nam. Laudantium numquam corporis earum doloribus molestiae."
          icon={<SiFigma/>}
        />
      </div>
    </section>
  );
};

export default Features;
