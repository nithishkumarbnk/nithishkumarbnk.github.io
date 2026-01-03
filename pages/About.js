import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone, GraduationCap, Award, Target } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        About Me
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Passionate about building the future, one line of code at a time
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Profile Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1"
                    >
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700 sticky top-24">
                            {/* Avatar */}
                            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full flex items-center justify-center">
                                <span className="text-5xl font-bold text-white">NK</span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                                Nithish Kumar
                            </h2>
                            <p className="text-center text-blue-600 dark:text-blue-400 font-semibold mb-6">
                                Cloud & AI Engineer
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <MapPin className="w-4 h-4 text-emerald-500" />
                                    Guntur, Andhra Pradesh
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <Mail className="w-4 h-4 text-emerald-500" />
                                    <a href="mailto:nithishkumarbhuvaneswaram@gmail.com" className="hover:text-blue-600">
                                        nithishkumarbhuvaneswaram@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                                    <Phone className="w-4 h-4 text-emerald-500" />
                                    +91 9014997188
                                </div>
                            </div>

                            {/* Download Resume Button */}
                            <a
                                href="/resume.pdf"
                                download
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Bio & Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 space-y-8"
                    >
                        {/* Bio */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Target className="w-6 h-6 text-blue-600" />
                                My Story
                            </h3>
                            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                                <p className="mb-4">
                                    I'm <strong>Nithish Kumar</strong>, a final-year Computer Science student passionate about building 
                                    secure, scalable applications at the intersection of <strong>Cloud, DevOps, and Generative AI</strong>.
                                </p>
                                <p className="mb-4">
                                    From architecting threat analysis platforms that detect deepfakes with high accuracy to engineering 
                                    blockchain-based supply chain solutions, I turn complex problems into elegant systems. My journey 
                                    includes cutting deployment times by <strong>30%</strong> at APSSDC and developing AI-powered knowledge 
                                    graphs at Infosys Springboard.
                                </p>
                                <p className="mb-4">
                                    What drives me? The thrill of solving real-world problems. Whether it's placing <strong>Top 15 among 
                                    500+ teams</strong> in Hacksky by Kaspersky or leading a team to reduce processing time by <strong>60%</strong> 
                                    at Smart India Hackathon, I'm constantly pushing boundaries.
                                </p>
                                <p>
                                    Beyond code, I'm a certified <strong>Google Associate Cloud Engineer</strong> and <strong>Red Hat OpenShift 
                                    Specialist</strong>, always learning and staying ahead of the curve in this fast-evolving tech landscape.
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <GraduationCap className="w-6 h-6 text-emerald-600" />
                                Education
                            </h3>
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    B.Tech in Computer Science and Engineering
                                </h4>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                    Vasireddy Venkatadri Institute of Technology, Guntur
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                    2022 – 2026
                                </p>
                                <p className="text-lg font-semibold text-emerald-600">
                                    CGPA: 8.54/10
                                </p>
                            </div>
                        </div>

                        {/* What I'm Looking For */}
                        <div className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl p-8 shadow-xl text-white">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Award className="w-6 h-6" />
                                What I'm Looking For
                            </h3>
                            <p className="text-lg text-white/90 mb-4">
                                I'm seeking opportunities to join innovative teams where I can:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-white mr-2">▸</span>
                                    Build scalable cloud infrastructure and automate DevOps pipelines
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-2">▸</span>
                                    Develop cutting-edge AI/ML solutions for real-world problems
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-2">▸</span>
                                    Work on security-focused applications and threat detection systems
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-2">▸</span>
                                    Collaborate with passionate engineers on impactful projects
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
