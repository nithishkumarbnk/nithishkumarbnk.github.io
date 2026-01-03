import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send the form data to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'nithishkumarbhuvaneswaram@gmail.com',
            href: 'mailto:nithishkumarbhuvaneswaram@gmail.com',
            color: 'text-blue-600'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 9014997188',
            href: 'tel:+919014997188',
            color: 'text-emerald-600'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Guntur, Andhra Pradesh, India',
            href: null,
            color: 'text-purple-600'
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            url: 'https://github.com/nithishkumarbnk',
            username: '@nithishkumarbnk',
            color: 'hover:bg-gray-900 hover:text-white'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/nithish18k',
            username: '@nithish18k',
            color: 'hover:bg-blue-600 hover:text-white'
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
                        Let's Connect
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Open to opportunities in Cloud Engineering, DevOps, and AI Development. Let's build something amazing together!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Get in Touch
                            </h2>
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
                                                <Icon className={`w-6 h-6 ${info.color}`} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                    {info.label}
                                                </p>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-900 dark:text-white font-semibold">
                                                        {info.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Follow Me
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 transition-all ${social.color}`}
                                        >
                                            <Icon className="w-8 h-8 mb-3" />
                                            <p className="font-bold text-lg">{social.label}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {social.username}
                                            </p>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl p-6 shadow-xl text-white"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                                <h3 className="font-bold text-lg">Currently Available</h3>
                            </div>
                            <p className="text-white/90">
                                Open to full-time opportunities, internships, and freelance projects in Cloud, DevOps, and AI domains.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Send a Message
                            </h2>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Thanks for reaching out. I'll get back to you soon!
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Your Name
                                        </label>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Subject
                                        </label>
                                        <Input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Job Opportunity / Collaboration"
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project or opportunity..."
                                            required
                                            rows={6}
                                            className="w-full"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-6 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
