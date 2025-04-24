import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700 text-lg">
            Ready to supercharge your business with AI? Contact us today to discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-primary-600 rounded-xl p-8 text-white animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Why Work With Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-300 flex items-center justify-center mt-1">
                  <span className="text-primary-900 font-semibold text-sm">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Expertise</h4>
                  <p className="mt-1 text-primary-100">
                    Our team brings decades of combined experience in AI development and implementation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-300 flex items-center justify-center mt-1">
                  <span className="text-primary-900 font-semibold text-sm">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Tailored Solutions</h4>
                  <p className="mt-1 text-primary-100">
                    We create custom AI solutions specifically designed for your business needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-300 flex items-center justify-center mt-1">
                  <span className="text-primary-900 font-semibold text-sm">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Ongoing Support</h4>
                  <p className="mt-1 text-primary-100">
                    We don't just build and leave. We provide continuous support to ensure your success.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-300 flex items-center justify-center mt-1">
                  <span className="text-primary-900 font-semibold text-sm">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Results-Driven</h4>
                  <p className="mt-1 text-primary-100">
                    We focus on delivering measurable results and ROI for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;