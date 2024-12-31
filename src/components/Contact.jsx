import React from 'react'
import Sectionwrapper from '../hoc/Sectionwrapper'
import {styles} from '../styles'
import { textVariant } from '../utils/motion'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  return (
  <>

   <motion.div variants={textVariant()}>
    
        <h2 className={styles.sectionHeadText}>
         Reach out <span className='text-[#915eff]'>to me at 🤝 </span>
         </h2>

         <div className="mt-4 flex space-x-4 cursor-pointer gap-1 m-20 ">
       
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
       <a
         href="#contact"
         target="_blank"
         rel="noopener noreferrer"
       >
         <FontAwesomeIcon icon={faDiscord} color="#ffffff" size="2x" />
       </a>
   
      
     </div>

      </motion.div>

          

          
  </>
  )
}

export default Sectionwrapper(Contact, "contact")