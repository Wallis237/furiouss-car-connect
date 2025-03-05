
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { carsData } from '../data/carsData';
import { CarProps } from '../components/CarCard';
import CarFilters from '../components/cars/CarFilters';
import CarListing from '../components/cars/CarListing';
import CarPagination from '../components/cars/CarPagination';
import CarSort from '../components/cars/CarSort';
import CarFilterToggle from '../components/cars/CarFilterToggle';

const Cars = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('trending');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [selectedBodyType, setSelectedBodyType] = useState('all');
  const [filteredCars, setFilteredCars] = useState<CarProps[]>(carsData);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6; // Adjust as needed

  // Get unique brands and count
  const brands = Array.from(new Set(carsData.map(car => car.brand || '')))
    .filter(brand => brand) // Filter out empty brands
    .map(brand => ({
      name: brand,
      count: carsData.filter(car => car.brand === brand).length
    }));

  // Apply filters
  useEffect(() => {
    let result = [...carsData];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(car => 
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (car.brand && car.brand.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
      result = result.filter(car => car.brand && selectedBrands.includes(car.brand));
    }
    
    // Apply price range filter
    const minPrice = priceRange.min ? parseInt(priceRange.min) : 0;
    const maxPrice = priceRange.max ? parseInt(priceRange.max) : Number.MAX_SAFE_INTEGER;
    
    if (priceRange.min || priceRange.max) {
      result = result.filter(car => car.price >= minPrice && car.price <= maxPrice);
    }
    
    // Apply sort
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => (b.year || 0) - (a.year || 0));
    }
    
    setFilteredCars(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedBrands, priceRange, sortBy]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const handlePriceRangeChange = (type: 'min' | 'max', value: string) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleConditionChange = (condition: string) => {
    setSelectedCondition(condition);
  };

  const handleBodyTypeChange = (bodyType: string) => {
    setSelectedBodyType(bodyType);
  };

  const applyFilters = () => {
    // Filters are already applied via useEffect
    setShowFilters(false);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBrands([]);
    setPriceRange({ min: '', max: '' });
    setSelectedCondition('all');
    setSelectedBodyType('all');
    setSortBy('trending');
  };

  // Calculate pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <Hero
        title="Explore Our Collection"
        subtitle="Discover our extensive inventory of luxury vehicles"
        image="/lovable-uploads/3ac20a51-a62e-4a41-a8f8-51f86f6cdb62.png"
        height="h-[50vh]"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold">{filteredCars.length} Luxury Vehicles Available</h2>
            </motion.div>

            <div className="flex items-center mt-4 lg:mt-0">
              <CarFilterToggle 
                showFilters={showFilters} 
                onToggleFilters={() => setShowFilters(!showFilters)} 
              />
              <CarSort sortBy={sortBy} onSortChange={setSortBy} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <CarFilters 
              brands={brands}
              selectedBrands={selectedBrands}
              priceRange={priceRange}
              selectedCondition={selectedCondition}
              selectedBodyType={selectedBodyType}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onBrandChange={handleBrandChange}
              onPriceRangeChange={handlePriceRangeChange}
              onConditionChange={handleConditionChange}
              onBodyTypeChange={handleBodyTypeChange}
              onApplyFilters={applyFilters}
              onResetFilters={resetFilters}
              showFilters={showFilters}
            />

            {/* Car Listings */}
            <div className="lg:w-3/4">
              <CarListing cars={currentCars} />
              
              {filteredCars.length > 0 && (
                <CarPagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cars;
