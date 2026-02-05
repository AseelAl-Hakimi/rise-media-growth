import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for those just starting to build their brand.",
    features: [
      "2 platforms managed",
      "12 posts per month",
      "Basic content creation",
      "Monthly analytics report",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$899",
    period: "/month",
    description: "For brands ready to scale and dominate.",
    features: [
      "4 platforms managed",
      "20 posts per month",
      "Premium content creation",
      "Story & Reel content",
      "Weekly analytics",
      "DM management",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Authority",
    price: "$1,499",
    period: "/month",
    description: "Complete brand domination package.",
    features: [
      "All platforms managed",
      "30+ posts per month",
      "Full video production",
      "Personal brand strategy",
      "Lead generation funnel",
      "Influencer collaborations",
      "24/7 dedicated support",
      "Monthly strategy calls",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Invest in Your <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-muted-foreground">
            Transparent pricing with no hidden fees. Choose the plan that fits your goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-background border-2 border-primary glow-subtle scale-105"
                  : "bg-background border border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-heading font-semibold mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-heading font-bold text-gradient">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="text-primary flex-shrink-0" size={18} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "glow-primary"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
                variant={plan.popular ? "default" : "secondary"}
              >
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
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/pricing"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            View full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;