import HairbybashImage from "../assets/images/Hairbybash landingpage.png";

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonialPrompt: string | null;
  image: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "hairbybash-digital-platform",
    title: "HairbyBash — Beauty Booking Platform",
    client: "HairByBash",
    category: "Web Development",
    industry: "Beauty / Personal Care",
    description:
      "HairbyBash is one of Calgary's top braiding and loc styling brands — but the business ran entirely through Instagram DMs with no booking system, no deposits, and no web presence. A4 Technologies built a full-stack platform with real-time appointment scheduling, automated Stripe deposit collection, a professional portfolio showcase, and an admin dashboard — transforming a social-media-dependent brand into a scalable digital business.",
    challenge:
      "Despite strong social media demand, HairbyBash had no digital infrastructure to match. Bookings were chaotic — managed entirely through DMs with no calendar system, no deposit collection, and no central web presence. No-shows cost revenue. Manual back-and-forth cost time. And without owning her client data, the business was one algorithm change away from losing her audience entirely.",
    solution:
      "A4 Technologies designed and built a custom full-stack web platform tailored to the beauty industry. Clients can now browse services, view pricing, select available time slots, and secure appointments instantly — all while paying a deposit upfront. On the back end, HairbyBash operates from a powerful admin dashboard that gives her full visibility into her calendar, revenue, client growth, and service management. The platform moves the brand from social-dependency to scalable digital ownership.",
    results: [
      "Eliminated manual DM-based booking entirely",
      "Automated deposit collection via Stripe — reducing no-shows",
      "24/7 self-serve booking availability for clients",
      "Admin dashboard with live revenue tracking and booking management",
      "Full ownership of client data — independent of social media algorithms",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Stripe Payments",
      "Node.js",
      "PostgreSQL",
      "Responsive UI/UX",
    ],
    testimonialPrompt:
      "Before this, I was answering DMs at midnight trying to manage my schedule. Now my clients book themselves, pay their deposit, and I wake up to a full calendar. It changed how I run my business.",
    image: HairbybashImage,
    link: "https://www.hairbybash.ca/",
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard Platform",
    client: "CapitalFlow Inc.",
    category: "Web Application",
    industry: "Finance / FinTech",
    description:
      "Built a comprehensive financial analytics dashboard handling real-time data from multiple APIs, serving 10,000+ daily active users.",
    challenge:
      "CapitalFlow's existing reporting tools were slow, fragmented, and unable to handle the data volume from their growing API integrations. Finance teams were exporting CSVs manually, decisions were delayed, and user trust was eroding due to frequent downtime and inconsistent data.",
    solution:
      "A4 Technologies architected a high-performance analytics dashboard with real-time data pipelines, multi-source API integration, and role-based access controls. The platform consolidates all financial data into a single, responsive interface — giving teams instant visibility into metrics that once took hours to compile.",
    results: [
      "3x faster load times",
      "50% reduction in support tickets",
      "99.9% uptime",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    testimonialPrompt: null,
    image: "/placeholder.svg",
  },
  {
    id: "healthcare-mvp",
    title: "Healthcare Appointment System",
    client: "MediConnect",
    category: "MVP Development",
    industry: "Healthcare",
    description:
      "Developed an MVP for a healthcare startup in 6 weeks, enabling patients to book appointments and doctors to manage schedules seamlessly.",
    challenge:
      "MediConnect needed to validate their core product hypothesis — that patients would self-serve appointment booking if the experience was simple enough — before committing to a full build. They had a tight runway, no technical co-founder, and a hard deadline tied to a funding pitch.",
    solution:
      "A4 Technologies delivered a focused MVP in 6 weeks: a clean patient-facing booking flow, doctor schedule management, automated SMS reminders via Twilio, and Stripe billing. The lean scope kept costs low while proving the concept — directly contributing to MediConnect securing $500K in seed funding.",
    results: [
      "Launched in 6 weeks",
      "2,000 users in first month",
      "$500K seed funding secured",
    ],
    technologies: ["Next.js", "Supabase", "Stripe", "Twilio"],
    testimonialPrompt: null,
    image: "/placeholder.svg",
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce Performance Overhaul",
    client: "StyleHub Fashion",
    category: "Website Optimization",
    industry: "E-commerce / Retail",
    description:
      "Optimized a struggling e-commerce site, improving Core Web Vitals scores and implementing SEO best practices that drove a significant increase in organic traffic and conversions.",
    challenge:
      "StyleHub's online store was bleeding revenue silently. Page load times exceeded 6 seconds on mobile, Core Web Vitals scores were failing, and organic search rankings had declined sharply over 12 months. High bounce rates meant ad spend was wasted — traffic arrived but didn't convert.",
    solution:
      "A4 Technologies conducted a full performance audit and rebuilt the critical rendering path — implementing lazy loading, image optimization, edge caching via Cloudflare, and Algolia-powered search. An SEO restructure addressed crawlability and content gaps. The result was a dramatically faster, higher-ranking storefront that converts.",
    results: [
      "70% faster page loads",
      "45% increase in organic traffic",
      "28% higher conversion rate",
    ],
    technologies: ["React", "Cloudflare", "Algolia", "GA4"],
    testimonialPrompt: null,
    image: "/placeholder.svg",
  },
  {
    id: "internal-crm",
    title: "Custom CRM & Inventory System",
    client: "LogiPro Solutions",
    category: "Internal Tools",
    industry: "Logistics / Operations",
    description:
      "Created a custom CRM and inventory management system that automated manual processes and integrated with existing ERP software — eliminating data silos and giving operations teams real-time visibility.",
    challenge:
      "LogiPro's operations team was managing inventory across spreadsheets, emails, and a legacy ERP that couldn't talk to anything else. Data entry was duplicated across systems, stock discrepancies were common, and there was no single source of truth for reporting — costing hours every week and leading to costly fulfillment errors.",
    solution:
      "A4 Technologies built a custom internal platform that integrates directly with LogiPro's ERP, centralizing inventory data, automating data entry workflows, and surfacing real-time dashboards for operations managers. Redis-powered caching ensures the system responds instantly even under heavy load — turning a chaotic manual process into a reliable, automated operation.",
    results: [
      "60% time saved on data entry",
      "Real-time inventory tracking",
      "Custom reporting dashboards",
    ],
    technologies: ["TypeScript", "Express", "MongoDB", "Redis"],
    testimonialPrompt: null,
    image: "/placeholder.svg",
  },
];
