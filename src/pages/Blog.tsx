import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
                ProBound.ai Blog
              </h1>
              <p className="text-xl text-gray-600">
                Insights, updates, and stories about AI innovation and digital workforce
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="AI Innovation"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    March 15, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    Sarah Chen
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">The Future of AI in Business Operations</h2>
                <p className="text-gray-600 mb-6">
                  Explore how artificial intelligence is reshaping the way businesses operate and what the future holds for digital workforce solutions.
                </p>
                <Button>Read More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "5 Ways AI is Transforming Customer Service",
                  excerpt: "Discover how AI-powered solutions are revolutionizing customer support and satisfaction.",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                  date: "March 10, 2024",
                  readTime: "4 min read",
                },
                {
                  title: "The Rise of Digital Workers",
                  excerpt: "Understanding the impact of AI assistants on workplace productivity and efficiency.",
                  image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                  date: "March 5, 2024",
                  readTime: "3 min read",
                },
                {
                  title: "AI Ethics in Business",
                  excerpt: "Exploring the importance of responsible AI development and implementation.",
                  image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                  date: "March 1, 2024",
                  readTime: "6 min read",
                },
              ].map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button variant="ghost" className="text-primary-600 hover:text-primary-700 p-0">
                      Read More →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;