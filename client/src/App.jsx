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
                const status = err.response?.status;
                const message = err.response?.data?.message || err.message;
                setError(`Failed to load portfolio data. Status: ${status || 'Unknown'}. Message: ${message}`);
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
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-red-500 p-4 text-center">
                <h2 className="text-2xl font-bold mb-2">Error Loading Data</h2>
                <p className="mb-4">{error}</p>
                <div className="bg-slate-800 p-4 rounded text-left text-sm font-mono text-slate-300 whitespace-pre-wrap max-w-2xl overflow-auto border border-slate-700">
                    <p>Possible causes:</p>
                    <ul className="list-disc pl-5 mb-2">
                        <li>MongoDB URI is missing in Netlify Settings</li>
                        <li>Database is empty (did you run the seed script?)</li>
                        <li>Network Access in MongoDB Atlas not allowing all IPs (0.0.0.0/0)</li>
                    </ul>
                </div>
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
