import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const products = [
    {
      name: "Dilip Mitha",
      price: 1,
      image: "/lovable-uploads/472d356e-1ab0-4946-94fa-f91c773d2af4.png",
      description: "Premium sweet mouth freshener blend",
      ingredients: "Sounf, dhanadal, menthol, cardamom, sodium saccharine, permitted flavours - no added sugar",
      isNew: true
    },
    {
      name: "Dilip Dhana Dal",
      price: 1,
      image: "/lovable-uploads/e2b08bf7-dfb1-42a1-8439-a0854955564a.png",
      description: "Roasted dhana dal for healthy snacking",
      ingredients: "Coriander seeds, salt"
    },
    {
      name: "Dilip Supari",
      price: 7,
      image: "/lovable-uploads/caecafa4-cb14-408b-8c35-09cc356a4e94.png",
      description: "Traditional supari for after meals",
      ingredients: "Raw crushed supari"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Our Products</h2>
          <p className="text-muted-foreground">Traditional quality products at affordable prices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              ingredients={product.ingredients}
              isNew={product.isNew}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 p-8 bg-gradient-subtle rounded-xl border-2 border-business-primary/10 shadow-elegant">
          <h3 className="text-2xl font-bold text-business-primary mb-4">About Dilip Industries</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Established in 1964, Dilip Industries is a family business committed to providing traditional, high-quality products at affordable prices. 
            Our products are made with care and attention to maintain authentic taste and freshness for over 60 years.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-8 p-8 bg-card rounded-xl border border-border shadow-sm">
          <h3 className="text-xl font-bold text-business-primary mb-6 text-center">Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-lg">Contact Details</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span> ramesh.ingale22@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Telephone:</span> 02322225396
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Mobile:</span> +91 9764976638
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Mobile:</span> +91 9225828684
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground text-lg">Office Address</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Block no 226, Azad Road, 8th Lane,<br />
                Near Bharat Bank,<br />
                Jaysingpur-416101,<br />
                Kolhapur, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gradient-primary border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-white">© 2024 Dilip Products. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
