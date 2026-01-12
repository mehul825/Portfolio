import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2 } from 'lucide-react';

const Experience = ({ experience }) => {
    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className="py-20 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-100 mb-4">Experience</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative border-l border-cyan-500/20 ml-4 md:ml-6 space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-950 border-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

                            <div className="bg-slate-800/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                                        <div className="flex items-center gap-2 mt-2 text-cyan-400 font-medium">
                                            <Building2 size={16} />
                                            <h4>{exp.company}</h4>
                                        </div>
                                    </div>
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mt-4 md:mt-0">
                                        <Briefcase size={14} className="mr-2" />
                                        {exp.duration}
                                    </span>
                                </div>

                                <ul className="space-y-3">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="flex items-start text-slate-400">
                                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></span>
                                            <span className="leading-relaxed group-hover:text-slate-300 transition-colors">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
