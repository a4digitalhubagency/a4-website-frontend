import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
    return (
        <Layout>
            {/* SEO Meta Tags handled by document head */}
            <Hero />
            <ServicesOverview />
            <WhyChooseUs />
            <ProcessSection />
            <CTASection />
        </Layout>
    );
};

export default Index;
