import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/images/A4_technologis_2-removebg-preview.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { label: "Web Development", href: "/services#web-development" },
            { label: "Web Applications", href: "/services#web-apps" },
            { label: "MVP Development", href: "/services#mvp" },
            { label: "Internal Tools", href: "/services#internal-tools" },
            { label: "Bug Fixes", href: "/services#bug-fixes" },
            { label: "Optimization", href: "/services#optimization" },
        ],
        company: [
            { label: "About Us", href: "/about" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
        ],
    };

    return (
        <footer className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center mb-6 group">
                            <img
                                src={logo}
                                alt="A4 Technologies Logo"
                                className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                            Building exceptional digital experiences for startups, businesses, and organizations worldwide.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://x.com/A4digitalHub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all"
                                aria-label="X"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/a4technologies_?igsh=OHd2cWVib3h2YnVk&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-500 hover:border-pink-500 hover:bg-pink-50 transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://wa.me/2348124849188"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-green-600 hover:border-green-600 hover:bg-green-50 transition-all"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-6 text-base">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-6 text-base">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-semibold text-slate-900 mb-6 text-base">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-blue-600 mt-0.5 shrink-0" />
                                <a
                                    href="mailto:a4digitalhubagency1@gmail.com"
                                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    a4digitalhubagency1@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-blue-600 mt-0.5 shrink-0" />
                                <a
                                    href="https://wa.me/2348124849188"
                                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    +234 812 484 9188
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-600 mt-0.5 shrink-0" />
                                <span className="text-sm text-slate-600">
                                    Lagos, Nigeria
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                    <p className="text-xs md:text-sm text-slate-600">
                        © {currentYear} A4 Technologies. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            to="/privacy"
                            className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-xs md:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;