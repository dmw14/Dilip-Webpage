export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  backImage?: string;
  description: string;
  ingredients: string;
  isNew?: boolean;
  netWeight?: string;
  slug: string;
  tagline?: string;
  details?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Dilip Mitha",
    slug: "dilip-mitha",
    price: 1,
    image: "/lovable-uploads/472d356e-1ab0-4946-94fa-f91c773d2af4.png",
    backImage: "/lovable-uploads/mitha-back.jpeg",
    description: "Premium sweet mouth freshener blend with a refreshing taste. A perfect after-meal companion.",
    ingredients: "Sounf, Dhanadal, Menthol, Cardamom, Sodium Saccharine, Permitted Flavours — No Added Sugar",
    isNew: true,
    netWeight: "1.5g",
    tagline: "Newly Launched!",
    details: [
      "No Sugar Added",
      "Contains Artificial Sweetener",
      "Not Recommended for Children",
      "FSSAI Lic No. 11515043000538"
    ]
  },
  {
    id: "2",
    name: "Dilip Dhana Dal",
    slug: "dilip-dhana-dal",
    price: 1,
    image: "/lovable-uploads/e2b08bf7-dfb1-42a1-8439-a0854955564a.png",
    backImage: "/lovable-uploads/dhana-dal-back.jpeg",
    description: "Roasted coriander seeds dal — a crunchy, healthy snack for any time of the day.",
    ingredients: "Coriander Seeds, Salt",
    netWeight: "1.5g",
    details: [
      "Simple & Natural Ingredients",
      "Healthy Snacking Option",
      "FSSAI Lic No. 11515043000538"
    ]
  },
  {
    id: "3",
    name: "Dilip Supari",
    slug: "dilip-supari",
    price: 7,
    image: "/lovable-uploads/caecafa4-cb14-408b-8c35-09cc356a4e94.png",
    description: "Traditional raw crushed supari — a classic after-meal digestive.",
    ingredients: "Raw Crushed Supari",
    details: [
      "Traditional Recipe",
      "FSSAI Lic No. 11515043000538"
    ]
  }
];
