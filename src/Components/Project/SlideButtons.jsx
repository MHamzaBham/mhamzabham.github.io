import React from 'react'

export default function SlideButtons() {
    return (
        <div className="items-end justify-end sm:flex">
            <div className="mt-8 flex gap-4 lg:mt-0">
                <button
                    aria-label="Previous slide"
                    id="keen-slider-previous"
                    className="rounded-full border border-white p-2 text-purple-600 transition hover:bg-[#512DA8] hover:text-white hover:-translate-x-1"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-5 rtl:rotate-180 text-white"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    aria-label="Next slide"
                    id="keen-slider-next"
                    className="rounded-full border border-white p-2 text-whit transition hover:bg-[#512DA8] hover:text-white hover:translate-x-1"
                >
                    <svg
                        className="size-5 rtl:rotate-180 text-white"
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
    )
}
