import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

const DispatchService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Dispatch Service</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Streamline your dispatch operations with our AI-powered dispatch service. Efficiently manage resource allocation, coordinate field teams, and optimize routes for better service delivery.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-4">
              <li>Real-time resource allocation</li>
              <li>Automated dispatch scheduling</li>
              <li>Route optimization</li>
              <li>Field team coordination</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DispatchService;