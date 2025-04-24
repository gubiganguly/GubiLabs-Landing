import React from 'react';
import ProcessStep from '../components/ProcessStep';
import { Search, Code, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and challenges to identify the best AI solution for your needs.'
    },
    {
      icon: Code,
      title: 'Build',
      description: 'Our team designs and develops a custom AI solution tailored specifically to your business requirements.'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We implement the solution, train your team, and provide ongoing support to ensure long-term success.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700 text-lg">
            Our streamlined process ensures we deliver effective AI solutions that align with your business goals.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-primary-100 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProcessStep
                  icon={step.icon}
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-primary-50 rounded-xl border border-primary-100 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">Our Commitment</h3>
          <p className="text-neutral-700 mb-4">
            We believe in building solutions that not only meet your current needs but can scale and evolve with your business.
            Our team stays at the cutting edge of AI developments to ensure your business benefits from the latest advancements.
          </p>
          <p className="text-neutral-700">
            We emphasize transparency throughout the process, providing regular updates and clear communication about project 
            progress, timelines, and outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;