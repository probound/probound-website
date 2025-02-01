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

          <div className="space-y-8">
            <section>
              <p className="mb-6">
                This Privacy Policy describes how OSOP Corporation, doing business as ProBound ("ProBound", "we", "us", or "our"), collects, uses, and discloses information about you when you use our website (https://probound.ai) and the tools, services, features, and functionality offered on or through our website, including our AI-driven voice agent platform (collectively, the "Services"). For the purpose of this Privacy Policy, ProBound is the data controller for your information, and "you" and "your" means you, the user of the Services. Please note that the Services are designed for users in the United States only and are not intended for users located outside the United States.
              </p>
              <p className="mb-6">
                Please read this Privacy Policy carefully. By using any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access the Services.
              </p>
            </section>

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
                <li>Account and Profile Information: Such as your username or account handle, password, profile picture, and any other information you add to your account. If you register an account, you are responsible for keeping your account credentials secure. If you suspect your account has been compromised, please contact us immediately.</li>
                <li>Payment and Subscription Information: For users of our paid Services, including credit or debit card details and billing address. This information is collected on our behalf by our payment processor, along with details about your subscription tier and transaction history.</li>
                <li>Your Content: This includes text prompts, voice or audio recordings, and other content that you upload to the Services to generate new content or outputs. We also collect generated audio and other outputs created through the Services, alongside associated metadata and any feedback you provide, which may include personal information.</li>
                <li>Other Information: Any additional information you choose to provide when communicating with us.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">B. Information Collected Automatically</h3>
              <p>We, and third parties on our behalf, automatically collect information about your interactions with the Services using cookies, pixels, and other tracking technologies ("Tracking Technologies"). This information is used to tailor your experience, run analytics, troubleshoot issues, and improve the Services. Such automatically collected information includes:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Device Information: Including device type, operating system, screen size, unique device identifiers, IP address, preferred language, and browser details.</li>
                <li>Location Information: Such as your approximate location and, if you choose to provide it, precise geolocation.</li>
                <li>Interaction Data: Including browser type, log data, date and time stamps, clickstream data (e.g., page views, duration spent on pages, content interacted with), and similar information.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">C. Information Collected from Other Sources</h3>
              <p>We may obtain information about you from third-party sources, including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Login Integration Partners: When you access the Services using platforms like GitHub or Google, which may provide your name, email address, and other publicly accessible account information.</li>
                <li>Social Media Platforms: When you interact with us on platforms such as Facebook or Instagram.</li>
              </ul>
              <p>Any information received from external sources will be treated in accordance with this Privacy Policy. We are not responsible for the accuracy of third-party information or the privacy practices of such third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Use of Information</h2>
              <p>We use the information we collect about you for various purposes, including to:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Provide, Operate, and Improve the Services: This includes generating outputs from your inputs and using your data to train and enhance our AI models. (You may request that we exclude certain categories of your content from being used to train our models by completing our online form. Such requests will not affect previous uses of your data.)</li>
                <li>Personalize Your Experience: Such as remembering devices, login information, and your personal preferences as you use the Services.</li>
                <li>Enhance Safety and Security: To protect against fraud, malicious, deceptive, or illegal activities, to enforce our Acceptable Use Policy, and for system maintenance and troubleshooting.</li>
                <li>Conduct Research and Development: To monitor trends and develop new features, products, services, and improvements to our models.</li>
                <li>Communicate with You: Including for customer support, marketing, and advertising purposes. You may opt out of marketing emails via the unsubscribe instructions included in those emails, though you may still receive essential transactional communications.</li>
                <li>Comply with Legal Obligations: To enforce applicable terms of service, protect our rights and the rights of others, and comply with applicable laws and regulatory requirements.</li>
                <li>Aggregate or Deidentify Information: We may combine or deidentify personal information for any lawful purpose.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Disclosure of Information</h2>
              <p>We may disclose your information to third parties under the following circumstances:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Service Providers: To vendors or other service providers who help us operate and improve the Services (e.g., for cloud storage, payment processing, system administration, security, customer relationship management, marketing communications, and data analytics).</li>
                <li>At Your Direction: When you request or instruct us to disclose information, such as through your use of login integrations.</li>
                <li>Affiliates: To our corporate affiliates or other entities within our corporate group.</li>
                <li>Business Transactions: In connection with or in anticipation of a merger, asset sale, bankruptcy, or other business transaction.</li>
                <li>Professional Advisors: Such as lawyers, auditors, and insurers.</li>
                <li>Legal and Security Purposes: To comply with legal obligations, enforce our policies, protect the rights and safety of our users and others, and to cooperate with regulatory or law enforcement authorities.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Cookies and Other Tracking Technologies</h2>
              <p>We use Tracking Technologies to collect data about your browsing activities on the Services. Most browsers automatically accept cookies, but you can control their use through your browser settings. Blocking or deleting cookies may affect the functionality of the Services, including login features.</p>
              <p className="mt-4">Your browser may also transmit "Do Not Track" signals. However, our website is not designed to respond to these signals. For more information about "Do Not Track," please visit All About DNT.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Social Features</h2>
              <p>Certain features of the Services allow you to interact with third-party services or platforms (e.g., Facebook, LinkedIn, or X [formerly Twitter]) through integrations ("Social Features"). When you use Social Features, information you post or share may become publicly accessible on the third-party platform. Both ProBound and the third party may have access to such information in accordance with their respective policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Third Party Websites and Materials</h2>
              <p>Our Services may contain links to third-party websites or display third-party content. We do not control these websites or materials, and their privacy practices may differ from ours. We encourage you to review the privacy policies of any third-party sites you visit. The inclusion of such links does not imply endorsement by ProBound.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
              <p>Our Services are not intended for children, and we do not knowingly collect personal information from children under the age of 13. If we become aware that we have inadvertently collected information from a child under 13, we will take reasonable steps to delete such information. If you are the parent or guardian of a child who has provided us with personal information, please contact us at security@probound.ai to request its deletion.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Data Security</h2>
              <p>While we take reasonable measures to protect your personal information, please be aware that no security measures are perfect or impenetrable. Information sent to us electronically may be vulnerable while in transit. We recommend you avoid using insecure channels to send sensitive or confidential information. If you believe your data may have been compromised, please contact us immediately.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p>If you have any questions about our privacy practices or this Privacy Policy, please contact us at:</p>
              <address className="mt-4 not-italic">
                ProBound – a OSOP Corporation company<br />
                1111B S Governors Ave, STE 3491<br />
                Dover, DE 19904<br />
                Email: <a href="mailto:support@probound.ai" className="text-primary hover:underline">support@probound.ai</a>
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