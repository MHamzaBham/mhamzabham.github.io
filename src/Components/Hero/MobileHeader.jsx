import React from 'react'
import SocialIcon from './SocialIcon'

export default function MobileHeader() {
    return (
        <div className='w-full h-[60px] mt-8 md:hidden block' style={{ position: 'absolute', top: '0', left: '0' }}>
            <div className='flex w-full sm:justify-center sm:gap-20 justify-around px-3'>
                <span>
                    <i className="fa-solid fa-house"></i>
                    <p className='text-sm'>Home</p>
                </span>
                <span>
                    <i className="fa-solid fa-address-card"></i>
                    <p className='text-sm'>About</p>
                </span>
                <span>
                    <i className="fa-solid fa-laptop"></i>
                    <p className='text-sm'>Experience</p>
                </span>
                <span>
                    <i className="fa-solid fa-diagram-project"></i>
                    <p className='text-sm'>Projects</p>
                </span>
            </div>
        </div>
    )
}
