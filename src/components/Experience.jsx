import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../styles'
import {experiences} from '../constants'
import Sectionwrapper from '../hoc/Sectionwrapper'
import { textVariant } from '../utils/motion'


const Experiencecard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
  
      iconStyle={{ background: experience.iconBg }}
      
      icon={
        <di className="flex justify-center items-center w-full h-full ">
          <img
          src={experience.icon}
          className='w-[60%] h-[60%] object-contain  '
          />
        </di>
      }
    >
    <div>
    <h3 className="vertical-timeline-element-title font-bold text-[#915eff]">{experience.title}</h3>
    
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point , index)=>(
        <li key={`experience-point-${index}`}
         className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>

      ))}

    </ul>
     
    </VerticalTimelineElement>
  );
};




const Experience = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
   <p className= {styles.sectionSubText } >
      <span className='text-2xl  '>What I have </span><span className='text-[#915eff] text-2xl'> done so far</span>
      </p>
      <h2 className={styles.sectionHeadText}>
        My <span className='text-[#915eff]'>Exprerience </span>
      </h2>
   </motion.div>

   <div className='mt-20 flex flex-col'>
    <VerticalTimeline>
      {experiences.map((experience , index)=>(
        <Experiencecard key={index} experience={experience}/>
      ))}
    </VerticalTimeline>
   </div>
   </>
  )
}

export default Sectionwrapper (Experience , "work")