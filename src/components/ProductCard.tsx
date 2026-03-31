import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.slug}`}>
      <Card className="group w-full shadow-card hover:shadow-elegant transition-all duration-300 border border-border hover:border-primary/30 relative overflow-hidden">
        {product.isNew && (
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
            NEW
          </div>
        )}
        <CardContent className="p-5">
          <div className="aspect-square w-full mb-4 bg-secondary rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                {product.netWeight && (
                  <span className="text-xs text-muted-foreground ml-1">/ {product.netWeight}</span>
                )}
              </div>
              <span className="text-sm text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Details <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
