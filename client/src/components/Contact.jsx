import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact = ({ profile }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    if (!profile) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log(formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Work Together</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center group">
                                    <div className="p-3 bg-indigo-50 rounded-lg mr-4 group-hover:bg-indigo-600 transition-colors duration-300">
                                        <Mail className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Email</p>
                                        <a href={`mailto:${profile.email}`} className="text-slate-800 font-medium hover:text-indigo-600 transition-colors">{profile.email}</a>
                                    </div>
                                </div>
                                {profile.phone && ( // Added conditional rendering for phone
                                    <div className="flex items-center group">
                                        <div className="p-3 bg-indigo-50 rounded-lg mr-4 group-hover:bg-indigo-600 transition-colors duration-300">
                                            <Phone className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Phone</p>
                                            <p className="text-slate-800 font-medium">{profile.phone}</p>
                                        </div>
                                    </div>
                                )}
                                {profile.location && ( // Added conditional rendering for location
                                    <div className="flex items-center group">
                                        <div className="p-3 bg-indigo-50 rounded-lg mr-4 group-hover:bg-indigo-600 transition-colors duration-300">
                                            <MapPin className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Location</p>
                                            <p className="text-slate-800 font-medium">{profile.location}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-900 placeholder-slate-400 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition transform hover:-translate-y-1"
                            >
                                {submitted ? 'Message Sent!' : (
                                    <>
                                        Send Message <Send size={18} className="ml-2" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </motion.div>

                <div className="border-t border-white/5 pt-8 mt-16 text-center text-neutral-500 text-sm">
                    <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                </div>
            </div>
        </section >
    );
};

export default Contact;
