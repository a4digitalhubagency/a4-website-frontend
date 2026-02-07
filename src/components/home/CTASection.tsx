import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-indigo-700">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div ref={contentRef} className="max-w-3xl mx-auto text-center opacity-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
                        <Sparkles size={16} className="text-white" />
                        <span className="text-sm font-medium text-white">
                            Ready to Start?
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 text-balance">
                        Let's Build Something{" "}
                        <span className="text-blue-200">Amazing Together</span>
                    </h2>

                    <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                        Whether you need a website, web application, MVP, or optimization of
                        existing systems, our team is ready to help you achieve your goals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button variant="secondary" size="xl" className="group w-full sm:w-auto bg-white text-primary hover:bg-blue-50 font-semibold shadow-xl">
                                Start Your Project
                                <ArrowRight
                                    size={20}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" size="xl" className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white/10 hover:border-white">
                                Schedule a Call
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
