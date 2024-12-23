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
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className='text-3xl sm:text-4xl text-center leading-normal p-2 mb-5 font-semibold'
        >
          What People Say
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 px-4 py-2 gap-6'>
          {feedbacks.map((feedback, i) => (
            <motion.div
              initial={{ opacity: 0, rotateY: "90deg" }}
              whileInView={{ opacity: 1, rotateY: "0deg" }}
              transition={{ duration: 2 }}
              key={i}
              className='flex flex-col sm:flex-row z-10 gap-4 items-center sm:items-start border rounded-2xl p-4 overflow-hidden bg-gray-900'
            >
              {/* Profile Image */}
              <div className='w-full sm:w-64 overflow-hidden rounded-xl'>
                <img
                  src={feedback.profile}
                  alt="profile"
                  className='w-full sm:w-64 h-72 object-cover rounded-xl'
                />
              </div>

              {/* Feedback Content */}
              <div className='flex flex-col p-4 sm:p-5 gap-4 max-w-xl'>
                <p className='flex gap-2 justify-center sm:justify-start'>
                  <feedback.star className='text-purple-500 text-2xl sm:text-3xl' />
                  <feedback.star className='text-purple-500 text-2xl sm:text-3xl' />
                  <feedback.star className='text-purple-500 text-2xl sm:text-3xl' />
                  <feedback.star className='text-purple-500 text-2xl sm:text-3xl' />
                  <feedback.star className='text-purple-500 text-2xl sm:text-3xl' />
                </p>
                <p className='text-base sm:text-lg text-center sm:text-left text-gray-300'>
                  {feedback.text}
                </p>
                <div className='mt-4 text-sm sm:text-base text-center sm:text-left flex flex-col gap-1'>
                  <p className='font-medium text-white'>{feedback.name}</p>
                  <p className='text-gray-400'>{feedback.work}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Gradient and Image */}
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-slate-950 via-transparent to-purple-600 opacity-60'>
          <img
            src={gym18}
            alt="say"
            className='object-cover w-full h-full opacity-70'
          />
        </div>
    </div>
  );
}

export default Says;
