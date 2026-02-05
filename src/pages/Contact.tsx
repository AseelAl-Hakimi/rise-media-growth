import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Mail, Calendar, Instagram, Facebook, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to elevate your brand? Reach out and let's discuss how we can help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-background p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand and goals..."
                      rows={5}
                      required
                      className="mt-2"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full glow-subtle"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Quick Contact */}
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    Quick Contact
                  </h2>
                  <div className="space-y-6">
                    <a
                      href="mailto:risemediatvmgmt@gmail.com"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email us at</div>
                        <div className="text-foreground font-medium">risemediatvmgmt@gmail.com</div>
                      </div>
                    </a>
                    <a
                      href="https://calendly.com/risemediatvmgmt/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calendar className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Book a call</div>
                        <div className="text-foreground font-medium">30-min Strategy Session</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Book a Call CTA */}
                <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
                  <h3 className="text-xl font-heading font-bold mb-3">
                    Prefer to Talk?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Skip the form and book a free 30-minute strategy call with our team.
                  </p>
                  <Button asChild className="w-full glow-primary">
                    <a
                      href="https://calendly.com/risemediatvmgmt/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="mr-2" size={18} />
                      Book Free Call
                    </a>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="bg-background p-8 rounded-2xl border border-border">
                  <h3 className="text-xl font-heading font-bold mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/risemediatv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="https://facebook.com/risemediatv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="https://linkedin.com/company/risemediatv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;