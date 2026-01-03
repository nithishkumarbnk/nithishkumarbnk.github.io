import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cloud, Shield, Github, Linkedin, Mail, Download, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function Home() {
    const stats = [
        { icon: Award, label: 'Hackathon Wins', value: '3+', color: 'text-amber-500' },
        { icon: Briefcase, label: 'Internships', value: '2', color: 'text-emerald-500' },
        { icon: Code2, label: 'Major Projects', value: '10+', color: 'text-blue-500' },
        { icon: GraduationCap, label: 'Certifications', value: '5+', color: 'text-purple-500' },
    ];

    const specializations = [
        {
            icon: Cloud,
            title: 'Cloud & DevOps',
            description: 'AWS, GCP, Docker, CI/CD automation reducing deployment time by 30%',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Shield,
            title: 'Generative AI',
            description: 'AI security, knowledge graphs, deepfake detection with high accuracy',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: Code2,
            title: 'Full-Stack Dev',
            description: 'React, Node.js, MongoDB, blockchain-based systems',
            gradient: 'from-emerald-500 to-teal-500'
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Animated background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
                                👋 Hey there! I'm Nithish Kumar
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Building Secure, Scalable
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                                Systems at the Edge of AI
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                        >
                            Final-year Computer Science student specializing in <strong>Cloud, DevOps, and Generative AI</strong>.
                            From threat analysis platforms to blockchain systems—I turn complex problems into elegant solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                        >
                            <Link
                                to={createPageUrl('Projects')}
                                className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                View My Work
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to={createPageUrl('Contact')}
                                className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-slate-600 rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 transition-all"
                            >
                                Get in Touch
                            </Link>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex justify-center gap-4"
                        >
                            <a
                                href="https://github.com/nithishkumarbnk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors shadow-md"
                            >
                                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            </a>
                            <a
                                href="https://linkedin.com/in/nithish18k"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors shadow-md"
                            >
                                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            </a>
                            <a
                                href="mailto:nithishkumarbhuvaneswaram@gmail.com"
                                className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors shadow-md"
                            >
                                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <Icon className={`w-12 h-12 mx-auto mb-3 ${stat.color}`} />
                                    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Specializations Section */}
            <section className="py-20 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            What I Do Best
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Combining cutting-edge technologies to build impactful solutions
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {specializations.map((spec, index) => {
                            const Icon = spec.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-slate-700"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-r ${spec.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {spec.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {spec.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Open to opportunities in Cloud Engineering, DevOps, and AI Development
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to={createPageUrl('Contact')}
                                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
                            >
                                Contact Me
                            </Link>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
