import React from 'react'
import ContactForm from './ContactForm'
import ContactFooter from './ContactFooter'

export default function Contact() {
    return (
        <>
            <div className='py-10' id='Contact'>
                <div className='justify-center md:w-[70%] w-[90%] mx-auto text-white'>
                    <h2 id="section-heading" className='text-4xl mt-10'>
                        Contact
                    </h2>


                    <div class="py-4 lg:col-span-2 mt-10">
                        <ContactForm />
                    </div>

                    <ContactFooter />
                </div>
            </div>
        </>
    )
}
