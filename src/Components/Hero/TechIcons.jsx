import React from 'react'
import { FaReact, FaNodeJs, FaLaravel, FaDocker, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss, SiCplusplus, SiMysql, SiMongodb, SiExpress, SiSass } from 'react-icons/si'

export default function TechIcons() {
  return (
    <>
        <FaReact className="absolute text-blue-500 opacity-20 md:text-6xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ top: '24%', left: '20%' }} />
        <SiTailwindcss className="absolute text-teal-400 opacity-20 md:text-6xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ top: '20%', right: '20%' }} />
        <FaNodeJs className="absolute text-green-500 opacity-20 md:text-7xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ bottom: '10%', left: '10%' }} />
        <FaLaravel className="absolute text-red-500 opacity-20 md:text-6xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ top: '13%', left: '40%' }} />
        <FaDocker className="absolute text-blue-600 opacity-20 md:text-6xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ bottom: '30%', right: '30%' }} />
        <SiCplusplus className="absolute text-blue-700 opacity-20 md:text-6xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ top: '65%', left: '25%' }} />
        <FaBootstrap className="absolute text-purple-500 opacity-20 md:text-6xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ bottom: '15%', right: '10%' }} />
        <SiMysql className="absolute text-yellow-500 opacity-20 md:text-7xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ bottom: '5%', left: '40%' }} />
        <SiMongodb className="absolute text-green-600 opacity-20 md:text-6xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ top: '45%', right: '15%' }} />
        <SiExpress className="absolute text-gray-200 opacity-20 md:text-5xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ bottom: '15%', right: '40%' }} />
        <SiSass className="absolute text-pink-500 opacity-30 md:text-4xl text-4xl cursor-pointer hover:opacity-100 transition-opacity duration-300" style={{ top: '22%', right: '38%' }} />
    </>
  )
}
