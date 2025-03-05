
import { motion } from 'framer-motion';
import CarCard, { CarProps } from '../CarCard';

interface CarListingProps {
  cars: CarProps[];
}

const CarListing = ({ cars }: CarListingProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {cars.map((car, index) => (
        <motion.div
          key={car.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <CarCard {...car} />
        </motion.div>
      ))}
      
      {cars.length === 0 && (
        <div className="text-center py-20 col-span-full">
          <h3 className="text-xl font-medium text-gray-600">No vehicles match your search criteria</h3>
          <p className="mt-2 text-gray-500">Try adjusting your filters or search term</p>
        </div>
      )}
    </div>
  );
};

export default CarListing;
