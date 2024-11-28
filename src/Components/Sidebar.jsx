import React, { useState } from 'react';
import photo from '../Assets/Myphoto.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-800 relative flex-wrap min-w-[30vw] h-auto xl:max-h-[60vw] overflow-y-auto border border-gray-500 rounded-3xl shadow-lg shadow-gray-600 p-4">
       <div className="flex flex-col md:flex-row xl:flex-col items-center gap-10">
        <div className="flex flex-col xl:flex-col md:flex-row md:gap-4">
          <div className="h-40 w-40 mt-10 mx-auto">
            <img src={photo} alt="Profile" className="h-full w-full object-cover rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-center">
            <h2 className="pt-2 font-extrabold text-3xl font-dmserif text-center">Shashank Pandey</h2>
            <p className="bg-gray-700 text-center text-white mt-4 p-2 rounded-xl w-fit mx-auto">
              Software Engineer Intern
            </p>
            <div className="flex gap-3 mt-4">
              <div className="flex items-center gap-2 bg-gray-700/30 px-4 py-1.5 rounded-full border border-gray-600">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                <span className="text-white text-sm">Java</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-700/30 px-4 py-1.5 rounded-full border border-gray-600">
                <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                <span className="text-white text-sm">JavaScript</span>
              </div>
            </div>
          </div>

        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="absolute top-0 right-0 mt-4 mr-4 xl:hidden group"
        >
          <div className="p-2 rounded-lg bg-gray-700/30 border border-gray-600/50 group-hover:border-gray-500 transition-all duration-300">
            <svg 
              className={`w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-gray-200 ${
                showDetails ? 'rotate-180' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </button>
      </div>

      <div className={`${showDetails ? 'block' : 'hidden'} xl:block`}>
        {/* Separator line */}
        <div className="mt-6 w-40 border border-gray-600/50 border-solid rounded-3xl mx-auto"></div>

        {/* Contact info container */}
        <div className="mt-8 space-y-6">
          {/* Email section */}
          <div className="flex items-center group hover:bg-gray-700/20 p-2 rounded-xl transition-all duration-300">
            <div className="h-10 w-10 flex items-center justify-center border border-gray-600/50 rounded-lg bg-gray-700/30 group-hover:border-gray-500 transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 h-5 w-5 group-hover:text-gray-200" />
            </div>
            <div className="ml-4">
              <p className="text-gray-400 text-sm font-medium">Email</p>
              <p className="text-white text-sm break-all hover:text-blue-400">pandey2001shashank@gmail.com</p>
            </div>
          </div>

          {/* Contact section */}
          <div className="flex items-center group hover:bg-gray-700/20 p-2 rounded-xl transition-all duration-300">
            <div className="h-10 w-10 flex items-center justify-center border border-gray-600/50 rounded-lg bg-gray-700/30 group-hover:border-gray-500 transition-colors">
              <FontAwesomeIcon icon={faUser} className="text-gray-400 h-5 w-5 group-hover:text-gray-200" />
            </div>
            <div className="ml-4">
              <p className="text-gray-400 text-sm font-medium">Contact</p>
              <p className="text-white text-sm hover:text-blue-400">+91 9625452478</p>
            </div>
          </div>

          {/* Location section */}
          <div className="flex items-center group hover:bg-gray-700/20 p-2 rounded-xl transition-all duration-300">
            <div className="h-10 w-10 flex items-center justify-center border border-gray-600/50 rounded-lg bg-gray-700/30 group-hover:border-gray-500 transition-colors">
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 h-5 w-5 group-hover:text-gray-200" />
            </div>
            <div className="ml-4">
              <p className="text-gray-400 text-sm font-medium">Location</p>
              <p className="text-white text-sm hover:text-blue-400">New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex items-center justify-center space-x-6">
          <a 
            href="https://github.com/shashankp10" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="group"
          >
            <div className="p-2 rounded-lg bg-gray-700/30 border border-gray-600/50 group-hover:border-gray-500 transition-all duration-300">
              <FontAwesomeIcon 
                icon={faGithub} 
                className="text-gray-400 h-7 w-7 group-hover:text-gray-200 transition-colors" 
              />
            </div>
          </a>
          <a 
            href="https://www.linkedin.com/in/shashankp10" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="group"
          >
            <div className="p-2 rounded-lg bg-gray-700/30 border border-gray-600/50 group-hover:border-gray-500 transition-all duration-300">
              <FontAwesomeIcon 
                icon={faLinkedin} 
                className="text-gray-400 h-7 w-7 group-hover:text-gray-200 transition-colors" 
              />
            </div>
          </a>
          <a 
            href="https://x.com/ShashankPa63764" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter"
            className="group"
          >
            <div className="p-2 rounded-lg bg-gray-700/30 border border-gray-600/50 group-hover:border-gray-500 transition-all duration-300">
              <FontAwesomeIcon 
                icon={faTwitter} 
                className="text-gray-400 h-7 w-7 group-hover:text-gray-200 transition-colors" 
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
