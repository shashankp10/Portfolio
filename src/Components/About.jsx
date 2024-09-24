import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About() {
    return(
        <>
            <h2 className='p-5 text-4xl font-bold'>About Me</h2>
            <p className='pl-5 pr-4 text-md'>Hi, I'm Shashank, Java Full Stack developer with keen interest in problem solving. Proficient in Java, Spring Boot, React JS, and MySQL, I have hands-on experience in crafting robust solutions. I am eager to connect with tech professionals for collaborative innovation and am actively seeking internships as a Software Developer to further hone my skills and contribute to impactful projects.</p>
            <h4 className='pl-5  pt-3 text-2xl font-bold'>What I'm Doing</h4>
            <div className='flex justify-center xl:flex-row flex-col space-x-0 xl:space-x-10 space-y-5 xl:space-y-0 p-4'>
                <div className='pr-3 pb-3 w-auto h-auto border flex-wrap border-gray-600 shadow-2xl bg-slate-800 rounded-lg'>
                    <h5 className='pl-5 pt-2 text-2xl font-bold'>Web Development</h5>
                    <div className='pl-3 pt-2 flex'>
                        <img width="70" height="70" src="https://img.icons8.com/fluency/48/laptop-coding.png" alt="laptop-coding" className='object-contain'/>
                        <div className=' text-sm'>
                            <li className='pl-3'> <strong>Backend</strong> : Springboot, Node.js</li>
                            <li className='pl-3'> <strong>Frontend</strong> : React.js</li>
                            <li className='pl-3'> <strong>Database</strong> : MySQL, MongoDB</li>
                        </div>
                    </div>
                </div>
                <div className='pr-3 w-auto h-auto border flex-wrap border-gray-600 shadow-2xl bg-slate-800 rounded-lg'>
                    <h5 className='pl-5 pt-2 text-2xl font-bold'>Data Structures & Algorithms</h5>
                    <div className='pl-3 pt-2 flex'>
                        <img width="70" height="70" src="https://img.icons8.com/fluency/96/java-coffee-cup-logo.png" alt="java-coffee-cup-logo" className='object-contain'/>
                        <div className='text-sm'>
                            <li className='pl-3'>Top 7% at Leetcode (1804)</li>
                            <li className='pl-3'>3 star at Codechef (1666)</li>
                            <li className='pl-3'>Pupil at codeforces (1206)</li>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='pl-5  pt-3 text-2xl font-bold'>Skills</h4>
            <div className='p-5 flex gap-4 flex-wrap'>
                <img width="48" height="48" src="https://img.icons8.com/color/48/spring-logo.png" alt="spring-logo"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/javascript.png" alt="javascript"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/mysql-logo.png" alt="mysql-logo"/>
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/docker.png" alt="docker"/>
                <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>
                <img width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/>
            </div>
            <h4 className='pl-5  pt-3 text-2xl font-bold'>Coding Platform Ratings</h4>
            <div className='p-5 flex gap-4 flex-wrap'>
                <div className="relative group">
                    <a href="https://www.leetcode.com" target="_blank" rel="noopener noreferrer">
                    <img 
                        width="48" 
                        height="48" 
                        src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" 
                        alt="leetcode" 
                    />
                    </a>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-600 text-white text-sm font-bold p-1 rounded whitespace-nowrap border-0">Leetcode: 1804</span>

                </div>

                <div className="relative group">
                    <a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer">
                    <img 
                        width="50" 
                        height="50" 
                        src="https://img.icons8.com/ios-filled/50/FFFFFF/codechef.png" 
                        alt="codechef" 
                    />
                    </a>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-600 text-white text-sm font-bold p-1 rounded whitespace-nowrap border-0">Codechef : 3 star (1666)</span>
                </div>
                <div className="relative group">
                    <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer">
                    <svg 
                        width="50px" 
                        height="50px" 
                        viewBox="0 0 24 24" 
                        role="img" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="fill-current text-red-500" 
                    >
                        <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" fill="currentColor"/>
                    </svg>
                    </a>
                    <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-600 text-white text-sm font-bold p-1 rounded whitespace-nowrap border-0">Codeforces : Pupil</span>
                </div>
            </div>

        </>
    );
}
