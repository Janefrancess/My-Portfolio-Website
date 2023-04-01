import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-cyan-800 via-cyan to-black p-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white-400">
            GET IN TOUCH
          </p>
          <p className="py-6 text-gray-200">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-5 bg-transparent border-cyan-500 border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-5 bg-transparent border-cyan-500 border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-cyan-500 border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-pink-500 px-40 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
