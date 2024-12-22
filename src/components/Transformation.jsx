import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';

import gym7 from '../assets/images/gym7.png';
import gym21 from '../assets/images/gym21.jpg';
import gym18 from '../assets/images/gym18.png';
import gym1 from '../assets/images/gym1.jpg';

const bas = [
  {
    name: 'Aryan',
    age: 25,
    weeks: 16,
    wb: 85,
    wa: 74,
    bfb: 35,
    bfa: 15,
    source: gym7,
  },
  {
    name: 'Pranav',
    age: 29,
    weeks: 18,
    wb: 88,
    wa: 75,
    bfb: 34,
    bfa: 16,
    source: gym21,
  },
  {
    name: 'Raha',
    age: 25,
    weeks: 18,
    wb: 90,
    wa: 76,
    bfb: 38,
    bfa: 17,
    source: gym18,
  },
  {
    name: 'Robin',
    age: 29,
    weeks: 18,
    wb: 89,
    wa: 74,
    bfb: 28,
    bfa: 14,
    source: gym1,
  },
];

const Transformation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bas.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bas.length) % bas.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const currentPerson = bas[currentIndex];

  return (
    <section className='flex flex-col items-center w-full px-4'>
      <motion.div
            initial={{opacity:0,
                scale:0
            }}
            whileInView={{opacity:1,
                    scale: 1}}
            transition={{duration:2}}  className='w-3/5 mx-auto text-center'>
        <h2 className='text-5xl leading-normal p-2 font-semibold'>
          Transformations made possible with{' '}
          <span className='gradient'>GymFluencer</span>
        </h2>
      </motion.div>

      {/* Slide Area */}
      <motion.div
            initial={{opacity:0,
                rotateX:"90deg"
            }}
            whileInView={{opacity:1,
                    rotateX: "0"}}
            transition={{duration:2}}  className='relative flex items-center justify-center w-full mt-8 gap-8'>
        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className='absolute left-0 bg-black text-white rounded-full p-1 hover:text-slate-300 transition-all duration-200'
        ><FaChevronCircleLeft  className='text-3xl'/>
        </button>
        
        <div className='flex justify-between gap-10'>
            {/* Data Table */}
            <div className='w-1/2 mx-auto rounded-lg shadow-lg p-6 '>
                <div className='flex gap-4 py-10'>
                    <div className='w-1 bg-purple-800'></div>
                    <div>
                        <h3 className='text-5xl font-bold mb-4'>
                            {currentPerson.name}
                        </h3>
                        <p className='text-3xl text-gray-400'>Age: {currentPerson.age}</p>
                    </div>
                </div>
                <table className='w-full text-left border-collapse'>
                    <thead>
                        <tr className='text-xl font-semibold'>
                            <th className='p-4 '>{currentPerson.weeks} weeks</th>
                            <th className='p-4 text-slate-400 '>Before</th>
                            <th className='p-4 text-slate-400 '>After</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr>
                            <td className='p-4 text-xl text-slate-400'>Weight</td>
                            <td className='p-4 text-2xl'>{currentPerson.wb} kg</td>
                            <td className='p-4 text-2xl'>{currentPerson.wa} kg</td>
                        </tr>
                        <tr>
                            <td className='p-4 text-xl text-slate-400'>Body Fat (%)</td>
                            <td className='p-4 text-2xl'>{currentPerson.bfb}%</td>
                            <td className='p-4 text-2xl'>{currentPerson.bfa}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Image */}
            <div className='w-1/2 flex justify-center overflow-hidden items-center'>
                <img
                    src={currentPerson.source}
                    alt={currentPerson.name}
                    className='w-[52rem] h-[35rem] object-fill rounded-xl shadow-md'
                />
                </div>

        </div>
        
        {/* Next Button */}
        <button
          onClick={goToNext}
          className='absolute right-0 bg-black text-white rounded-full p-1  hover:text-slate-300 transition-all duration-200'
        >
          <FaChevronCircleRight className='text-3xl'/>
        </button>
      </motion.div>

      {/* Navigation Dots */}
      <div className='flex justify-center items-center mt-8 gap-4'>
        {bas.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </section>
  );
};

export default Transformation;
