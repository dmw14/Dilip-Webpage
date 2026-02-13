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
    <div className="relative w-full max-w-sm mx-auto">
      {/* 🚀 NEW Launch Badge OUTSIDE */}
      {isNew && (
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg z-20 animate-pulse">
        NEW LAUNCH
        </div>
      )}

      <Card className="w-full shadow-elegant hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-orange-500/40 rounded-2xl">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Product Image */}
          <div className="aspect-square w-full mb-4 bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg overflow-hidden border border-border">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col flex-1 justify-between">
            {/* Title + Description */}
            <div className="text-center space-y-3">
              <h3 className="font-extrabold text-2xl text-blue-700 drop-shadow-sm">
                {name}
              </h3>

              {/* Reserve space for description */}
              <div className="min-h-[40px] flex items-center justify-center">
                {description ? (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                ) : (
                  <span className="invisible">placeholder</span>
                )}
              </div>
            </div>

            {/* Ingredients above Price */}
            <div className="mt-4 space-y-3">
              {/* Ingredients box */}
              <div className="text-left bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-3 border border-orange-300 min-h-[100px] flex flex-col">
                <h4 className="font-semibold text-sm text-orange-600 mb-1">
                  Ingredients:
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {ingredients || "—"}
                </p>
              </div>

              {/* Price Tag */}
              <div className="flex items-center justify-center bg-white border-2 border-orange-500 rounded-lg px-4 py-3 shadow-md">
                <span className="text-2xl font-extrabold text-orange-600">₹{price}</span>
                <span className="text-xs text-muted-foreground ml-2">/packet</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
