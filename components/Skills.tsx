import React from 'react'
import { motion } from 'framer-motion'
import Skill from "./Skill";
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
}

function Skills({ skills }: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    transition={{
      duration: 1.5,
    }}
    whileInView={{ opacity: 1 }}
    //TODO: Hover de skill and big more de icon
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
    <div className='grid xl:grid-cols-6  grid-cols-4 gap-5'>
      
    {skills?.slice(0, skills.length * 0.25).map(skill => (
          <Skill key={skill._id} skill={skill}/>
        ))}
      
      {skills?.slice(skills.length * 0.25, skills.length * 0.5).map(skill => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
        {skills?.slice(skills.length * 0.5, skills.length * 0.75).map(skill => (
          <Skill key={skill._id} skill={skill}/>
        ))}
      
      {skills?.slice(skills.length * 0.75, skills.length).map(skill => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
    </div>
    </motion.div>
  )
}

export default Skills


