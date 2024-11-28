import React from 'react'

export default function Resume() {
    return (
        <div className="p-5">
            <div className='flex items-center mb-5'>
                <h2 className="text-4xl text-yellow-500 font-bold">Resume</h2>
                <a target="_blank"
                    href="https://drive.google.com/file/d/1aDDxNlt4TePsYW8xrJ4QFuBmluQ2nIb7/view?usp=sharing"
                    className="pl-3 hover:opacity-80 transition-opacity flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
            </div>

            <section className="mb-8">
                <h2 className="font-bold text-2xl mb-4">Experience</h2>
                <div className="flex flex-col space-y-4">
                    <div className="w-full bg-gray-700 p-5 rounded-2xl">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                            <p className="text-sm text-gray-300">Oct 2024 - Present</p>
                        </div>
                        <p className="text-sm text-yellow-500">Kloudfarm, Bengaluru (Remote)</p>
                        <ul className="list-disc list-inside pt-2 text-sm space-y-1">
                            <li>Engineered and researched solutions for building C4 diagrams, selecting the optimal approach for implementation</li>
                            <li>Built a proof of concept (PoC) and set up the repository for developing a JavaScript library using bundler Vite, Jest, and vitest</li>
                            <p className='font-bold text-lg'>Tech Stack : Javascript, React.js</p>
                        </ul>
                    </div>

                    <div className="w-full bg-gray-700 p-5 rounded-2xl">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">Full Stack Developer Intern</h3>
                            <p className="text-sm text-gray-300">Jun 2024 - Sept 2024</p>
                        </div>
                        <p className="text-sm text-yellow-500">Gunaworks, Bengaluru (Remote)</p>
                        <ul className="list-disc list-inside pt-2 text-sm space-y-1">
                            <li>Developed a prompt-driven web testing tool using NLMs, Playwright, and React.js, enabling interaction with web elements, auto-generation of test cases, and report generation</li>
                            <li>Integrated keyword-based DOM manipulation with the Von-Similo Algorithm, improving accuracy from 94% to 99% and reducing response time from minutes to milliseconds</li>
                            <li>Used NLMs for prompt analysis with session memory to ensure coherent interactions, test case creation and validation through Playwright</li>
                            <p className='font-bold text-lg'>Tech Stack : Express.js, React.js, Playwright, LLMs</p>
                        </ul>
                    </div>

                    <div className="w-full bg-gray-700 p-5 rounded-2xl">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">Technical Lead</h3>
                        </div>
                        <p className="text-sm text-yellow-500">Google Developer Student Clubs (GDSC)</p>
                        <p className="text-xs text-gray-300">College Technical Society</p>
                        <ul className="list-disc list-inside pt-2 text-sm space-y-1">
                            <li>Organized a 72-hour hackathon, engaging over 200 participants and receiving 700+ registrations</li>
                            <li>Delivered 2 major projects as the lead, ensuring completion within deadlines</li>
                            <li>Mentored participants in hackathons</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Education and Skills Section */}
            <div className="w-full lg:flex lg:space-x-8">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <h2 className="font-bold text-2xl mb-4 text-yellow-500">Education</h2>
                    <div className="bg-gray-700 p-6 rounded-2xl space-y-6">
                        <div className="border-l-4 border-yellow-500 pl-4">
                            <h3 className="text-lg font-bold">Guru Gobind Singh Indraprastha University</h3>
                            <p className='text-yellow-500 font-medium'>B.Tech, Computer Science</p>
                            <div className='flex justify-between items-center mt-1'>
                                <span className='text-sm text-gray-300'>2021 - 2025</span>
                                <span className='text-sm font-medium text-yellow-500'>CGPA: 9.0</span>
                            </div>
                        </div>

                        <div className="border-l-4 border-yellow-500 pl-4">
                            <h3 className="text-lg font-bold">Kendriya Vidyalaya Andrews Ganj</h3>
                            <p className='text-yellow-500 font-medium'>12th Standard</p>
                            <div className='flex justify-between items-center mt-1'>
                                <span className='text-sm text-gray-300'>2020</span>
                                <span className='text-sm font-medium text-yellow-500'>85.4%</span>
                            </div>
                        </div>

                        <div className="border-l-4 border-yellow-500 pl-4">
                            <h3 className="text-lg font-bold">Kendriya Vidyalaya Andrews Ganj</h3>
                            <p className='text-yellow-500 font-medium'>10th Standard</p>
                            <div className='flex justify-between items-center mt-1'>
                                <span className='text-sm text-gray-300'>2018</span>
                                <span className='text-sm font-medium text-yellow-500'>84.0%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <h2 className="font-bold text-2xl mb-4 text-yellow-500">Skills</h2>
                    <div className="bg-gray-700 p-6 rounded-2xl">
                        <div className="space-y-4">
                            <div className="skill-group">
                                <h3 className='text-lg font-bold text-yellow-500 mb-2'>Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Java', 'C/C++', 'JavaScript', 'HTML/CSS'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-gray-600 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-group">
                                <h3 className='text-lg font-bold text-yellow-500 mb-2'>Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Spring Boot', 'React.js', 'Node.js', 'Express', 'Tailwind'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-gray-600 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-group">
                                <h3 className='text-lg font-bold text-yellow-500 mb-2'>Databases</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['MySQL', 'MongoDB'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-gray-600 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-group">
                                <h3 className='text-lg font-bold text-yellow-500 mb-2'>Developer Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Docker', 'Playwright', 'Git', 'Postman', 'IntelliJ IDEA', 'Visual Studio Code'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-gray-600 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       </div>
    );
}