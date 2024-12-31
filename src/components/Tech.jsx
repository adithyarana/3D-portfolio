import React from 'react'
import Sectionwrapper from '../hoc/Sectionwrapper'
import {technologies} from "../constants"
import {styles} from '../styles'
import { textVariant } from '../utils/motion'
import {motion} from 'framer-motion'



const Tech = () => {
  return (


<>

 <motion.div variants={textVariant()}>
  
      <h2 className={styles.sectionHeadText}>
       Tech <span className='text-[#915eff]'>Stacks I Know  </span>
       </h2>
    </motion.div>


<div style={{  color: "#fff", padding: "20px", textAlign: "center" }}>

 
<div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
  {technologies.map((tech, index) => (
    <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center"  }}className="flex flex-col items-center hover:scale-110 hover:shadow-lg transition-transform duration-300">
      <img src={tech.icon} alt={tech.name}
       className="w-16 h-16 mb-2 hover:rotate-12 transition-transform duration-300"
       style={{ width: "60px", height: "60px", marginBottom: "10px" }} />
      <span>{tech.name}</span>
    </div>
  ))}
</div>
</div>
</>



  )
}

export default Sectionwrapper(Tech ,"") 