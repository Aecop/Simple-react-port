import React from 'react';
import Title from '../featurelayout/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';


const Contact = () => {
    return (
        <section id='contact' className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title
                title="contact"
                description="Contact me if any question or adivce!"/>
            </div>
            <div className="w-full">
                <div className="w-full h-[600px] flex justify-between">
                    <ContactLeft />
                    <ContactRight />

                </div>
            </div>
        </section>
    )
};

export default Contact;