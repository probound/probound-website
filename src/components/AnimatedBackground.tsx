import { useEffect, useState } from 'react';
import { Monitor, Server, Cloud, Shield, Database, Wifi } from 'lucide-react';

export const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Network Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="network-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="currentColor" className="text-primary/40">
              <animate attributeName="r" values="1;2;1" dur="4s" repeatCount="indefinite" />
            </circle>
          </pattern>
          <linearGradient id="data-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="80%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-100 0;200 0;-100 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#network-grid)" />
        
        {/* Animated Connection Lines */}
        <g className="opacity-30">
          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#data-flow)" strokeWidth="2" />
          <line x1="20%" y1="70%" x2="80%" y2="30%" stroke="url(#data-flow)" strokeWidth="2" />
          <line x1="30%" y1="10%" x2="70%" y2="90%" stroke="url(#data-flow)" strokeWidth="2" />
        </g>
      </svg>

      {/* Floating Network Nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
          </div>
        ))}
      </div>

      {/* Floating IT Icons */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] text-primary/40 animate-float-slow">
          <Monitor className="w-8 h-8" />
        </div>
        <div className="absolute top-[25%] right-[15%] text-primary/40 animate-float-medium">
          <Server className="w-6 h-6" />
        </div>
        <div className="absolute top-[60%] left-[20%] text-primary/40 animate-float-fast">
          <Cloud className="w-7 h-7" />
        </div>
        <div className="absolute top-[40%] right-[25%] text-primary/40 animate-float-slow">
          <Shield className="w-6 h-6" />
        </div>
        <div className="absolute bottom-[30%] left-[70%] text-primary/40 animate-float-medium">
          <Database className="w-5 h-5" />
        </div>
        <div className="absolute bottom-[20%] right-[40%] text-primary/40 animate-float-fast">
          <Wifi className="w-6 h-6" />
        </div>
      </div>

      {/* Data Flow Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/80 rounded-full animate-data-flow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
    </div>
  );
};