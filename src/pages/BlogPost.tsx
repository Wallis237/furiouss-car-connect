
import { useParams, Link } from 'react-router-dom';
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from './Blog';

const BlogPost = () => {
  const { id } = useParams();
  const postId = parseInt(id || '1');
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === postId);
  
  // If post not found, show a message
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild className="bg-furious-red hover:bg-furious-red/90">
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="relative py-12 bg-furious-gray">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-furious-red hover:text-furious-red/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>
            
            <div className="bg-furious-red text-white text-sm font-medium px-3 py-1 rounded inline-block mb-8">
              {post.category}
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover" 
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">{post.excerpt}</p>
            
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
            
            <p className="mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            
            <p className="mb-6">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
              nisi ut aliquid ex ea commodi consequatur?
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            
            <p className="mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
              deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
              similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
