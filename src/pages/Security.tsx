
import { ShieldCheck, Lock, Database, Cloud } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Security = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="bg-grid absolute inset-0 opacity-10"></div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold tracking-tight mb-6">
                Security at
                <span className="gradient-text block mt-2">probound</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Keeping your data secure and private is our top priority. Learn about how we protect your information.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        </section>
        
        {/* Security Overview */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Security Commitment</h2>
                <p className="text-lg leading-relaxed text-foreground/70 mb-6">
                  ProBound's AI Digital Workers handle sensitive customer information during conversations and interactions. 
                  We implement rigorous security measures to protect this data and ensure compliance with industry standards.
                </p>
                <p className="text-lg leading-relaxed text-foreground/70">
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
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Key Security Features</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">The protective measures we implement to safeguard your data</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl border border-border/40 bg-secondary/10 hover:border-primary/40 hover:card-glow transition-all duration-300">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Encryption</h3>
                <p className="text-foreground/70">
                  All data is encrypted both in transit and at rest using industry-standard 
                  encryption protocols to protect sensitive information.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl border border-border/40 bg-secondary/10 hover:border-primary/40 hover:card-glow transition-all duration-300">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Secure Infrastructure</h3>
                <p className="text-foreground/70">
                  Our infrastructure is hosted in secure data centers 
                  with 24/7 monitoring and advanced threat detection.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl border border-border/40 bg-secondary/10 hover:border-primary/40 hover:card-glow transition-all duration-300">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Access Controls</h3>
                <p className="text-foreground/70">
                  Strict access controls and role-based permissions ensure that 
                  only authorized personnel can access specific data and systems.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Compliance */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Compliance & Standards</h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">The frameworks and regulations we adhere to</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="p-6 rounded-2xl border border-border/40 bg-secondary/5 hover:border-primary/40 hover:card-glow transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                  <p className="text-foreground/70">
                    We adhere to relevant data protection regulations 
                    to ensure your customers' personal information is handled properly.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl border border-border/40 bg-secondary/5 hover:border-primary/40 hover:card-glow transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">Security Reviews</h3>
                  <p className="text-foreground/70">
                    Regular security assessments and penetration testing are conducted 
                    to identify and address potential vulnerabilities.
                  </p>
                </div>
                
                <div className="p-6 rounded-2xl border border-border/40 bg-secondary/5 hover:border-primary/40 hover:card-glow transition-all duration-300">
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
        <section className="py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Have Security Questions?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about our security practices, 
              please don't hesitate to contact our team.
            </p>
            <Button size="lg" className="gradient-bg hover:opacity-90" asChild>
              <a href="mailto:founders@probound.ai">
                Contact Our Security Team
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
