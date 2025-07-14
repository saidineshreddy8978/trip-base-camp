import { useState } from "react";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";
import { properties, Property } from "@/data/properties";

const PropertyGrid = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Explore amazing places</h2>
        <p className="text-muted-foreground">Discover unique accommodations around the world</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onPropertyClick={handlePropertyClick}
          />
        ))}
      </div>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          isOpen={!!selectedProperty}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PropertyGrid;