'use client';

import { useRef } from "react";
import { FaBehance, FaInstagram, FaDribbble } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section className='w-screen md:h-dvh h-auto px-6 mt-10 pb-20'>
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10'>Interested in an amazing adventure?<br />Reserve one of our Capsules<span>®</span></p>
            <div>
                <MarqueeText />
            </div>

            <div className='flex md:flex-row flex-col justify-between md:items-center text-xl mt-14 gap-10'>
                <h3 className='text-[#b1a696] text-lg md:text-xl'>This website is just the concept<br />
                    work done by—Moyra to showcase<br />
                    our capabilities.<br /><br />
                    If you would like to outsource a similar<br />
                    website project—<a href="#" className='text-[#f4efe7] hover:text-[#c4c1b9] underline'> contact us.</a>
                </h3>

                <div className='flex flex-col justify-center items-start md:items-end gap-2'>
                    <a href="#welcome" className='text-[#f2ede5] text-lg md:text-2xl'>Welcome</a>
                    <a href="#welcome" className='text-[#f2ede5] text-lg md:text-2xl'>Introduction</a>
                    <a href="#welcome" className='text-[#f2ede5] text-lg md:text-2xl'>Houses</a>
                    <a href="#welcome" className='text-[#f2ede5] text-lg md:text-2xl'>Why Capsules®</a>
                    <a href="#welcome" className='text-[#f2ede5] text-lg md:text-2xl'>Activites</a>
                    <a href="#welcome" className='text-[#f2ede5] text-lg md:text-2xl'>Feedback</a>
                </div>
            </div>

            <div className="w-full flex md:flex-row flex-col justify-between md:items-center mt-20 gap-10">
                <div className="flex justify-start md:justify-center items-center gap-1">
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-2 md:p-3 text-[#f2ede5]'><FaBehance className="text-lg md:text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-2 md:p-3 text-[#f2ede5]'><FaInstagram className="text-lg md:text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-2 md:p-3 text-[#f2ede5]'><CiLinkedin className="text-lg md:text-xl" /></div>
                    <div className='border-[1px] border-[#c4c1b9] rounded-full p-2 md:p-3 text-[#f2ede5]'><FaDribbble className="text-lg md:text-xl" /></div>
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#b1a696] md:text-right text-left">
                        Meet Capsules®—modern and cozy<br />
                        houses, in the California desert.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer;