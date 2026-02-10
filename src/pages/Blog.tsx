import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: "001",
    title: "The Complete Guide to MVP Development for Startups",
    category: "Startup Development / Product Strategy",
    author: "A4 Technologies Team",
    readTime: "6 mins",
    date: "2026-02-10",
    excerpt: "An MVP is the simplest version of your product that solves a core problem and can be released to real users.",
    content: "LoremWe're a Lagos-based technology studio crafting exceptional web and mobile solutions for ambitious businesses worldwide",
    seo: {
      metaTitle: "MVP Development Guide for Startups | A4 Technologies",
      metaDescription: "Learn what an MVP is, why startups need it, and how to build one effectively to validate your business idea."
    }
  },
  {
    id: "002",
    title: "React vs Next.js: Which Framework Should You Choose?",
    category: "Web Development",
    author: "A4 Technologies Team",
    readTime: "5 mins",
    date: "2026-02-13",
    excerpt: "Compare React and Next.js to see which framework fits your project needs best.",
    content: "...",
    seo: {
      metaTitle: "React vs Next.js | A4 Technologies",
      metaDescription: "Compare React and Next.js to choose the best framework for your project. Learn when to use each and their advantages for performance and SEO."
    }
  },
  {
    id: "choosing-web-development-agency",
    title: "How to Choose the Right Web Development Company for Your Project",
    category: "Industry Insights",
    author: "A4 Team",
    readTime: "7 min read",
    date: "Jan 5, 2024",
    excerpt: "A comprehensive guide to evaluating software development agencies and finding the perfect partner for your business."
  },
  {
    id: "003",
    title: "10 Website Optimization Techniques That Actually Work",
    category: "Performance & SEO",
    author: "A4 Technologies Team",
    readTime: "4 mins",
    date: "2026-02-17",
    excerpt: "Boost website speed, SEO, and conversions with these 10 practical optimization techniques.",
    content: "...",
    seo: {
      metaTitle: "Website Optimization Techniques | A4 Technologies",
      metaDescription: "Learn 10 practical website optimization techniques to improve speed, SEO, and conversions for your business."
    }
  },
  {
    id: "004",
    title: "How Business Automation Saves Time and Reduces Costs",
    category: "Automation & Digital Transformation",
    author: "A4 Technologies Team",
    readTime: "5 mins",
    date: "2026-02-20",
    excerpt: "Discover how automating repetitive tasks reduces costs, errors, and saves time.",
    content: "...",
    seo: {
      metaTitle: "Business Automation Benefits | A4 Technologies",
      metaDescription: "Learn how business automation saves time, reduces costs, and improves efficiency through real-world examples."
    }
  },
  {
    id: "005",
    title: "Custom Software vs Off-the-Shelf Tools: What’s Best for Your Business?",
    category: "Business Technology",
    author: "A4 Technologies Team",
    readTime: "4 mins",
    date: "2026-02-24",
    excerpt: "Compare custom software and off-the-shelf tools to decide what works best for your business.",
    content: "...",
    seo: {
      metaTitle: "Custom vs Off-the-Shelf Software | A4 Technologies",
      metaDescription: "Learn the pros and cons of custom software versus off-the-shelf tools to determine the best solution for your business."
    }
  }
];

const Blog = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const articles = gridRef.current?.children;
      if (articles) {
        gsap.fromTo(
          articles,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Expert articles on web development, startup growth, and technology
            trends to help you make informed decisions.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300 opacity-0"
              >
                {/* Category Badge */}
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{post.category}</span>
                </div>

                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-xs">{post.date}</span>
                    </div>

                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get the latest insights on software development, startup growth,
            and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-blue-50 font-semibold shadow-lg"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;