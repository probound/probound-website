import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

const Receptionists = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Receptionists</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Our AI receptionists provide professional front-desk services for businesses of all sizes. Handle appointments, greet visitors, and manage incoming calls with our intelligent virtual reception system.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-4">
              <li>Appointment scheduling and management</li>
              <li>Visitor check-in and registration</li>
              <li>Call routing and message taking</li>
              <li>Calendar integration</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Receptionists;