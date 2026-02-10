import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { CheckCircle2, Clock, Video } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero fade-in
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Info panel scroll-triggered
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 85%",
          },
        }
      );

      // CTA panel scroll-triggered
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const expectations = [
    "Discuss your idea or current product",
    "Get expert technical & strategic guidance",
    "Understand timeline, scope, and cost range",
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div
          ref={heroRef}
          className="container mx-auto px-4 md:px-6 text-center max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            Book a Free{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              30-Minute Consultation
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Talk directly with our team about your project, goals, and next steps — no sales pressure.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section ref={sectionRef} className="py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl grid gap-12 lg:grid-cols-2 items-start">

          {/* LEFT INFO PANEL */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                What to Expect on the Call
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                A focused conversation to understand your needs and recommend the right approach.
              </p>
            </div>

            <ul className="space-y-4">
              {expectations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span className="text-muted-foreground text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
              <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" /> 30 minutes
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                <Video className="w-5 h-5 text-primary" /> Google Meet
              </div>
            </div>
          </div>

          {/* RIGHT CTA PANEL */}
          <div ref={ctaRef} className="flex flex-col gap-6">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xs">
                Pick a time that works for you and let’s talk.
              </p>

              <a
                href="https://calendly.com/a4digitalhubagency1/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" variant="hero" className="w-full">
                  Book Free Consultation
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Contact;
