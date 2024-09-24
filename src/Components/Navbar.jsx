import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="md:absolute md:top-0 md:right-0 md:left-auto md:bottom-auto md:rounded-tr-3xl md:rounded-bl-xl md:w-auto pl-4 pr-4 bg-gray-600 h-[7vh] w-auto border border-gray-500 rounded-tr-3xl shadow-lg shadow-gray-600">
     <div className="flex items-center justify-center h-full gap-4 font-semibold">
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
  
  
  
  
}
