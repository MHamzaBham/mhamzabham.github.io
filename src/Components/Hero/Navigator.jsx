import React, { useEffect, useState } from 'react';
import NavigatorItem from './NavigatorItem';

const items = ["hero", "Projects", "Experience", "Contact"];

export default function Navigator() {
    const [activeItem, setActiveItem] = useState(items[0]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
    
            if (window.scrollY === 0) {
                // If the user is at the very top, set the active item to "hero"
                setActiveItem("hero");
                return;
            }
    
            // Loop through the sections to find the one that's currently in view
            for (let i = items.length - 1; i >= 0; i--) {
                const element = document.getElementById(items[i]);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveItem(items[i]);
                        break;
                    }
                }
            }
        };
    
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='fixed right-8 h-full flex items-center justify-center'>
            <div>
                {items.map((item, index) => (
                    <NavigatorItem
                        key={index}
                        isactive={activeItem === item}
                        text={item}
                        tooltipGap={index === 0 ? '-60px' : index === 1 ? '-70px' : index === 2 ? '-85px' : '-70px'}
                    />
                ))}
            </div>
        </div>
    );
}