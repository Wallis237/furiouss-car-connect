
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
  overlay?: boolean;
  height?: string;
  position?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  image, 
  children, 
  overlay = true,
  height = 'h-[70vh]',
  position = 'center'
}: HeroProps) => {
  
  return (
    <section 
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundPosition: position,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-furious-black/70 to-furious-black/50 z-10"></div>
      )}
      
      <div className="container-custom relative z-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 mb-8">{subtitle}</p>
          )}
          
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
