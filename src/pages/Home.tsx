
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CarCard, { CarProps } from '../components/CarCard';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Clock, Star, Zap } from 'lucide-react';

const Home = () => {
  const featuredCars: CarProps[] = [
    {
      id: 1,
      name: 'Ferrari 458 Italia',
      price: 290000,
      image: '/lovable-uploads/b4afe246-06ec-4079-899a-8f1bb9de1782.png',
      year: 2023,
      transmission: 'Automatic',
      fuelType: 'Petrol'
    },
    {
      id: 2,
      name: 'Mercedes-Benz G63 AMG',
      price: 178000,
      image: '/lovable-uploads/3ac20a51-a62e-4a41-a8f8-51f86f6cdb62.png',
      year: 2023,
      transmission: 'Automatic',
      fuelType: 'Petrol'
    },
    {
      id: 3,
      name: 'Range Rover Sport HSE',
      price: 86000,
      image: '/lovable-uploads/666372ae-6e35-483a-a1e0-5aab2a93a8ff.png',
      year: 2023,
      transmission: 'Automatic',
      fuelType: 'Hybrid'
    }
  ];

  return (
    <Layout>
      <Hero
        title="Experience Automotive Excellence"
        subtitle="Discover our curated collection of premium luxury vehicles"
        image="/lovable-uploads/b4afe246-06ec-4079-899a-8f1bb9de1782.png"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/cars" className="btn-primary">
            Explore Collection
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </Hero>

      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Featured Vehicles"
            subtitle="Explore our handpicked selection of exceptional luxury cars"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <CarCard {...car} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cars" className="btn-primary inline-flex items-center">
              View All Vehicles <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-furious-gray">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Furious"
            subtitle="We provide an exceptional car buying experience with attention to every detail"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-furious-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-furious-red" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Selection</h3>
              <p className="text-gray-600">Curated inventory of the finest luxury vehicles from prestigious brands.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-furious-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-furious-red" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Time Efficiency</h3>
              <p className="text-gray-600">Streamlined process to help you find and purchase your dream car quickly.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-furious-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-furious-red" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Professional advisors to assist you throughout your car buying journey.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-furious-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-furious-red" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Seamless Experience</h3>
              <p className="text-gray-600">Effortless transactions with transparent pricing and financing options.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-furious-black text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to Find Your Dream Car?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 mb-8"
              >
                Speak with our expert advisors to start your journey towards automotive excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-2/5"
            >
              <img 
                src="/lovable-uploads/a53c2020-2a7f-4e34-a7f4-607ec040b859.png" 
                alt="Mercedes-Benz G-Class" 
                className="rounded-lg shadow-2xl" 
                loading="lazy"
                width="600"
                height="400"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
