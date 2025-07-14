import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  host: string;
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  description: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Ocean Villa with Infinity Pool",
    location: "Malibu, California",
    price: 650,
    rating: 4.9,
    reviewCount: 127,
    image: property1,
    host: "Sarah",
    type: "Entire villa",
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Infinity pool", "Ocean view", "Private beach", "WiFi", "Kitchen", "Parking"],
    description: "Wake up to breathtaking ocean views in this stunning modern villa. Features an infinity pool, private beach access, and luxurious amenities throughout."
  },
  {
    id: "2",
    title: "Cozy Mountain Cabin Retreat",
    location: "Aspen, Colorado",
    price: 280,
    rating: 4.8,
    reviewCount: 89,
    image: property2,
    host: "Mike",
    type: "Entire cabin",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Fireplace", "Mountain view", "Hot tub", "WiFi", "Kitchen", "Ski storage"],
    description: "Escape to this charming mountain cabin surrounded by pristine wilderness. Perfect for skiing in winter and hiking in summer."
  },
  {
    id: "3",
    title: "Modern City Loft with Skyline Views",
    location: "New York, New York",
    price: 420,
    rating: 4.7,
    reviewCount: 203,
    image: property3,
    host: "Emma",
    type: "Entire loft",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["City view", "Gym access", "WiFi", "Kitchen", "Elevator", "Rooftop terrace"],
    description: "Experience the energy of NYC from this sleek loft with floor-to-ceiling windows and stunning skyline views. Located in the heart of Manhattan."
  },
  {
    id: "4",
    title: "Tuscan Villa with Vineyard Views",
    location: "Tuscany, Italy",
    price: 380,
    rating: 4.9,
    reviewCount: 156,
    image: property4,
    host: "Lorenzo",
    type: "Entire villa",
    guests: 10,
    bedrooms: 5,
    bathrooms: 4,
    amenities: ["Vineyard view", "Wine cellar", "Pool", "WiFi", "Kitchen", "Garden"],
    description: "Immerse yourself in Italian culture at this authentic Tuscan villa. Surrounded by vineyards and olive groves with panoramic countryside views."
  },
  {
    id: "5",
    title: "Tropical Beach Bungalow",
    location: "Bora Bora, French Polynesia",
    price: 890,
    rating: 5.0,
    reviewCount: 94,
    image: property5,
    host: "Teva",
    type: "Entire bungalow",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Private beach", "Overwater deck", "Snorkeling gear", "WiFi", "Kitchenette", "Kayak"],
    description: "Paradise found! This overwater bungalow offers direct access to crystal-clear lagoon waters and stunning sunset views every evening."
  },
  {
    id: "6",
    title: "Desert Oasis Modern Retreat",
    location: "Scottsdale, Arizona",
    price: 320,
    rating: 4.8,
    reviewCount: 112,
    image: property6,
    host: "Alex",
    type: "Entire house",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Desert view", "Pool", "Spa", "WiFi", "Kitchen", "Outdoor kitchen"],
    description: "Modern architecture meets desert beauty in this stunning retreat. Enjoy spectacular sunsets and star-filled nights in the Sonoran Desert."
  }
];