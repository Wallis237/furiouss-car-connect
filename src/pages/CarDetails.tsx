
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Gauge, FileText, Fuel, CheckCircle2, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from "@/components/ui/badge";
import { CarProps } from '@/components/CarCard';

// Extended car data with more details (same as in Cars.tsx)
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
    price: 52000,
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

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<CarProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  // Additional images for the gallery view
  const additionalImages = [
    '/lovable-uploads/3ac20a51-a62e-4a41-a8f8-51f86f6cdb62.png',
    '/lovable-uploads/38328e4f-572f-42c5-a7bc-fb267b67f05a.png',
    '/lovable-uploads/b4afe246-06ec-4079-899a-8f1bb9de1782.png',
    '/lovable-uploads/c107f110-9e53-4195-8f04-3ddfaba0f9eb.png'
  ];

  useEffect(() => {
    if (!id) return;

    // Find car by ID
    const carId = parseInt(id);
    const foundCar = extendedCarsData.find(car => car.id === carId);
    
    if (foundCar) {
      setCar(foundCar);
      setActiveImage(foundCar.image);
    } else {
      navigate('/cars');
      toast({
        title: "Car Not Found",
        description: "We couldn't find the car you're looking for.",
        variant: "destructive"
      });
    }
    
    setLoading(false);
  }, [id, navigate, toast]);

  const handleBookTestDrive = () => {
    toast({
      title: "Test Drive Booked",
      description: `Your test drive for the ${car?.name} has been scheduled. Our representative will contact you shortly.`,
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-furious-red"></div>
            <p className="mt-4 text-lg text-gray-600">Loading car details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!car) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <h2 className="text-2xl font-bold text-gray-800">Car Not Found</h2>
            <p className="mt-2 text-lg text-gray-600">The car you're looking for doesn't exist.</p>
            <Link to="/cars" className="mt-6 btn-primary">
              Return to Cars
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-furious-gray py-8">
        <div className="container-custom">
          <div className="flex items-center mb-6">
            <Link to="/cars" className="flex items-center text-furious-text hover:text-furious-red transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Cars
            </Link>
            
            <div className="flex items-center ml-auto">
              <Link to="/" className="text-sm text-gray-500 hover:text-furious-red transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <Link to="/cars" className="text-sm text-gray-500 hover:text-furious-red transition-colors">Cars</Link>
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <span className="text-sm text-furious-red">{car.name}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-6">
                <img 
                  src={activeImage} 
                  alt={car.name} 
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                <div 
                  className={`cursor-pointer rounded-md overflow-hidden ${activeImage === car.image ? 'ring-2 ring-furious-red' : ''}`}
                  onClick={() => setActiveImage(car.image)}
                >
                  <img 
                    src={car.image} 
                    alt={`${car.name} - Main`} 
                    className="w-full h-20 object-cover"
                  />
                </div>
                
                {additionalImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className={`cursor-pointer rounded-md overflow-hidden ${activeImage === img ? 'ring-2 ring-furious-red' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${car.name} - View ${idx + 1}`} 
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Car Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="bg-furious-red text-white mb-4">{car.brand}</Badge>
              <h1 className="text-3xl font-bold text-furious-text mb-4">{car.name}</h1>
              
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-furious-red">${car.price.toLocaleString()}</span>
                <Badge variant="outline" className="ml-4 bg-furious-gray text-furious-text">Available Now</Badge>
              </div>
              
              <p className="text-gray-600 mb-8">
                Experience luxury and performance with the {car.year} {car.name}. Meticulously crafted for both comfort and power, this vehicle represents the pinnacle of automotive engineering.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-furious-gray rounded-lg p-4 text-center">
                  <Calendar className="h-5 w-5 mx-auto mb-2 text-furious-red" />
                  <span className="block text-sm text-gray-600">Year</span>
                  <span className="block font-semibold text-furious-text">{car.year}</span>
                </div>
                
                <div className="bg-furious-gray rounded-lg p-4 text-center">
                  <Gauge className="h-5 w-5 mx-auto mb-2 text-furious-red" />
                  <span className="block text-sm text-gray-600">Mileage</span>
                  <span className="block font-semibold text-furious-text">{car.mileage?.toLocaleString()} km</span>
                </div>
                
                <div className="bg-furious-gray rounded-lg p-4 text-center">
                  <FileText className="h-5 w-5 mx-auto mb-2 text-furious-red" />
                  <span className="block text-sm text-gray-600">Transmission</span>
                  <span className="block font-semibold text-furious-text">{car.transmission}</span>
                </div>
                
                <div className="bg-furious-gray rounded-lg p-4 text-center">
                  <Fuel className="h-5 w-5 mx-auto mb-2 text-furious-red" />
                  <span className="block text-sm text-gray-600">Fuel Type</span>
                  <span className="block font-semibold text-furious-text">{car.fuelType}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {[
                    "Navigation System", 
                    "Leather Seats", 
                    "Backup Camera", 
                    "Bluetooth", 
                    "Remote Start", 
                    "Keyless Entry",
                    "Heated Seats",
                    "Premium Sound System"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-furious-red" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="btn-primary flex-1"
                  onClick={handleBookTestDrive}
                >
                  Book Test Drive
                </button>
                
                <button className="btn-outline flex-1">
                  Make Inquiry
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="bg-furious-gray py-16">
        <div className="container-custom">
          <SectionTitle
            title="Similar Vehicles"
            subtitle="Other luxury cars you might like"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {extendedCarsData
              .filter(c => c.id !== car.id && c.brand === car.brand)
              .slice(0, 3)
              .map((similarCar, index) => (
                <motion.div
                  key={similarCar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link to={`/cars/${similarCar.id}`} className="block h-full">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                      <div className="relative h-48">
                        <img 
                          src={similarCar.image} 
                          alt={similarCar.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-furious-red text-white text-xs font-medium px-2 py-1 rounded">
                          {similarCar.brand}
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm font-bold px-3 py-1.5 rounded-full">
                          ${similarCar.price.toLocaleString()}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-furious-text hover:text-furious-red transition-colors">
                          {similarCar.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarDetails;
