import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  onPropertyClick: (property: Property) => void;
}

const PropertyCard = ({ property, onPropertyClick }: PropertyCardProps) => {
  return (
    <div 
      className="group cursor-pointer bg-background rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
      onClick={() => onPropertyClick(property)}
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 hover:bg-background rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            // Handle favorite functionality
          }}
        >
          <Heart className="h-4 w-4" />
        </Button>
        <div className="absolute bottom-3 left-3 bg-background/90 rounded-lg px-2 py-1">
          <span className="text-sm font-medium text-foreground">{property.type}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-foreground truncate flex-1 mr-2">
            {property.title}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium text-foreground">{property.rating}</span>
            <span className="text-sm text-muted-foreground">({property.reviewCount})</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-2">{property.location}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>{property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-foreground">${property.price}</span>
            <span className="text-muted-foreground text-sm"> night</span>
          </div>
          <span className="text-sm text-muted-foreground">Hosted by {property.host}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;