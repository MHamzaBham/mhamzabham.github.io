import React from 'react'

export default function Buttons() {
  return (
    <div className='py-10 md:block justify-center grid'>
        <a href="#Contact">
          <button type="button" class="py-2.5 px-6 me-3 my-2 bg-white rounded-full text-black font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_rgba(127,90,240,0.5)] hover:translate-y-1">Get in Touch</button>
        </a>
        <button type="button" class="py-2.5 px-6 me-3 my-2 bg-transparent rounded-full text-white border border-white font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_rgba(127,90,240,0.5)] hover:translate-y-1">Download CV</button>
    </div>
  )
}
