
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top Most Thrilled Car Trending in 2023",
    excerpt: "Get the lowest price range for now. Explore thrilling features of trending cars in 2023.",
    category: "Cars",
    date: "June 12, 2023",
    image: "/lovable-uploads/3cb58310-527f-4687-99dc-db5575fcacc1.png"
  },
  {
    id: 2,
    title: "Affordable Price List of Toyota Cars 2023",
    excerpt: "The change of interior and exterior designs with new Toyota models explained.",
    category: "Pricing",
    date: "July 5, 2023",
    image: "/lovable-uploads/6134438d-11c9-4cab-bff9-9304a71d1521.png"
  },
  {
    id: 3,
    title: "10 Essential Car Maintenance Tips",
    excerpt: "Learn essential tips every vehicle owner should know to ensure durability.",
    category: "Maintenance",
    date: "August 18, 2023",
    image: "/lovable-uploads/99623fe4-df94-4978-bdaf-6bc5a017f03a.png"
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <SectionTitle 
          title="Our Blog" 
          subtitle="Stay updated with the latest automotive news, tips, and insights from our experts."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-furious-red text-white text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                  <Button variant="link" className="p-0 justify-start text-furious-red hover:text-furious-red/80">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
