import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Globe,
    Layers,
    Rocket,
    Settings,
    Bug,
    Zap,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    // your services array stays the same
];

const Services = () => {
    const servicesRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const serviceBlocks = servicesRef.current?.querySelectorAll(".service-block");
            if (serviceBlocks) {
                serviceBlocks.forEach((block) => {
                    gsap.fromTo(
                        block,
                        { opacity: 0, y: 60 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            scrollTrigger: {
                                trigger: block,
                                start: "top 85%",
                            },
                        }
                    );
                });
            }
        }, servicesRef);
        return () => ctx.revert();
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                            Software Development{" "}
                            <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                            From web development to MVP builds, we offer comprehensive
                            software solutions tailored to startups, businesses, and
                            organizations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section ref={servicesRef} className="pb-12 md:pb-20">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="space-y-12 md:space-y-16 lg:space-y-20">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`service-block grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12 items-start opacity-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Content */}
                                <div className="flex flex-col justify-center">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 sm:mb-6">
                                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                                    </div>
                                    <p className="text-primary font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                        {service.subtitle}
                                    </p>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link to="/contact">
                                        <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                                            Get Started
                                            <ArrowRight
                                                size={18}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        </Button>
                                    </Link>
                                </div>

                                {/* Features Card */}
                                <div className={`p-6 sm:p-8 rounded-2xl bg-white border border-border/50 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 1 ? "md:order-first" : ""}`}>
                                    <h3 className="font-semibold text-foreground mb-4 sm:mb-6 text-lg sm:text-xl">
                                        What's Included
                                    </h3>
                                    <ul className="space-y-3 sm:space-y-4">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 sm:gap-3">
                                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-primary via-blue-600 to-indigo-700">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
                            Schedule a free consultation and we'll help you identify the best
                            solution for your specific needs and budget.
                        </p>
                        <Link to="/contact">
                            <Button variant="secondary" size="xl" className="group bg-white text-primary hover:bg-blue-50 font-semibold shadow-xl">
                                Get Free Consultation
                                <ArrowRight
                                    size={20}
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

export default Services;