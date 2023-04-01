import React from 'react';
import ReactDev from "../assets/reactdev.jpeg";

const AboutMePage = () => {
  return (
    <div 
    name="about"
    className="bg-cyan-800 g-opacity-100 text-white">
      <div className="flex flex-col md:flex-row flex-col-reverse max-w-screen-lg p-4 mx-auto">
        <div className="md:w-2/3">
          <img src={ReactDev} alt="myprofile" className=" w-50 h-50 mx-auto mb-4 rounded-3xl" />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Stanley Chiamaka</h1>
          <p className="text-lg text-gray-200 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis vel
            molestie ultricies, nunc risus bibendum orci, non dictum leo arcu sed urna.
            tristique ipsum, sit amet sodales sem duis sagittis interdum elit.
          </p>
          <p className="text-lg text-gray-200 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, turpis vel
            molestie ultricies, nunc risus bibendum orci, non dictum leo arcu sed urna.
            Pellentesque habitant morbi
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;