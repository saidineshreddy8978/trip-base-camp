import { X, Star, MapPin, Users, Bed, Bath, Wifi, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property } from "@/data/properties";

interface PropertyModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

const PropertyModal = ({ property, isOpen, onClose }: PropertyModalProps) => {
  if (!isOpen) return null;

  const amenityIcons: { [key: string]: any } = {
    'WiFi': Wifi,
    'Parking': Car,
    'Kitchen': Users,
    'Pool': Users,
    'Spa': Users,
    'Gym': Users,
    'Beach': Users,
    'Fireplace': Users,
    'Hot tub': Users,
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-card-hover max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/80 hover:bg-background rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {property.title}
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-medium text-foreground">{property.rating}</span>
                  <span>({property.reviewCount} reviews)</span>
                </div>
              </div>
              <p className="text-muted-foreground">Hosted by {property.host}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">${property.price}</div>
              <div className="text-muted-foreground">per night</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-border">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">{property.guests} guests</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bed className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">{property.bedrooms} bedrooms</span>
            </div>
            <div className="flex items-center space-x-2">
              <Bath className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">{property.bathrooms} bathrooms</span>
            </div>
            <div className="text-sm font-medium text-primary">{property.type}</div>
          </div>

          <div className="py-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">About this place</h3>
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
          </div>

          <div className="py-6 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">What this place offers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map((amenity, index) => {
                const Icon = amenityIcons[amenity] || Users;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t border-border">
            <Button variant="outline" className="flex-1">
              Save
            </Button>
            <Button variant="hero" className="flex-1">
              Reserve
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;