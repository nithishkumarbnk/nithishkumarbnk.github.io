import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);
    const location = useLocation();

    React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const navLinks = [
        { name: 'Home', path: 'Home' },
        { name: 'About', path: 'About' },
        { name: 'Skills', path: 'Skills' },
        { name: 'Projects', path: 'Projects' },
        { name: 'Experience', path: 'Experience' },
        { name: 'Contact', path: 'Contact' },
    ];

    const isActive = (pageName) => {
        return currentPageName === pageName || location.pathname === createPageUrl(pageName);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <style>{`
                :root {
                    --color-primary: #2563EB;
                    --color-secondary: #10B981;
                    --color-accent: #F59E0B;
                }
                .dark {
                    --color-bg: #0F172A;
                    --color-text: #F8FAFC;
                }
            `}</style>

            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to={createPageUrl('Home')} className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">NK</span>
                            </div>
                            <span className="font-bold text-xl text-gray-900 dark:text-white hidden sm:block">
                                Nithish Kumar
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={createPageUrl(link.path)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                        isActive(link.path)
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Dark Mode Toggle & Mobile Menu */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? (
                                    <Sun className="w-5 h-5 text-amber-500" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-700" />
                                )}
                            </button>

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200 dark:border-slate-800">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={createPageUrl(link.path)}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                        isActive(link.path)
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-16">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
                                Nithish Kumar
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Cloud, DevOps & Generative AI Engineer building secure, scalable applications.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
                                Quick Links
                            </h3>
                            <div className="space-y-2">
                                {navLinks.slice(0, 4).map((link) => (
                                    <Link
                                        key={link.path}
                                        to={createPageUrl(link.path)}
                                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
                                Connect
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/nithishkumarbnk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
                                >
                                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/nithish18k"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                </a>
                                <a
                                    href="mailto:nithishkumarbhuvaneswaram@gmail.com"
                                    className="p-3 bg-white dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
                                >
                                    <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © 2025 Nithish Kumar Bhuvaneswaram. Built with React & Tailwind CSS.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
