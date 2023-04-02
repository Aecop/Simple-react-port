import React from 'react';
import contactimg from '../../assets/img/contactimg.jpg';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const ContactLeft = () => {
    return(
        <div className="w-[35%] h-full bg-gradient-to-r from-[#5A5A5A] to-[#454545] p-8 rounded-lg shadow-shadowOne flex flex-col">
            <img className="w-full object-cover rounded-3xl mb-2" src={contactimg} alt='contact image'/>
            <div className='flex flex-col gap-2'>
                <h3 className='flex text-3xl font-bold text-white justify-center items-center'>
                    Joon Ruiz
                </h3>
                <p className="text-base tracking-wide flex justify-center items-center">
                    Software Developer
                </p>
                <p className="text-base flex items-center justify-center gap-2">
                    Phone: +1 973-289-0287
                </p>
                <p className="tex-base flex items-center justify-center gap-2">
                    Email: joonruiz08@gmail.com
                </p>
                <div className="flex justify-center gap-4">
                         <span className="w-16 h-16 bg-lightText bg-opacity-25 text-xl inline-flex
                                items-center justify-center rounded-md hover:bg-opacity-40 hover:translate-y-1
                                 transition-all hover:text-designColor cursor-pointer duration-300 border-none">
                        <a href="https://www.linkedin.com/in/joon-ruiz-967611201/" target="_blank"><FaLinkedinIn/></a>
                    </span>
                    <span className="w-16 h-16 bg-lightText bg-opacity-25 text-xl inline-flex
                                 items-center justify-center rounded-md hover:bg-opacity-40 hover:translate-y-1
                                 transition-all hover:text-designColor cursor-pointer duration-300 border-none">
                        <a href="https://github.com/Aecop" target="_blank"> <FaGithub/></a>
                    </span>
                </div>
            </div>
        </div>

    )
};

export default ContactLeft;