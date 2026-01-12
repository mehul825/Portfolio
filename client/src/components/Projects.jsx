import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Palette } from 'lucide-react';

const Projects = ({ projects }) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 group flex flex-col hover:-translate-y-2"
                        >
                            <div className="p-8 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                                        <Palette size={24} />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <div className="space-y-2 mb-6">
                                    {project.description.map((desc, i) => (
                                        <p key={i} className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                                            {desc}
                                        </p>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-slate-800 text-cyan-300 text-xs font-semibold rounded-full border border-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="px-8 py-4 bg-slate-800/80 border-t border-white/5 flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex justify-center items-center py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-sm font-medium"
                                    >
                                        <Github size={16} className="mr-2" />
                                        Code
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex justify-center items-center py-2 rounded-lg bg-cyan-600/10 text-cyan-400 hover:bg-cyan-600 hover:text-white transition-colors text-sm font-medium border border-cyan-500/20 hover:border-cyan-500"
                                    >
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
