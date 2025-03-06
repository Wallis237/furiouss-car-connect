
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Mercedes G-Class: The Ultimate Luxury SUV for 2024",
    excerpt: "Discover why the iconic G-Wagon continues to dominate the luxury SUV market with unparalleled prestige and capability.",
    category: "Luxury SUVs",
    date: "June 12, 2023",
    image: "/lovable-uploads/3ac20a51-a62e-4a41-a8f8-51f86f6cdb62.png",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Ferrari 458 Italia: Engineering Perfection",
    excerpt: "Explore the technical brilliance behind Ferrari's masterpiece and why it remains one of the most sought-after supercars.",
    category: "Supercars",
    date: "July 5, 2023",
    image: "/lovable-uploads/b4afe246-06ec-4079-899a-8f1bb9de1782.png",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Toyota 4Runner TRD Pro: Conquering Any Terrain",
    excerpt: "Learn why off-road enthusiasts and everyday drivers alike are embracing Toyota's rugged yet refined SUV.",
    category: "Off-Road",
    date: "August 18, 2023",
    image: "/lovable-uploads/c107f110-9e53-4195-8f04-3ddfaba0f9eb.png",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Range Rover Sport vs Evoque: Which Is Right For You?",
    excerpt: "A comprehensive comparison between Land Rover's popular luxury SUVs to help you make the perfect choice.",
    category: "Comparisons",
    date: "September 3, 2023",
    image: "/lovable-uploads/666372ae-6e35-483a-a1e0-5aab2a93a8ff.png",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Hyundai Kona Electric: The Future of Urban Mobility",
    excerpt: "Explore how Hyundai's compact electric SUV is changing the game for environmentally conscious city drivers.",
    category: "Electric Vehicles",
    date: "October 12, 2023",
    image: "/lovable-uploads/849e4c8f-bcea-454e-8e0d-898f3fe5656b.png",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Audi A1: Small Car, Big Personality",
    excerpt: "Why Audi's compact hatchback delivers premium German engineering in a surprisingly affordable package.",
    category: "Compact Cars",
    date: "November 25, 2023",
    image: "/lovable-uploads/38328e4f-572f-42c5-a7bc-fb267b67f05a.png",
    readTime: "4 min read"
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="relative bg-furious-gray py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle 
              title="The Furious Journal" 
              subtitle="Stay updated with the latest automotive news, insights, and expert reviews"
            />
          </motion.div>

          <div className="flex justify-center mt-8">
            <div className="flex rounded-md overflow-hidden border border-gray-200">
              <button className="px-4 py-2 bg-furious-red text-white text-sm font-medium">All</button>
              <button className="px-4 py-2 bg-white text-furious-text text-sm hover:bg-gray-50 transition-colors">Luxury SUVs</button>
              <button className="px-4 py-2 bg-white text-furious-text text-sm hover:bg-gray-50 transition-colors">Supercars</button>
              <button className="px-4 py-2 bg-white text-furious-text text-sm hover:bg-gray-50 transition-colors">Electric</button>
              <button className="px-4 py-2 bg-white text-furious-text text-sm hover:bg-gray-50 transition-colors">Reviews</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                <div className="relative h-56 overflow-hidden group">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    loading="lazy"
                    width="400"
                    height="300"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-furious-red text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    {post.readTime && <span>{post.readTime}</span>}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-furious-red transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                  <Button variant="link" className="p-0 justify-start text-furious-red hover:text-furious-red/80 group" asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-furious-red hover:bg-furious-red/90 text-white">
            Load More Articles
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
