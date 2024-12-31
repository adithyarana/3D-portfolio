import React from 'react'
import {github} from '../assets'
import Sectionwrapper from '../hoc/Sectionwrapper'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'


const Projectcard =({index , name ,description,tags,image, source_code_link})=>{

  return (
    <motion.div variants={fadeIn("up","spring", index*0.5, 0.75)} className='flex flex-col'>
   
   <Tilt
   ooptions={{
    max:45,
    scale:1,
    speed:450,

   }}
   className="bg-tertiary p-5 rounded-2xl
   sm:w-[360px] w-full flex-1"
   >

   <div className='relative w-full h-[230px]'>
     <img
     className='w-full h-full object-cover rounded-2xl'
     src={image}
     alt={name}
     />

     <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
      <div
      onClick={()=> window.open(source_code_link, "_blank")}
      className='black-gradient w-10 h-10 rounded-full flex justify-center items-center
      cursor-pointer'
      >
        <img src={github} alt="github" className='w-6 h-6 object-contain'  />
         
      </div>
     </div>
   </div>

   <div className='mt-5 '>
    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
   </div>

  <div className='mt-4 flex flex-wrap gap-2 '>
    {tags.map((tag)=>(
        <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
    ))}
  </div>

</Tilt>

    </motion.div>
  )
}


const Works = () => {
  return (
   <>
   
 <motion.div variants={textVariant()}>
  
 <p className= {styles.sectionSubText } >
      <span className='text-2xl  '>My work </span>
      </p>

  <h2 className={styles.sectionHeadText}>
   Pro<span className='text-[#915eff]'>jects  </span>
   </h2>
</motion.div>

  <div className='w-full flex '>
  <motion.p
  variants={fadeIn("", "",0.1,1)}
  className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    Here are some of the projects I've worked on:
  </motion.p>
  </div>
   
   {/* getting the data from file useing map */}

   <div className='mt-20 flex flex-wrap gap-7'>
    {projects.map((project, index)=>(
  <Projectcard
   key={`project-${index}`}
   index={index}
  {...project}
  />
    ))}
   </div>
    
   </>
  )
}

export default Sectionwrapper(Works,"")