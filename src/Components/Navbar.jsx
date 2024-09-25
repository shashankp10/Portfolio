import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [selectedLink, setSelectedLink] = useState(null);
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <div className="md:absolute md:top-0 md:right-0 md:left-auto md:bottom-auto rounded-tl-3xl rounded-tr-3xl md:rounded-tl-none md:rounded-bl-xl md:w-auto px-4 bg-gray-600   p-3 w-auto border border-gray-500  shadow-lg shadow-gray-600">
      <div className="flex flex-wrap h-full items-center justify-center gap-4 font-semibold">
        <Link to="/"
          className={`${
            selectedLink === "about" ? "text-yellow-500" : "text-white"
          }`}
          onClick={() => handleLinkClick("about")}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`${
            selectedLink === "projects" ? "text-yellow-500" : "text-white"
          }`}
          onClick={() => handleLinkClick("projects")}
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className={`${
            selectedLink === "resume" ? "text-yellow-500" : "text-white"
          }`}
          onClick={() => handleLinkClick("resume")}
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className={`${
            selectedLink === "contact" ? "text-yellow-500" : "text-white"
          }`}
          onClick={() => handleLinkClick("contact")}
        >
          Contact
        </Link>
      </div>
    </div>
  );
  
  
  
}
