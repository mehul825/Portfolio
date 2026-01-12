import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get('/api/portfolio');
                setProfile(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to load portfolio data. Please try again later.");
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar profile={profile} />
            <Hero profile={profile} />
            <About
                education={profile?.education}
                skills={profile?.skills}
                summary={profile?.summary}
                certifications={profile?.certifications}
            />
            <Experience experience={profile?.experience} />
            <Projects projects={profile?.projects} />
            <Contact profile={profile} />
        </div>
    );
}

export default App;
