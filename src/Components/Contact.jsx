import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Form Data:", form.current);

        emailjs.sendForm('service_cfqbgtu', 'template_uvi4g37', form.current, '49d2lQplNu6mw181N')
        .then((result) => {
            console.log(result.text);
            console.log("Message sent!!");
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <>
        <h2 className='p-5 text-4xl font-bold'>Contact Me</h2>
  
        <div className='flex justify-center items-center'>
          <form ref={form} onSubmit={sendEmail} className='w-full max-w-lg shadow-lg rounded-lg p-6'>
            <div className='mb-4'>
              <label className='block text-sm font-bold mb-2 text-white' htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-700'
              />
            </div>
  
            <div className='mb-4'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-700'
              />
            </div>
  
            <div className='mb-6'>
              <label className='block text-white text-sm font-bold mb-2' htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-700'
              ></textarea>
            </div>
  
            <div className='flex justify-center'>
              <button
                type="submit"
                className='bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline'>
                Send
              </button>
            </div>
          </form>
        </div>
      </>
    );
}
