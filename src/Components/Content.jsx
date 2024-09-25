import React from 'react'
import Navbar from './Navbar';

export default function Content({ children }) {
  return (
    <div className="bg-gray-800 relative xl:min-h-auto xl:w-[60vw] w-[80vw] h-auto border border-gray-500 rounded-3xl shadow-lg shadow-gray-600">
      <Navbar />
      <div className="p-5">
        {children} 
      </div>
    </div>
  );
}
