
import { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
    
    // Clear error when user checks the box
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.agreement) {
      newErrors.agreement = 'You must agree to the terms of service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      
      // Show success message
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        agreement: false
      });
    }
  };

  return (
    <Layout>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries and assistance"
        image="public/lovable-uploads/99623fe4-df94-4978-bdaf-6bc5a017f03a.png"
        height="h-[50vh]"
      />

      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Get In Touch"
            subtitle="We're here to help and answer any questions you may have"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="w-16 h-16 bg-furious-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-furious-red" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-gray-600">+990 123 456 789</p>
              <p className="text-gray-600">+990 456 123 789</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="w-16 h-16 bg-furious-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-furious-red" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-gray-600">help@furious.com</p>
              <p className="text-gray-600">info@furious.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="w-16 h-16 bg-furious-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-furious-red" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="text-gray-600">West Palm Beach,</p>
              <p className="text-gray-600">4669 Travis Street</p>
            </motion.div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mt-12">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
                  placeholder="+1 (123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreement"
                    name="agreement"
                    type="checkbox"
                    checked={formData.agreement}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-furious-red border-gray-300 rounded focus:ring-furious-red focus:ring-offset-0"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreement" className={`font-medium ${errors.agreement ? 'text-red-500' : 'text-gray-700'}`}>
                    I agree to Furious's Terms of Service
                  </label>
                </div>
              </div>
              {errors.agreement && <p className="mt-1 text-sm text-red-500">{errors.agreement}</p>}

              <div>
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <Check className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <section className="py-16 bg-furious-gray">
        <div className="container-custom">
          <SectionTitle
            title="Visit Our Showroom"
            subtitle="Experience luxury vehicles in person at our state-of-the-art facility"
          />

          <div className="mt-8 rounded-lg overflow-hidden h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14104.539893908996!2d-80.07231037907249!3d26.706539290624254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d7e151cf5df5%3A0x1cbd9f4a5908eca5!2sWest%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1664312034279!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
