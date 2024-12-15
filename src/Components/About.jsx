import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
    return (
        <>
            <h2 className='p-5 text-4xl text-yellow-500 font-bold'>About Me</h2>
            <p className='pl-5 pr-4 text-lg leading-relaxed max-w-3xl text-gray-300'>
                <div className='mb-6'>
                    👋 Hi, I'm <span className='text-yellow-500 font-semibold'>Shashank</span>,
                    a <span className='text-yellow-500 font-semibold'>Software Developer Intern</span>  skilled in Java and JavaScript.
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <span>I have hands-on experience in <span className='text-yellow-500 font-semibold'>React.js</span>,
                            <span className='text-yellow-500 font-semibold'> Spring Boot</span>, and
                            <span className='text-yellow-500 font-semibold'> Express.js</span></span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <span>I'm passionate about building robust and scalable web applications</span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <span>I am eager to collaborate on innovative projects and continue grow</span>
                    </div>
                </div>

                <div className='mt-6 text-center text-yellow-500 font-medium'>
                    Let's connect and create something amazing together! ✨
                </div>
            </p>
            <div className='flex justify-center xl:flex-row flex-col space-x-0 xl:space-x-10 space-y-5 xl:space-y-0 p-6'>
                <div className='pr-3 pb-3 w-full xl:w-[400px] h-auto border flex-wrap border-gray-600 shadow-2xl bg-slate-800 rounded-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500/50 hover:transform hover:scale-105'>
                    <h5 className='pl-5 pt-2 text-2xl text-yellow-500 font-bold'>Web Development</h5>

                    <div className='pl-3 pt-2 pb-2 flex flex-wrap sm:flex-nowrap items-start'>
                        <img
                            width="70"
                            height="70"
                            src="https://img.icons8.com/fluency/48/laptop-coding.png"
                            alt="laptop-coding"
                            className='object-contain flex-shrink-0 mr-4'
                        />
                        <ul className='text-sm'>
                            <li className='list-disc ml-4'>
                                <span><strong>Backend</strong>: Springboot, Node.js</span>
                            </li>
                            <li className='list-disc ml-4'>
                                <span><strong>Frontend</strong>: React.js</span>
                            </li>
                            <li className='list-disc ml-4'>
                                <span><strong>Database</strong>: MySQL, MongoDB</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pr-3 w-full xl:w-[400px] h-auto border flex-wrap border-gray-600 shadow-2xl bg-slate-800 rounded-lg transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-500/50 hover:transform hover:scale-105'>
                    <h5 className='pl-5 pt-2 text-xl text-yellow-500 font-bold'>Data Structures & Algorithms</h5>

                    <div className='pl-3 pt-2 pb-2 flex flex-wrap sm:flex-nowrap items-start'>
                        <img
                            width="70"
                            height="70"
                            src="https://img.icons8.com/fluency/96/java-coffee-cup-logo.png"
                            alt="java-coffee-cup-logo"
                            className='object-contain flex-shrink-0'
                        />
                        <ul className='text-sm '>
                            <li className='list-disc ml-4'>
                                <span>Proficient in Java programming</span>
                            </li>
                            <li className='list-disc ml-4 '>
                                <span>Solved over 1000+ problems across various platforms</span>
                            </li>
                            <li className='list-disc ml-4'>
                                <span>Active Leetcode contest participant</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h4 className='text-3xl font-bold text-yellow-500 m-6'>Skills</h4>
            <div className='p-5 flex gap-3 flex-wrap'>
                {[
                    { src: "https://img.icons8.com/color/48/spring-logo.png", alt: "SpringBoot", label: "SpringBoot" },
                    { src: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png", alt: "Java", label: "Java" },
                    { src: "https://img.icons8.com/fluency/48/javascript.png", alt: "JavaScript", label: "JavaScript" },
                    { src: "https://img.icons8.com/color/48/react-native.png", alt: "React", label: "React" },
                    { src: "https://img.icons8.com/color/48/html-5--v1.png", alt: "HTML5", label: "HTML5" },
                    { src: "https://img.icons8.com/color/48/css3.png", alt: "CSS3", label: "CSS3" },
                    { src: "https://img.icons8.com/color/48/mysql-logo.png", alt: "MySQL", label: "MySQL" },
                    { src: "https://img.icons8.com/fluency/48/docker.png", alt: "Docker", label: "Docker" },
                    { src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png", alt: "Postman", label: "Postman" },
                    { src: "https://img.icons8.com/color/48/nodejs.png", alt: "Node.js", label: "Node.js" },
                    { src: "https://img.icons8.com/color/48/mongodb.png", alt: "MongoDB", label: "MongoDB" },
                ].map((skill, index) => (
                    <div key={index} className='flex flex-col group'>
                        <div className='w-16 h-16 rounded-xl bg-slate-700/30 flex items-center p-2 
                            transition-all duration-300 
                            group-hover:shadow-lg group-hover:shadow-yellow-500/20 
                            group-hover:scale-110 group-hover:bg-slate-700/50'>
                            <img
                                width="48"
                                height="48"
                                src={skill.src}
                                alt={skill.alt}
                                className='object-contain'
                            />
                        </div>
                        <span className='mt-2 flex justify-center text-sm text-gray-400 opacity-0 transform translate-y-[-10px] 
                            transition-all duration-300 
                            group-hover:opacity-100 group-hover:translate-y-0'>
                            {skill.label}
                        </span>
                    </div>
                ))}
            </div>
            <h4 className='pl-5 text-yellow-500 pt-3 text-3xl font-bold'>Coding Platform Ratings</h4>
            <div className='p-8 flex gap-8 flex-wrap'>
                {[
                    {
                        name: 'Leetcode',
                        icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png",
                        rating: "1804 (Top 6%)",
                        label: "Leetcode: 1804",
                        link: "https://leetcode.com/u/shashankp10/",
                        bgColor: "bg-yellow-500/10"
                    },
                    {
                        name: 'Codechef',
                        icon: "https://img.icons8.com/ios-filled/50/FFFFFF/codechef.png",
                        rating: "3★ (1666)",
                        label: "Codechef: 3 star (1666)",
                        link: "https://codechef.com/users/shashank_r10",
                        bgColor: "bg-brown-500/10"
                    },
                    {
                        name: 'Codeforces',
                        svg: (
                            <svg width="50px" height="50px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" fill="#FF3C32" />
                            </svg>
                        ),
                        rating: "Pupil",
                        label: "Codeforces: Pupil",
                        link: "https://codeforces.com/profile/shashankp10",
                        bgColor: "bg-red-500/10"
                    }
                ].map((profile, index) => (
                    <a
                        key={index}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-[150px]" 
                    >
                        <div className={`relative flex flex-col items-center ${profile.bgColor} p-4 rounded-lg
                            transition-all duration-300 
                            hover:shadow-lg hover:shadow-yellow-500/20 
                            hover:scale-110 hover:-translate-y-1`}
                        >
                            <div className="w-12 h-12 flex items-center justify-center">
                                {profile.icon ? (
                                    <img
                                        width="48"
                                        height="48"
                                        src={profile.icon}
                                        alt={profile.name}
                                        className="object-contain"
                                    />
                                ) : profile.svg}
                            </div>
                            <div className="mt-2 text-sm font-medium text-gray-400">
                                {profile.name}
                            </div>
                            <div className="mt-1 text-xs text-yellow-500 font-semibold">
                                {profile.rating}
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center 
                                bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 
                                transition-all duration-300 backdrop-blur-sm">
                                <span className="text-yellow-500 text-sm font-medium
                                    transform translate-y-4 group-hover:translate-y-0 
                                    transition-transform duration-300">
                                    View Profile →
                                </span>
                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </>
    );
}
