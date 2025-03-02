
import { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CarCard, { CarProps } from '../components/CarCard';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';

const Cars = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('trending');

  const carsData: CarProps[] = [
    {
      id: 1,
      name: 'Aurora Starlight Elite',
      price: 250000,
      image: 'public/lovable-uploads/99623fe4-df94-4978-bdaf-6bc5a017f03a.png'
    },
    {
      id: 2,
      name: 'Thunderstorm Turbo Pro',
      price: 390000,
      image: 'public/lovable-uploads/3cb58310-527f-4687-99dc-db5575fcacc1.png'
    },
    {
      id: 3,
      name: 'Phoenix Firestorm GT',
      price: 200000,
      image: 'public/lovable-uploads/6134438d-11c9-4cab-bff9-9304a71d1521.png'
    },
    {
      id: 4,
      name: 'Zephyr Windchaser XE',
      price: 180000,
      image: 'public/lovable-uploads/99623fe4-df94-4978-bdaf-6bc5a017f03a.png'
    },
    {
      id: 5,
      name: 'Radiant Sunburst Deluxe',
      price: 170000,
      image: 'public/lovable-uploads/3cb58310-527f-4687-99dc-db5575fcacc1.png'
    },
    {
      id: 6,
      name: 'Stellar Moonlight Coupe',
      price: 220000,
      image: 'public/lovable-uploads/6134438d-11c9-4cab-bff9-9304a71d1521.png'
    }
  ];

  // Brand data
  const brands = [
    { name: 'Mercedes-Benz', count: 2000 },
    { name: 'Toyota', count: 1500 },
    { name: 'Honda', count: 1200 },
    { name: 'Porsche', count: 800 },
  ];

  return (
    <Layout>
      <Hero
        title="Explore Our Collection"
        subtitle="Discover our extensive inventory of luxury vehicles"
        image="public/lovable-uploads/3cb58310-527f-4687-99dc-db5575fcacc1.png"
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
              <h2 className="text-2xl md:text-3xl font-bold">400+ Cars Available</h2>
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
                    placeholder="Search cars..." 
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
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all">
                    <option>All Conditions</option>
                    <option>New</option>
                    <option>Used</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">Body Type</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all">
                    <option>Convertible</option>
                    <option>Sedan</option>
                    <option>SUV</option>
                    <option>Coupe</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-furious-text">Price Range</h3>
                <div className="flex items-center gap-4">
                  <input 
                    type="text" 
                    placeholder="Min" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
                  />
                  <span className="text-gray-400">-</span>
                  <input 
                    type="text" 
                    placeholder="Max" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button className="btn-primary w-full">Apply Filters</button>
            </motion.aside>

            {/* Car Listings */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {carsData.map(car => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>

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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cars;
