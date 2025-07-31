import { useEffect, useState } from 'react';
import { Headphones, Server, MessageCircle, Settings, Cpu, Mic } from 'lucide-react';

export const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neural Network Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural-grid" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="1.5" fill="currentColor" className="text-ai-primary/50">
              <animate attributeName="r" values="1;3;1" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="20" cy="40" r="0.8" fill="currentColor" className="text-ai-accent/60" />
            <circle cx="100" cy="80" r="0.8" fill="currentColor" className="text-ai-accent/60" />
          </pattern>
          <linearGradient id="voice-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="hsl(var(--ai-primary))" stopOpacity="0.4" />
            <stop offset="60%" stopColor="hsl(var(--ai-accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-150 0;300 0;-150 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
        
        {/* Voice Connection Lines */}
        <g className="opacity-25">
          <path d="M15,50 Q50,30 85,50" stroke="url(#voice-flow)" strokeWidth="1.5" fill="none" />
          <path d="M25,70 Q60,50 95,70" stroke="url(#voice-flow)" strokeWidth="1.5" fill="none" />
          <path d="M10,30 Q45,10 80,30" stroke="url(#voice-flow)" strokeWidth="1.5" fill="none" />
        </g>
      </svg>

      {/* Voice Waveform Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0, 50%)">
          {Array.from({ length: 20 }).map((_, i) => (
            <rect
              key={i}
              x={`${i * 5}%`}
              y="-2"
              width="2"
              height="4"
              fill="hsl(var(--ai-accent))"
              opacity="0.6"
            >
              <animate
                attributeName="height"
                values="2;12;4;8;2"
                dur={`${2 + Math.random() * 2}s`}
                repeatCount="indefinite"
                begin={`${Math.random() * 2}s`}
              />
              <animate
                attributeName="y"
                values="-1;-6;-2;-4;-1"
                dur={`${2 + Math.random() * 2}s`}
                repeatCount="indefinite"
                begin={`${Math.random() * 2}s`}
              />
            </rect>
          ))}
        </g>
      </svg>

      {/* AI Neural Nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-ai-primary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 85 + 10}%`,
              top: `${Math.random() * 85 + 10}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div className="absolute inset-0 bg-ai-accent/20 rounded-full animate-ping" />
            <div className="absolute inset-1 bg-ai-primary/60 rounded-full" />
          </div>
        ))}
      </div>

      {/* Voice AI Icons */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[12%] text-ai-primary/50 animate-float-slow">
          <Headphones className="w-7 h-7" />
        </div>
        <div className="absolute top-[25%] right-[18%] text-ai-accent/60 animate-float-medium">
          <Mic className="w-5 h-5" />
        </div>
        <div className="absolute top-[55%] left-[25%] text-ai-primary/45 animate-float-fast">
          <MessageCircle className="w-6 h-6" />
        </div>
        <div className="absolute top-[35%] right-[30%] text-ai-accent/50 animate-float-slow">
          <Server className="w-6 h-6" />
        </div>
        <div className="absolute bottom-[35%] left-[65%] text-ai-primary/55 animate-float-medium">
          <Cpu className="w-5 h-5" />
        </div>
        <div className="absolute bottom-[25%] right-[45%] text-ai-accent/45 animate-float-fast">
          <Settings className="w-6 h-6" />
        </div>
      </div>

      {/* Voice Data Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-ai-accent/70 rounded-full animate-voice-flow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* AI Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai-primary/3 via-transparent to-ai-accent/5" />
    </div>
  );
};