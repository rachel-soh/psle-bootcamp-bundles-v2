import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import BootcampSection from '@/components/BootcampSection';
import TeacherSection from '@/components/TeacherSection';
import FAQSection from '@/components/FAQSection';
import ObsessedSection from '@/components/ObsessedSection';
import PricingSection from '@/components/PricingSection';
import BootcampTimings from '@/components/BootcampTimings';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the header height to offset the scroll position
      const headerHeight = document.querySelector('header')?.offsetHeight || 64;
      
      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      
      // Calculate the absolute position by adding the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      // Scroll to the element with the offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Add padding to the top of each section to account for the header height
  useEffect(() => {
    const updateSectionPadding = () => {
      const headerHeight = document.querySelector('header')?.offsetHeight || 64;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        // Add a smaller scroll margin to account for the header height plus a small gap
        (section as HTMLElement).style.scrollMarginTop = `${headerHeight + 8}px`;
      });
    };
    
    // Update padding when the component mounts and when window is resized
    updateSectionPadding();
    window.addEventListener('resize', updateSectionPadding);
    
    return () => {
      window.removeEventListener('resize', updateSectionPadding);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c9bd57da-c8ee-4e55-981a-c3def0189823.png" 
              alt="Mind Stretcher Logo" 
              className="h-10" 
            />
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('obsessed-section')} 
                className="text-slate-700 hover:text-educational-blue text-sm transition-colors"
              >
                Why It Works
              </button>
              <button 
                onClick={() => scrollToSection('bootcamp-section')} 
                className="text-slate-700 hover:text-educational-blue text-sm transition-colors"
              >
                Bootcamps
              </button>
              <button 
                onClick={() => scrollToSection('bootcamp-timings')} 
                className="text-slate-700 hover:text-educational-blue text-sm transition-colors"
              >
                Schedules
              </button>
              <button 
                onClick={() => scrollToSection('pricing-section')} 
                className="text-slate-700 hover:text-educational-blue text-sm transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('teacher-section')} 
                className="text-slate-700 hover:text-educational-blue text-sm transition-colors"
              >
                Teachers
              </button>
            </div>
          </nav>

          {/* Register Button */}
          <div className="flex items-center">
            <Button className="bg-educational-blue hover:bg-blue-700">
              Register Now <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Video Section */}
        <VideoSection />
        
        {/* "We're Obsessed" Section */}
        <section id="obsessed-section" className="pt-8">
          <ObsessedSection />
        </section>
        
        {/* Bootcamp Details Section */}
        <section id="bootcamp-section" className="pt-8">
          <BootcampSection />
        </section>
        
        {/* Bootcamp Dates & Timings Section */}
        <section id="bootcamp-timings" className="pt-8">
          <BootcampTimings />
        </section>
        
        {/* Pricing Section */}
        <section id="pricing-section" className="pt-8">
          <PricingSection />
        </section>
        
        {/* Teachers Section */}
        <section id="teacher-section" className="pt-8">
          <TeacherSection />
        </section>
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Call to Action Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-educational-blue to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Ready to start your PSLE journey?</h2>
            <p className="text-lg mb-8 text-blue-100">Secure your child's spot in our PSLE Bootcamp Bundles and set them up for PSLE success.</p>
            <Button size="lg" className="bg-white text-educational-blue hover:bg-blue-50 transition-colors duration-300">
              Register Now <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      
      {/* Simplified Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/c9bd57da-c8ee-4e55-981a-c3def0189823.png" 
                alt="Mind Stretcher Logo" 
                className="h-10" 
              />
            </div>
            <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
              <button 
                onClick={() => scrollToSection('obsessed-section')} 
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Why It Works
              </button>
              <button 
                onClick={() => scrollToSection('bootcamp-section')} 
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Bootcamps
              </button>
              <button 
                onClick={() => scrollToSection('bootcamp-timings')} 
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Schedules
              </button>
              <button 
                onClick={() => scrollToSection('pricing-section')} 
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('teacher-section')} 
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Teachers
              </button>
            </nav>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-slate-800 text-sm">
            <p>&copy; {new Date().getFullYear()} Mind Stretcher Education Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
