import React, { useState } from 'react';
import Title from "../featurelayout";
import { validateEmail } from "../../assets/utils/helpers";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage("");
                }
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleBlank(e) {
        if (e.target.name === "Name" || e.target.name === "Message") {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    return (
        <section id="contact" className="w-full h-[700px] py-10 border-b-[1px] border-b-black mt-10">
            <div className="flex justify-center items-center text-center">
                <Title
                    title="Contact"
                    description="If Any Questions or Feedback, Contact Me!"/>
            </div>
            <div className="flex flex-col justify-center items-center">
                <form className="">
                    <div className="flex flex-col justify-center items-center mt-4">
                        <label htmlFor="Name">Name</label>
                        <br></br>
                        <input
                            type="text"
                            defaultValue={name}
                            onBlur={handleBlank}
                            name="Name"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <label htmlFor="email">Email address</label>
                        <br></br>
                        <input
                            type="email"
                            defaultValue={email}
                            name="email"
                            onBlur={handleChange}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <label htmlFor="Message">Message</label>
                        <br></br>
                        <textarea
                            name="Message"
                            defaultValue={message}
                            onBlur={handleBlank}
                            rows="5"
                        />
                    </div>
                    {errorMessage && (
                        <div className="flex flex-col justify-center items-center">
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="flex justify-center items-center" type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;