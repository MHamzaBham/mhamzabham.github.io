import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import Project from './Project/Project';

const CustomerReviews = () => {
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
            perView: 2.5, // Show 2.5 slides on larger screens
            spacing: 32,
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
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pr-6 lg:pr-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div id="keen-slider" className="keen-slider">

            <div className="keen-slider__slide">
                <Project />
            </div>

            <div className="keen-slider__slide">
                <Project />
            </div>

            <div className="keen-slider__slide">
                <Project />
            </div>

            {/* Add more slides as needed */}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CustomerReviews
