import React from 'react'

import {motion} from 'framer-motion'

const Skill : React.FC<{name: string, x: string, y: string}> = ({name, x, y}) => {
    return(
        <motion.div className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light`}
        initial={{x: 0, y: 0}}
        whileInView={{x,y, transition: {duration: 1.5}}}
        viewport={{once: true}}
        whileHover={{scale: 1.05}}>
                {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2> 
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circular-light dark:bg-circular-dark'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:text-dark dark:bg-light'>
                    Web
            </motion.div>
            <Skill name='html' x='-20vw' y='2vw'/>
            <Skill name='CSS' x='-5vw' y='-10vw'/>
            <Skill name='Javascription' x='20vw' y='6vw'/>
            <Skill name='ReactJS' x='0vw' y='12vw'/>
            <Skill name='NextJS' x='-20vw' y='-15vw'/>
            <Skill name='CSS' x='15vw' y='-12vw'/>
            <Skill name='Web Design' x='32vw' y='-5vw'/>
            <Skill name='Firebase' x='-25vw' y='18vw'/>
            <Skill name='Tailwind CSS' x='-25vw' y='18vw'/>
        </div>
    </>
  )
}

export default Skills
