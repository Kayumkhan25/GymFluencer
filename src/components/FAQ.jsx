import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import gym21 from '../assets/images/gym21.jpg';
import { motion } from 'framer-motion';

const ques = [
  {
    question: "How do I log my workouts?",
    answer: "Yes, you can easily log your workouts by selecting the exercise, entering the duration, and tracking your response."
  },
  {
    question: "Can I track my calories burn?",
    answer: "Yes, you can track calories burned through the application's integrated tracking features."
  },
  {
    question: "Is this application suitable for beginners?",
    answer: "Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels."
  },
  {
    question: "What features does the application offer?",
    answer: "The app offers workout logging, rep counting, calorie tracking, and progress reviews."
  },
  {
    question: "How can I reset my password?",
    answer: "You can reset your password by going to the login screen and selecting 'Forgot Password'."
  }
];

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleAnswer = (index) => {
    setOpenQuestions(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));    
  };

  return (
    <section id="faq" className="py-12 relative container">
        <motion.div
            initial={{opacity:0,
                scale:0
            }}
            whileInView={{opacity:1,
                    scale: 1}}
            transition={{duration:2}}>
            <h2 className="text-4xl text-center mb-10 font-semibold z-10">
                FREQUENTLY ASKED <span className="gradient">QUESTIONS</span>
            </h2>
        </motion.div>
      <div className="w-4/5 md:11/12 lg:w-5/12 mx-auto mt-8 flex flex-col gap-6">
        {ques.map((que, i) => (
          <motion.div
          initial={{opacity:0,
              rotateX:"90deg"
          }}
          whileInView={{opacity:1,
                  rotateX: "0deg"}}
          transition={{duration:2}} key={i} className="border p-4  z-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center">
              <p className="text-xl font-medium ">{que.question}</p>
              <button
                onClick={() => toggleAnswer(i)}
                className={`text-2xl font-bold  transform transition-transform duration-300 ${
                  openQuestions[i] ? 'rotate-45' : ''
                }`}
              >
                <FaPlus />
              </button>
            </div>
            <div className={`mt-2 pt-3 border-t border-slate-800 text-slate-300 ${openQuestions[i] ? 'block' : 'hidden'}`}>
              <p className="text-lg ">{que.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className='z-0 absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-slate-950 via-transparent to-black opacity-60'>
        <img src={gym21} alt="question" className='object-cover w-full h-full opacity-60' />
      </div>
    </section>
  );
};

export default FAQ;
