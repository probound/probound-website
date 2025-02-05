import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const LeadQualification = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-24">
        <section className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">
                  Use Case
                </span>
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight">
                Create Realistic AI Voice Agents for{" "}
                <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
                  Lead Qualification
                </span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Retell AI takes the complexity out of lead qualification by automating the process, engaging prospects in natural conversations, and determining their readiness and interest level quickly and effectively.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="default" className="bg-gray-900 hover:bg-gray-800">
                  TRY FOR FREE
                </Button>
                <Button size="lg" variant="outline">
                  CONTACT SALES
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/lovable-uploads/63733b44-f949-4165-9c40-10c50dd63990.png"
                alt="Lead Qualification"
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-medium text-gray-600">Retell Advantages</span>
              <h2 className="text-4xl font-bold mt-4">
                Benefits of Implementing Retell AI in Lead Qualification
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8V5L19 8L16 11V8ZM8 5V8L5 8L8 5ZM8 11L5 11L8 14V11ZM16 14V11L19 11L16 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Improved Conversion Rates</h3>
                <p className="text-gray-600">
                  By focusing only on qualified leads, Retell AI enables your sales team to concentrate their efforts where it matters most, ultimately improving conversion rates. With Retell AI qualifying leads consistently, your team spends less time screening and more time closing deals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 16L17 18L21 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Enhanced Sales Productivity</h3>
                <p className="text-gray-600">
                  Retell AI automates repetitive tasks like initial outreach and information gathering, freeing up sales reps to focus on high-value activities. This automation reduces burnout, optimizes productivity, and ensures that your team is constantly moving forward.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8H19C20.1046 8 21 8.89543 21 10V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V10C3 8.89543 3.89543 8 5 8H7M12 15V3M12 3L8 7M12 3L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Interactions</h3>
                <p className="text-gray-600">
                  Retell AI adapts to each lead's responses, making every interaction feel personal and relevant. This customized approach improves the prospect's experience, making them more likely to view your business as attentive and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeadQualification;