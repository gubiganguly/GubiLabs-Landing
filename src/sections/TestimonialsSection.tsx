import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "GubiLabs transformed our customer service with their AI voicebot. We've reduced wait times and our team now focuses on complex issues while the bot handles routine inquiries.",
      name: "Sarah Johnson",
      role: "Operations Director",
      company: "RetailPlus",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The chatbot GubiLabs built for our website has increased lead conversion by 35%. It's like having a sales rep available 24/7, and our customers love the instant responses.",
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "TechSolutions",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "Working with GubiLabs was seamless from start to finish. They took the time to understand our unique needs and delivered an AI solution that exceeded our expectations.",
      name: "Emma Rodriguez",
      role: "CEO",
      company: "HealthFirst Clinic",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700 text-lg">
            Hear from businesses that have transformed their operations with our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;