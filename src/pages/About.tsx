import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const milestones = [
  { year: "1964", text: "Dilip Industries founded by Mr. Raychand Ingale in Jaysingpur" },
  { year: "1970s", text: "Dilip Supari and Dhana Dal become household names in the region" },
  { year: "2000s", text: "Expanded distribution across Kolhapur district" },
  { year: "2024", text: "Launched Dilip Mitha — a new premium mouth freshener" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Story</h1>
          <p className="text-primary-foreground/70 text-lg italic">"Bas! naam hi kaafi hai..."</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* About */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">About Dilip Industries</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded by <span className="font-semibold text-foreground">Mr. Raychand Ingale</span> in 1964,
              Dilip Industries is a family business based in Jaysingpur, Maharashtra. For over 60 years,
              we have been committed to providing traditional, high-quality products at affordable prices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our production facility is located at our office address in Jaysingpur, where every product
              is made with care and attention to maintain authentic taste and freshness that our customers
              have trusted for generations.
            </p>
          </div>
        </ScrollReveal>


        {/* Values */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quality", desc: "Every product is made with the finest ingredients and traditional recipes." },
              { title: "Affordability", desc: "Premium quality at prices everyone can enjoy — starting at just ₹1." },
              { title: "Trust", desc: "60+ years of serving families with consistency and integrity." },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 bg-secondary rounded-xl border border-border">
                <h3 className="font-bold text-foreground text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default About;
