import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: 'Sentinel-PRO',
            tags: ['Generative AI', 'Security', 'Computer Vision', 'NLP'],
            description: 'Advanced threat analysis platform that detects manipulated video, audio, and text content with high detection accuracy using state-of-the-art AI models.',
            highlights: [
                'Architected multimodal analysis system integrating video, audio, and text deepfake detection',
                'Integrated Faster-Whisper for audio transcription and Groq APIs for intelligent analysis',
                'Built unified dashboard for real-time threat visualization and reporting',
                'Deployed on Hugging Face Spaces with Docker containerization'
            ],
            stack: 'Python, Streamlit, Docker, Hugging Face Spaces, Faster-Whisper, Groq API',
            github: 'https://github.com/nithishkumarbnk',
            demo: '#'
        },
        {
            title: 'Anti-Counterfeit Drug System',
            tags: ['Blockchain', 'Supply Chain', 'Web3', 'Security'],
            description: 'Blockchain-based pharmaceutical supply chain system ensuring drug authenticity and preventing counterfeiting through tamper-proof ledger technology.',
            highlights: [
                'Engineered smart contracts using Solidity and Truffle for immutable drug tracking',
                'Implemented role-based access control for manufacturers, distributors, and pharmacies',
                'Built secure REST APIs with Node.js and MongoDB for supply chain management',
                'Developed React frontend with web3.js integration for blockchain interaction'
            ],
            stack: 'Solidity, Truffle, Node.js, React, web3.js, MongoDB, Docker',
            github: 'https://github.com/nithishkumarbnk',
            demo: '#'
        },
        {
            title: 'Agricultural Yield Optimization',
            tags: ['Machine Learning', 'Agriculture', 'Flask', 'Data Science'],
            description: 'ML-powered crop recommendation engine helping farmers make data-driven decisions based on soil composition and weather patterns.',
            highlights: [
                'Built recommendation system achieving 83% prediction accuracy using ML models',
                'Processed and analyzed soil nutrients, pH levels, and climate data',
                'Developed intuitive web interface for farmers to input field parameters',
                'Integrated MongoDB for storing historical crop performance data'
            ],
            stack: 'Python, Flask, HTML/CSS, MongoDB, Scikit-learn, Pandas',
            github: 'https://github.com/nithishkumarbnk',
            demo: null
        },
        {
            title: 'AI Knowledge Graph System',
            tags: ['AI', 'NLP', 'Knowledge Graph', 'Transformers'],
            description: 'Intelligent knowledge extraction system that builds semantic relationship graphs from unstructured text using NER and Transformers.',
            highlights: [
                'Developed NER pipeline for entity extraction from documents',
                'Implemented graph visualization for exploring cross-domain insights',
                'Built semantic search enabling natural language queries',
                'Deployed with Streamlit UI and Docker containerization'
            ],
            stack: 'Python, Transformers, NER, Streamlit, Docker, NetworkX',
            github: null,
            demo: null
        },
        {
            title: 'Smart India Hackathon - Self-Appraisal System',
            tags: ['Hackathon', 'Automation', 'Full-Stack', 'Winner'],
            description: 'Automated performance appraisal system reducing HR processing time by 60% through intelligent workflows and data analysis.',
            highlights: [
                'Led team of 6 developers to win Smart India Hackathon 2023',
                'Reduced appraisal processing time from 5 days to 2 days',
                'Implemented automated KPI tracking and performance analytics',
                'Built role-based dashboards for employees, managers, and HR'
            ],
            stack: 'React, Node.js, MongoDB, Express.js',
            github: null,
            demo: null
        },
        {
            title: 'Hacksky - Deepfake Detection App',
            tags: ['ML', 'Computer Vision', 'Security', 'Top 15'],
            description: 'ML-based deepfake detection application securing Top 15 position among 500+ teams nationwide at Hacksky by Kaspersky.',
            highlights: [
                'Achieved Top 15 ranking among 500+ teams in national competition',
                'Developed CNN-based model for detecting facial manipulations',
                'Built real-time video analysis pipeline for threat detection',
                'Implemented user-friendly interface for uploading and analyzing media'
            ],
            stack: 'Python, TensorFlow, OpenCV, Flask, React',
            github: null,
            demo: null
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
                        Featured Projects
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Building impactful solutions across AI, Cloud, Blockchain, and Full-Stack Development
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-slate-700">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-slate-700">
                        <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">3</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Hackathon Wins</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-slate-700">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">83%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">ML Accuracy</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-slate-700">
                        <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">60%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Time Saved</div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl p-8 text-center shadow-xl"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Want to See More?
                    </h2>
                    <p className="text-white/90 mb-6 text-lg">
                        Check out my GitHub for additional projects, contributions, and code samples
                    </p>
                    <a
                        href="https://github.com/nithishkumarbnk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
                    >
                        Visit My GitHub
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
