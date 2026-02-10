import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Globe, Zap, Code, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Target, title: "Excellence", description: "We pursue excellence in every line of code, design decision, and client interaction." },
  { icon: Heart, title: "Integrity", description: "Transparent processes and honest communication form the core of our client relationships." },
  { icon: Users, title: "Collaboration", description: "We work as true partners with our clients, treating their success as our own." },
  { icon: Eye, title: "Innovation", description: "We deliver cutting-edge solutions that stand the test of time." },
];

const stats = [
  { number: "30+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "3+", label: "Years Experience" },
  { number: "5+", label: "Team Members" },
];

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const parallaxHeroRef = useRef<HTMLDivElement>(null);
  const parallaxStoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (parallaxHeroRef.current) {
        gsap.fromTo(
          parallaxHeroRef.current.children,
          { y: -10 },
          { y: 10, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" }
        );
        gsap.to(parallaxHeroRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: { trigger: parallaxHeroRef.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      if (parallaxStoryRef.current) {
        gsap.fromTo(
          parallaxStoryRef.current.children,
          { y: -8 },
          { y: 8, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" }
        );
        gsap.to(parallaxStoryRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: { trigger: parallaxStoryRef.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      sectionsRef.current.forEach(section => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: section, start: "top 85%" } }
        );
      });

      if (valuesRef.current) {
        gsap.fromTo(
          Array.from(valuesRef.current.children),
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: valuesRef.current, start: "top 85%" } }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          Array.from(statsRef.current.children),
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: statsRef.current, start: "top 85%" } }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              About <span className="gradient-text">A4 Technologies</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6">
              We empower businesses to grow through smart, scalable technology. From websites and mobile apps to automation and custom software, we deliver impactful digital solutions.
            </p>
            <Link to="/contact">
              <Button className="group bg-primary text-white hover:bg-blue-600 font-semibold shadow-lg relative overflow-hidden w-full sm:w-auto" size="lg">
                Work With Us <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-300 pointer-events-none"></span>
              </Button>
            </Link>
          </div>

          {/* Hero Icons */}
          <div className="lg:w-1/2 relative flex justify-center mb-6 lg:mb-0" ref={parallaxHeroRef}>
            <Zap className="absolute w-12 sm:w-16 h-12 sm:h-16 text-blue-300 top-10 left-1/4 hover:scale-110 hover:drop-shadow-xl transition-all duration-500" />
            <Code className="absolute w-16 sm:w-20 h-16 sm:h-20 text-blue-400 bottom-10 right-1/3 hover:scale-110 hover:drop-shadow-xl transition-all duration-500" />
            <Smartphone className="absolute w-10 sm:w-14 h-10 sm:h-14 text-blue-500 top-1/3 right-1/4 hover:scale-110 hover:drop-shadow-xl transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={el => el && sectionsRef.current.push(el)} className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          {/* Story Icons */}
          <div className="lg:w-1/2 relative flex justify-center order-1 lg:order-1 mb-6 lg:mb-0" ref={parallaxStoryRef}>
            <Users className="absolute w-12 sm:w-16 h-12 sm:h-16 text-green-300 top-10 left-1/4 hover:scale-110 hover:drop-shadow-xl transition-all duration-500" />
            <Heart className="absolute w-10 sm:w-14 h-10 sm:h-14 text-pink-400 bottom-10 right-1/3 hover:scale-110 hover:drop-shadow-xl transition-all duration-500" />
            <Target className="absolute w-16 sm:w-20 h-16 sm:h-20 text-yellow-400 top-1/3 right-1/4 hover:scale-110 hover:drop-shadow-xl transition-all duration-500" />
          </div>

          {/* SaaS Highlight Card */}
          <div className="lg:w-1/2 order-2 lg:order-2 flex flex-col justify-center">
            <div className="bg-gradient-to-r from-blue-100/80 to-blue-200/80 p-6 sm:p-8 rounded-3xl shadow-inner shadow-blue-200/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 transform">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">Our Story</h2>
              <p className="text-base sm:text-lg text-blue-800 mb-4 leading-relaxed">
                A4 Technologies was founded to simplify how businesses leverage technology. Many companies struggle with software projects that go over budget, miss deadlines, or fail to deliver results.
              </p>
              <p className="text-base sm:text-lg text-blue-800 leading-relaxed">
                Today, we serve startups, small businesses, and established organizations worldwide. Our team combines technical expertise with business understanding to deliver solutions that drive real growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={el => el && sectionsRef.current.push(el)} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          {[
            { title: "Our Mission", icon: Target, text: "To simplify operations, scale efficiently, and grow confidently by delivering modern, reliable, and scalable technology solutions. We focus on practical digital products, automating processes, and expert guidance." },
            { title: "Our Vision", icon: Eye, text: "To be the go-to technology partner for businesses of all sizes, delivering exceptional quality, transparent communication, and solutions that truly make a difference." }
          ].map(item => (
            <div key={item.title} className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section ref={el => el && sectionsRef.current.push(el)} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">Our Core Values</h2>
            <p className="text-base sm:text-lg text-muted-foreground">The principles that guide everything we do.</p>
          </div>
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {values.map(value => (
              <div key={value.title} className="p-6 rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 text-center opacity-0 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-5 hover:scale-110 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={el => el && sectionsRef.current.push(el)} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We combine technical expertise with business understanding to deliver solutions that truly drive results.
            </p>
          </div>
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 text-center opacity-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section ref={el => el && sectionsRef.current.push(el)} className="py-20 bg-gradient-to-br from-primary via-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">Global Reach, Local Touch</h2>
          <p className="text-base sm:text-lg text-blue-100 mb-8">
            Based in Lagos, Nigeria, we work with clients across the globe. From startups to growing brands, we deliver exceptional quality and dedication wherever you are.
          </p>
          <Link to="/contact">
            <Button className="group bg-white text-primary hover:bg-blue-50 font-semibold shadow-xl relative overflow-hidden w-full sm:w-auto" size="lg">
              Work With Us <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-300 pointer-events-none"></span>
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
