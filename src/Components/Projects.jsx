import React, { useState } from 'react'
import spotify from '../Assets/spotify.png';
import collegeeazy from '../Assets/collegeeazy.png';
import urbanbazaar from '../Assets/u.png'
import { Link } from 'react-router-dom';

export default function Projects() {
    const projectData = [
        {
          title: 'CollegeEazy',
          description: 'Designed to simplify college life by providing access to study materials, an attendance tracker, and a marketplace for students to buy and sell items, all curated in one place.',
          imageUrl: collegeeazy, 
          stack : 'Springboot, React.js, MySQL, JWT, Docker, Postman',
          tech : 'Full Stack',
          live : 'https://collegeeazy.vercel.app/',
          code : 'https://github.com/shashankp10/CollegeEazy-backend'
        },
        {
          title: 'Playlist Maker',
          description: 'Developed a platform to convert YouTube playlists into Spotify playlists with a few clicks, featuring an intuitive UI and seamless OAuth integration.',
          imageUrl: spotify,
          stack : 'Javascript, React.js, OAuth 2.0',
          tech : 'Frontend',
          live : 'https://playlist-maker-woad.vercel.app/',
          code : 'https://github.com/shashankp10/Playlist-maker-app'
        },
        {
          title: 'Urbanbazaar',
          description: 'Developed backend for an e-commerce site with JWT authentication, role-based authorization, and features like item search, wishlist, cart, profile updates, product listings, and order tracking.',
          imageUrl: urbanbazaar, 
          stack : 'Springboot, MySQL, MongoDB, Postman, JWT',
          tech : 'Backend',
          live : 'https://urban-bazaar-ashen.vercel.app/',
          code : 'https://github.com/shashankp10/e-commerce-backend'
        },
        {
          title: 'ChatRoom',
          description: 'Built a platform for real-time group chat, utilized Springboot for backend, Websocket for real-time communication',
          imageUrl: 'https://via.placeholder.com/300',
          stack : 'HTML, CSS, Javascript, Springboot, Websocket',
          tech : 'Full Stack',
          live : '',
          code : 'https://github.com/shashankp10/chat-room'
        },
        {
          title: 'ChatBot',
          description: 'ChatBot to assist user to search top-rated study material using OpenAI and Web crawling',
          imageUrl: 'https://via.placeholder.com/300',
          stack : 'Springboot, OpenAI',
          tech : 'Backend',
          live : '',
          code : 'https://github.com/shashankp10/chatbot-integrated-with-OpenAI'
        },
      ];
    
      return (
        <>
          <h2 className='p-5 text-4xl font-bold'>Projects</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>
            {projectData.map((project, index) => (
            <div key={index} className='bg-gray-700 shadow-lg rounded-lg overflow-hidden relative group'>
                <div className='relative w-full h-40 flex justify-center items-center bg-gray-600 cursor-pointer'>
                    <img src={project.imageUrl} alt={project.title} className='h-full object-cover' />
                    
                    <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h4 className="text-white font-bold text-lg">{project.tech}</h4>
                        <p className="text-white text-sm p-2">{project.description}</p>
                    </div>
                </div>
                
                <div className='p-2 text-center'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-lg font-bold'>{project.title}</h3>
                    <div className='flex items-center gap-3'>
                    {project.live && (
                        <Link to={project.live} target="_blank" rel="noopener noreferrer">
                          <img
                            width="30"
                            height="20"
                            src="https://img.icons8.com/material-two-tone/24/youtube-live.png"
                            alt="youtube-live"
                            className='filter invert'
                          />
                        </Link>
                      )}
                      <Link to={project.code} target="_blank" rel="noopener noreferrer">
                        <img width="35" height="35" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github" className='filter invert' />
                      </Link>
                    </div>
                  </div>
                  <p className='text-gray-200 text-sm pt-2'>{project.stack}</p>
                </div>

            </div>
            ))}
          </div>
      </>
    );
}
