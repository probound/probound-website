import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

const LeadQualification = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Lead Qualification</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Our AI-powered lead qualification system helps businesses efficiently identify and prioritize potential customers. By analyzing conversations and interactions in real-time, we can determine lead quality and readiness to purchase.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-4">
              <li>Automated lead scoring based on conversation analysis</li>
              <li>Real-time qualification during initial contact</li>
              <li>Seamless integration with your CRM</li>
              <li>Detailed reporting and analytics</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeadQualification;