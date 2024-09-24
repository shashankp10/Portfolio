import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';

export default function Content() {
  return (
    <div className="bg-gray-800 relative xl:min-h-auto xl:w-[60vw] w-[80vw] h-auto border border-gray-500 rounded-3xl shadow-lg shadow-gray-600">
      <Navbar />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
