import Layout from "@/components/layout/Layout";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for those just starting to build their personal brand online.",
    features: [
      "2 platforms managed (Instagram, Facebook, or LinkedIn)",
      "12 posts per month",
      "Basic graphics & content creation",
      "Monthly performance report",
      "Email support (48h response)",
      "Hashtag research",
      "Content calendar",
    ],
    notIncluded: [
      "Video content",
      "Story creation",
      "DM management",
      "Lead generation",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$899",
    period: "/month",
    description: "For personal brands ready to scale their presence and engagement.",
    features: [
      "4 platforms managed",
      "20 posts per month",
      "Premium graphics & content",
      "8 Reels/Stories per month",
      "Weekly performance reports",
      "DM management & responses",
      "Priority support (24h response)",
      "Community engagement",
      "Competitor analysis",
    ],
    notIncluded: [
      "Full video production",
      "Lead generation funnels",
    ],
    popular: true,
  },
  {
    name: "Authority",
    price: "$1,499",
    period: "/month",
    description: "Complete brand domination for established entrepreneurs and thought leaders.",
    features: [
      "All major platforms managed",
      "30+ posts per month",
      "Full video production suite",
      "Unlimited Stories & Reels",
      "Personal brand strategy sessions",
      "Lead generation funnel setup",
      "Influencer outreach & collabs",
      "24/7 dedicated support",
      "Monthly 1-on-1 strategy calls",
      "Crisis management",
      "Press & PR guidance",
    ],
    notIncluded: [],
    popular: false,
  },
];

const faqs = [
  {
    q: "How quickly will I see results?",
    a: "Most clients start seeing measurable improvements in engagement within the first 30 days. Significant follower growth typically begins around month 2-3 as our strategies compound.",
  },
  {
    q: "Do I need to provide content?",
    a: "No! We handle all content creation. We'll work with you initially to understand your brand voice and goals, then take it from there. You'll approve everything before it goes live.",
  },
  {
    q: "What if I want to cancel?",
    a: "We offer month-to-month contracts with no long-term commitment. Simply provide 30 days notice and we'll ensure a smooth transition.",
  },
  {
    q: "Do you offer custom packages?",
    a: "Absolutely! If our standard packages don't fit your needs, book a call and we'll create a custom solution tailored to your goals.",
  },
];

const PricingPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              No hidden fees, no surprises. Choose the plan that fits your goals and let's start growing.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-background border-2 border-primary glow-subtle lg:scale-105"
                    : "bg-background border border-border hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      <Zap size={12} />
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-heading font-semibold mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 min-h-[48px]">
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-heading font-bold text-gradient">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm opacity-40">
                      <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">—</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${plan.popular ? "glow-primary" : ""}`}
                  variant={plan.popular ? "default" : "secondary"}
                  size="lg"
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="text-lg font-heading font-semibold mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still have questions?
              </p>
              <Button asChild variant="outline">
                <a
                  href="https://calendly.com/risemediatvmgmt/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;