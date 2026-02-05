import Layout from "@/components/layout/Layout";
import { Target, Heart, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy we implement is focused on measurable outcomes that move the needle for your brand.",
  },
  {
    icon: Heart,
    title: "Authentic Growth",
    description: "We believe in building genuine communities, not just vanity metrics. Quality over quantity, always.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of trends and algorithm changes, ensuring your brand is always at the cutting edge.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We're not just a service provider—we're an extension of your team, invested in your success.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
              The Story Behind <span className="text-gradient">RiseMediaTV</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to help personal brands rise above the noise and build authentic authority online.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  From Passion to <span className="text-gradient">Purpose</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    RiseMediaTV was born from a simple observation: incredible entrepreneurs and thought leaders were struggling to be seen in the crowded digital landscape.
                  </p>
                  <p>
                    We saw talented coaches, consultants, and creators with transformative knowledge—but they were getting drowned out by those who simply knew how to play the algorithm game.
                  </p>
                  <p>
                    That's when we decided to bridge the gap. We combined deep expertise in social media strategy with a genuine passion for helping people build their personal brands.
                  </p>
                  <p>
                    Today, we've helped over 50 personal brands grow their audiences, increase their engagement, and most importantly—convert followers into loyal clients and customers.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-heading font-bold text-gradient">50+</div>
                    <div className="text-muted-foreground mt-2">Brands Elevated</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower personal brands with the strategies, content, and support they need to build authentic authority online—so they can focus on changing lives while we handle their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
            What We <span className="text-gradient">Stand For</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help elevate your personal brand.
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

export default AboutPage;