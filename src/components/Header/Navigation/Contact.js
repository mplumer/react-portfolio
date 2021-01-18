import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

function ContactForm () {
    // Hook
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        formErrors: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
    });

    function toastifySuccess() {
        toast.success('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback success',
        });
      }
    
      function toastifyFail() {
        toast.error('Form failed to send!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          className: 'submit-feedback fail',
        });
      }


    function handleSubmit (e)  {
        e.preventDefault();
    
        if (formValid(formState)) {
          // Handle form validation success
          const { name, email, subject, message } = formState;
    
          // Set template params
          let templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
          };
          emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'userID');
    
          console.log(`
            --SUBMITTING--
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
          `);
    
          toastifySuccess();
        resetForm();
        } else {
          // Handle form validation failure
          console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
          toastifyFail();
        }
      };

       // Function to reset form
       function resetForm() {
            setFormState({
            name: '',
            email: '',
            subject: '',
            message: '',
            });
        }
    
    
      function handleChange (e) {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...formState.formErrors };
    
        switch (name) {
          case 'name':
            formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
            break;
          case 'email':
            formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
            break;
          case 'subject':
            formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
            break;
          case 'message':
            formErrors.message = value.length < 1 ? 'Please enter a message' : '';
            break;
          default:
            break;
        }
        setFormState({ formErrors, [name]: value });
      };
    
        const { formErrors } = formState;
    
        return (
            <>
          <div className='ContactForm'>
            <form id='contact-form' onSubmit={handleSubmit} noValidate>
              <div className='row'>
                <div className='col-6'>
                  <input
                    type='text'
                    name='name'
                    value={formState.name}
                    className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
                    onChange={handleChange}
                    placeholder='Name'
                    noValidate
                  ></input>
                  {formErrors.name.length > 0 && (
                    <span className='errorMessage'>{formErrors.name}</span>
                  )}
                </div>
    
                <div className='col-6'>
                  <input
                    type='email'
                    name='email'
                    value={formState.email}
                    className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                    onChange={handleChange}
                    placeholder='Email'
                    noValidate
                  ></input>
                  {formErrors.email.length > 0 && (
                    <span className='errorMessage'>{formErrors.email}</span>
                  )}
                </div>
              </div>
    
              <div className='row'>
                <div className='col-6'>
                  <input
                    type='subject'
                    name='subject'
                    value={formState.subject}
                    className={`form-control formInput ${
                      formErrors.subject.length > 0 ? 'error' : null
                    }`}
                    onChange={handleChange}
                    placeholder='Subject'
                    noValidate
                  ></input>
                  {formErrors.subject.length > 0 && (
                    <span className='errorMessage'>{formErrors.subject}</span>
                  )}
                </div>
    
                <div className='col-6'>
                  <textarea
                    rows='5'
                    name='message'
                    value={formState.message}
                    className={`form-control formInput ${
                      formErrors.message.length > 0 ? 'error' : null
                    }`}
                    onChange={handleChange}
                    placeholder='Message'
                    noValidate
                  ></textarea>
                  {formErrors.message.length > 0 && (
                    <span className='errorMessage'>{formErrors.message}</span>
                  )}
                </div>
              </div>
              <button className='submit-btn' type='submit'>
                Submit
              </button>
            </form>
            <ToastContainer />
          </div>
        </>

        );
      }

export default ContactForm;