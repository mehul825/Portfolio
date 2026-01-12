import React, { useState } from 'react';
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
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-900">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <div className="text-slate-200">
                        <h2 className="text-4xl font-bold mb-6 text-slate-100">Let's Connect</h2>
                        <p className="text-slate-400 mb-10 text-lg leading-relaxed font-light">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            {profile.email && (
                                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/5 hover:bg-white/5 transition-colors group">
                                    <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Mail me at</p>
                                        <p className="font-medium text-slate-200">{profile.email}</p>
                                    </div>
                                </a>
                            )}
                            {profile.phone && (
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/5">
                                    <div className="p-3 rounded-full bg-violet-500/10 text-violet-400">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Call me at</p>
                                        <p className="font-medium text-slate-200">{profile.phone}</p>
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/5">
                                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="font-medium text-slate-200">India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl p-8">
                        <h3 className="text-2xl font-bold text-slate-100 mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition placeholder-slate-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition placeholder-slate-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition placeholder-slate-600"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:from-cyan-500 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition transform hover:-translate-y-1"
                            >
                                {submitted ? 'Message Sent!' : (
                                    <>
                                        Send Message <Send size={18} className="ml-2" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 mt-16 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
