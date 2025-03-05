
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CarCard, { CarProps } from '../components/CarCard';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';

// Extended car data with more details
const extendedCarsData: CarProps[] = [
  {
    id: 1,
    name: 'Hyundai Kona Electric',
    price: 42000,
    image: '/lovable-uploads/849e4c8f-bcea-454e-8e0d-898f3fe5656b.png',
    brand: 'Hyundai',
    year: 2023,
    mileage: 0,
    transmission: 'Automatic',
    fuelType: 'Electric'
  },
  {
    id: 2,
    name: 'Mercedes-Benz G63 AMG',
    price: 178000,
    image: '/lovable-uploads/3ac20a51-a62e-4a41-a8f8-51f86f6cdb62.png',
    brand: 'Mercedes-Benz',
    year: 2023,
    mileage: 200,
    transmission: 'Automatic',
    fuelType: 'Petrol'
  },
  {
    id: 3,
    name: 'Audi A1 Sport',
    price: 38500,
    image: '/lovable-uploads/38328e4f-572f-42c5-a7bc-fb267b67f05a.png',
    brand: 'Audi',
    year: 2022,
    mileage: 5000,
    transmission: 'Automatic',
    fuelType: 'Petrol'
  },
  {
    id: 4,
    name: 'Ferrari 458 Italia',
    price: 290000,
    image: '/lovable-uploads/b4afe246-06ec-4079-899a-8f1bb9de1782.png',
    brand: 'Ferrari',
    year: 2023,
    mileage: 1000,
    transmission: 'Automatic',
    fuelType: 'Petrol'
  },
  {
    id: 5,
    name: 'Toyota 4Runner TRD Pro',
    price: 54000,
    image: '/lovable-uploads/c107f110-9e53-4195-8f04-3ddfaba0f9eb.png',
    brand: 'Toyota',
    year: 2022,
    mileage: 8000,
    transmission: 'Automatic',
    fuelType: 'Diesel'
  },
  {
    id: 6,
    name: 'Range Rover Sport HSE',
    price: 86000,
    image: '/lovable-uploads/666372ae-6e35-483a-a1e0-5aab2a93a8ff.png',
    brand: 'Range Rover',
    year: 2023,
    mileage: 3000,
    transmission: 'Automatic',
    fuelType: 'Hybrid'
  },
  {
    id: 7,
    name: 'Mercedes-Benz G-Class',
    price: 142000,
    image: '/lovable-uploads/b5f65e23-6e7a-4c6c-965b-2d2744ff746f.png',
    brand: 'Mercedes-Benz',
    year: 2021,
    mileage: 12000,
    transmission: 'Automatic',
    fuelType: 'Diesel'
  },
  {
    id: 8,
    name: 'Mercedes-Benz G-Class AMG',
    price: 168000,
    image: '/lovable-uploads/a53c2020-2a7f-4e34-a7f4-607ec040b859.png',
    brand: 'Mercedes-Benz',
    year: 2023,
    mileage: 500,
    transmission: 'Automatic',
    fuelType: 'Petrol'
  },
  {
    id: 9,
    name: 'Land Rover Discovery Sport',
    price: Il52000,
    image: '/lovable-uploads/928c6b5f-2732-4611-ad01-79eff090f92b.png',
    brand: 'Land Rover',
    year: 2022,
    mileage: 7500,
    transmission: 'Automatic',
    fuelType: 'Diesel'
  },
  {
    id: 10,
    name: 'Range Rover Evoque',
    price: 49000,
    image: '/lovable-uploads/49086179-cc26-4ec7-83e8-75e4cacaa610.png',
    brand: 'Range Rover',
    year: 2021,
    mileage: 15000,
    transmission: 'Automatic',
    fuelType: 'Hybrid'
  }
];

const Cars = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('trending');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [selectedBodyType, setSelectedBodyType] = useState('all');
  const [filteredCars, setFilteredCars] = useState<CarProps[]>(extendedCarsData);

  // Get unique brands and count
  const brands = Array.from(new Set(extendedCarsData.map(car => car.brand || '')))
    .filter(brand => brand) // Filter out empty brands
    .map(brand => ({
      name: brand,
      count: extendedCarsData.filter(car => car.brand === brand).length
    }));

  // Apply filters
  useEffect(() => {
    let result = [...extendedCarsData];
    
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center mt-4 lg:mt-0"
            >
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center mr-6 text-sm text-furious-text hover:text-furious-red transition-colors lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              <div className="flex items-center">
                <span className="mr-3 text-sm text-gray-600">Sort By:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
                >
                  <option value="trending">Trending</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
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
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                        onChange={() => handleBrandChange(brand.name)}
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
                    onChange={(e) => setSelectedCondition(e.target.value)}
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
                    onChange={(e) => setSelectedBodyType(e.target.value)}
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
                    onChange={(e) => handlePriceRangeChange('min', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
                  />
                  <span className="text-gray-400">-</span>
                  <input 
                    type="number" 
                    placeholder="Max" 
                    value={priceRange.max}
                    onChange={(e) => handlePriceRangeChange('max', e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={applyFilters} className="btn-primary flex-1">Apply Filters</button>
                <button onClick={resetFilters} className="btn-outline flex-1">Reset</button>
              </div>
            </motion.aside>

            {/* Car Listings */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car, index) => (
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
              </div>

              {filteredCars.length === 0 && (
                <div className="text-center py-20">
                  <h3 className="text-xl font-medium text-gray-600">No vehicles match your search criteria</h3>
                  <p className="mt-2 text-gray-500">Try adjusting your filters or search term</p>
                </div>
              )}

              {filteredCars.length > 0 && (
                <div className="flex justify-center mt-12">
                  <nav className="inline-flex">
                    <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-furious-text hover:bg-gray-50 rounded-l-md">
                      Previous
                    </a>
                    <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-furious-red">
                      1
                    </a>
                    <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-furious-text hover:bg-gray-50">
                      2
                    </a>
                    <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-furious-text hover:bg-gray-50">
                      3
                    </a>
                    <a href="#" className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-furious-text hover:bg-gray-50 rounded-r-md">
                      Next
                    </a>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cars;
