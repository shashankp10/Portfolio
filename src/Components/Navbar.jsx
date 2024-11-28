import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState("about");

  // Update selected link when route changes
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setSelectedLink("about");
        break;
      case "/projects":
        setSelectedLink("projects");
        break;
      case "/resume":
        setSelectedLink("resume");
        break;
      case "/contact":
        setSelectedLink("contact");
        break;
      default:
        setSelectedLink("about");
    }
  }, [location]);

  return (
    <div className="md:absolute md:top-0 md:right-0 md:left-auto md:bottom-auto rounded-tl-3xl rounded-tr-3xl md:rounded-tl-none md:rounded-bl-xl md:w-auto px-4 bg-gray-600 p-3 w-auto border border-gray-500 shadow-lg shadow-gray-600">
      <div className="flex flex-wrap h-full items-center justify-center gap-4 font-semibold">
        <Link
          to="/"
          className={`${
            selectedLink === "about" ? "text-yellow-500" : "text-white"
          } hover:text-yellow-400 transition-colors duration-300`}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`${
            selectedLink === "projects" ? "text-yellow-500" : "text-white"
          } hover:text-yellow-400 transition-colors duration-300`}
        >
          Projects
        </Link>
        <Link
          to="/resume"
          className={`${
            selectedLink === "resume" ? "text-yellow-500" : "text-white"
          } hover:text-yellow-400 transition-colors duration-300`}
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className={`${
            selectedLink === "contact" ? "text-yellow-500" : "text-white"
          } hover:text-yellow-400 transition-colors duration-300`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}