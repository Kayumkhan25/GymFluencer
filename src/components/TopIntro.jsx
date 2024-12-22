import React from 'react';
import { motion } from 'framer-motion';

import gym2 from '../assets/images/gym2.jpg';
import gym9 from '../assets/images/gym9.png';
import gym10 from '../assets/images/gym10.png';
import gym11 from '../assets/images/gym11.png';
import gym12 from '../assets/images/gym12.png';

const TopIntro = () => {
  return (
    <section className="-mt-12" id="home">
      <div className="relative flex flex-col gap-10 min-h-screen items-center justify-center">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-10 w-11/12 md:w-3/4 lg:px-[7.5rem] flex flex-col justify-center gap-10"
        >
          {/* Trusted by Section */}
          <div className="px-4 py-[6px] text-sm md:text-lg rounded-full border border-slate-500 shadow-sm shadow-slate-700 max-w-fit flex items-center gap-x-5 md:gap-x-20">
            <div className="w-28 h-10 flex relative">
              {/* Overlapping Images */}
              <img
                src={gym11}
                alt="gym11"
                className="rounded-full w-9 h-9 absolute"
                style={{ zIndex: 1, left: '0px' }}
              />
              <img
                src={gym9}
                alt="gym9"
                className="rounded-full w-9 h-9 absolute"
                style={{ zIndex: 2, left: '25px' }}
              />
              <img
                src={gym12}
                alt="gym12"
                className="rounded-full w-9 h-9 absolute"
                style={{ zIndex: 3, left: '50px' }}
              />
              <img
                src={gym10}
                alt="gym10"
                className="rounded-full w-9 h-9 absolute"
                style={{ zIndex: 4, left: '75px' }}
              />
            </div>
            <div className="text-xs md:text-base">Trusted by 3+ million users</div>
          </div>

          {/* Heading Section */}
          <h2 className="capitalize text-3xl md:text-5xl lg:text-6xl p-2 font-semibold scale-105 text-center md:text-left">
            Track your{' '}
            <div className="text-4xl md:text-6xl lg:text-7xl mt-5 px-1 bg-gradient-to-tl from-purple-500 from-35% to-purple-600 to-65% bg-clip-text text-transparent inline-block">
              fitness journey
            </div>
          </h2>

          {/* Description Section */}
          <p className="w-full md:w-2/3 leading-relaxed text-slate-300 text-center md:text-left text-sm md:text-base">
            Discover the ultimate fitness companion with GymFluencer. Effortlessly log your
            workouts, count reps, and track calories burned. Stay motivated and achieve your
            goals with ease.
          </p>
        </motion.div>

        {/* Background Section */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-slate-950 via-transparent to-purple-600 opacity-60">
          <img
            src={gym2}
            alt="gym"
            className="object-cover w-full h-full opacity-70"
          />
        </div>
      </div>
    </section>
  );
};

export default TopIntro;
