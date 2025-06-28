import React from 'react';

const Contact = () => {
    // All state and submission logic is removed for a static page.
    // The form is for display purposes only.
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('This is a static form. Submissions are disabled.');
    };

    return (
        <div className="bg-slate-50">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">
                        Contact Us
                    </h1>
                    <p className="mb-8 text-slate-600">
                        Have questions or feedback? Reach out to us using the form below or via our email.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <section>
                            <h2 className="text-xl font-semibold text-slate-700 mb-4">Get in Touch</h2>
                            <div className="space-y-4 text-slate-600">
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <a href="mailto:parthsarawgi18@gmail.com" className="hover:text-indigo-700 hover:underline">
                                        parthsarawgi18@gmail.com
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-slate-700 mb-4">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                                    <input type="text" name="name" id="name" required className="input-style" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
                                    <input type="email" name="email" id="email" required className="input-style" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                    <input type="text" name="subject" id="subject" className="input-style" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                    <textarea name="message" id="message" rows="4" required className="input-style"></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .input-style { @apply block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm; }
            `}</style>
        </div>
    );
};

export default Contact;