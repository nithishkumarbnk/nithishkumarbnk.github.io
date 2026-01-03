import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Timeline({ experiences }) {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-500" />

            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`relative mb-12 ${
                        index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                    }`}
                >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 transform -translate-x-1/2 shadow-lg" />

                    {/* Content card */}
                    <div className="ml-16 md:ml-0 md:w-5/12">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                        {exp.role}
                                    </h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                                        {exp.company}
                                    </p>
                                </div>
                                <Briefcase className="w-5 h-5 text-emerald-500" />
                            </div>

                            {/* Date & Location */}
                            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {exp.duration}
                                </div>
                            </div>

                            {/* Achievements */}
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, idx) => (
                                    <li
                                        key={idx}
                                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start"
                                    >
                                        <span className="text-emerald-500 mr-2 mt-1">▸</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
