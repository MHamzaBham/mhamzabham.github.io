import React, { useEffect } from 'react'
import Project from './Project'
import Heading from '../Heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { Pagination, Navigation } from 'swiper/modules'
import SlideButtons from './SlideButtons'

export default function Projects() {

    useEffect(() => {
        const keenSlider = new KeenSlider('#keen-slider', {
            loop: true,
            slides: {
                origin: 'auto',
                perView: 1.25,
                spacing: 16,
            },
            breakpoints: {
                '(min-width: 768px)': {
                    slides: {
                        perView: 1.5, // Show 1.5 slides on tablets
                        spacing: 24,
                    },
                },
                '(min-width: 1024px)': {
                    slides: {
                        perView: 2, // Show 2.5 slides on larger screens
                        spacing: 15,
                    },
                },
                '(min-width: 1440px)': {
                    slides: {
                        perView: 3, // Show 3 slides on extra large screens
                        spacing: 40,
                    },
                },
            },
        });

        const keenSliderPrevious = document.getElementById('keen-slider-previous');
        const keenSliderNext = document.getElementById('keen-slider-next');

        keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
        keenSliderNext.addEventListener('click', () => keenSlider.next());

        // Clean up
        return () => {
            keenSlider.destroy();
        };
    }, []);


    return (
        <div id='Projects'>
            {/* <Heading title="Projects" /> */}

            <div className=" pb-20 pt-8">
                {/* Grid */}
                <div className='grid justify-center gap-[3rem] md:w-[70%] w-[90%] mx-auto'>

                    <h2 id="section-heading" className='pb-5 text-4xl tracking-tight'>
                        <span className='bg-gradient-to-r from-[#E1D9F1] to-[#E1D9F1] bg-clip-text text-transparent'>Projects</span>
                    </h2>
                    {/* <Project />
                    <Project />
                    <Project /> */}


                    <div id="keen-slider" className="keen-slider">


                        <div className="keen-slider__slide">
                            <Project img="assets/projects/spendara.jpg" title="Spendara" detail="Expense Management Application"/>
                        </div>

                        <div className="keen-slider__slide">
                            <Project img="assets/projects/quik.jpg" title="Quiks" detail="A web application to read/listen to shortbooks"/>
                        </div>

                        <div className="keen-slider__slide">
                            <Project img="assets/projects/eclerx.jpg" title="eClerx Digital" detail="A Digital service and blogging site"/>
                        </div>

                        <div className="keen-slider__slide">
                            <Project img="assets/projects/spendara_landing.jpg" title="Spendara Landing" detail="An expense tracking app landing page"/>
                        </div>

                        {/* Add more slides as needed */}
                    </div>


                    <SlideButtons />
                </div>
            </div>
        </div>
    )
}
