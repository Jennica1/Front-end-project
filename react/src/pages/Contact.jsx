import React from 'react';
import './styles/Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-container'>
                <div className='title-container'>
                    <h1 className='title-text'>Have a Question?</h1>
                    <h2 className='subtitle-text'>Contact us here!</h2>
                </div>
                <div className='form-container'>
                    <form className='contact-form'>
                        <div className='form-row'>
                            <label>First Name:</label>
                            <input className='form-text-input' type='text' required></input>
                        </div>
                        <div className='form-row'>
                            <label>Last Name:</label>
                            <input className='form-text-input' type='text' required></input>
                        </div>
                        <div className='form-row'>
                            <label>Email:</label>
                            <input className='form-text-input' type='email' required></input>
                        </div>
                        <button type='submit' className='button'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
