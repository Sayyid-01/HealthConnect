import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ContactUs = () => {
    return (
        <section className="py-16 bg-white"> {/* Set entire section bg to white */}
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 lg:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-red-900 mb-4 leading-tight">
                            Get In Touch
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Have questions or need assistance? Fill out the form, and our team will get back to you shortly.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-14 h-full">
                        {/* Animated Doctor Placeholder */}
                        <div className="lg:w-1/2 flex justify-center items-center p-4 h-full">
                            <div
                                className="w-full max-w-sm rounded-lg flex items-center justify-center h-96 object-contain mb-8"
                            >

                                <DotLottieReact
                                    src="https://lottie.host/8dbad48b-e2c1-4c52-8d48-4549fe8f72da/oyPr0MO3N8.lottie"
                                    loop
                                    autoplay
                                />

                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="w-full lg:w-1/2 p-8 rounded-lg border border-red-200 bg-white">
                            <form className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-900"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-900"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject"
                                        className="w-full px-4 py-3 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-900"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Your message"
                                        className="w-full px-4 py-3 border border-red-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-gray-900 resize-y"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 text-white font-bold rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 uppercase tracking-wide 
                                        bg-[linear-gradient(90deg,_rgba(36,0,9,1)_0%,_rgba(121,9,13,1)_77%,_rgba(214,69,69,1)_94%)] 
                                        shadow-md hover:shadow-[0_0_20px_4px_rgba(214,69,69,0.5)]"
                                >
                                    Send Message
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
