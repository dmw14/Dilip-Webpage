import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";
import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [showBack, setShowBack] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go back home</Link>
        </div>
      </Layout>
    );
  }

  const currentImage = showBack && product.backImage ? product.backImage : product.image;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <ScrollReveal>
            <div className="space-y-4">
              <div className="aspect-square bg-secondary rounded-2xl overflow-hidden border border-border">
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.backImage && (
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowBack(false)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      !showBack ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={product.image} alt="Front" className="w-full h-full object-cover" />
                  </button>
                  <button
                    onClick={() => setShowBack(true)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      showBack ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={product.backImage} alt="Back" className="w-full h-full object-cover" />
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-6">
              <div>
                {product.isNew && (
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                    NEW LAUNCH
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{product.name}</h1>
                <p className="text-muted-foreground mt-2 text-lg">{product.description}</p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                {product.netWeight && (
                  <span className="text-muted-foreground">per packet ({product.netWeight})</span>
                )}
              </div>

              {/* Ingredients */}
              <div className="bg-secondary rounded-xl p-5 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Ingredients</h3>
                <p className="text-muted-foreground text-sm">{product.ingredients}</p>
              </div>

              {/* Details */}
              {product.details && product.details.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Product Info</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact CTA */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Interested in bulk orders?</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
