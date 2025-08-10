import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-banking-cybersecurity.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-accent/30 rounded-full float opacity-60" />
      <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-lg float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 border border-accent/30 rounded-full float opacity-50" style={{ animationDelay: '2s' }} />

      {/* Hero Content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          AI & ML
          <span className="block text-cyber">Cybersecurity</span>
          <span className="block text-4xl md:text-5xl font-normal mt-4">for Banking Professionals</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Master the future of financial security through AI-powered threat detection and human-centered awareness training
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToContent}
            className="btn-hero group"
          >
            <span className="flex items-center gap-3">
              Start Learning
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button 
            onClick={() => document.getElementById('knowledge-check')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-card px-8 py-4 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Quick Assessment
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;