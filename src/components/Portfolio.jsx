import React from "react";
import html from "../assets/portfolio/html.png";
import reactproj from "../assets/portfolio/reactproj.png";
import heybasshModular from "../assets/portfolio/heybassh-moduler.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: html,
      href: ["https://stanleyport.vercel.app", "https://github.com/Janefrancess/Portfolio"],
    },
    {
      id: 2,
      src: reactproj,
      href: ["https://stanleyport.vercel.app", "https://github.com/Janefrancess/Stanley-Chi"],
    },
    {
      id: 3,
      src: heybasshModular,
      href: ["https://github.com/Janefrancess", "https://github.com/Janefrancess"],
    },
    {
      id: 4,
      src: reactSmooth,
      href: ["https://github.com/Janefrancess", "https://github.com/Janefrancess"],
    },
    {
      id: 5,
      src: reactWeather,
      href: ["https://github.com/Janefrancess", "https://github.com/Janefrancess"],
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-cyan-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-200">Stanley's most recent projects working with technologies like
           Html, Css, Javascript, React & Redux, Tailwind css & Next JS
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href[0]}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={href[1]}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
