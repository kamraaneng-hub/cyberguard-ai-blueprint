import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import AIMLSection from '@/components/AIMLSection';
import ThreatsSection from '@/components/ThreatsSection';
import BestPracticesSection from '@/components/BestPracticesSection';
import KnowledgeCheckSection from '@/components/KnowledgeCheckSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import InnovationsSection from '@/components/InnovationsSection';
import LimitationsSection from '@/components/LimitationsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IntroSection />
      <AIMLSection />
      <ThreatsSection />
      <BestPracticesSection />
      <KnowledgeCheckSection />
      <CaseStudiesSection />
      <InnovationsSection />
      <LimitationsSection />
      <FAQSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-primary/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 AI & ML Cybersecurity Awareness Platform. Empowering banking professionals worldwide.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
