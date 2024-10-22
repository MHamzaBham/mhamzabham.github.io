import React from 'react'
import SocialIcon from './SocialIcon'

export default function SocialSide() {
    return (
        <>
            <div className="flex flex-col items-center h-full">
                <div className="bg-white w-[0px] flex-grow"></div>
                <div className="my-4">
                    <SocialIcon icon='fa-brands fa-github my-3' display='block' move="translate-x-1" link="https://github.com/MHamzaBham"/>
                    <SocialIcon icon='fa-brands fa-linkedin-in my-3' display='block' move="translate-x-1" link="https://www.linkedin.com/in/hamzabham"/>
                    <SocialIcon icon='fa-brands fa-twitter my-3' display='block' move="translate-x-1" link=""/>
                </div>
                <div className="bg-white w-[10x] flex-grow"></div>
            </div>

        </>
    )
}
