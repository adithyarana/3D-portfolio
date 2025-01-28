import React from 'react' 
import {motion} from 'framer-motion'
import Sectionwrapper from '../hoc/Sectionwrapper'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'



 const Resumee = () => {
  return (

    <>
       <motion.div variants={textVariant()}>
   <p className= {styles.sectionSubText } >
      <span className='text-2xl '>check out </span>
      </p>
      <h2 className={styles.sectionHeadText}>
        My <span className='text-[#915eff]'>resume </span>
      </h2>


      <div>

        <button
        >
            <a href="" ></a>
         
        </button>
    
    </div>

   </motion.div>

   </>

    
  )
}

export default Sectionwrapper(Resumee, "resume")
