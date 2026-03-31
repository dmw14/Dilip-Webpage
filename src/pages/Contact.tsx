import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 text-lg">We'd love to hear from you</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Email</h4>
                    <a href="mailto:ramesh.ingale22@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      ramesh.ingale22@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Phone</h4>
                    <p className="text-muted-foreground text-sm">Tel: 02322225396</p>
                    <p className="text-muted-foreground text-sm">+91 9764976638</p>
                    <p className="text-muted-foreground text-sm">+91 9225828684</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Office & Production</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Block no 226, Azad Road, 8th Lane,<br />
                      Near Bharat Bank,<br />
                      Jaysingpur-416101,<br />
                      Kolhapur, Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="bg-secondary rounded-2xl p-6 border border-border h-full flex flex-col justify-center">
              <h3 className="font-bold text-foreground text-lg mb-4">Business Hours</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Monday – Saturday</span>
                  <span className="font-medium text-foreground">10:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  For bulk orders and business inquiries, please contact us via phone or email.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
