
import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { CarProps } from '../CarCard';

interface CarFiltersProps {
  brands: { name: string; count: number }[];
  selectedBrands: string[];
  priceRange: { min: string; max: string };
  selectedCondition: string;
  selectedBodyType: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceRangeChange: (type: 'min' | 'max', value: string) => void;
  onConditionChange: (condition: string) => void;
  onBodyTypeChange: (bodyType: string) => void;
  onApplyFilters: () => void;
  onResetFilters: () => void;
  showFilters: boolean;
}

const CarFilters = ({
  brands,
  selectedBrands,
  priceRange,
  selectedCondition,
  selectedBodyType,
  searchTerm,
  onSearchChange,
  onBrandChange,
  onPriceRangeChange,
  onConditionChange,
  onBodyTypeChange,
  onApplyFilters,
  onResetFilters,
  showFilters
}: CarFiltersProps) => {
  return (
    <motion.aside
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: showFilters || window.innerWidth >= 1024 ? 1 : 0,
        height: showFilters || window.innerWidth >= 1024 ? 'auto' : 0
      }}
      transition={{ duration: 0.3 }}
      className={`lg:w-1/4 bg-white p-6 rounded-lg shadow-sm ${showFilters ? 'block' : 'hidden lg:block'}`}
    >
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-furious-text">Search</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search vehicles..." 
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-furious-text">Brands</h3>
        <ul className="space-y-3">
          {brands.map(brand => (
            <li key={brand.name} className="flex items-center">
              <input 
                type="checkbox" 
                id={brand.name} 
                checked={selectedBrands.includes(brand.name)}
                onChange={() => onBrandChange(brand.name)}
                className="h-4 w-4 text-furious-red rounded focus:ring-furious-red focus:ring-offset-0"
              />
              <label htmlFor={brand.name} className="ml-3 text-sm text-gray-600 flex-grow">
                {brand.name}
              </label>
              <span className="text-xs text-gray-400">({brand.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-furious-text">I'm Looking For</h3>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Condition</label>
          <select 
            value={selectedCondition}
            onChange={(e) => onConditionChange(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
          >
            <option value="all">All Conditions</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Body Type</label>
          <select 
            value={selectedBodyType}
            onChange={(e) => onBodyTypeChange(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
          >
            <option value="all">All Types</option>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
            <option value="coupe">Coupe</option>
            <option value="convertible">Convertible</option>
            <option value="electric">Electric</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-furious-text">Price Range</h3>
        <div className="flex items-center gap-4">
          <input 
            type="number" 
            placeholder="Min" 
            value={priceRange.min}
            onChange={(e) => onPriceRangeChange('min', e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
          />
          <span className="text-gray-400">-</span>
          <input 
            type="number" 
            placeholder="Max" 
            value={priceRange.max}
            onChange={(e) => onPriceRangeChange('max', e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={onApplyFilters} className="btn-primary flex-1">Apply Filters</button>
        <button onClick={onResetFilters} className="btn-outline flex-1">Reset</button>
      </div>
    </motion.aside>
  );
};

export default CarFilters;
