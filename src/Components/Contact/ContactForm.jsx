import React from 'react'

export default function ContactForm() {
    return (
        <form>
            <div class="grid sm:grid-cols-2 gap-8">
                <div class="relative flex items-center">
                    <input type="text" placeholder="First Name"
                        class="px-2 py-3 bg-transparent w-full text-sm text-gray-200 border-b border-gray-300 focus:border-[#7C4DFF] outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path
                            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div class="relative flex items-center">
                    <input type="email" placeholder="Email"
                        class="px-2 py-3 bg-transparent w-full text-sm text-gray-200 border-b border-gray-300 focus:border-[#7C4DFF] outline-none" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 682.667 682.667">
                        <defs>
                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                            <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                data-original="#000000"></path>
                            <path
                                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                data-original="#000000"></path>
                        </g>
                    </svg>
                </div>

                <div class="relative flex sm:col-span-2">
                    <textarea placeholder="Write Message"
                        class="px-2 pt-3 bg-transparent w-full text-sm text-gray-200 border-b border-gray-300 focus:border-[#7C4DFF] outline-none"></textarea>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
                        viewBox="0 0 682.667 682.667">
                        <defs>
                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                            <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                data-original="#000000"></path>
                            <path
                                d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                data-original="#000000"></path>
                        </g>
                    </svg>
                </div>
            </div>

            <button type="button"
                class="bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_rgba(127,90,240,0.5)] hover:translate-y-1 mt-12 flex items-center justify-center text-xs lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' class="mr-2" viewBox="0 0 548.244 548.244">
                    <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                </svg>
                Send Message
            </button>
        </form>
    )
}
