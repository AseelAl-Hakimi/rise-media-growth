import { TrendingUp, Palette, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Management",
    description: "Full-service management across all platforms. We handle strategy, posting, engagement, and analytics.",
  },
  {
    icon: Palette,
    title: "Content Creation",
    description: "Scroll-stopping graphics, videos, and copy that capture attention and drive engagement.",
  },
  {
    icon: Users,
    title: "Brand Growth & Engagement",
    description: "Strategic community building and engagement tactics to grow your authentic audience.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Turn followers into clients with proven conversion strategies and sales funnels.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Services That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to build and scale your personal brand online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="hover:border-primary hover:text-primary">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;