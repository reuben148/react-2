import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/footer';

export default function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, you could add code to submit the form data (e.g., send it to an API)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-center text-3xl font-bold text-gray-700 mb-6">Sign Up</h1>


        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Password"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Link to Login page */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Signed Up with Allure textiles?{' '}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-700">
              Login here
            </Link>
            <Footer />
          </p>
        </div>
      </div>
    </div>
    
  );
}

