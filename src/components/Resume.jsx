import React from 'react' 
import {motion} from 'framer-motion'
import Sectionwrapper from '../hoc/Sectionwrapper'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'



 const Resumee = () => {
  return (

    <>
       <motion.div variants={textVariant()} className='mb-56'>
   <p className= {styles.sectionSubText } >
      <span className='text-2xl '>check out </span>
      </p>
      <h2 className={styles.sectionHeadText}>
        My <span className='text-[#915eff]'>resume </span>
      </h2>

      <div>

        <button className='bg-[#915eff] text-white px-4 py-2 rounded-md mt-4  '
        >
            <a href=" https://drive.google.com/file/d/1HZwx3xDoMFhHt6qcy3NPMT95jBcMOBKq/view?usp=sharing" target='_blank'  rel="noopener noreferrer" className='m-2 text-lg'>  <FontAwesomeIcon className='mr-2'  icon={faDownload} color="#ffffff" size="1x" />Resume</a>
         
        </button>
    
    </div>

   </motion.div>

   </>

    
  )
}

export default Sectionwrapper(Resumee, "resume")
