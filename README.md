# A4 Technologies Website

This repository contains the official marketing website for **A4 Technologies**, a software development agency that builds high-performance websites, web applications, internal tools, MVPs, and provides optimization and bug-fixing services.

The project is built with **Vite, React, TypeScript, Tailwind CSS, and shadcn/ui**, focusing on performance, scalability, accessibility, and SEO.

---

## 🚀 Tech Stack

- **Framework:** React 18 + TypeScript  
- **Build Tool:** Vite (Rollup under the hood)  
- **Styling:** Tailwind CSS + tailwindcss-animate  
- **UI Components:** shadcn/ui + Radix UI  
- **Routing:** React Router DOM  
- **Forms & Validation:** React Hook Form + Zod  
- **State & Data Fetching:** TanStack React Query  
- **Animations:** GSAP  
- **Charts:** Recharts  
- **Icons:** Lucide React  
- **Testing:** Vitest + Testing Library  
- **Linting:** ESLint  

---

## 📁 Project Structure

```txt
src/
├── assets/          # Images, icons, static assets
├── components/      # Reusable UI components
├── pages/           # Route-level pages
├── layouts/         # Layout wrappers
├── hooks/           # Custom React hooks
├── lib/             # Utilities and helpers
├── styles/          # Global styles
├── App.tsx          # App entry with routes
└── main.tsx         # Vite entry point

🧑‍💻 Getting Started
Prerequisites
Node.js v18+
npm or pnpm

Install dependencies
npm install
Start development server
npm run dev

App runs at:
👉 http://localhost:5173

🏗 Build for Production
npm run build

Preview production build locally:
npm run preview

🧪 Testing
Run all tests:
npm run test

Watch mode:
npm run test:watch

🧹 Linting
npm run lint

🎨 UI & Design System
Built with shadcn/ui and Radix UI for accessibility
Tailwind CSS for utility-first styling
Design tokens aligned with A4 Technologies brand:
Dark background
Green primary accent
High-contrast, readable typography
Fully responsive and mobile-first

🔍 SEO & Performance
Semantic HTML structure
Optimized bundle size via Vite + Rollup
Accessible components (ARIA via Radix)
SEO-ready page structure for marketing and blog content