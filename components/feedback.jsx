"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const[submit,setSubmit]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const feedback = form.current.message?.value.trim(); // Get value of textarea

  if (!feedback) {
    alert("Please enter your feedback before submitting.");
    return;
  }

    emailjs
      .sendForm('service_sekvzzf', 'template_7l2g4ew', form.current, {
        publicKey: '3UGVnkyCjuilm91YG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
       setSubmit(true);
  };


    return(    
        submit==false ?(
    <div className="max-w-xl w-full mx-auto px-4 py-6 sm:px-6 lg:px-8 rounded-2xl shadow-md mt-10 mb-10 dark:bg-gray-800">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 dark:text-gray-100 text-gray-800 text-center">
        We value your feedback
      </h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        {/* Feedback Text */}
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-1 dark:text-gray-200">
            Your Feedback <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            placeholder="Write your thoughts here..."
            className="w-full border border-gray-300 text-sm sm:text-base  dark:border-gray-600 rounded-xl dark:bg-gray-700 
             px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Rating */}
        <div>
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-1 dark:text-gray-200">
            Rating  <span className="text-gray-500 text-sm dark:text-gray-200">(optional)</span>
          </label>
          <select
            id="rating"
            name="rating"
            className="w-full border text-sm sm:text-base  border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a rating</option>
            <option value="Excellent">⭐⭐⭐⭐⭐ - Excellent</option>
            <option value="Good">⭐⭐⭐⭐ - Good</option>
            <option value="Average">⭐⭐⭐ - Average</option>
            <option value="Poor">⭐⭐ - Poor</option>
            <option value="Terrible">⭐ - Terrible</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="user_name" className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
            Your Name <span className="text-gray-500 text-sm dark:text-gray-200 ">(optional)</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="w-full border text-sm sm:text-base  dark:border-gray-600 dark:bg-gray-700 border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="user_email" className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
            Your Email <span className="text-gray-500 dark:text-gray-200 text-sm">(optional, for follow-up)</span>
          </label>
          <input
            type="email"
            id="user_email"
            name="email"
            placeholder="john@example.com"
            className="w-full border text-sm sm:text-base  dark:border-gray-600 dark:bg-gray-700  border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition-all"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
    ):(
        <div className="max-w-xl w-full mx-auto  px-4 sm:px-6 lg:px-8 py-6 rounded-2xl shadow-md mt-10 mb-10 dark:bg-gray-800">
            <div
            className='bg-green-500 rounded-full h-20 w-20 max-w-xl mx-auto flex items-center justify-center text-4xl text-white'
            >
              ✓
            </div>
      <h2 className="text-xl sm:text-2xl  font-semibold mb-4 text-gray-700 text-center dark:text-gray-100">
       Submission Successful
      </h2>
      <h3 className='text-gray-600  text-sm sm:text-base dark:text-gray-300'>Thanks for submitting your feedback! We really appreciate your time.</h3>
      <div className='max-w-xl mx-auto '>
      <button
      className='mt-4 bg-green-500 rounded-3xl  text-sm sm:text-base block mx-auto px-6 py-2 text-white hover:bg-green-700 transition-all'
      onClick={()=>setSubmit(false)}
      >Send Another
      </button>
      </div>
      </div>
    )
    
  );
};
