import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import { Trophy, Award, Code2, Target } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            role: 'Cloud DevOps Intern',
            company: 'APSSDC',
            duration: 'May 2025 – Jul 2025',
            achievements: [
                'Deployed and monitored applications on AWS (EC2, S3, CloudWatch), reducing deployment time by 30%',
                'Automated CI/CD pipelines using GitHub Actions, cutting manual intervention by 40%',
                'Improved release reliability through comprehensive testing automation',
                'Managed cloud infrastructure and optimized resource allocation'
            ]
        },
        {
            role: 'AI Intern',
            company: 'Infosys Springboard',
            duration: 'Jan 2025 – Apr 2025',
            achievements: [
                'Developed AI-based knowledge graph system extracting semantic relationships from unstructured text',
                'Implemented interactive graph visualization enabling cross-domain insights exploration',
                'Integrated NER and Transformer models for entity extraction and relationship mapping',
                'Deployed using Streamlit & Docker with feedback-driven refinement workflow',
                'Built semantic search functionality for natural language queries'
            ]
        }
    ];

    const achievements = [
        {
            icon: Trophy,
            title: 'Smart India Hackathon 2023',
            description: 'Led a team to build a self-appraisal automation system, reducing processing time by 60%',
            color: 'from-amber-500 to-amber-600',
            year: '2023'
        },
        {
            icon: Award,
            title: 'Hacksky by Kaspersky',
            description: 'Built an ML-based deepfake detection app, securing Top 15 among 500+ teams nationwide',
            color: 'from-purple-500 to-purple-600',
            year: '2024'
        },
        {
            icon: Code2,
            title: 'ACM Coding Competitions',
            description: 'Consistently placed in the Top 15 in multiple algorithmic programming contests',
            color: 'from-blue-500 to-blue-600',
            year: '2023-2024'
        }
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
                        Experience & Achievements
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Building real-world impact through internships, hackathons, and competitive programming
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3"
                    >
                        <Target className="w-8 h-8 text-blue-600" />
                        Professional Experience
                    </motion.h2>
                    <Timeline experiences={experiences} />
                </div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Notable Achievements
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700 hover:shadow-2xl transition-all"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {achievement.title}
                                        </h3>
                                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                            {achievement.year}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {achievement.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Impact Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl p-8 md:p-12 shadow-xl"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Measurable Impact
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-3">30%</div>
                            <p className="text-white/90 text-lg">
                                Reduction in deployment time through CI/CD automation
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-3">60%</div>
                            <p className="text-white/90 text-lg">
                                Time saved in appraisal processing at SIH 2023
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-3">Top 15</div>
                            <p className="text-white/90 text-lg">
                                Among 500+ teams in national cybersecurity hackathon
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
