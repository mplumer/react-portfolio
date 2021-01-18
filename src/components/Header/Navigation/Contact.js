import React, { useState } from "react";
import { validateEmail } from "../../../utils/helpers";

function ContactForm() {
  // Hook
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

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
      <section className="contact-wrapper">
<div>
        <h3 data-testid="contact" className="contact-title title">
        Contact Me
        </h3>
</div>
       <div className="form-wrapper">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name"></label>
              <input
                id="name"
                placeholder="Name"
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                id="email"
                placeholder="Email"
                type="email"
                defaultValue={email}
                name="email"
                onBlur={handleChange}
              />
            </div>
            <div>
              <label id="message" htmlFor="message"></label>
              <textarea
                name="message"
                placeholder="Message"
                defaultValue={message}
                onBlur={handleChange}
                rows="5"
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <div className="button-wrap">
              <button id="submit" className="submit" data-testid="submit" type="submit">
                Submit
              </button>
            </div>
          </form>
          </div>
          </section>
      </>
       
  );
}

export default ContactForm;
