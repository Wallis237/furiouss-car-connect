
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

export interface CarProps {
  id: number;
  name: string;
  price: number;
  image: string;
  brand?: string;
  year?: number;
  mileage?: number;
  transmission?: string;
  fuelType?: string;
}

const CarCard = ({ id, name, price, image, brand, year, mileage, transmission, fuelType }: CarProps) => {
  // Function to extract make/brand from the car name
  const extractMake = (carName: string): string => {
    const knownBrands = ["Mercedes-Benz", "Toyota", "Land Rover", "Audi", "Ferrari", "Hyundai", "Range Rover"];
    for (const brand of knownBrands) {
      if (carName.includes(brand)) {
        return brand;
      }
    }
    // Try to get the first word as brand if no known brand was found
    return carName.split(' ')[0];
  };

  const carBrand = brand || extractMake(name);
  const modelName = name.replace(carBrand, '').trim();

  return (
    <div className="group h-full">
      <Link to={`/cars/${id}`} className="block h-full">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
          <div className="relative overflow-hidden h-56">
            {/* Image optimization: using loading priority, proper sizing, and modern formats */}
            <img 
              src={image} 
              alt={name} 
              loading="eager" // Change to eager for faster loading of visible images
              fetchPriority="high" // Corrected: capital 'P' in fetchPriority
              width="400"
              height="300"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              decoding="async" // Use async decoding to avoid blocking rendering
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg'; // Fallback image
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Brand badge */}
            <div className="absolute top-4 left-4 bg-furious-red text-white text-xs font-medium px-2 py-1 rounded">
              {carBrand}
            </div>
            
            {/* Price tag */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm font-bold px-3 py-1.5 rounded-full">
              ${price.toLocaleString()}
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-furious-text group-hover:text-furious-red transition-colors duration-300 line-clamp-2">
                {name}
              </h3>
            </div>
            
            {/* Car specs */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-auto">
              {year && (
                <div className="flex items-center text-xs text-gray-600">
                  <span className="font-medium">Year:</span>
                  <span className="ml-1">{year}</span>
                </div>
              )}
              {mileage && (
                <div className="flex items-center text-xs text-gray-600">
                  <span className="font-medium">Mileage:</span>
                  <span className="ml-1">{mileage.toLocaleString()} km</span>
                </div>
              )}
              {transmission && (
                <div className="flex items-center text-xs text-gray-600">
                  <span className="font-medium">Trans:</span>
                  <span className="ml-1">{transmission}</span>
                </div>
              )}
              {fuelType && (
                <div className="flex items-center text-xs text-gray-600">
                  <span className="font-medium">Fuel:</span>
                  <span className="ml-1">{fuelType}</span>
                </div>
              )}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="bg-furious-gray text-furious-text">
                  Available Now
                </Badge>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-furious-red text-sm font-medium flex items-center"
                >
                  View Details 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;
