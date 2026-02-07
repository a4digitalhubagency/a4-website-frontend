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
    {
        id: "web-development",
        icon: Globe,
        title: "Web Development",
        subtitle: "Custom Websites That Convert",
        description:
            "We create stunning, high-performance websites tailored to your brand. From landing pages to complex multi-page sites, our web development services focus on speed, SEO, and conversion optimization.",
        features: [
            "Responsive design for all devices",
            "SEO-optimized structure and content",
            "Fast loading speeds (Core Web Vitals)",
            "CMS integration (WordPress, Headless)",
            "E-commerce functionality",
            "Analytics and tracking setup",
        ],
    },
    {
        id: "web-apps",
        icon: Layers,
        title: "Web Application Development",
        subtitle: "Scalable Solutions for Complex Needs",
        description:
            "Our web app development services deliver powerful, scalable applications that handle complex business logic. We build everything from dashboards to SaaS platforms using modern frameworks and best practices.",
        features: [
            "Custom dashboard development",
            "SaaS platform development",
            "Real-time features and APIs",
            "Database design and optimization",
            "Third-party integrations",
            "Security best practices",
        ],
    },
    {
        id: "mvp",
        icon: Rocket,
        title: "MVP Development for Startups",
        subtitle: "Validate Ideas Quickly",
        description:
            "Launch your startup faster with our MVP development services. We help founders build lean, focused products that validate assumptions and attract early users without over-engineering.",
        features: [
            "Rapid prototyping (4-8 weeks)",
            "User-centered design",
            "Core feature prioritization",
            "Scalable architecture",
            "Investor-ready presentations",
            "Iteration support",
        ],
    },
    {
        id: "internal-tools",
        icon: Settings,
        title: "Internal Tools for Businesses",
        subtitle: "Automate and Streamline Operations",
        description:
            "Boost productivity with custom internal tools designed for your workflows. We build admin panels, CRMs, inventory systems, and automation tools that save time and reduce errors.",
        features: [
            "Custom admin dashboards",
            "Workflow automation",
            "Data management systems",
            "Reporting and analytics",
            "Integration with existing tools",
            "Role-based access control",
        ],
    },
    {
        id: "bug-fixes",
        icon: Bug,
        title: "Bug Fixes & Maintenance",
        subtitle: "Keep Your Software Running Smoothly",
        description:
            "Struggling with bugs, crashes, or performance issues? Our expert team diagnoses and resolves problems quickly, ensuring your software operates reliably and efficiently.",
        features: [
            "Rapid issue diagnosis",
            "Critical bug resolution",
            "Performance troubleshooting",
            "Code review and cleanup",
            "Security vulnerability fixes",
            "Ongoing maintenance plans",
        ],
    },
    {
        id: "optimization",
        icon: Zap,
        title: "Website Optimization Services",
        subtitle: "Faster, Better, Stronger",
        description:
            "Improve your website's performance, SEO rankings, and user experience. Our optimization services analyze your current setup and implement proven strategies for measurable improvements.",
        features: [
            "Page speed optimization",
            "Core Web Vitals improvement",
            "SEO technical audit",
            "Mobile optimization",
            "Conversion rate optimization",
            "Accessibility improvements",
        ],
    },
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
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                            Software Development{" "}
                            <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            From web development to MVP builds, we offer comprehensive
                            software solutions tailored to startups, businesses, and
                            organizations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section ref={servicesRef} className="pb-12 md:pb-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="space-y-16 md:space-y-24">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`service-block grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center opacity-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
                                        <service.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <p className="text-primary font-medium mb-2">
                                        {service.subtitle}
                                    </p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                        {service.title}
                                    </h2>
                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link to="/contact">
                                        <Button variant="hero" size="lg" className="group">
                                            Get Started
                                            <ArrowRight
                                                size={18}
                                                className="transition-transform group-hover:translate-x-1"
                                            />
                                        </Button>
                                    </Link>
                                </div>

                                {/* Features Card */}
                                <div
                                    className={`p-8 rounded-2xl bg-white border border-border/50 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 1 ? "lg:order-1" : ""
                                        }`}
                                >
                                    <h3 className="font-semibold text-foreground mb-6">
                                        What's Included
                                    </h3>
                                    <ul className="space-y-4">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{feature}</span>
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
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8">
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
