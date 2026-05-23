import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Form: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        const form = e.currentTarget;

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            
            setStatus('success');
            form.reset();
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="md:py-16 py-1 px-20 max-md:px-5 scroll-mt-[80px] max-md:scroll-mt-[60px] bg-[#050A10]">
            <div className="items-center justify-center flex py-18 flex-col px-4">
                <div className="text-center max-w-4xl w-full">
                    <h2 className="text-[#FEFEFE] md:text-[65px] text-[60px]">SAY HELLO!</h2>
                    <span className="text-[#FEFEFE] md:text-[25px] text-[20px]">Ready to bring your product vision to life? Get in touch</span>
                </div>

                <div className="mt-10 max-w-[37rem] w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[#FEFEFE]">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="from_name"
                                placeholder="Enter your name"
                                required
                                className="bg-[#191E24] rounded px-5 py-[14px] w-full text-[#ADADAD] font-[400] text-[16px] outline-0"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="email" className="text-[#FEFEFE]">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="from_email"
                                placeholder="Enter your email"
                                required
                                className="bg-[#191E24] rounded px-5 py-[14px] w-full text-[#ADADAD] font-[400] text-[16px] outline-0"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="message" className="text-[#FEFEFE]">Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                placeholder="Enter your message here"
                                rows={5}
                                required
                                className="bg-[#191E24] rounded px-5 py-[14px] w-full text-[#ADADAD] font-[400] text-[16px] outline-0"
                            />
                        </div>

                        {status === 'success' && (
                            <p className="text-green-400 mt-3">Message sent successfully! ✓</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 mt-3">Failed to send message. Please try again.</p>
                        )}

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#238EFF] text-white text-[18px] font-semibold py-3 px-6 rounded-sm w-full hover:bg-[#2A8EEF] transition-colors mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;