import React from 'react'

export default function Project(props) {
    return (
        <>
            {/* Project */}
            <div className='bg-gradient-to-br from-[#0B0B0D] via-[#0B0B0D] via-[#0B0B0D] to-[#512DA8] rounded-lg cursor-pointer p-3 transition-all duration-300 ease-in-out'>
                <div className='overflow-hidden rounded-lg'>
                    <img
                        src={props.img}
                        alt={props.title}
                        className='rounded-t-lg w-full h-auto max-h-[300px] object-cover hover:scale-105 transition-all duration-300 ease-in-out'
                        style={{ aspectRatio: '16/9' }}
                    />
                </div>

                <div className="flex items-center justify-between py-3">
                    <div className=''>
                        <h3 className='text-lg font-bold text-white -mb-1'>{props.title}</h3>
                        <a href="your-link-here" target="_blank" rel="noopener noreferrer" className='text-white text-sm'>
                            {props.detail}
                        </a>
                    </div>
                    <div className='px-4'>
                        <i className="fa-solid fa-arrow-right text-white text-lg rotate-[325deg] cursor-pointer hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300 ease-in-out"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
