import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    transition={{
      duration: 1.5,
    }}
    whileInView={{ opacity: 1 }}
    //TODO: change for carousel
    className=' min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-1 uppercase tracking-[20px] text-gray-500 text-2xl'>
      Experience
      </h3>
      <div className='grid xl:grid-cols-2 grid-cols-1'>
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience}/>
        ))}
      </div>
    </motion.div>
  )
}
export default WorkExperience