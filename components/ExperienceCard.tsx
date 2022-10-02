import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img 
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://media-exp1.licdn.com/dms/image/C4E0BAQHZYW658T5wnQ/company-logo_200_200/0/1656668414307?e=1672876800&v=beta&t=ct02a8sPMiLijuZlB0mirmt9ckAWUZGkB8m8vPKUACw'
      />
    </article>
  )
}
export default ExperienceCard