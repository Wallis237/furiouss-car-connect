
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Trophy, Users, Car, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Trophy className="h-8 w-8 text-furious-red" />, value: '10+', label: 'Years of Excellence' },
    { icon: <Users className="h-8 w-8 text-furious-red" />, value: '15,000+', label: 'Happy Clients' },
    { icon: <Car className="h-8 w-8 text-furious-red" />, value: '400+', label: 'Premium Vehicles' },
    { icon: <Clock className="h-8 w-8 text-furious-red" />, value: '24/7', label: 'Customer Support' },
  ];

  return (
    <Layout>
      <Hero
        title="About Us"
        subtitle="Learn more about Furious and our commitment to automotive excellence"
        image="/lovable-uploads/6134438d-11c9-4cab-bff9-9304a71d1521.png"
        height="h-[70vh]"
        overlay={true}
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <img 
                src="/lovable-uploads/99623fe4-df94-4978-bdaf-6bc5a017f03a.png" 
                alt="About Furious" 
                className="rounded-lg shadow-lg" 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-furious-text mb-6">
                Furious Provides an Extensive Inventory of Vehicles
              </h2>

              <div className="text-lg text-gray-600 space-y-6">
                <p>
                  Welcome to Furious, the leading online platform for connecting car buyers and sellers.
                  Whether you're in the market for a new vehicle or looking to sell your current one, we provide
                  a convenient and user-friendly platform to meet your automotive needs.
                </p>

                <p>
                  At Furious, we understand that buying or selling a car can be a significant decision, and our
                  goal is to make the process as smooth and hassle-free as possible. With our extensive database
                  of car listings, you'll find a wide range of vehicles to choose from, catering to various budgets,
                  preferences, and lifestyles.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Get a Quote <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-furious-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-furious-text mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Our Story"
            subtitle="The journey that led us to become the premier destination for luxury vehicles"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 text-gray-600"
            >
              <p>
                Founded in 2015, Furious began as a small showroom with a vision to transform how people buy and sell luxury vehicles. 
                Our founders, passionate car enthusiasts themselves, recognized the need for a more transparent, efficient, and 
                enjoyable car buying process.
              </p>

              <p>
                What started as a modest collection of premium vehicles quickly grew into one of the most respected names in the 
                automotive industry. Our commitment to quality, authenticity, and customer satisfaction has been the foundation 
                of our growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-gray-600"
            >
              <p>
                Today, Furious is proud to offer an extensive inventory of the world's finest automobiles. From rare limited 
                editions to everyday luxury vehicles, our collection represents the pinnacle of automotive engineering and design.
              </p>

              <p>
                Our team consists of industry experts who share a passion for exceptional cars and delivering unparalleled service. 
                We continue to innovate and improve our platform, always keeping our customers' needs at the forefront of everything 
                we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-furious-black text-white">
        <div className="container-custom">
          <SectionTitle
            title="Join Our Community"
            subtitle="Be part of our growing family of car enthusiasts and luxury vehicle owners"
            alignment="center"
            withLine={true}
          />

          <div className="flex justify-center mt-8">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Contact Us <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
