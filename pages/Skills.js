import React from 'react';
import { motion } from 'framer-motion';
import SkillBadge from '../components/SkillBadge';
import { Code2, Database, Cloud, Wrench, Award } from 'lucide-react';

export default function Skills() {
    const skillCategories = [
        {
            category: 'Languages',
            icon: Code2,
            color: 'from-blue-500 to-blue-600',
            skills: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Solidity']
        },
        {
            category: 'Frameworks',
            icon: Code2,
            color: 'from-emerald-500 to-emerald-600',
            skills: ['React', 'Flask', 'Node.js', 'Express.js', 'web3.js', 'Scikit-learn', 'Streamlit']
        },
        {
            category: 'Databases',
            icon: Database,
            color: 'from-purple-500 to-purple-600',
            skills: ['MongoDB', 'MongoDB Atlas', 'MySQL', 'PostgreSQL']
        },
        {
            category: 'Cloud',
            icon: Cloud,
            color: 'from-amber-500 to-amber-600',
            skills: ['AWS EC2', 'AWS S3', 'CloudWatch', 'Google Cloud Platform', 'Docker', 'CI/CD', 'GitHub Actions', 'OpenShift']
        },
        {
            category: 'Tools',
            icon: Wrench,
            color: 'from-pink-500 to-pink-600',
            skills: ['Git', 'Postman', 'Jupyter Notebook', 'Langflow', 'Truffle', 'Hugging Face']
        },
    ];

    const certifications = [
        {
            name: 'Google Associate Cloud Engineer',
            issuer: 'Google Cloud',
            icon: '☁️'
        },
        {
            name: 'Red Hat Specialist in OpenShift Administration',
            issuer: 'Red Hat',
            icon: '🎓'
        },
        {
            name: 'Programming in Java',
            issuer: 'NPTEL',
            icon: '☕'
        },
        {
            name: 'UiPath RPA Developer Foundation',
            issuer: 'UiPath',
            icon: '🤖'
        },
        {
            name: 'Generative AI Fundamentals',
            issuer: 'Google Cloud',
            icon: '🧠'
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills & Expertise
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications
                    </p>
                </motion.div>

                {/* Skills Categories */}
                <div className="space-y-12 mb-20">
                    {skillCategories.map((category, categoryIndex) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: categoryIndex * 0.1 }}
                            >
                                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {category.category}
                                        </h2>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="flex flex-wrap gap-3">
                                        {category.skills.map((skill, index) => (
                                            <SkillBadge
                                                key={skill}
                                                skill={skill}
                                                index={index}
                                                category={category.category}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl p-8 shadow-xl text-white mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="w-8 h-8" />
                            <h2 className="text-3xl font-bold">Certifications</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
                                >
                                    <div className="text-4xl mb-3">{cert.icon}</div>
                                    <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                                    <p className="text-white/80 text-sm">{cert.issuer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Technical Proficiency
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                Cloud & DevOps
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                AWS, GCP, Docker, CI/CD automation, reducing deployment time by 30%
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                                Full-Stack Development
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                React, Node.js, MongoDB, Flask—building end-to-end solutions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                AI & Security
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                ML models, NLP, deepfake detection, blockchain-based systems
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
