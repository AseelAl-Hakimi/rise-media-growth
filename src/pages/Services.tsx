import Layout from "@/components/layout/Layout";
import { TrendingUp, Palette, Users, Target, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Management",
    description: "Complete management of your social media presence across all major platforms.",
    features: [
      "Strategy development & planning",
      "Content calendar management",
      "Daily posting & scheduling",
      "Community engagement",
      "Performance analytics & reporting",
      "Hashtag research & optimization",
    ],
  },
  {
    icon: Palette,
    title: "Content Creation",
    description: "Professional content that stops the scroll and drives engagement.",
    features: [
      "Custom graphics & visuals",
      "Short-form video content",
      "Reels & TikTok production",
      "Story content creation",
      "Carousel posts",
      "Brand photography direction",
    ],
  },
  {
    icon: Users,
    title: "Brand Growth & Engagement",
    description: "Strategic tactics to grow your audience and build genuine connections.",
    features: [
      "Audience growth strategies",
      "Engagement optimization",
      "Community building",
      "Influencer collaboration",
      "Cross-platform promotion",
      "Viral content strategies",
    ],
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Turn your following into a consistent stream of qualified leads.",
    features: [
      "Lead magnet creation",
      "Sales funnel development",
      "DM automation & sequences",
      "Email list building",
      "Landing page optimization",
      "Conversion tracking",
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
              Everything You Need to <span className="text-gradient">Dominate</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From strategy to execution, we handle every aspect of your social media presence so you can focus on what you do best.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon Block */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-3xl bg-primary/10 flex items-center justify-center glow-subtle">
                      <service.icon className="text-primary" size={100} />
                    </div>
                    <div className="absolute -z-10 inset-0 bg-primary/20 rounded-3xl blur-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="text-primary flex-shrink-0" size={18} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="glow-subtle">
                    <a
                      href="https://calendly.com/risemediatvmgmt/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={18} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss your goals and create a custom strategy for your success.
          </p>
          <Button size="lg" className="glow-primary" asChild>
            <a
              href="https://calendly.com/risemediatvmgmt/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Strategy Call
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;