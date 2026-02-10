import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard Platform",
    client: "CapitalFlow Inc.",
    category: "Web Application",
    description:
      "Built a comprehensive financial analytics dashboard handling real-time data from multiple APIs, serving 10,000+ daily active users.",
    results: ["3x faster load times", "50% reduction in support tickets", "99.9% uptime"],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "/placeholder.svg",
  },
  {
    id: "healthcare-mvp",
    title: "Healthcare Appointment System",
    client: "MediConnect",
    category: "MVP Development",
    description:
      "Developed an MVP for a healthcare startup in 6 weeks, enabling patients to book appointments and doctors to manage schedules seamlessly.",
    results: ["Launched in 6 weeks", "2,000 users in first month", "$500K seed funding secured"],
    technologies: ["Next.js", "Supabase", "Stripe", "Twilio"],
    image: "/placeholder.svg",
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce Performance Overhaul",
    client: "StyleHub Fashion",
    category: "Website Optimization",
    description:
      "Optimized a struggling e-commerce site, improving Core Web Vitals scores and implementing SEO best practices for better rankings.",
    results: ["70% faster page loads", "45% increase in organic traffic", "28% higher conversion rate"],
    technologies: ["React", "Cloudflare", "Algolia", "GA4"],
    image: "/placeholder.svg",
  },
  {
    id: "internal-crm",
    title: "Custom CRM & Inventory System",
    client: "LogiPro Solutions",
    category: "Internal Tools",
    description:
      "Created a custom CRM and inventory management system that automated manual processes and integrated with existing ERP software.",
    results: ["60% time saved on data entry", "Real-time inventory tracking", "Custom reporting dashboards"],
    technologies: ["TypeScript", "Express", "MongoDB", "Redis"],
    image: "/placeholder.svg",
  },
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            Case Studies & <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore how we've helped startups and businesses achieve their goals through innovative software solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={sectionRef} className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={cardsRef} className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid gap-8 items-center p-6 md:p-8 rounded-2xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 opacity-0 ${
                  index % 2 === 1 ? "lg:grid-cols-2 lg:grid-flow-col-dense" : "lg:grid-cols-2"
                }`}
              >
                {/* Image Placeholder */}
                <div
                  className={`aspect-video rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-muted-foreground text-sm">Project Preview</p>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {study.category}
                    </span>
                    <span className="text-muted-foreground text-sm">{study.client}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {study.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{study.description}</p>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.results.map((result) => (
                        <span
                          key={result}
                          className="px-3 py-1.5 rounded-lg bg-muted text-sm text-foreground"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-primary/10 text-sm text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Link to="/contact">
            <Button
              variant="secondary"
              size="xl"
              className="group bg-white text-primary hover:bg-blue-50 font-semibold shadow-xl"
            >
              Start Your Project
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;