import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-24">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8">ProBound Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Revised on January 31, 2025</p>

          <p className="mb-6">
            This Privacy Policy describes how OSOP Corporation, doing business as ProBound ("ProBound", "we", "us", or "our"), collects, uses, and discloses information about you when you use our website (https://probound.ai) and the tools, services, features, and functionality offered on or through our website, including our AI-driven voice agent platform (collectively, the "Services").
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Changes to This Privacy Policy</h2>
              <p>
                We may modify this Privacy Policy from time to time. In the event of any material changes, we will update the "Last Revised" date at the top of this policy, post the updated version on our website, and take any additional steps required by applicable law. If you do not agree to any changes, please discontinue your use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Collection of Information</h2>
              <p>When you use or access the Services, we collect certain information about you from various sources.</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">A. Information You Provide to Us</h3>
              <p>Certain features of the Services require you to directly provide specific information. While you may elect not to provide this information, doing so may prevent you from accessing certain features. Information you directly submit through our Services includes:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Contact Information: Such as your name, email address, and the name of your company.</li>
                <li>Account and Profile Information: Such as your username or account handle, password, profile picture, and any other information you add to your account.</li>
                <li>Payment and Subscription Information: For users of our paid Services, including credit or debit card details and billing address.</li>
                <li>Your Content: This includes text prompts, voice or audio recordings, and other content that you upload.</li>
                <li>Other Information: Any additional information you choose to provide when communicating with us.</li>
              </ul>
            </section>

            {/* ... Additional sections following the same pattern */}

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p>If you have any questions about our privacy practices or this Privacy Policy, please contact us at:</p>
              <address className="mt-4 not-italic">
                ProBound – a OSOP Corporation company<br />
                1111B S Governors Ave, STE 3491<br />
                Dover, DE 19904<br />
                Email: <a href="mailto:security@probound.ai" className="text-primary hover:underline">security@probound.ai</a>
              </address>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
