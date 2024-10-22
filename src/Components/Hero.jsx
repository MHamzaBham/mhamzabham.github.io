import React from 'react'
import SocialSide from './Hero/SocialSide'
import Navigator from './Hero/Navigator'
import DescriptionText from './Hero/DescriptionText'
import MobileSocial from './Hero/MobileSocial'
import MobileHeader from './Hero/MobileHeader'
import Buttons from './Hero/Buttons'
import ProfilePic from './Hero/ProfilePic'

export default function Hero() {
    return (
        <div id="hero" className="flex">
            <div className="left-sidebar flex-shrink-0 w-[80px] md:block hidden">
                {/* Visible only on medium screens and larger */}
                <SocialSide />
            </div>
            <div className="heading-container flex-grow flex items-center justify-center mx-4">
                {/* <div>
                    <MobileHeader />
                    <ProfilePic />
                    <h1 id="heading" className='sm:text-5xl text-3xl font-semibold lg:w-[60%] m-auto'> I do code and
                        make content<span className='animated-gradient-text bg-gradient-to-r from-[#A25DC9] via-[#9B59B6] to-[#7D3C98] bg-clip-text text-transparent'> about it!</span> </h1>
                    <DescriptionText />
                    <h1>

                    </h1>
                    <MobileSocial />
                    <Buttons />
                </div> */}


                <div id="container" class="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
                    <div class="mr-10">
                        <img
                            class="rounded-lg min-w-[100px] w-full h-auto"
                            src="assets/images/hero_img.jpg"
                            alt="image of myself"
                        />
                    </div>
                    <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
                        <h1 class="text-white font-bold text-4xl font-extrabold mt-6 mb-8">
                            Hey there! I'm <br /> <span className='bg-gradient-to-r from-[#7C4DFF] to-indigo-400 bg-clip-text text-transparent'>Hamza Ahmed</span>
                        </h1>

                        <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10 text-[#D1D1D1]">
                            I’m a dedicated web developer and a Computer Science student, passionate about crafting impactful digital experiences. Whether it's designing sleek websites or tackling real-world challenges with code, I thrive on finding innovative solutions that enhance user interaction and functionality.
                            <br /><br />
                            As I continue to expand my skills and knowledge, I aim to merge creativity with technology to deliver exceptional results. Welcome to my online portfolio, where you can explore my projects and see how I bring ideas to life through code.
                        </p>

                        {/* <div id="social" class="flex flex-wrap justify-start items-center gap-4">
                            <a rel="noopener" target="_blank" href="https://github.com/iam-aydin" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                                <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
                                <span>Visit my Github</span>
                            </a>
                            <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                                <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
                                <span>Follow me on Linkedin</span>
                            </a>
                            <a rel="noopener" target="_blank" href="https://twitter.com/ichbinaydin" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                                <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" width="20px" height="20px" alt="Twitter" />
                                <span>Follow me on Twitter</span>
                            </a>
                        </div> */}



                    </div>
                </div>



            </div>

            <div className="right-sidebar flex-shrink-0 w-[80px] md:block hidden">
                <Navigator />
            </div>
        </div>
    )
}
