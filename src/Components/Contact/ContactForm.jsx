import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [messgage, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault(); // Prevent default form submission behavior
        emailjs.sendForm(
            'service_pmop8rh',
            'template_j5hhepd',
            form.current,
            'NZymQZWCIN_Ihv8bg'
        ).then(
            (result) => {
                alert("Your message has been received! I will get back to you soon.");
                setName("");
                setEmail("");
                setMessage("");
            },
            (error) => {
                alert("Something went wrong sending your message, please try again or contact directly via email - alihamzabham@gmail.com");
                console.error(error.text);
            }
        );
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                    <input
                        id='name'
                        type="text"
                        name="name"
                        placeholder="First Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="px-2 py-3 bg-transparent w-full text-sm text-gray-200 border-b border-gray-300 focus:border-[#7C4DFF] outline-none"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                    </svg>
                </div>

                <div className="relative flex items-center">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="px-2 py-3 bg-transparent w-full text-sm text-gray-200 border-b border-gray-300 focus:border-[#7C4DFF] outline-none"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                        {/* SVG Content */}
                    </svg>
                </div>

                <div className="relative flex sm:col-span-2">
                    <textarea
                        name="message" // Add name attribute
                        placeholder="Write Message"
                        required
                        onChange={(e) => setMessage(e.target.value)}
                        value={messgage}
                        className="px-2 pt-3 bg-transparent w-full text-sm text-gray-200 border-b border-gray-300 focus:border-[#7C4DFF] outline-none"
                    ></textarea>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                        {/* SVG Content */}
                    </svg>
                </div>
            </div>

            <button type="submit" className="bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-[0_10px_40px_rgba(127,90,240,0.5)] hover:translate-y-1 mt-12 flex items-center justify-center text-xs lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
                    {/* SVG Content */}
                </svg>
                Send Message
            </button>
        </form>
    );
}
