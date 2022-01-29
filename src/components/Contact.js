import React from 'react';
import './contact.css'
const Contact = () => {
    return <div>

        <form><h1>Contact Us</h1>

            <input type='text' placeholder='Name' className='name' />
            <input type='text' placeholder='Email' className='email' />
            <input type='text' placeholder='Message' className='message' />

            <button>Submit</button>
        </form>



    </div>;
};

export default Contact;
