import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
            <Calendar className="text-primary" size={32} />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to <span className="text-gradient">Rise?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Book a free 30-minute strategy call. We'll analyze your current presence and show you exactly how we can help you grow.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="glow-primary hover:scale-105 transition-all duration-300 text-lg px-10 py-6"
            asChild
          >
            <a
              href="https://calendly.com/risemediatvmgmt/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>

          {/* Trust Indicators */}
          <p className="text-sm text-muted-foreground mt-6">
            No commitment required • 30-minute call • Custom strategy
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;