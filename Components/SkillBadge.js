import React from 'react';
import { motion } from 'framer-motion';

export default function SkillBadge({ skill, index, category }) {
    const categoryColors = {
        Languages: 'from-blue-500 to-blue-600',
        Frameworks: 'from-emerald-500 to-emerald-600',
        Databases: 'from-purple-500 to-purple-600',
        Cloud: 'from-amber-500 to-amber-600',
        Tools: 'from-pink-500 to-pink-600',
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
        >
            <div className={`px-5 py-3 bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-600'} rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}>
                <span className="text-white font-medium text-sm">{skill}</span>
            </div>
            <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
}
