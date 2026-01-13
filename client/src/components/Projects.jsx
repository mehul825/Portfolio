import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Palette, Code2, ArrowRight } from 'lucide-react';

const Projects = ({ projects }) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects?.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-600 transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                                            <Code2 className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div className="flex gap-2">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="text-slate-600 mb-6 flex-grow line-clamp-3 text-sm">
                                        {Array.isArray(project.description)
                                            ? project.description.join(' ')
                                            : project.description}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.techStack?.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-full border border-slate-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                        >
                            View More on GitHub <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Projects;
