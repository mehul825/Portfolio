import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ profile }) => {
    if (!profile) return null;

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-slate-900">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 text-cyan-400 font-medium text-sm tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Available for Freelance & Full-time
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-8xl font-bold text-slate-100 tracking-tight mb-8 leading-tight"
                    >
                        Building <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                            Digital Experiences
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400 mb-10 max-w-2xl mx-auto"
                    >
                        I'm <span className="font-semibold text-slate-200">{profile.name}</span>, a {profile.title} crafting high-performance web applications.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1"
                        >
                            View Projects
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg text-slate-300 bg-slate-900/50 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
