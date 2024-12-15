import React, { useState } from 'react'
import spotify from '../Assets/spotify.png';
import collegeeazy from '../Assets/collegeeazy.png';
import urbanbazaar from '../Assets/u.png';
import navify from '../Assets/navify.png';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleDescription = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const projectData = [
    {
      title: 'Navify',
      description: [
        'Created an AI-powered tool that boosts website retention by delivering relevant content based on user queries.',
        'Websites are preprocessed and crawled using Playwright to extract structured data, stored in JSON format and indexed into Meilisearch.',
        'Llama\'s NLM model extracts keywords from queries for ultra-fast search, with results undergoing sentiment analysis and scoring.',
        'Improved user engagement by reducing search times from minutes to seconds.'
      ],
      imageUrl: navify,
      stack: 'Node.js, React.js, Playwright, Llama NLM, Meilisearch',
      tech: 'Full Stack',
      live: 'https://navify-frontend.vercel.app/',
      code: 'https://github.com/shashankp10/Navify'
    },
    {
      title: 'CollegeEazy',
      description: [
        'Implemented a platform where admins can upload notes for easy access by students.',
        'Built attendance tracking feature to monitor subject-wise attendance.',
        'Created marketplace for users to sell and purchase study materials.',
        'Led backend development, implementing CRUD operations and complex SQL queries for efficient data management.',
        'Reduced the need for multiple platforms by centralizing all features in one place.'
      ],
      imageUrl: collegeeazy,
      stack: 'SpringBoot, React.js, MySQL, JWT, Docker, Postman',
      tech: 'Backend',
      live: 'https://collegeeazy.vercel.app/',
      code: 'https://github.com/shashankp10/CollegeEazy-backend'
    },
    {
      title: 'Playlist Maker',
      description: [
        'Developed a platform to convert YouTube playlists to Spotify with just a few clicks.',
        'Automated song fetching and additions, eliminating manual searches.',
        'Reduced transfer time from hours to seconds.',
        'Enabled offline access to YouTube playlists on Spotify.',
        'Improved user experience with an intuitive interface for users with low internet speed.'
      ],
      imageUrl: spotify,
      stack: 'Javascript, React.js, OAuth 2.0',
      tech: 'Frontend',
      live: 'https://playlist-maker-woad.vercel.app/',
      code: 'https://github.com/shashankp10/Playlist-maker-app'
    },
    {
      title: 'Urbanbazaar',
      description: [
        'Developed a full-stack e-commerce website with JWT authentication and role-based authorization.',
        'Implemented dynamic product display and search functionality with de-bouncing.',
        'Built features including cart management, wishlist, and review system.',
        'Created seller dashboard and order placement functionality.',
        'Utilized MySQL for user data and MongoDB for product management.'
      ],
      imageUrl: urbanbazaar,
      stack: 'SpringBoot, MySQL, MongoDB, Postman, JWT',
      tech: 'Full Stack',
      live: 'https://urban-bazaar-ashen.vercel.app/',
      code: 'https://github.com/shashankp10/e-commerce-backend'
    },
    {
      title: 'ChatRoom',
      description: [
        'Built a real-time group chat platform using SpringBoot and Websocket.',
        'Implemented real-time message delivery and user presence tracking.',
        'Created an intuitive interface for seamless communication.',
        'Integrated user authentication and chat room management.'
      ],
      imageUrl: 'https://via.placeholder.com/300',
      stack: 'HTML, CSS, Javascript, SpringBoot, Websocket',
      tech: 'Full Stack',
      live: '',
      code: 'https://github.com/shashankp10/chat-room'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-800">
      <h2 className='p-5 text-4xl text-yellow-500 font-bold'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-5 max-w-7xl mx-auto'>
        {projectData.map((project, index) => (
          <div key={index} className='bg-gray-700 shadow-lg rounded-lg overflow-hidden relative group'>
            {/* Image and Tech Overlay */}
            <div className='relative w-full h-48 flex justify-center items-center bg-gray-600'>
              <img
                src={project.imageUrl}
                alt={project.title}
                className='h-full w-full object-cover'
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-yellow-500 font-bold text-xl">{project.tech}</h4>
              </div>
            </div>

            {/* Project Details */}
            <div className='p-4'>
              {/* Title and Links */}
              <div className='flex items-center justify-between mb-3'>
                <h3 className='text-lg font-bold text-yellow-500'>{project.title}</h3>
                <div className='flex items-center gap-3'>
                  {project.live && (
                    <Link
                      to={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <img
                        width="30"
                        height="20"
                        src="https://img.icons8.com/material-two-tone/24/youtube-live.png"
                        alt="live-demo"
                        className='filter invert hover:opacity-75 transition-opacity'
                      />
                    </Link>
                  )}
                  <Link
                    to={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <img
                      width="35"
                      height="35"
                      src="https://img.icons8.com/ios-glyphs/30/github.png"
                      alt="github"
                      className='filter invert hover:opacity-75 transition-opacity'
                    />
                  </Link>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-3'>
                {project.stack.split(', ').map((tech, i) => (
                  <span
                    key={i}
                    className='bg-gray-600 px-2 py-1 rounded-md text-xs text-gray-200 hover:bg-gray-500 transition-colors'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => toggleDescription(index)}
                className='w-full text-sm text-gray-300 hover:text-yellow-500 transition-colors flex items-center justify-center gap-2 mt-2 py-1 border-t border-gray-600'
              >
                {expandedCard === index ? 'Show Less' : 'Show More'}
                <svg
                  className={`w-4 h-4 transform transition-transform ${expandedCard === index ? 'rotate-180' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedCard === index ? 'max-h-[400px] mt-3' : 'max-h-0'
                  }`}
              >
                <ul className="text-gray-300 text-sm leading-relaxed list-disc pl-4 space-y-2">
                  {project.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}