
import { ArrowLeft, ShieldCheck, Lock, Database, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <div className="bg-background border-b border-border/40 py-16">
          <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security at probound</h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl">
              Keeping your data secure and private is our top priority. Learn about how we protect your information.
            </p>
          </div>
        </div>
        
        {/* Security Overview */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Security Commitment</h2>
                <p className="text-foreground/70 mb-6">
                  probound's AI Digital Workers handle sensitive customer information during conversations and interactions. 
                  We implement rigorous security measures to protect this data and ensure compliance with industry standards.
                </p>
                <p className="text-foreground/70">
                  Our security program is built on industry best practices, with regular assessments and continuous improvement 
                  to stay ahead of emerging threats.
                </p>
              </div>
              <div className="flex justify-center">
                <ShieldCheck className="w-48 h-48 text-primary/20" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Security Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Security Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-secondary/10 border border-border/40 hover:card-glow transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Data Encryption</h3>
                  <p className="text-foreground/70">
                    All data is encrypted both in transit and at rest using industry-standard 
                    encryption protocols to protect sensitive information.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/10 border border-border/40 hover:card-glow transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Secure Infrastructure</h3>
                  <p className="text-foreground/70">
                    Our infrastructure is hosted in secure, SOC 2 compliant data centers 
                    with 24/7 monitoring and advanced threat detection.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary/10 border border-border/40 hover:card-glow transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Access Controls</h3>
                  <p className="text-foreground/70">
                    Strict access controls and role-based permissions ensure that 
                    only authorized personnel can access specific data and systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Compliance */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Compliance & Standards</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                  <p className="text-foreground/70">
                    We adhere to GDPR, CCPA, and other relevant data protection regulations 
                    to ensure your customers' personal information is handled properly.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Security Reviews</h3>
                  <p className="text-foreground/70">
                    Regular security assessments and penetration testing are conducted 
                    to identify and address potential vulnerabilities.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
                  <p className="text-foreground/70">
                    We have a comprehensive incident response plan in place to quickly 
                    address any security events and minimize potential impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Have Security Questions?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about our security practices, 
              please don't hesitate to contact our team.
            </p>
            <a 
              href="mailto:founders@probound.ai" 
              className="inline-flex items-center text-primary hover:underline"
            >
              founders@probound.ai
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
