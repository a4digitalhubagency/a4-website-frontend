import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import gsap from "gsap";

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);
    // const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLParagraphElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<HTMLDivElement>(null);
    const blobsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Blob animations
            if (blobsRef.current) {
                const blobs = blobsRef.current.querySelectorAll("div[class*='animate-blob']");
                blobs.forEach((blob) => {
                    gsap.to(blob, {
                        y: "30px",
                        duration: 4,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: Math.random() * 0.5,
                    });
                });
            }

            tl.fromTo(
                badgeRef.current,
                { opacity: 0, y: 20, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6 }
            )
                .fromTo(
                    subheadRef.current,
                    { opacity: 0, y: 30, filter: "blur(10px)" },
                    { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
                    "-=0.2"
                )
                .fromTo(
                    ctaRef.current,
                    { opacity: 0, y: 20, scale: 0.95 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.6 },
                    "-=0.3"
                )
                .fromTo(
                    techRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    "-=0.2"
                );

            // CTA hover effect
            ctaRef.current?.querySelectorAll("button").forEach((button) => {
                button.addEventListener("mouseenter", () => {
                    gsap.to(button, { y: -3, duration: 0.3, ease: "power2.out" });
                });
                button.addEventListener("mouseleave", () => {
                    gsap.to(button, { y: 0, duration: 0.3, ease: "power2.out" });
                });
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pt-20 md:pt-0"
        >
            {/* Background Blobs */}
            <div ref={blobsRef} className="absolute inset-0">
                <div className="absolute inset-0 hero-glow opacity-40" />
                <div className="absolute top-10 -left-24 sm:-left-32 md:top-20 md:left-10 w-40 sm:w-48 md:w-72 h-40 sm:h-48 md:h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-32 -right-24 sm:-right-32 md:top-40 md:right-10 w-40 sm:w-48 md:w-72 h-40 sm:h-48 md:h-72 bg-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-32 left-1/4 md:bottom-20 md:left-1/3 w-40 sm:w-48 md:w-72 h-40 sm:h-48 md:h-72 bg-indigo-400/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[length:40px_40px] md:bg-[length:60px_60px]" />

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
                    {/* Badge */}
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-200 mb-4 sm:mb-6 opacity-0 text-xs sm:text-sm mt-8 md:mt-12"
                    >
                        <Sparkles size={14} className="text-blue-600 flex-shrink-0" />
                        <span className="font-medium text-blue-700">
                            Trusted by 50+ Companies Worldwide
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight md:leading-tight lg:leading-tight mb-4 sm:mb-6 text-balance">
                        We Build Software That{" "}
                        <span className="text-blue-700">Drives Growth</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        ref={subheadRef}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-xl sm:max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-10 leading-relaxed opacity-0"
                    >
                        A4 Technologies is a premier software development agency specializing in web applications, MVPs for startups, internal tools, and website optimization that scales with your business.
                    </p>

                    {/* CTA Buttons */}
                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center opacity-0">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                                Get Free Consultation
                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Button>
                        </Link>
                        <Link to="/case-studies" className="w-full sm:w-auto">
                            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                                View Our Work
                            </Button>
                        </Link>
                    </div>

                    {/* Technologies */}
                    <div
                        ref={techRef}
                        className="mt-8 sm:mt-12 md:mt-16 pt-4 sm:pt-8 md:pt-16 border-t border-slate-200 opacity-0"
                    >
                        <p className="text-xs sm:text-sm md:text-base text-slate-500 mb-4 sm:mb-6 md:mb-8 font-semibold uppercase tracking-wider">
                            Technologies We Excel In
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                            {["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Next.js"].map(
                                (tech) => (
                                    <div
                                        key={tech}
                                        className="flex items-center gap-1.5 sm:gap-2 text-slate-600 hover:text-blue-600 transition-colors group"
                                    >
                                        <Code2 size={16} className="group-hover:scale-110 transition-transform" />
                                        <span className="font-medium text-xs sm:text-sm md:text-base">{tech}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;