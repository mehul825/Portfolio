import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = ({ education, skills, summary, certifications }) => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-100 mb-4">About Me</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mb-8"></div>
                        {summary && (
                            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                {summary}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Education Section */}
                        <div className="bg-slate-800/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors duration-300">
                            <div className="flex items-center mb-8">
                                <div className="p-3 bg-cyan-500/10 rounded-lg mr-4">
                                    <GraduationCap className="w-8 h-8 text-cyan-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-100">Education</h2>
                            </div>
                            <div className="space-y-8">
                                {education?.map((edu, index) => (
                                    <div key={index} className="relative pl-6 border-l w-full border-cyan-500/20">
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                                        <h3 className="text-xl font-semibold text-slate-200">{edu.institution}</h3>
                                        <p className="text-lg text-cyan-400 font-medium mt-1">{edu.degree}</p>
                                        <div className="flex justify-between text-sm text-slate-500 mt-2">
                                            <span>{edu.duration}</span>
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications Section (Moved here) */}
                        <div className="bg-slate-800/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors duration-300">
                            <div className="flex items-center mb-8">
                                <div className="p-3 bg-emerald-500/10 rounded-lg mr-4">
                                    <Award className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-100">Certifications</h2>
                            </div>
                            <div className="space-y-4">
                                {certifications?.map((cert, index) => (
                                    <div key={index} className="flex items-start p-4 bg-slate-900/50 rounded-xl border border-white/5 hover:border-emerald-500/20 transition-all">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 mr-3 shadow-[0_0_8px_rgba(16,185,129,0.5)] flex-shrink-0"></div>
                                        <span className="text-slate-300 font-medium leading-relaxed">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Section (Full width below) */}
                    <div className="bg-slate-800/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-violet-500/30 transition-colors duration-300">
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-violet-500/10 rounded-lg mr-4">
                                <BookOpen className="w-8 h-8 text-violet-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-100">Technical Skills</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {skills?.map((skillGroup, index) => (
                                <div key={index} className="bg-slate-900/30 p-6 rounded-xl border border-white/5">
                                    <h3 className="text-lg font-semibold text-slate-200 mb-4 border-b border-white/5 pb-2">
                                        {skillGroup.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-full hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
