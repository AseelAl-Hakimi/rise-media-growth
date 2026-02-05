import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import InstagramFeed from "@/components/home/InstagramFeed";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <InstagramFeed />
      <CTA />
    </Layout>
  );
};

export default Index;