import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 ml-2 sm:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Adithya Rana</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full <span className="text-[#915eff]">stack developer</span>{" "}
            <br className="hidden sm:block" />
            and diving into <span className="text-[#915eff]">AI & ML</span>.
          </p>
          
        </div>
        <div>
          
        </div>
        
      </div>

    

      {/* Computer Canvas */}
      <ComputersCanvas />

      {/* Scroll Button */}
      <div className="absolute flex items-center justify-center w-full transform -translate-x-1/2 bottom-28 md:bottom-2 left-1/2">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915eff] flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#915eff] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
