import React from 'react'

export default function Heading(props) {
    return (
        <>
            {/* Heading */}
            <div className='pb-10 pt-20 bg-[#121212] text-[white]'>
                <h2 id="section-heading" className='sm:text-4xl text-2xl lg:w-[60%] m-auto text-center'>
                    <span className='bg-gradient-to-r from-[#A25DC9] via-[#9B59B6] to-[#7D3C98] bg-clip-text text-transparent'>{props.title}</span>
                </h2>
            </div>
        </>
    )
}
