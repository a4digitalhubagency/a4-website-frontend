import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink, Briefcase } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const industryColors: Record<string, string> = {
  "Beauty / Personal Care": "from-pink-100 to-rose-200",
  "Finance / FinTech":      "from-emerald-100 to-teal-200",
  "Healthcare":             "from-sky-100 to-blue-200",
  "E-commerce / Retail":    "from-violet-100 to-purple-200",
  "Logistics / Operations": "from-amber-100 to-orange-200",
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const study        = caseStudies.find((s) => s.id === id);
  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!study) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/case-studies")} variant="default">
              <ArrowLeft className="mr-2" size={16} /> Back to Case Studies
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const hasRealImage  = study.image !== "/placeholder.svg";
  const gradientClass = industryColors[study.industry] ?? "from-blue-100 to-indigo-200";

  return (
    <Layout>

      {/* ── Header ───────────────────────────────────────── */}
      <section className="pt-10 pb-0 bg-white border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          {/* Breadcrumb */}
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            All Case Studies
          </Link>

          {/* Category + Industry pills */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {study.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
              {study.industry}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
            {study.title}
          </h1>

          {/* Client + live site */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-8">
            <span className="font-semibold text-foreground">{study.client}</span>
            {study.link && (
              <>
                <span className="text-border select-none">·</span>
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-2 font-medium"
                >
                  Visit Live Site <ExternalLink size={11} />
                </a>
              </>
            )}
          </div>

          {/* Hero image — flush to bottom of header */}
          <div className={`aspect-video rounded-t-2xl overflow-hidden shadow-lg bg-gradient-to-br ${gradientClass}`}>
            {hasRealImage ? (
              <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <Briefcase className="w-6 h-6 text-foreground/50" />
                </div>
                <p className="text-xs font-medium text-foreground/40 uppercase tracking-widest">{study.industry}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────── */}
      <section className="py-14 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_280px] items-start">

            {/* Main */}
            <div className="space-y-6">

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-5">
                {study.description}
              </p>

              {/* Challenge */}
              <div className="bg-white rounded-2xl border border-border/50 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                    <span className="text-red-500 font-bold text-sm leading-none">!</span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground">The Challenge</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px] pl-11">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white rounded-2xl border border-border/50 p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-600 font-bold text-sm leading-none">✓</span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground">The Solution</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px] pl-11">
                  {study.solution}
                </p>
              </div>

              {/* Testimonial */}
              {study.testimonialPrompt && (
                <div className="bg-white rounded-2xl border border-border/50 p-7 relative overflow-hidden">
                  <span className="absolute top-0 right-4 text-8xl leading-none text-primary/8 font-serif select-none pointer-events-none">"</span>
                  <p className="text-foreground text-lg font-medium leading-relaxed italic mb-5 relative z-10">
                    "{study.testimonialPrompt}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {study.client.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-none mb-0.5">{study.client}</p>
                      <p className="text-xs text-muted-foreground">{study.industry}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24">

              {/* Key Results */}
              <div className="bg-white rounded-2xl border border-border/50 p-6">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">Key Results</h3>
                <ul className="space-y-3">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-start gap-2.5">
                      <span className="text-primary font-bold text-sm shrink-0 mt-0.5">✓</span>
                      <span className="text-sm text-foreground leading-snug">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="bg-white rounded-2xl border border-border/50 p-6">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-muted text-foreground text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-6 text-white">
                <p className="font-bold text-base mb-1">Want this for your business?</p>
                <p className="text-sm text-blue-100 leading-snug mb-5">Let's talk about what we can build together.</p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-primary font-semibold text-sm hover:bg-blue-50 transition-colors mb-2"
                >
                  Get in Touch <ArrowRight size={14} />
                </Link>
                {study.link && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    Visit Live Site <ExternalLink size={13} />
                  </a>
                )}
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ── More Case Studies ─────────────────────────────── */}
      {(prev || next) && (
        <section className="py-14 bg-white border-t border-border/40">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-6 text-center">
              More Case Studies
            </p>
            <div className={`grid gap-4 ${prev && next ? "sm:grid-cols-2" : "max-w-sm mx-auto"}`}>
              {prev && (
                <Link
                  to={`/case-studies/${prev.id}`}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <ArrowLeft size={15} className="text-muted-foreground shrink-0 transition-transform group-hover:-translate-x-1" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">Previous</p>
                    <p className="font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors leading-snug">
                      {prev.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{prev.industry}</p>
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  to={`/case-studies/${next.id}`}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-200 justify-between"
                >
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">Next</p>
                    <p className="font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors leading-snug">
                      {next.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{next.industry}</p>
                  </div>
                  <ArrowRight size={15} className="text-muted-foreground shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's talk about what we can build for your business.
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

export default CaseStudyDetail;
