"use client";
import React, { useState } from "react";

const JoinWaitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-teal-800 px-6">
        <div className="max-w-2xl w-full bg-white rounded-2xl p-10 text-center border border-amber-300/20 shadow-lg">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-teal-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-teal-800 mb-4 italic">
            You're on the list!
          </h2>
          <p className="text-teal-700 mb-6">
            Thanks for joining {formData.name}. We'll be in touch soon with
            updates.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Join Another Email
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-teal-800 px-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-10 border border-amber-300/20 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-6 italic">
          Join the Waitlist
        </h2>
        <p className="text-teal-700 text-center mb-8">
          Be the first to know when we launch
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-teal-800 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-medium text-teal-800 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition duration-200"
          >
            Join Waitlist
          </button>

          <p className="text-gray-500 text-sm text-center mt-4">
            We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    </section>
  );
};

export default JoinWaitlist;
