import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Headphones, MessageSquare, Bot, Globe } from 'lucide-react';
import Button from '../components/Button';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Headphones,
      title: 'Custom Voicebots',
      description: 'Intelligent voice assistants that understand natural language and provide seamless customer service 24/7.'
    },
    {
      icon: MessageSquare,
      title: 'Smart Chatbots',
      description: 'Conversational AI that engages visitors, answers questions, and converts leads on your website.'
    },
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Automated assistants that handle internal tasks, data processing, and workflow automation.'
    },
    {
      icon: Globe,
      title: 'Websites & Apps',
      description: 'End-to-end development of AI-powered websites and mobile applications tailored to your business.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">What We Build</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700 text-lg">
            Our AI solutions are designed to enhance customer experiences, streamline operations, 
            and drive growth for small businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button
            variant="primary"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;