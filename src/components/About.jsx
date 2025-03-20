import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Sectionwrapper from "../hoc/Sectionwrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
<>
  
    <Tilt className="xs:w-[200px] w-full  ">
 

      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[15px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[15px]
        py-2 px-8 min-h-[200px] flex justify-evenly items-center flex-col
        "
        >
          <img src={icon} alt={title} className="object-contain w-12 h-12" />
          <h3 className="text-white text-[16px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
    </>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <span className="text-2xl">Introd</span>
          <span className="text-[#915eff] text-2xl">uction</span>
        </p>
        <h2 className={styles.sectionHeadText}>
          Over<span className="text-[#915eff]">view 😊</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        "I am a full stack developer with expertise in Python, C++, JavaScript,
        React, Nodejs, Express js and proficiency in tools like Excel and Power
        BI. I have experience building responsive web applications and dynamic
        systems, focusing on seamless functionality and user experience.
        Currently, I am diving into AI and machine learning to expand my
        capabilities and develop innovative, data-driven solutions. My goal is
        to create impactful, scalable technologies that bridge software
        development and advanced analytics."
      </motion.p>

      <div className="mt-12">
      <motion.div variants={textVariant()}>
          <span className="text-2xl">Roles</span>
          <span className="text-[#915eff] text-2xl"> I am looking for</span>
       
      </motion.div>
      </div>
      <div className="flex flex-wrap gap-10 mt-9">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    
    </>
  );
};

export default Sectionwrapper(About, "about");
