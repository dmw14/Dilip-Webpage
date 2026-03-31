import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />

      {/* Products Section */}
      <section id="products" className="max-w-6xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Products</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Traditional quality products at affordable prices — trusted for over 60 years.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-secondary">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">About Dilip Industries</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded by Mr. Raychand Ingale in 1964 in Jaysingpur, Dilip Industries has been
                committed to providing traditional, high-quality products at affordable prices
                for over 60 years.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Read our full story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ScrollReveal>
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Get in Touch
            </h2>
            <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
              Interested in our products? Reach out to us for bulk orders or inquiries.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Index;
