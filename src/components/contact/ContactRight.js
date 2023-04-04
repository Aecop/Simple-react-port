import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY } from 'dotenv'
// require('dotenv').config();


const ContactRight = () => {
    const form = useRef();

    const [sentEmail, setSentEmail] = useState(false)
    const [failEmail, setFailEmail] = useState(false)

    if (sentEmail === true){
        return (
            <p className="text-designColor flex justify-center items-center">Email Sent Successfully!</p>
        )
    };

    if (failEmail === true){
        return(
            <p className="text-designColor flex justify-center items-center">Email Failed To Sent</p>
        )
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_dkwybxn',
            'template_bwfw2ga',
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        )

            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                setSentEmail(true)
                e.target.reset(true);
            }, (error) => {
                console.log(error.text);
                setFailEmail(true)
                console.log("message failed")
            });
    };
    return (
        <div className="w-[60%] h-full flex flex-col justify-between">
            <form ref={form} onSubmit={sendEmail} className="w-full h-[800px] bg-gradient-to-r from-[#5A5A5A] to-[#454545] p-8 rounded-lg shadow-shadowOne flex flex-col gap-2.5">
                <div className="w-full flex gap-3">
                    <div className="w-1/2 flex flex-col ">
                        <p className="text-lg text-base mb-1">Name</p>
                        <input className="contactInput caret-designColor text-designColor" name="from_name" type="text"/>
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <p className="text-lg text-base mb-1">Email</p>
                        <input className="contactInput caret-designColor text-designColor" name="from_email" type="text"/>
                    </div>
                </div>
                <div className="w-full flex flex-col">
                    <p className="text-lg text-base mb-1">Subject</p>
                    <input className="contactInput caret-designColor text-designColor" type="text"/>
                </div>
                <div className="w-full flex flex-col">
                    <p className="text-lg text-base mb-1">Message</p>
                    <textarea  cols="30" rows="10" name="message"/>
                    <input className=" caret-designColor border-2 w-auto border-designColor mt-2 hover:bg-gradient-to-b hover:from-bodyColor
                       hover:grayscale-900 transition-colors duration-1000 cursor-pointer text-designColor"  type="submit" value="Send" />
                </div>
                <div className="flex justify-center items-center">
                    {sentEmail}
                    {failEmail}
                </div>
            </form>
        </div>
    )
};

export default ContactRight;