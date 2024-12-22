import React from 'react';
import { motion } from 'framer-motion';

import gym9 from '../assets/images/gym9.png';
import gym10 from '../assets/images/gym10.png';
import gym11 from '../assets/images/gym11.png';
import gym12 from '../assets/images/gym12.png';
import gym18 from '../assets/images/gym18.png';
import { ImStarFull } from 'react-icons/im';

const feedbacks = [
    {
        profile: gym10,
        star: ImStarFull,
        name: "Michael Field",
        work: "Software engineer",
        text: "I love how user-friendly the app is. Logging workouts has never been easier!",
    },
    {
        profile: gym11,
        star: ImStarFull,
        name: "Angelia Jolie",
        work: "Model",
        text: "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    },
    {
        profile: gym9,
        star: ImStarFull,
        name: "Aaron Potter",
        work: "Manager",
        text: "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!",
    },
    {
        profile: gym12,
        star: ImStarFull,
        name: "Charlie Dean",
        work: "Designer",
        text: "I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!",
    }
]

const Says = () => {
  return (
    <div className='mt-10 z-10 relative p-5'>
            <motion.div
            initial={{opacity:0,
                scale:0
            }}
            whileInView={{opacity:1,
                    scale: 1}}
            transition={{duration:2}}  className='text-4xl text-center  leading-normal p-2 font-semibold'>
                What People Say
            </motion.div>
            <div className='grid grid-cols-2 px-4 py-2 gap-10 '>
                {
                    feedbacks.map((feedback, i) => {
                        return(
                            <motion.div
                                initial={{opacity:0,
                                    rotateY:"90deg"
                                }}
                                whileInView={{opacity:1,
                                    rotateY: "0deg"}}
                                transition={{duration:2}}  key={i} className='flex z-10 gap-1 items-center max-w-fit border rounded-2xl p-1 overflow-hidden'>
                                <div className='w-64 overflow-hidden rounded-l-xl'>
                                    <img src={feedback.profile} alt="profile" className='w-64 h-72 object-fill' />
                                </div>
                                <div className='flex flex-col p-5 gap-5 max-w-xl'>
                                    <p className='flex gap-2'>
                                        <feedback.star className='text-white text-3xl' />
                                        <feedback.star className='text-white text-3xl' />
                                        <feedback.star className='text-white text-3xl' />
                                        <feedback.star className='text-white text-3xl' />
                                        <feedback.star className='text-white text-3xl' />
                                    </p>
                                    <p className='text-lg'>
                                        {feedback.text}
                                    </p>
                                    <div className='mt-7 text-base flex flex-col gap-2'>
                                        <p>
                                            {feedback.name}
                                        </p>
                                        <p className='text-slate-300'>
                                            {feedback.work}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
            <div  className='absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-slate-950 via-transparent to-purple-600 opacity-60'>
                <img src={gym18} alt="say" className='object-fill w-full h-full opacity-70'/>
            </div>
        </div>
  )
}

export default Says