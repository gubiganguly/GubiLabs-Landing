import React from 'react';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 bg-gradient-to-br from-white via-primary-50 to-neutral-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-4">
              Supercharge Your Business with Generative AI
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-8">
              Voicebots, Chatbots, Agents & Apps – Built for Small Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToContact}
                className="shadow-lg shadow-primary-500/20"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-right hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI visualization"
                className="rounded-xl shadow-xl relative z-10 transform -rotate-3 transition-all duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;