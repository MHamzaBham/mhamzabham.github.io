import React from 'react'
import Heading from '../Heading'
import ExperienceSingle from './ExperienceSingle'

const descriptions = [
  "Played a key role in developing full-stack web applications using modern technologies like Laravel and React.js, ensuring seamless integration of front-end and back-end components for responsive and high-performance web solutions. Collaborated with a team of proficient developers, gaining hands-on experience and insights into best practices for modern web development, while actively contributing to Agile development processes.",
  "At Intrazix, I have built intuitive and visually appealing front-end interfaces using HTML, CSS, and JavaScript, alongside robust back-end functionality with Node.js and Express.js to ensure secure and efficient data handling. Integrated RESTful APIs and managed databases with MongoDB to support dynamic content, while continuously staying updated with the latest web development trends and technologies."
]

export default function Experince() {
  return (
    <>
      <div className='pb-[120px]' id='Experience'>
        {/* <Heading title="Experience" /> */}
        <h2 id="section-heading" className='lg:w-[70%] w-[90%] mx-auto pb-5 text-4xl tracking-tight'>
          <span className='bg-gradient-to-r from-[#E1D9F1] to-[#E1D9F1] bg-clip-text text-[transparent]'>Experience</span>
        </h2>

        <ExperienceSingle title="Intern Developer" company="Ibexoft" tenure="Jul 2024 - Present" description={descriptions[0]} image="src\assets\experience\ibexoft.png" size="md:w-[35px] w-[45px] md:h-[35px] h-[45px]" />
        <ExperienceSingle title="Junior Web Developer" company="Intrazix" tenure="April 2023 - Oct 2023" description={descriptions[1]} image="src\assets\experience\intrazix.png" size="md:w-[25px] w-[35px] md:h-[25px] h-[35px]" />
      </div>
    </>
  )
}
