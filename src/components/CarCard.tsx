
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface CarProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const CarCard = ({ id, name, price, image }: CarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link to={`/cars/${id}`} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="relative overflow-hidden h-56">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-semibold text-furious-text truncate group-hover:text-furious-red transition-colors duration-300">
              {name}
            </h3>
            <p className="text-furious-red font-medium mt-2">
              ${price.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarCard;
