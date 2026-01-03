import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300"
        >
            {/* Header with gradient */}
            <div className="h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                    <ul className="space-y-2 mb-4">
                        {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <span className="text-emerald-500 mr-2">▸</span>
                                {highlight}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech Stack */}
                <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">TECH STACK</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{project.stack}</p>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-slate-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-slate-600 transition-colors text-sm font-medium"
                        >
                            <Github className="w-4 h-4" />
                            Code
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
