import React from 'react';
import gym3 from '../assets/images/gym3.png';
import gym4 from '../assets/images/gym4.png';
import gym5 from '../assets/images/gym5.png';
import gym6 from '../assets/images/gym6.png';
import gym13 from '../assets/images/gym13.png';
import { motion } from 'framer-motion';

const Services = () => {
    
    const imageData = [
        {
            label: "TRACK",
            url: gym5
        },  {
            label: "ANALYZE",
            url: gym3
        },  {
            label: "TRAIN",
            url: gym4
        },  {
            label: "CONNECT",
            url: gym6
        },  {
            label: "CHALLENGE",
            url: gym13
        }
    ]
    
  return (
    <section id='services' className='flex flex-col justify-center items-center gap-y-16 '>
        <div className='flex flex-col gap-8'>
            <motion.div
                initial={{opacity:0,
                    scale:0
                }}
                whileInView={{opacity:1,
                        scale: 1}}
                transition={{duration:2}} className='text-6xl text-center'>
                OUR <span className='gradient'>SERVICES</span>
            </motion.div>
            <p className='w-3/5 mx-auto text-slate-300 text-xl text-center leading-loose'>
                GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
            </p>
        </div>
        <div className='grid grid-cols-5 px-1 w-full'>
            {
                imageData.map((image, index) => {
                    return(
                        <motion.div
                        initial={{opacity:0,
                                rotateX:"90deg"
                        }}
                        whileInView={{opacity:1,
                                rotateX: 0}}
                        transition={{duration:2}} 
                         key={index} className='relative min-h-[45rem] flex justify-center items-center'>
                            <div className='absolute top-0 left-0 bg-gradient-to-b from-black via-transparent to-black opacity-70'>
                                <img src={image.url} alt={image.url} className='h-[44rem] object-cover opacity-80'/>
                            </div>
                            <h3 className='text-4xl'>
                                {image.label}
                            </h3>
                        </motion.div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Services