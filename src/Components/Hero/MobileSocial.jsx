import React from 'react';
import SocialIcon from './SocialIcon';

export default function MobileSocial() {
    return (
        <>
            <div className='mobile-social w-full text-center mt-10 md:hidden block bg-[yellow]'>
                <SocialIcon icon='fa-brands fa-github mx-3'/>
                <SocialIcon icon='fa-brands fa-linkedin-in mx-3' />
                <SocialIcon icon='fa-brands fa-twitter mx-3' />
            </div>
        </>
    )
}
