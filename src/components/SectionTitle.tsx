
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  withLine?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  withLine = true
}: SectionTitleProps) => {
  
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mb-12 ${alignmentClasses[alignment]}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-furious-text">
        {title}
      </h2>
      
      {withLine && (
        <div className={`h-1 w-20 bg-furious-red mt-4 ${
          alignment === 'center' ? 'mx-auto' : 
          alignment === 'right' ? 'ml-auto' : ''
        }`}></div>
      )}
      
      {subtitle && (
        <p className="text-lg text-gray-600 mt-6">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
