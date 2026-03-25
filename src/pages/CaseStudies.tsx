import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import gsap from "gsap";
import { caseStudies } from "@/data/caseStudies";

const industryColors: Record<string, string> = {
  "Beauty / Personal Care": "from-pink-100 to-rose-200",
  "Finance / FinTech":      "from-emerald-100 to-teal-200",
  "Healthcare":             "from-sky-100 to-blue-200",
  "E-commerce / Retail":    "from-violet-100 to-purple-200",
  "Logistics / Operations": "from-amber-100 to-orange-200",
};

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power2.out" }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50/40 to-white border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Briefcase size={14} />
            {caseStudies.length} Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-5 leading-tight">
            Work That <span className="gradient-text">Speaks</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Real clients. Real problems. Real results. See how we turn complex challenges into digital products that move businesses forward.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section ref={sectionRef} className="section-padding bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={cardsRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => {
              const hasRealImage  = study.image !== "/placeholder.svg";
              const gradientClass = industryColors[study.industry] ?? "from-blue-100 to-indigo-200";

              return (
                <Link
                  key={study.id}
                  to={`/case-studies/${study.id}`}
                  className="group flex flex-col rounded-2xl border border-border/50 bg-white overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 opacity-0"
                >
                  {/* Thumbnail */}
                  <div className={`aspect-video overflow-hidden bg-gradient-to-br ${gradientClass} relative`}>
                    {hasRealImage ? (
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-md">
                          <Briefcase className="w-5 h-5 text-foreground/60" />
                        </div>
                        <span className="text-xs font-medium text-foreground/50 tracking-wide uppercase">
                          {study.industry}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-foreground text-xs font-semibold shadow-sm">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
                      {study.client} · {study.industry}
                    </p>
                    <h2 className="text-base font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-200">
                      {study.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-5 flex-1">
                      {study.description}
                    </p>

                    {/* Results preview */}
                    <ul className="space-y-1.5 mb-6 border-t border-border/40 pt-4">
                      {study.results.slice(0, 3).map((result) => (
                        <li key={result} className="flex items-start gap-2 text-xs text-foreground/80">
                          <span className="text-primary font-bold shrink-0 mt-0.5">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-1.5 text-primary text-sm font-semibold mt-auto">
                      View Case Study
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl" className="group bg-white text-primary hover:bg-blue-50 font-semibold shadow-xl">
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
