import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion"
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ name }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div variants={fadeIn("right", "spring", 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex flex-col justify-evenly items-center">
          <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    // <div className='flex flex-row flex-wrap justify-center gap-10'>
    //   {technologies.map((technology) => (
    //     <div className='w-28 h-28' key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //     </div>
    //   ))}
    // </div>

    <div className="mt-20 flex justify-center flex-wrap gap-10">
      {technologies.map((technology) => (
        <ServiceCard key={technology.name} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");