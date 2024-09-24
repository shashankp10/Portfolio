import React, { useState } from 'react';
import photo from '../Assets/photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-800 relative flex-wrap min-w-[30vw] h-auto border border-gray-500 rounded-3xl shadow-lg shadow-gray-600 p-4">
      <div className="flex flex-col md:flex-row xl:flex-col items-center gap-10">
        <div className="flex flex-col xl:flex-col md:flex-row md:gap-4">
          <div className="h-40 w-40 mt-10 mx-auto">
            <img src={photo} alt="Profile" className="h-full w-full object-cover rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-center">
            <h2 className="pt-2 font-extrabold text-3xl font-dmserif text-center">Shashank</h2>
            <p className="bg-gray-700 text-center text-white mt-4 p-2 rounded-xl w-fit mx-auto">
              Java Full Stack Developer
            </p>
          </div>

        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="absolute top-0 right-0 mt-4 mr-4 xl:hidden">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/FFFFFF/down-squared--v2.png"
            alt="down-squared--v2"
            
          />
        </button>
      </div>

      <div className={`${showDetails ? 'block' : 'hidden'} xl:block`}>
        <div className="mt-4 w-40 border border-gray-600 border-solid rounded-3xl mx-auto"></div>
        <div className="mt-4 flex items-center">
          <div className="h-10 w-10 flex items-center justify-center border border-gray-600 rounded-lg">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 h-6 w-6" />
          </div>
          <div className="ml-3 flex-wrap">
            <p className="text-gray-400">Email</p>
            <p className="text-white break-all">pandey2001shashank@gmail.com</p>
          </div>
        </div>

        <div className="mt-4 flex items-center">
          <div className="h-10 w-10 flex items-center justify-center border border-gray-600 rounded-lg">
            <FontAwesomeIcon icon={faUser} className="text-gray-400 h-6 w-6" />
          </div>
          <div className="ml-3">
            <p className="text-gray-400">Contact</p>
            <p className="text-white">+91 9625452478</p>
          </div>
        </div>

        <div className="mt-4 flex items-center">
          <div className="h-10 w-10 flex items-center justify-center border border-gray-600 rounded-lg">
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 h-6 w-6" />
          </div>
          <div className="ml-3">
            <p className="text-gray-400">Location</p>
            <p className="text-white">New Delhi, India</p>
          </div>
        </div>

        <div className="mt-4 flex space-x-4 items-center justify-center">
          <a href="https://github.com/shashankp10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} className="text-gray-400 h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/shashankp10" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 h-6 w-6 rounded-full" />
          </a>
          <a href="https://x.com/ShashankPa63764" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="text-gray-400 h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
