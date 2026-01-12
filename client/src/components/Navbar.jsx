import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = ({ profile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-slate-100 tracking-tight">
                            {profile?.name ? profile.name.split(' ')[0] : 'Portfolio'}
                            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">.</span>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex check-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-cyan-400 font-medium transition-colors relative group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {profile?.github && (
                            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                                <Github size={20} />
                            </a>
                        )}
                        {profile?.linkedin && (
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-transform hover:scale-110 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
                                <Linkedin size={20} />
                            </a>
                        )}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-cyan-400 p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-white/5 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-slate-300 hover:text-cyan-400 hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium transition-colors border-l-2 border-transparent hover:border-cyan-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav >
    );
};

export default Navbar;
