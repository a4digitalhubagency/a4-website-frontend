import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
                        <img
                            src={logo}
                            alt="A4 Technologies Logo"
                            className="h-10 md:h-12 w-auto transition-transform group-hover:scale-110"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2 mx-auto">
                        {navLinks.map((link) => (
                            <Link key={link.href} to={link.href}>
                                <Button
                                    variant={isActive(link.href) ? "ghost" : "ghost"}
                                    size="sm"
                                    className={`transition-all ${isActive(link.href)
                                            ? "text-blue-600 bg-blue-50/50 border-b-2 border-blue-600"
                                            : "text-slate-600 hover:text-slate-900"
                                        }`}
                                >
                                    {link.label}
                                </Button>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                        <Link to="/contact">
                            <Button variant="hero" size="sm">
                                Get Free Consultation
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden py-4 border-t border-slate-200/50 bg-white/95 backdrop-blur-sm animate-fade-in">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className={`w-full justify-start transition-all ${isActive(link.href)
                                                ? "text-blue-600 bg-blue-50/50 font-semibold"
                                                : "text-slate-700"
                                            }`}
                                    >
                                        {link.label}
                                    </Button>
                                </Link>
                            ))}
                            <div className="my-2 border-t border-slate-200" />
                            <Link to="/contact" onClick={() => setIsOpen(false)}>
                                <Button variant="hero" size="sm" className="w-full">
                                    Get Free Consultation
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
