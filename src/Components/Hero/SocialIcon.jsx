import React from 'react'

export default function SocialIcon(props) {
    return (
        <li className={`bg-[#7C4DFF] h-8 w-8 rounded-full flex items-center justify-center shrink-0 my-4 transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_rgba(127,90,240,0.5)] hover:${props.move}`}>
            <a href={props.link} target='_blank'>
                <i className={props.icon}></i>
            </a>
        </li>
    )
}
