const mongoose = require('mongoose');
const Portfolio = require('./models/Portfolio');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => console.log(err));

const resumeData = {
    name: "Mehul Sagar Sinha",
    title: "Full Stack Developer",
    summary: "Enthusiastic and detail-oriented web developer with experience in creating responsive web applications and managing data projects. Passionate about learning new technologies and delivering user-focused solutions, with a strong interest in data analysis and web development.",
    email: "mehulsinha528@gmail.com",
    phone: "7667209531",
    linkedin: "https://linkedin.com/in/mehul8629",
    github: "https://github.com/mehul825",
    skills: [
        {
            category: "Programming Languages",
            items: ["Python", "Java", "JavaScript (ES6+)", "PHP", "SQL"]
        },
        {
            category: "Frontend",
            items: ["React.js", "Angular", "HTML", "CSS", "Bootstrap"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Django", "REST APIs"]
        },
        {
            category: "Databases",
            items: ["MongoDB", "PostgreSQL", "MySQL"]
        },
        {
            category: "GenAI & Modern Tools",
            items: ["GenAI (Interest)", "Cursor", "Antigravity"]
        },
        {
            category: "Office Productivity",
            items: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Google Sheets", "Google Forms"]
        }
    ],
    experience: [
        {
            company: "NMBR SYSTEMS PRIVATE LIMITED",
            role: "Data Collector (Data Analyst Trainee)",
            duration: "Feb 2025 - Present",
            description: [
                "Project: Data Management & Reporting - Government Healthcare Project (BMSICL)",
                "Supported the ITPMU team at Bihar Medical Services & Infrastructure Corporation Limited (BMSICL) in driving data-based decision-making for healthcare infrastructure.",
                "Cleaned, transformed, and analyzed 50,000+ healthcare Infra records, generating 10+ detailed Excel reports with actionable insights for stakeholders.",
                "Designed and delivered PowerPoint presentations that translated complex healthcare data into clear, strategic insights for leadership."
            ]
        },
        {
            company: "Team Infits",
            role: "Web Development Intern",
            duration: "Oct 2024 - Jan 2025",
            description: [
                "Contributed to developing and maintaining responsive web applications using HTML, CSS, JavaScript, React, Node.js, and MySQL.",
                "Collaborated with senior developers to integrate front-end designs with backend functionalities, enhancing overall performance and user experience.",
                "Gained hands-on experience in debugging, code optimization, and database management while working in an agile development environment."
            ]
        }
    ],
    projects: [
        {
            title: "E-COMMERCE WEB APPLICATION",
            description: [
                "Developed a feature-rich E-commerce Web Application enabling seamless shopping experiences with secure user authentication and intuitive navigation.",
                "Implemented product catalog, shopping cart, and order management functionalities to streamline the entire purchase flow.",
                "Built an admin dashboard for efficient product, order, and user account management with real-time updates.",
                "Utilized React.js, Node.js, Express.js, MySQL, and Redux to ensure responsive design, scalability, and optimal performance."
            ],
            techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Redux"],
            link: "#",
            github: "#"
        },
        {
            title: "LIBRARY MANAGEMENT SYSTEM",
            description: [
                "Designed and developed a Library Management System to efficiently manage books, memberships, and borrowing records.",
                "Implemented user authentication, dashboard, and book management features to enhance usability and security.",
                "Created a borrowing system and user profile module for easy tracking of issued and returned books.",
                "Utilized HTML, CSS, JavaScript, Bootstrap, PHP, and SQL to build a responsive and user-friendly interface."
            ],
            techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "SQL"],
            link: "#",
            github: "#"
        }
    ],
    education: [
        {
            institution: "Dayananda Sagar University, Bengaluru",
            degree: "Master of Computer Applications",
            duration: "Nov 2022 - Aug 2024",
            location: "Bengaluru, Karnataka"
        },
        {
            institution: "Gossner College, Ranchi",
            degree: "Bachelor of Information Technology",
            duration: "Aug 2019 - Sept 2022",
            location: "Ranchi, Jharkhand"
        }
    ],
    certifications: [
        "Web Development - NSDC (Skill India)",
        "Java - Infosys, Springboard",
        "JavaScript - Udemy",
        "ReactJS - Infosys, Springboard",
        "Debugging JavaScript & Node.js - Udemy",
        "Machine Learning Professional - RapidMiner"
    ]
};

const seedDB = async () => {
    await Portfolio.deleteMany({});
    await Portfolio.create(resumeData);
    console.log('Database Seeded');
    mongoose.connection.close();
};

seedDB();
