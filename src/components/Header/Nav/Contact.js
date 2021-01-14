import React, { useState } from "react";
import { validateEmail } from "../../../utils/helpers";

function ContactForm() {
    // Hook
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const { name, email, phone, message } = formState;

    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        // We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
    }

    //   console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // JSX
    return (
        <>
            {/* Contact Section*/}
            <section className="page-section" id="contact">
                <div className="container">
                    {/* Contact Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form*/}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <form id="contactForm" name="sentMessage" onsubmit={handleSubmit}>

                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label htmlFor="name"></label>
                                    <input className="form-control" id="name" type="text" placeholder="Name" defaultValue={name} onBlur={handleChange} name="name" />
                                    <p className="help-block text-danger" />
                                </div>


                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label htmlFor="email"></label>
                                    <input className="form-control" id="email" type="email" placeholder="Email Address" defaultValue={email} onBlur={handleChange} name="email" />
                                    <p className="help-block text-danger" />
                                </div>


                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label htmlFor="phone"></label>
                                    <input className="form-control" id="phone" type="tel" placeholder="Phone Number" defaultValue={phone} onBlur={handleChange} name="phone" />
                                    <p className="help-block text-danger" />
                                </div>


                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label id="message" htmlFor="message"></label>
                                    <textarea className="form-control" id="message" rows={5} placeholder="Message" defaultValue={message} onBlur={handleChange} name="message" />
                                    <p className="help-block text-danger" />
                                </div>

                                <br />

                                {errorMessage && (
                                <div id="success">
                                <p className="error-text">{errorMessage}</p>
                                </div>
                                )}
                                
                                <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}

export default ContactForm;