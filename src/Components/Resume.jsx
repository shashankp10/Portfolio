import React from 'react'

export default function Resume() {
    return (
        <>
            <div className="p-5">
            <div className='flex items-center'>
                <h2 className="text-4xl font-bold mb-5">Resume</h2>
                <a target="_blank" href="https://drive.google.com/file/d/1aDDxNlt4TePsYW8xrJ4QFuBmluQ2nIb7/view?usp=sharing" download className="pl-3">
                <img width="24" height="24" src="https://img.icons8.com/forma-thin/24/FFFFFF/download.png" alt="download"/>
                </a>
            </div>
            <div className="w-full">
                <h2 className="font-bold text-2xl mb-4">Experience</h2>
                <div className="flex flex-col sm:flex-row sm:space-x-5">
                    <div className="w-full sm:w-1/2 bg-gray-700 p-5 rounded-2xl mb-4 sm:mb-0">
                    <h3 className="text-xl font-semibold">Full Stack Development Intern</h3>
                    <h5 className="text-sm font-semibold pt-1 text-yellow-500">React.js, Node.js, Express.js, Playwright, MongoDB</h5>
                    <p className='text-sm pt-2 font-semibold'>Worked on automation testing and performance analysis project. Integrated an NLP model with Playwright and Python libraries to facilitate test case generation and user support.</p>
                    </div>

                    <div className="w-full sm:w-1/2 bg-gray-700 p-5 rounded-2xl">
                    <h3 className="text-xl font-semibold">Technical Lead at GDSC</h3>
                    <p className='pt-2 text-sm font-medium'>Organized a 72-hour hackathon, engaging over 200 participants and receiving 700+ registrations.</p>
                    <p className='pt-1 text-sm font-medium'>Delivered 2 major projects as the lead, ensuring completion within deadlines.</p>
                    <p className='pt-1 text-sm font-medium'>Mentored participants in hackathons.</p>
                    </div>
                </div>
                </div>


            <div className="w-full lg:flex lg:space-x-5 pt-5">
                <div className="w-full lg:w-1/2">
                <h2 className="font-bold text-2xl mb-2">Education</h2>
                <div className="bg-gray-700 p-2 rounded-2xl">
                    <div className="pl-5 pb-3">
                        <h3 className="text-md font-bold">Guru Gobind Singh Indraprastha University</h3>
                        <p className='text-sm font-medium text-yellow-500'>CSE (2021-2025)</p>
                        <p className='text-sm font-medium text-yellow-500'>CGPA: 9.0</p>
                    </div>
                        
                        <div className="pl-5 pb-3">
                            <h3 className="text-md font-bold">Kendriya Vidyalaya Andrews Ganj</h3>
                            <p className='text-sm font-medium text-yellow-500'>12th Standard (2020)</p>
                            <p className='text-sm font-medium text-yellow-500'>Percentage: 85.4%</p>
                        </div>
                    
                        <div className="pl-5">
                            <h3 className="text-md font-bold">Kendriya Vidyalaya Andrews Ganj</h3>
                            <p className='text-sm font-medium text-yellow-500'>10th Standard (2018)</p>
                            <p className='text-sm font-medium text-yellow-500'>Percentage: 84.0%</p>
                        </div>

                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                <h2 className="font-bold text-2xl mb-2">Skills</h2>
                <div className="bg-gray-700 p-5 rounded-2xl">
                    <div className="pl-5 text-md ">
                            <p className='text-md font-semibold'><strong className='text-yellow-500 text-lg font-bold'>Languages:</strong> Java, C/C++, JavaScript, Python, HTML/CSS</p>
                            <p className='text-md font-semibold'><strong className='text-yellow-500 text-lg font-bold'>Frameworks:</strong> Spring Boot, React.js, Node.js, Express, Tailwind</p>
                            <p className='text-md font-semibold'><strong className='text-yellow-500 text-lg font-bold'>Databases:</strong> MySQL, MongoDB</p>
                            <p className='text-md font-semibold'><strong className='text-yellow-500 text-lg font-bold' >Developer Tools:</strong> Docker, Playwright, Git, Postman, IntelliJ IDEA, Eclipse IDE, VS Code</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            
        </>
    );
}
