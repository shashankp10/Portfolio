import React from 'react'

export default function Resume() {
    return (
        <div className="p-5">
            <div className='flex items-center mb-5'>
                <h2 className="text-4xl text-yellow-500 font-bold">Resume</h2>
                <a target="_blank"
                    href="https://drive.google.com/file/d/1uHxa76B7y1qreUWkzGNstrYbyY0dw__i/view?usp=sharing"
                    className="pl-3 hover:opacity-80 transition-opacity flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </a>
            </div>

            <section className="mb-8">
                <h2 className="font-bold text-2xl mb-4">Work Experience</h2>
                <div className="flex flex-col space-y-4">
                     <div className="w-full bg-gray-700 p-5 rounded-2xl">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">Software Engineer</h3>
                            <p className="text-sm text-gray-300">Jul 2025 - Present</p>
                        </div>
                        <p className="text-sm text-yellow-500">TO THE NEW, Noida (On-site)</p>
                        <ul className="pt-2 text-sm space-y-1">
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Working with Adobe powered Axis Maxlife Insurance as backend developer</span>
                            </li>
                            <p className='font-bold text-lg'>Tech Stack : Core Java, Springboot, AWS, DynamoDB</p>
                        </ul>
                    </div>
                    <div className="w-full bg-gray-700 p-5 rounded-2xl">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">Software Engineer Trainee</h3>
                            <p className="text-sm text-gray-300">Feb 2025 - Jul 2025</p>
                        </div>
                        <p className="text-sm text-yellow-500">TO THE NEW, Noida (On-site)</p>
                        <ul className="pt-2 text-sm space-y-1">
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Currently assigned to a client-facing project for Adobe (Max Life Insurance), contributing to backend development.</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Built a production-grade e-commerce backend POC (Java 21, Spring Boot, MySQL) starting with domain design, JWT with refresh token Redis-based auth, role-based access, async mail service, scheduled tasks, dynamic product filtering, BFS for nested product listing, and complex role-specific APIs with pagination and sorting.</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Underwent a rigorous training program covering Core Java, Spring Boot, MySQL, Docker (basics), GitHub, Linux, and AWS (foundations).</span>
                            </li>
                            <p className='font-bold text-lg'>Tech Stack : Core Java, Springboot, Redis, MySQL</p>
                        </ul>
                    </div>

                    <div className="w-full bg-gray-700 p-5 rounded-2xl">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
                            <p className="text-sm text-gray-300">Oct 2024 - Jan 2025</p>
                        </div>
                        <p className="text-sm text-yellow-500">Kloudfarm, Bengaluru (Remote)</p>
                        <ul className="pt-2 text-sm space-y-1">
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Built a charting library using JavaScript, with internal use of Cytoscape.js and custom React wrappers to support
                                real-time architecture visualization and interactive diagrams</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Designed and implemented C4 diagram components from scratch, contributing to the frontend Visualization layer
                                through research, PoC development, and close collaboration with the engineering team</span>
                            </li>
                            <p className='font-bold text-lg'>Tech Stack : Javascript, React.js</p>
                        </ul>
                    </div>

                    <div className="w-full bg-gray-700 p-5 rounded-2xl">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">Full Stack Developer Intern</h3>
                            <p className="text-sm text-gray-300">Jun 2024 - Sept 2024</p>
                        </div>
                        <p className="text-sm text-yellow-500">Gunaworks, Bengaluru (Remote)</p>
                        <ul className="pt-2 text-sm space-y-1">
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Developed a prompt-driven web testing tool using NLMs, Playwright, and React.js, enabling interaction with web elements, auto-generation of test cases, and report generation</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Integrated keyword-based DOM manipulation with the Von-Similo Algorithm, improving accuracy from 94% to 99% and reducing response time from minutes to milliseconds</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Used NLMs for prompt analysis with session memory to ensure coherent interactions, test case creation and validation through Playwright</span>
                            </li>
                            <p className='font-bold text-lg'>Tech Stack : Express.js, React.js, Playwright, LLMs</p>
                        </ul>
                    </div>

                   
                </div>
                <h2 className="font-bold text-2xl pt-7 mb-4">Volunteering Experience</h2>
                 <div className="flex flex-col space-y-4">
                    <div className="w-full bg-gray-700 p-5 rounded-2xl">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">Technical Lead</h3>
                        </div>
                        <p className="text-sm text-yellow-500">Google Developer Student Clubs (GDSC)</p>
                        <p className="text-xs text-gray-300">College Technical Society</p>
                        <ul className="pt-2 text-sm space-y-1">
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Organized a 72-hour hackathon, engaging over 200 participants and receiving 700+ registrations</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Delivered 2 major projects as the lead, ensuring completion within deadlines</span>
                            </li>
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Mentored participants in hackathons</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full bg-gray-700 p-5 rounded-2xl">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold">Technical Team Member</h3>
                        </div>
                        <p className="text-sm text-yellow-500">GeeksforGeeks Student Chapter</p>
                        <p className="text-xs text-gray-300">College Technical Society</p>
                        <ul className="pt-2 text-sm space-y-1">
                            <li className="flex">
                                <span className="mr-2">•</span>
                                <span>Contributes by preparing coding contest questions and has contributed questions for coding contests.</span>
                            </li>
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
                            <p className='text-yellow-500 font-medium'>Bachelor of Technology</p>
                            <p className='text-yellow-500 font-medium'>Computer Science and Engineering</p>
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
                                <h3 className='text-lg font-bold text-yellow-500 mb-2'>Framework & Libraries</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Spring Boot', 'React.js','Tailwind'].map(skill => (
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
                                    {['Docker', 'Playwright', 'Git', 'Redis', 'RabbitMQ', 'Postman', 'IntelliJ IDEA', 'Visual Studio Code'].map(skill => (
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