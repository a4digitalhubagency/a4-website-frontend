import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    Target,
    Eye,
    Heart,
    Users,

    Globe,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        icon: Target,
        title: "Excellence",
        description:
            "We pursue excellence in every line of code, every design decision, and every client interaction.",
    },
    {
        icon: Heart,
        title: "Integrity",
        description:
            "Honest communication and transparent processes are the foundation of our client relationships.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "We work as true partners with our clients, treating their success as our own.",
    },
    {
        icon: Eye,
        title: "Innovation",
        description:
            "Staying ahead of technology trends to deliver cutting-edge solutions that stand the test of time.",
    },
];

const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Team Members" },
];

const About = () => {
    const statsRef = useRef<HTMLDivElement>(null);
    const valuesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const statCards = statsRef.current?.children;
            if (statCards) {
                gsap.fromTo(
                    statCards,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: "top 85%",
                        },
                    }
                );
            }

            const valueCards = valuesRef.current?.children;
            if (valueCards) {
                gsap.fromTo(
                    valueCards,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: valuesRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                            About <span className="gradient-text">A4 Technologies</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            We're a passionate team of developers, designers, and strategists
                            dedicated to building software that makes a difference.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    A4 Technologies was founded with a simple mission: to help
                                    businesses harness the power of technology without the
                                    complexity. We saw too many companies struggle with software
                                    projects that went over budget, missed deadlines, or simply
                                    didn't deliver results.
                                </p>
                                <p>
                                    Today, we're a trusted software development agency serving
                                    startups, small businesses, and established organizations
                                    worldwide. Our team combines technical expertise with business
                                    acumen to deliver solutions that don't just work—they drive
                                    real growth.
                                </p>
                                <p>
                                    Whether you're a founder looking to build your MVP, a business
                                    needing internal tools, or a company seeking website
                                    optimization, we're here to make technology work for you.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div ref={statsRef} className="grid grid-cols-2 gap-6">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-border/50 text-center hover:shadow-lg transition-all duration-300 opacity-0"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-muted-foreground text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gradient-to-b from-blue-50/30 to-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-white border border-border/50 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Our Mission
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To empower businesses with technology solutions that are
                                accessible, scalable, and impactful. We believe great software
                                shouldn't be complicated or expensive—it should be a catalyst
                                for growth.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white border border-border/50 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
                                <Eye className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Our Vision
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To be the go-to technology partner for businesses of all sizes,
                                known for delivering exceptional quality, transparent
                                communication, and solutions that truly make a difference.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            The principles that guide everything we do.
                        </p>
                    </div>

                    <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="p-6 rounded-2xl bg-white border border-border/50 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-5">
                                    <value.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Reach */}
            <section className="section-padding bg-gradient-to-br from-primary via-blue-600 to-indigo-700">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                            <Globe className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Global Reach, Local Touch
                        </h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Based in San Francisco, we work with clients across the globe.
                            Whether you're a startup in Silicon Valley or a business in
                            Europe, we deliver the same exceptional quality and dedication.
                        </p>
                        <Link to="/contact">
                            <Button variant="secondary" size="lg" className="group bg-white text-primary hover:bg-blue-50 font-semibold shadow-xl">
                                Work With Us
                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
