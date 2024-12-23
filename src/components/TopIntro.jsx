import React from 'react';
import { motion } from 'framer-motion';

import gym2 from '../assets/images/gym2.jpg';
import gym9 from '../assets/images/gym9.png';
import gym10 from '../assets/images/gym10.png';
import gym11 from '../assets/images/gym11.png';

const TopIntro = () => {
  return (
    <section className='mt-5' id='home'>
      <div className='relative flex flex-col gap-10 min-h-screen items-center justify-center'>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className='absolute inset-0 z-10 w-full sm:w-3/4 px-5 md:px-20 lg:px-[7.5rem] flex flex-col justify-center gap-10'>
          
          {/* Trusted by Section */}
          <div className='px-4 py-1 text-sm sm:text-lg rounded-full border border-slate-500 shadow-sm shadow-slate-700 max-w-fit mx-auto sm:mx-0 flex items-center justify-center gap-12 md:gap-16'>
            <div className='w-12 h-12 sm:w-14 sm:h-14 flex relative items-center'>
              {/* Overlapping Images */}
              <img src={gym11} alt="gym11" className='rounded-full w-9 h-9 sm:w-10 sm:h-10 absolute left-0' />
              <img src={gym9} alt="gym9" className='rounded-full w-9 h-9 sm:w-10 sm:h-10 absolute left-7 sm:left-8' />
              <img src={gym10} alt="gym10" className='rounded-full w-9 h-9 sm:w-10 sm:h-10 absolute left-14 sm:left-16' />
            </div>
            <div className='text-xs sm:text-base'>
              Trusted by 3+ million users
            </div>
          </div>

          {/* Heading Section */}
          <h2 className='capitalize text-4xl sm:text-5xl md:text-6xl p-2 font-semibold scale-105 text-center md:text-left'>
            Track your {" "}
            <div className='text-5xl sm:text-6xl md:text-7xl mt-5 px-1 bg-gradient-to-tl from-purple-500 to-purple-600 bg-clip-text text-transparent inline-block'>
              fitness journey
            </div>
          </h2>

          {/* Description Section */}
          <p className='w-full sm:w-2/3 md:w-1/2 leading-relaxed text-slate-300 text-center md:text-left text-sm sm:text-base'>
            Discover the ultimate fitness companion with GymFluencer. Effortlessly log your
            workouts, count reps, and track calories burned. Stay motivated and achieve your goals with ease.
          </p>
        </motion.div>

        {/* Background Section */}
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-slate-950 via-transparent to-purple-600 opacity-60'>
          <img src={gym2} alt="gym" className='object-cover w-full h-full opacity-70' />
        </div>
      </div>
    </section>
  );
}

export default TopIntro;
