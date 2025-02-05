import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

const CustomerSupport = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Customer Support</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Deliver exceptional customer support with our AI-powered solution. Our system handles customer inquiries 24/7, providing instant responses and solutions to common issues while escalating complex cases to human agents when necessary.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-4">
              <li>24/7 availability for customer inquiries</li>
              <li>Multi-language support</li>
              <li>Intelligent ticket routing</li>
              <li>Automated issue resolution</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerSupport;