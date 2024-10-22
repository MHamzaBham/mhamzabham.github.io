import React from 'react'

export default function ExperienceSingle(props) {
    return (
        <>
            {/* Experience */}
            <div className='md:w-[70%] w-[90%] mx-auto py-7'>
                {/* First Row */}
                <div className='heading-container md:flex block text-white md:gap-3 gap-0'>
                    <div className='flex mt-1'>
                        <img src={props.image} alt="" className={`${props.size} md:mb-0 mb-2`} />
                    </div>
                    <div className={`flex flex-grow ${props.company == 'Ibexoft' ? 'md:mt-1 mt-0 -ms-1' : ''}`}>
                        <h3 className='text-2xl md:text-[22px] font-bold text-white'>{props.title} at {props.company}</h3>
                    </div>
                    <div className='flex mt-[5px]'>
                        <h5 className='text-white-700 text-sm'>{props.tenure}</h5>
                    </div>
                </div>
                <div className='text-gray-400 py-2 text-[#D1D1D1]'>
                    {props.description}
                </div>
            </div>
        </>
    )
}
