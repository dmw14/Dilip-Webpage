import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description?: string;
  ingredients?: string;
  isNew?: boolean;
}

const ProductCard = ({ name, price, image, description, ingredients, isNew }: ProductCardProps) => {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-elegant hover:shadow-lg transition-all duration-300 border-2 hover:border-business-primary/20 relative">
      {isNew && (
        <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
          NEW LAUNCH
        </div>
      )}
      <CardContent className="p-6 flex flex-col h-full">
        <div className="aspect-square w-full mb-4 bg-gradient-subtle rounded-lg overflow-hidden border border-border">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex flex-col flex-1 justify-between">
          <div className="text-center space-y-3">
            <h3 className="font-bold text-xl text-business-primary">{name}</h3>

            {/* Reserve space for description even if it's missing */}
            <div className="min-h-[40px] flex items-center justify-center">
              {description ? (
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              ) : (
                <span className="invisible">placeholder</span>
              )}
            </div>

            {/* Ingredients aligned across all cards */}
            <div className="text-left bg-secondary/50 rounded-lg p-3 border border-border min-h-[100px] flex flex-col">
              <h4 className="font-semibold text-sm text-foreground mb-1">Ingredients:</h4>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                {ingredients || "—"}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center bg-card border-2 border-primary rounded-lg p-3">
            <span className="text-2xl font-bold text-primary">₹{price}</span>
            <span className="text-sm text-muted-foreground ml-2">per packet</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
