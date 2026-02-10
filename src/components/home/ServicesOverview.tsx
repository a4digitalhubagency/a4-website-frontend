import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Layers, Rocket, Settings, Bug, Zap, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Globe, title: "Web Development", description: "Custom websites built with modern technologies that load fast, rank well, and convert visitors into customers.", href: "/services#web-development" },
  { icon: Layers, title: "Web Applications", description: "Scalable web app development services that handle complex business logic and deliver seamless user experiences.", href: "/services#web-apps" },
  { icon: Rocket, title: "MVP Development", description: "MVP development for startups that helps you validate ideas quickly and get to market faster with lean, focused builds.", href: "/services#mvp" },
  { icon: Settings, title: "Internal Tools", description: "Internal tools for businesses that automate workflows, boost productivity, and streamline operations.", href: "/services#internal-tools" },
  { icon: Bug, title: "Bug Fixes", description: "Expert debugging and issue resolution to get your software running smoothly and reliably again.", href: "/services#bug-fixes" },
  { icon: Zap, title: "Website Optimization", description: "Website optimization services that improve performance, SEO rankings, and user engagement metrics.", href: "/services#optimization" },
];

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { opacity: 0, y: 40 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" }
      });

      const cards = cardsRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card, index) => {
          gsap.fromTo(card, { opacity: 0, y: 50, scale: 0.95 }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: { trigger: card, start: "top 90%" }
          });

          // Hover animation
          card.addEventListener("mouseenter", () => gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" }));
          card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" }));
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4">Software Development Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From MVPs to enterprise solutions, we deliver web development services that help businesses scale and succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group p-5 sm:p-6 md:p-7 rounded-2xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 sm:mb-5">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              View All Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;