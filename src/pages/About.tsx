import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Sparkles, TrendingUp, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Target, title: "Excellence", description: "We pursue excellence in every line of code, design decision, and client interaction.", color: "blue" },
  { icon: Heart, title: "Integrity", description: "Transparent processes and honest communication form the core of our client relationships.", color: "pink" },
  { icon: Users, title: "Collaboration", description: "We work as true partners with our clients, treating their success as our own.", color: "indigo" },
  { icon: Sparkles, title: "Innovation", description: "We deliver cutting-edge solutions that stand the test of time.", color: "cyan" },
];

const stats = [
  { number: "30+", label: "Projects Completed", sublabel: "Across 10+ industries" },
  { number: "30+", label: "Happy Clients", sublabel: "5-star average rating" },
  { number: "3+", label: "Years Experience", sublabel: "Modern tech stacks" },
  { number: "5+", label: "Team Members", sublabel: "Expert developers" },
];

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelector('.hero-content'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
        
        gsap.fromTo(
          heroRef.current.querySelector('.hero-badge'),
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, delay: 0.3, ease: "back.out(1.7)" }
        );
      }

      // Section reveals
      sectionsRef.current.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.9, 
            ease: "power3.out",
            scrollTrigger: { 
              trigger: section, 
              start: "top 80%",
              toggleActions: "play none none reverse"
            } 
          }
        );
      });

      // Values cards stagger
      if (valuesRef.current) {
        gsap.fromTo(
          Array.from(valuesRef.current.children),
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { 
              trigger: valuesRef.current, 
              start: "top 75%" 
            } 
          }
        );
      }

      // Stats counter animation
      if (statsRef.current) {
        const statElements = statsRef.current.querySelectorAll('.stat-number');
        statElements.forEach((stat) => {
          const target = stat.textContent?.replace('+', '') || '0';
          const numericTarget = parseInt(target);
          
          gsap.fromTo(
            stat,
            { textContent: 0 },
            {
              textContent: numericTarget,
              duration: 2,
              ease: "power1.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 70%",
              },
              onUpdate: function() {
                stat.textContent = Math.ceil(this.targets()[0].textContent) + '+';
              }
            }
          );
        });
      }
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-border {
          position: relative;
          background: white;
          border-radius: 24px;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        .hover-lift {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
        }
        
        .noise-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      <div>
        {/* Hero Section - Bold Typography */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-white">
          {/* Subtle background decoration */}
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-15"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-5xl">
              {/* Badge */}
              <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">Established 2026</span>
              </div>
              
              {/* Main content */}
              <div className="hero-content space-y-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                  Building digital
                  <br />
                  <span className="gradient-text">experiences that</span>
                  <br />
                  drive growth
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light">
                  We're a Lagos-based technology studio crafting exceptional web and mobile solutions for ambitious businesses worldwide.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/contact">
                    <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-14 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 w-full sm:w-auto">
                      Start Your Project
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button size="lg" variant="outline" className="font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 px-8 h-14 transition-all duration-300 w-full sm:w-auto">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Vibrant Cards */}
        <section ref={el => el && sectionsRef.current.push(el)} className="py-20 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`
                    relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br overflow-hidden group hover-lift
                    ${index === 0 ? 'from-blue-500 to-blue-600' : ''}
                    ${index === 1 ? 'from-indigo-500 to-indigo-600' : ''}
                    ${index === 2 ? 'from-blue-600 to-blue-700' : ''}
                    ${index === 3 ? 'from-cyan-500 to-blue-600' : ''}
                  `}
                >
                  <div className="noise-texture absolute inset-0"></div>
                  <div className="relative z-10">
                    <div className="stat-number text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-white/90 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs sm:text-sm text-white/70">
                      {stat.sublabel}
                    </div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section - Asymmetric Split */}
        <section ref={el => el && sectionsRef.current.push(el)} className="py-20 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Story Text */}
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                    Our Story
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Technology that
                  <br />
                  <span className="gradient-text">works for you</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    A4 Technologies was founded on a simple belief: technology should empower businesses, not complicate them. Too many projects go over budget, miss deadlines, or fail to deliver real value.
                  </p>
                  <p>
                    We're different. Our team combines deep technical expertise with genuine business understanding. We don't just build software—we create solutions that solve real problems and drive measurable growth.
                  </p>
                  <p>
                    From startups to established enterprises, we've helped organizations across the globe transform their operations with modern, scalable technology.
                  </p>
                </div>
              </div>
              
              {/* Right: Mission & Vision Cards */}
              <div className="relative">
                <div className="gradient-border p-8 sm:p-10">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50 hover-lift">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Simplify operations, scale efficiently, and grow confidently through modern, reliable technology solutions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50 hover-lift">
                      <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          To be the trusted technology partner for businesses of all sizes, delivering exceptional quality and transparent communication.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - Modern Grid */}
        <section ref={el => el && sectionsRef.current.push(el)} className="py-20 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                What Drives Us
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
                Core values that <span className="gradient-text">define us</span>
              </h2>
              <p className="text-xl text-gray-600">
                The principles guiding every decision, every project, every partnership.
              </p>
            </div>
            
            <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="group p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover-lift"
                >
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                    ${value.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-500' : ''}
                    ${value.color === 'pink' ? 'bg-pink-100 group-hover:bg-pink-500' : ''}
                    ${value.color === 'indigo' ? 'bg-indigo-100 group-hover:bg-indigo-500' : ''}
                    ${value.color === 'cyan' ? 'bg-cyan-100 group-hover:bg-cyan-500' : ''}
                  `}>
                    <value.icon className={`
                      w-7 h-7 transition-colors duration-300
                      ${value.color === 'blue' ? 'text-blue-600 group-hover:text-white' : ''}
                      ${value.color === 'pink' ? 'text-pink-600 group-hover:text-white' : ''}
                      ${value.color === 'indigo' ? 'text-indigo-600 group-hover:text-white' : ''}
                      ${value.color === 'cyan' ? 'text-cyan-600 group-hover:text-white' : ''}
                    `} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={el => el && sectionsRef.current.push(el)} className="py-20 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                Why Partner With Us
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
                <span className="gradient-text">Excellence</span> in every detail
              </h2>
              <p className="text-xl text-gray-600">
                We're not just another development agency. We're your technical partners committed to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Proven Track Record",
                  description: "Years of experience delivering successful projects across industries, from startups to enterprises.",
                  icon: Award
                },
                {
                  title: "Agile & Fast",
                  description: "Rapid development cycles and timely delivery without compromising quality or best practices.",
                  icon: TrendingUp
                },
                {
                  title: "Full Support",
                  description: "Post-launch maintenance and ongoing support to keep your software running smoothly and securely.",
                  icon: Heart
                }
              ].map((item, _index) => (
                <div 
                  key={item.title}
                  className="p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover-lift"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Bold Gradient */}
        <section ref={el => el && sectionsRef.current.push(el)} className="py-24 sm:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-indigo-500/20 blur-3xl"></div>
          <div className="noise-texture absolute inset-0"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <TrendingUp className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Ready to Scale</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Let's build something
                <br />
                extraordinary together
              </h2>
              
              <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                From Lagos to the world. Partner with a team that combines technical excellence with business insight.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact">
                  <Button size="lg" className="group bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 h-14 shadow-2xl hover:shadow-white/20 transition-all duration-300 w-full sm:w-auto">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="font-semibold border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 h-14 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;