const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: String,
    level: Number,
    category: String
});

const ExperienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    duration: String,
    description: [String]
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: [String],
    techStack: [String],
    link: String,
    github: String
});

const EducationSchema = new mongoose.Schema({
    institution: String,
    degree: String,
    duration: String,
    location: String
});

const ProfileSchema = new mongoose.Schema({
    name: String,
    title: String,
    summary: String,
    email: String,
    phone: String,
    linkedin: String,
    github: String,
    skills: [
        {
            category: String,
            items: [String]
        }
    ],
    experience: [ExperienceSchema],
    projects: [ProjectSchema],
    education: [EducationSchema],
    certifications: [String]
});

module.exports = mongoose.model('Profile', ProfileSchema);
