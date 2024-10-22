import React from 'react'
import SocialIcon from '../Hero/SocialIcon'

export default function ContactFooter() {
    return (
        <div className='md:flex block justify-between items-center mt-10'>
            <div>
                <div className='py-1'>
                    <i class="fa-solid fa-envelope text-[#7C4DFF]"></i> &nbsp;
                    <span>alihamzabham@gmail.com</span>
                </div>
                <div className='py-1'>
                    <i class="fa-solid fa-phone text-[#7C4DFF]"></i> &nbsp;
                    <span>+92 316 8589380</span>
                </div>
            </div>
            {/* Footer Socials */}
            <ul class="flex flex-wrap gap-4 md:m-0 mt-5">
                <SocialIcon icon='fa-brands fa-github my-3' display='block' move="translate-y-1" link="https://github.com/MHamzaBham"/>
                <SocialIcon icon='fa-brands fa-linkedin-in my-3' display='block' move="translate-y-1" link="https://www.linkedin.com/in/hamzabham"/>
                <SocialIcon icon='fa-brands fa-twitter my-3' display='block' move="translate-y-1" link=""/>
            </ul>
        </div>
    )
}
