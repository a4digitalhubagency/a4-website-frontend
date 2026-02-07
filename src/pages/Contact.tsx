import { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    CheckCircle2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast({
            title: "Message Sent!",
            description:
                "Thank you for reaching out. We'll get back to you within 24 hours.",
        });

        setFormData({
            name: "",
            email: "",
            company: "",
            service: "",
            budget: "",
            message: "",
        });
        setIsSubmitting(false);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                infoRef.current,
                { opacity: 0, x: -40 },
                { opacity: 1, x: 0, duration: 0.7, delay: 0.2 }
            );
            gsap.fromTo(
                formRef.current,
                { opacity: 0, x: 40 },
                { opacity: 1, x: 0, duration: 0.7, delay: 0.3 }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                            Let's Build Something{" "}
                            <span className="gradient-text">Great Together</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Ready to start your project? Get in touch with us for a free
                            consultation and let's discuss how we can help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section ref={sectionRef} className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
                        {/* Contact Info */}
                        <div ref={infoRef} className="lg:col-span-2 space-y-8 opacity-0">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    Contact Information
                                </h2>
                                <p className="text-muted-foreground">
                                    Fill out the form and our team will get back to you within 24
                                    hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">Email</h4>
                                        <a
                                            href="mailto:hello@a4technologies.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            hello@a4technologies.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                                        <a
                                            href="tel:+1234567890"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">
                                            Location
                                        </h4>
                                        <p className="text-muted-foreground">San Francisco, CA</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">
                                            Response Time
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Within 24 hours (business days)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* What to Expect */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-semibold text-foreground mb-4">
                                    What Happens Next?
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        "We'll review your requirements within 24 hours",
                                        "Schedule a free consultation call",
                                        "Receive a detailed proposal and timeline",
                                        "Start building your project",
                                    ].map((step, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm text-muted-foreground">
                                                {step}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div ref={formRef} className="lg:col-span-3 opacity-0">
                            <form
                                onSubmit={handleSubmit}
                                className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-foreground mb-6">
                                    Get Your Free Consultation
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="service"
                                            className="block text-sm font-medium text-foreground mb-2"
                                        >
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="web-apps">Web Applications</option>
                                            <option value="mvp">MVP Development</option>
                                            <option value="internal-tools">Internal Tools</option>
                                            <option value="bug-fixes">Bug Fixes</option>
                                            <option value="optimization">Website Optimization</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="budget"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Project Budget
                                    </label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="5k-10k">$5,000 - $10,000</option>
                                        <option value="10k-25k">$10,000 - $25,000</option>
                                        <option value="25k-50k">$25,000 - $50,000</option>
                                        <option value="50k+">$50,000+</option>
                                        <option value="unsure">Not sure yet</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-foreground placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                                        placeholder="Tell us about your project, goals, and timeline..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="hero"
                                    size="lg"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
