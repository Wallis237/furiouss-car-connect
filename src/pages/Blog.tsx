
import { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Top Most Thrilled Car Trending in 2023',
      excerpt: 'Get the lowest price range for now. Explore thrilling features of trending cars in 2023.',
      date: 'July 18, 2023',
      author: 'Admin',
      category: 'Car Trends',
      image: 'public/lovable-uploads/99623fe4-df94-4978-bdaf-6bc5a017f03a.png'
    },
    {
      id: 2,
      title: 'Affordable Price List of Toyota Cars 2023',
      excerpt: 'The change of interior and exterior designs with new Toyota models explained.',
      date: 'June 24, 2023',
      author: 'Admin',
      category: 'Car Reviews',
      image: 'public/lovable-uploads/3cb58310-527f-4687-99dc-db5575fcacc1.png'
    },
    {
      id: 3,
      title: '10 Essential Car Maintenance Tips',
      excerpt: 'Learn essential tips every vehicle owner should know to ensure durability.',
      date: 'May 10, 2023',
      author: 'Admin',
      category: 'Maintenance',
      image: 'public/lovable-uploads/6134438d-11c9-4cab-bff9-9304a71d1521.png'
    },
    {
      id: 4,
      title: 'The Future of Electric Luxury Vehicles',
      excerpt: 'Exploring the advancements and innovations in the electric luxury car market.',
      date: 'April 5, 2023',
      author: 'Admin',
      category: 'Innovation',
      image: 'public/lovable-uploads/99623fe4-df94-4978-bdaf-6bc5a017f03a.png'
    },
    {
      id: 5,
      title: 'How to Choose the Perfect Luxury SUV',
      excerpt: 'A comprehensive guide to selecting the ideal luxury SUV for your lifestyle and needs.',
      date: 'March 18, 2023',
      author: 'Admin',
      category: 'Buying Guide',
      image: 'public/lovable-uploads/3cb58310-527f-4687-99dc-db5575fcacc1.png'
    },
    {
      id: 6,
      title: 'The Art of Detailing: Keep Your Car Looking New',
      excerpt: 'Professional tips and techniques to maintain your vehicle's appearance and value.',
      date: 'February 22, 2023',
      author: 'Admin',
      category: 'Maintenance',
      image: 'public/lovable-uploads/6134438d-11c9-4cab-bff9-9304a71d1521.png'
    }
  ];

  const recentPosts = blogPosts.slice(0, 3);

  const categories = [
    { name: 'Car Trends', count: 12 },
    { name: 'Car Reviews', count: 8 },
    { name: 'Maintenance', count: 15 },
    { name: 'Innovation', count: 7 },
    { name: 'Buying Guide', count: 10 },
  ];

  return (
    <Layout>
      <Hero
        title="Our Blog"
        subtitle="Insights, updates, and stories from the world of luxury automotive"
        image="public/lovable-uploads/6134438d-11c9-4cab-bff9-9304a71d1521.png"
        height="h-[50vh]"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <SectionTitle
                title="Recent Articles"
                alignment="left"
                withLine={true}
              />

              <div className="space-y-10">
                {blogPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-8 border-b border-gray-200 pb-10"
                  >
                    <div className="md:w-2/5">
                      <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-lg">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                    </div>
                    <div className="md:w-3/5">
                      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          <span>{post.category}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 hover:text-furious-red transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-furious-red font-medium inline-flex items-center hover:underline"
                      >
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
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

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Search Posts</h3>
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-furious-red focus:border-transparent transition-all"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-furious-text hover:text-furious-red transition-colors"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name} className="flex justify-between items-center">
                      <Link 
                        to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-furious-text hover:text-furious-red transition-colors"
                      >
                        {category.name}
                      </Link>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
