import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar } from 'lucide-react';

const Experience = ({ experience }) => {
    if (!experience || experience.length === 0) return null; // Safe check

    return (
        <section id="experience" className="py-20 bg-slate-50 relative">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-12">
                        {experience?.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-0"
                            >
                                <div className="md:flex items-start justify-between group">
                                    {/* Timeline Line (Desktop) */}
                                    <div className="hidden md:block absolute left-[50%] top-0 bottom-[-48px] w-px bg-slate-200 group-last:bottom-0"></div>
                                    <div className="hidden md:block absolute left-[50%] top-8 w-4 h-4 rounded-full bg-indigo-600 -translate-x-1/2 shadow-[0_0_10px_rgba(79,70,229,0.5)] z-10"></div>

                                    {/* Timeline Line (Mobile) */}
                                    <div className="md:hidden absolute left-0 top-0 bottom-[-48px] w-px bg-slate-200 group-last:bottom-0"></div>
                                    <div className="md:hidden absolute left-0 top-2 w-3 h-3 rounded-full bg-indigo-600 -translate-x-1/2 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>

                                    {/* Content Card (Right for even, Left for odd on Desktop - Simplified to one side for now or alternating) */}
                                    {/* To keep it simple and clean, let's just make it a nice list with cards */}
                                    <div className="w-full bg-white/70 backdrop-blur-md border border-slate-200 p-6 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                                                <div className="flex items-center text-indigo-600 font-medium mt-1">
                                                    <Briefcase size={16} className="mr-2" />
                                                    {exp.company}
                                                </div>
                                            </div>
                                            <div className="flex items-center text-slate-500 text-sm mt-2 md:mt-0 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                                                <Calendar size={14} className="mr-2" />
                                                {exp.duration}
                                            </div>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed mb-4">{exp.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Experience;
