import React from "react";
import Sectionwrapper from "../hoc/Sectionwrapper";
import { Frontend, backendd , tools } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { backend } from "../assets";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Tech <span className="text-[#915eff]">Stacks I Know</span>
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-8 p-8 text-center text-white">
        {/* Frontend Tools Card */}
        <div className="flex flex-col items-center p-6 transition-transform duration-300 shadow-lg bg-tertiary rounded-2xl hover:scale-105 hover:shadow-2xl w-96">
          <h3 className="mb-4 text-2xl font-semibold">Frontend </h3>
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-4">
            {Frontend.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 mb-2 transition-transform duration-300 hover:rotate-12"
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Tools Card */}
        <div className="flex flex-col items-center p-6 transition-transform duration-300 shadow-lg bg-tertiary rounded-2xl hover:scale-105 hover:shadow-2xl w-96">
          <h3 className="mb-4 text-2xl font-semibold">Backend</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {backendd.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 mb-2 transition-transform duration-300 hover:rotate-12"
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center p-6 transition-transform duration-300 shadow-lg bg-tertiary rounded-2xl hover:scale-105 hover:shadow-2xl w-96">
          <h3 className="mb-4 text-2xl font-semibold"> Tools</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 mb-2 transition-transform duration-300 hover:rotate-12"
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        
      </div>

      
    </>
  );
};

export default Sectionwrapper(Tech, "");
