import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = ({ education, skills, summary, certifications }) => {
    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-8"></div>
                        {summary && (
                            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                {summary}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Education Section */}
                        <div className="bg-white/70 backdrop-blur-md border border-slate-200 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                            <div className="flex items-center mb-8">
                                <div className="p-3 bg-indigo-50 rounded-lg mr-4">
                                    <GraduationCap className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Education</h2>
                            </div>
                            <div className="space-y-8">
                                {education?.map((edu, index) => (
                                    <div key={index} className="relative pl-6 border-l w-full border-indigo-200">
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                                        <h3 className="text-xl font-semibold text-slate-800">{edu.institution}</h3>
                                        <p className="text-lg text-indigo-600 font-medium mt-1">{edu.degree}</p>
                                        <div className="flex justify-between text-sm text-slate-500 mt-2">
                                            <span>{edu.duration}</span>
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications Section (Moved here) */}
                        <div className="bg-white/70 backdrop-blur-md border border-slate-200 p-8 rounded-2xl hover:border-indigo-500/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                            <div className="flex items-center mb-8">
                                <div className="p-3 bg-teal-50 rounded-lg mr-4">
                                    <Award className="w-8 h-8 text-teal-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Certifications</h2>
                            </div>
                            <div className="space-y-4">
                                {certifications?.map((cert, index) => (
                                    <div key={index} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-teal-500/50 transition-all">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 mr-3 flex-shrink-0"></div>
                                        <span className="text-slate-700 font-medium leading-relaxed">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills Section (Full width below) */}
                    <div className="bg-white/70 backdrop-blur-md border border-slate-200 p-8 rounded-2xl hover:border-purple-500/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                        <div className="flex items-center mb-8">
                            <div className="p-3 bg-purple-50 rounded-lg mr-4">
                                <BookOpen className="w-8 h-8 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Technical Skills</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {skills?.map((skillGroup, index) => (
                                <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2">
                                        {skillGroup.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((item, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm rounded-full hover:bg-slate-100 hover:text-indigo-600 transition-colors cursor-default shadow-sm"
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
