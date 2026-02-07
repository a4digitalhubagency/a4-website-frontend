import { useEffect, useRef } from "react";
import { MessageSquare, Search, Code, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        icon: MessageSquare,
        title: "Discovery",
        description:
            "We start by understanding your business goals, target audience, and project requirements through in-depth consultation.",
    },
    {
        number: "02",
        icon: Search,
        title: "Planning",
        description:
            "Our team creates detailed technical specifications, wireframes, and project roadmaps tailored to your needs.",
    },
    {
        number: "03",
        icon: Code,
        title: "Development",
        description:
            "We build your solution using agile methodology with regular updates and iterative feedback cycles.",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Launch & Support",
        description:
            "After thorough testing, we deploy your project and provide ongoing maintenance and support.",
    },
];

const ProcessSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                    },
                }
            );

            const cards = stepsRef.current?.querySelectorAll(".process-step");
            if (cards) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 40, scale: 0.9, rotateY: -10 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateY: 0,
                        duration: 0.7,
                        stagger: 0.12,
                        scrollTrigger: {
                            trigger: stepsRef.current,
                            start: "top 75%",
                        },
                    }
                );

                // Add hover animations to step cards
                Array.from(cards).forEach((card) => {
                    const numberElement = card.querySelector(".group");
                    card.addEventListener("mouseenter", () => {
                        gsap.to(card, {
                            y: -15,
                            duration: 0.3,
                            ease: "power2.out",
                        });
                        gsap.to(numberElement, {
                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                            duration: 0.3,
                        });
                    });
                    card.addEventListener("mouseleave", () => {
                        gsap.to(card, {
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out",
                        });
                        gsap.to(numberElement, {
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                            duration: 0.3,
                        });
                    });
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-gradient-to-b from-blue-50/30 to-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                        Our Development Process
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A streamlined approach that ensures quality delivery, clear
                        communication, and successful outcomes for every project.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />

                    <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step) => (
                            <div key={step.number} className="relative process-step opacity-0">
                                <div className="p-6 rounded-2xl bg-white border border-border/50 text-center group hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                                    {/* Step Number */}
                                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform relative shadow-lg">
                                        <span className="text-2xl font-bold text-white">
                                            {step.number}
                                        </span>
                                        {/* Dot connector */}
                                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary hidden lg:block shadow-md" />
                                    </div>

                                    <step.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />

                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
