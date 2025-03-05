
import { SlidersHorizontal } from 'lucide-react';

interface CarFilterToggleProps {
  showFilters: boolean;
  onToggleFilters: () => void;
}

const CarFilterToggle = ({ showFilters, onToggleFilters }: CarFilterToggleProps) => {
  return (
    <button 
      onClick={onToggleFilters}
      className="flex items-center mr-6 text-sm text-furious-text hover:text-furious-red transition-colors lg:hidden"
    >
      <SlidersHorizontal className="h-4 w-4 mr-2" />
      {showFilters ? 'Hide Filters' : 'Show Filters'}
    </button>
  );
};

export default CarFilterToggle;
