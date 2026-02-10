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
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 75%",
            },
          }
        );

        Array.from(cards).forEach((card) => {
          const numberElement = card.querySelector(".group");
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
            gsap.to(numberElement, {
              boxShadow: "0 15px 30px rgba(59,130,246,0.3)",
              duration: 0.3,
            });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
            gsap.to(numberElement, {
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              duration: 0.3,
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-blue-50/30 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Our Development Process
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-muted-foreground">
            A streamlined approach that ensures quality delivery, clear
            communication, and successful outcomes for every project.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />

          <div
            ref={stepsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 relative z-10"
          >
            {steps.map((step) => (
              <div key={step.number} className="relative process-step opacity-0">
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-border/50 text-center group hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  {/* Step Number */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform relative shadow-lg">
                    <span className="text-lg sm:text-2xl font-bold text-white">
                      {step.number}
                    </span>
                    {/* Dot connector */}
                    <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary hidden lg:block shadow-md" />
                  </div>

                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />

                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
