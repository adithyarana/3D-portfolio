import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className="realtve w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
   max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 ml-2 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#915eff]">Adithya Rana</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full <span className="text-[#915eff]">stack developer</span>{" "}
            <br className="sm:block hidden" />
            and diving in to <span className="text-[#915eff]"> Al&Ml</span>
          </p>

          {/* icons to follow the page */}

          {/* <div className="mt-4 flex space-x-4 cursor-pointer">
       
            <a
              href="https://www.instagram.com/adithya.rana.11/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} color="#ffffff" size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/adithya-rana-7859b9287/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#ffffff" size="2x" />
            </a>
            <a
              href="https://github.com/adithyarana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#ffffff" size="2x" />
            </a>
          </div> */}

          
        </div>
      </div>

      <ComputersCanvas />

      {/* //scroll button by framer motion */}

      <div className="absolute top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center mb-64">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center
       items-start p-2   "
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
