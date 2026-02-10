import { useEffect, useRef } from "react";
import { CheckCircle2, Users, Clock, Shield, Award, HeartHandshake } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        icon: Award,
        title: "Proven Expertise",
        description:
            "Years of experience delivering successful projects across industries, from startups to enterprises.",
    },
    {
        icon: Clock,
        title: "Fast Delivery",
        description:
            "Agile methodology ensures rapid development cycles and timely delivery without compromising quality.",
    },
    {
        icon: Shield,
        title: "Quality Assurance",
        description:
            "Rigorous testing and code reviews guarantee robust, bug-free software that performs reliably.",
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description:
            "A skilled team of developers, designers, and project managers committed to your success.",
    },
    {
        icon: HeartHandshake,
        title: "Transparent Process",
        description:
            "Clear communication, regular updates, and full visibility into every stage of development.",
    },
    {
        icon: CheckCircle2,
        title: "Ongoing Support",
        description:
            "Post-launch maintenance and support to keep your software running smoothly and securely.",
    },
];

const WhyChooseUs = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                leftRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                }
            );

            const cards = rightRef.current?.children;
            if (cards) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 30, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: rightRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div ref={leftRef} className="opacity-0">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                            Why Choose A4 Technologies as Your{" "}
                            <span className="gradient-text">Web Development Company</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We're not just another software development agency. We're your
                            technical partners committed to turning your vision into
                            reality. Our approach combines technical excellence with
                            business understanding to deliver solutions that truly matter.
                        </p>
                        <div className="flex flex-wrap items-center gap-6 md:gap-8">
                            <div className="flex-1 min-w-[100px]">
                                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                                <div className="text-xs md:text-sm text-muted-foreground">
                                    Projects Delivered
                                </div>
                            </div>
                            <div className="w-px h-12 bg-border hidden sm:block" />
                            <div className="flex-1 min-w-[100px]">
                                <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                                <div className="text-xs md:text-sm text-muted-foreground">
                                    Client Satisfaction
                                </div>
                            </div>
                            <div className="w-px h-12 bg-border hidden sm:block" />
                            <div className="flex-1 min-w-[100px]">
                                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                                <div className="text-xs md:text-sm text-muted-foreground">
                                    Support Available
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Features Grid */}
                    <div ref={rightRef} className="grid sm:grid-cols-2 gap-5">
                        {reasons.map((reason) => (
                            <div
                                key={reason.title}
                                className="p-5 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                                    <reason.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;