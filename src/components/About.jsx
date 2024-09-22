import img from "../assets/cover.jpg";
import htmllogo from "../assets/icons/html.svg";
import csslogo from "../assets/icons/css.svg";
import jslogo from "../assets/icons/javascript.svg";
import reactlogo from "../assets/icons/react.svg";
import nodejslogo from "../assets/icons/nodejs.svg";
import mongodblogo from "../assets/icons/mongodb.svg";
import pythonlogo from "../assets/icons/python.svg";
import tailwindlogo from "../assets/icons/tailwindcss.svg";
import githublogo from "../assets/icons/git.svg";
import reduxlogo from "../assets/icons/redux.svg";
import postgresqllogo from "../assets/icons/postgresql.svg";
import materiallogo from "../assets/icons/material.svg";





export default function About() {
  return (
    <>
      <div className="mt-2 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:px-6 sm:h-1/2 sm:justify-center sm:items-center animate-fade-in ">
        <p className="text-white  text-sm md:text-sm xl:text-lg sm:w-1/2 sm:text-justify font-Poppins">
          <h1 className="text-lg text-center sm:text-start md:text-lg lg:text-2xl mb-2 font-valorant ">
            About Me
          </h1>
          <hr className="border-valorantRed my-6 " />
          As a dedicated Full Stack Developer, I&#39;m passionate about creating
          innovative and efficient web applications. I have expertise in
          JavaScript, Python, and frameworks such as React, Node.js, and
          MongoDB. Continuously seeking to enhance my skills through real-world
          projects and professional certifications, I&#39;m always eager to
          contribute to impactful projects and collaborate with like-minded
          individuals who share my enthusiasm for technology.
        </p>
        <img
          className="object-contain sm:block hidden sm:h-5/6 sm:w-2/3 self-center"
          src={img}
          alt=""
        />
      </div>
      <div className="mt-8 sm:mt-10 sm:py-2 sm:px-6 animate-fade-in ">
        <h1 className="flex justify-center sm:justify-start text-white text-lg md:text-lg lg:text-2xl mb-6 font-valorant">
          Skills
        </h1>
        <hr className="border-valorantRed my-6 " />
        <div className="flex flex-wrap gap-4 sm:justify-evenly h-full ">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
            <img src={htmllogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
            <img src={csslogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <img src={jslogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <img src={reactlogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
            <img src={nodejslogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
            <img src={mongodblogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
            <img src={pythonlogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer">
            <img src={tailwindlogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer">
            <img src={githublogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
            <img src={reduxlogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">
            <img src={postgresqllogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
          <a href="https://material-ui.com/getting-started/" target="_blank" rel="noopener noreferrer">
            <img src={materiallogo} className="h-8 w-8 sm:h-12 sm:w-12 hover:scale-110 transition duration-300" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
