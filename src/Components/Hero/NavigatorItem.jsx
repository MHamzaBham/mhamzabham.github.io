import React from 'react';

export default function NavigatorItem(props) {
  return (
    <div className="relative group">
      <a href={`#${props.text == 'hero' ? "Home" : `${props.text}`}`}>
        <div className={`navigator-item rounded-full m-auto my-6 cursor-pointer ${props.isactive ? 'w-3 h-3 bg-[#7F5AF0] animate-ping' : 'w-2 h-2 bg-white'}`}>
        </div>
      </a>

      {/* Tooltip */}
      <div 
        className="absolute left-[-110%] top-1/2 transform -translate-y-1/2 w-max p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ left: props.tooltipGap }} // dynamic adjustment if needed
      >
        {`${props.text == 'hero' ? "Home" : `${props.text}`}`}
      </div>
    </div>
  );
}