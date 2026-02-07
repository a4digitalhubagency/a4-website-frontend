import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
    {
        id: "mvp-development-guide",
        title: "The Complete Guide to MVP Development for Startups in 2024",
        excerpt:
            "Learn how to build a successful MVP that validates your idea, attracts investors, and sets the foundation for scalable growth.",
        category: "MVP Development",
        author: "A4 Team",
        readTime: "8 min read",
        date: "Jan 15, 2024",
    },
    {
        id: "web-performance-optimization",
        title: "10 Website Optimization Techniques That Actually Work",
        excerpt:
            "Discover proven strategies to improve your Core Web Vitals, boost SEO rankings, and increase conversion rates.",
        category: "Optimization",
        author: "A4 Team",
        readTime: "6 min read",
        date: "Jan 10, 2024",
    },
    {
        id: "choosing-web-development-agency",
        title: "How to Choose the Right Web Development Company for Your Project",
        excerpt:
            "A comprehensive guide to evaluating software development agencies and finding the perfect partner for your business.",
        category: "Industry Insights",
        author: "A4 Team",
        readTime: "7 min read",
        date: "Jan 5, 2024",
    },
    {
        id: "internal-tools-roi",
        title: "The ROI of Custom Internal Tools: A Business Case Study",
        excerpt:
            "How investing in custom internal tools can save your business thousands of hours and significantly reduce operational costs.",
        category: "Internal Tools",
        author: "A4 Team",
        readTime: "5 min read",
        date: "Dec 28, 2023",
    },
    {
        id: "react-vs-nextjs",
        title: "React vs Next.js: Which Framework Should You Choose?",
        excerpt:
            "A detailed comparison of React and Next.js to help you make the right technology decision for your web application.",
        category: "Technology",
        author: "A4 Team",
        readTime: "9 min read",
        date: "Dec 20, 2023",
    },
    {
        id: "startup-tech-stack",
        title: "The Ultimate Tech Stack for Startups in 2024",
        excerpt:
            "Our recommended technology stack for building scalable, maintainable applications that grow with your startup.",
        category: "Technology",
        author: "A4 Team",
        readTime: "10 min read",
        date: "Dec 15, 2023",
    },
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
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                            Insights & <span className="gradient-text">Resources</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Expert articles on web development, startup growth, and technology
                            trends to help you make informed decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300 opacity-0"
                            >
                                {/* Image Placeholder */}
                                <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                                    <span className="text-muted-foreground text-sm">
                                        {post.category}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                            {post.category}
                                        </span>
                                        <span className="text-muted-foreground text-xs">
                                            {post.date}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

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
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-2xl mx-auto text-center">
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
                            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-blue-50 font-semibold shadow-lg">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Blog;
