
import { motion } from 'framer-motion';

interface CarSortProps {
  sortBy: string;
  onSortChange: (value: string) => void;
}

const CarSort = ({ sortBy, onSortChange }: CarSortProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mt-4 lg:mt-0"
    >
      <div className="flex items-center">
        <span className="mr-3 text-sm text-gray-600">Sort By:</span>
        <select 
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
        >
          <option value="trending">Trending</option>
          <option value="newest">Newest First</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>
    </motion.div>
  );
};

export default CarSort;
