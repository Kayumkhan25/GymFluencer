import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/GFLogo2_png.png';
import { MdMail } from "react-icons/md";
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import {PiTwitterLogoBold} from 'react-icons/pi';

const links = [
    {
        text: 'Home',
        url: '/'
    },
    {
        text: 'Workout Plan',
        url: '/'
    },
    {
        text: 'Diet Plan',
        url: '/'
    },
    {
        text: 'FAQ',
        url: '/'
    }
]

const Footer = () => {
  return (
    <footer id='contact' className='w-10/12 mx-auto border-t border-slate-600 pt-28 pb-32 flex justify-evenly'>
        <div className='flex flex-col gap-y-1'>
            <div className='flex items-center'>
                <img src={logo} alt='logo' className='h-24'/>
                <p className='text-4xl font-semibold'>Gym<span className='gradient'>Fluencer</span></p>
            </div>
            <p className='text-lg text-slate-100'>
                Where Fitness Meets Social Connection!
            </p>
            <p className='mt-2 flex items-center gap-1 text-slate-200'>
               <MdMail className='text-white text-xl'/><span>hello@gym.birlaventures.com</span>
            </p>
        </div>
        <div className='flex flex-col gap-y-5'>
            {
            links.map((link, index) => {
                return(
                    <div key={index}>
                        <Link to={link.url} className=' text-slate-300 hover:text-white'>
                            {link.text}
                        </Link>
                    </div>
                )
            })
            }
        </div>
        <div className='flex flex-col gap-5 '>
            <p className='text-slate-300 hover:text-white'>Term & Conditions</p>
            <p className='text-slate-300 hover:text-white'>Privacy Policy</p>
            <p className='text-slate-300 hover:text-white'>Support</p>
        </div>
        <div className='flex flex-col gap-5 italic text-center'>
            <div>
                <p>© {new Date().getFullYear()} GymFluencer. All rights reserved.</p>
            </div>
            <div className='grid grid-flow-col justify-evenly gap-4 text-slate-300'>
                <a href='https://github.com/Kayumkhan25' target='_blank' className='hover:text-white p-2 bg-slate-800 rounded-full' >
                    <FaFacebookF size={24} 
                    />
                </a>
                <a href='https://www.linkedin.com/in/kayum-khan2501/' target='_blank' className='hover:text-white p-2 bg-slate-800 rounded-full' >
                    <FaLinkedinIn size={24} />
                </a>
                <a href='https://www.linkedin.com/in/kayum-khan2501/' target='_blank' className='hover:text-white p-2 bg-slate-800 rounded-full' >
                    <FaInstagram size={24} />
                </a>
                <a href='mailto: kayum9721@gmail.com' target='_blank' className='hover:text-white p-2 bg-slate-800 rounded-full' >
                    <PiTwitterLogoBold size={24}/>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer