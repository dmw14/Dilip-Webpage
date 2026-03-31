import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";

const Gallery = () => {
  const allImages = products.flatMap((p) => {
    const imgs = [{ src: p.image, label: `${p.name} — Front` }];
    if (p.backImage) imgs.push({ src: p.backImage, label: `${p.name} — Back` });
    return imgs;
  });

  return (
    <Layout>
      <section className="bg-gradient-hero py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Gallery</h1>
          <p className="text-primary-foreground/70 text-lg">A look at our products</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {allImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="group relative aspect-square rounded-xl overflow-hidden border border-border bg-secondary">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-end">
                  <span className="text-primary-foreground text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="text-center text-muted-foreground mt-12 text-sm">
            More product photos coming soon. Stay tuned!
          </p>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Gallery;
