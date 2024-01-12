import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex justify-center">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
          With over 5 years of Front-End development and proficient in web technologies like HTML, CSS/CSS3, jQuery, Bootstrap, XML, JavaScript, Tailwind CSS, Material UI and JSON essential for front-end development.  <br />
          <hr className=" py-4 border-0" />
          Demonstrated ability to use JSON for storing and transporting data between server and client in a human-readable format. <br />
          <hr className=" py-4 border-0" />

          Excellent knowledge of JavaScript, CSS3/CSS, HTML5/HTML, Bootstrap, Tailwind CSS, Material UI, JavaScript and their behavioral on different browsers. Expertise in React JS framework to develop the SPA. <br />
          <hr className=" py-4 border-0" />

          Solid experience developing the rendering view React JS components, forms, events, routers, and Redux asynchronous functions and implemented React - Flux pattern for core dependency. <br />
          <hr className=" py-4 border-0" />

          Well-versed in methodologies such as Agile, Waterfall and SCRUM, allowing for a flexible approach to project management.
        </motion.p>
      </div>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")