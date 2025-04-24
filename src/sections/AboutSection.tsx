import React from 'react';
import Button from '../components/Button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">About GubiLabs</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-100">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Our Story</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Founded by Gubi Ganguly and Christian Defronderville, GubiLabs was born from a shared vision: to make powerful 
                generative AI technology accessible to small businesses.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                We saw too many small businesses struggling to implement AI solutions that were either too complex, 
                too expensive, or simply not designed with their needs in mind. We're changing that.
              </p>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-xl border border-primary-100">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Our Mission</h3>
              <p className="text-neutral-700 leading-relaxed">
                We're on a mission to democratize AI by creating custom, practical AI solutions that solve real 
                business problems. We believe that small businesses deserve the same powerful AI tools as enterprise 
                companies, just tailored to their unique scale and needs.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <Button 
                variant="primary"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Work With Us
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img 
                  src="/Gubi Profile.jpg" 
                  alt="Gubi Profile" 
                  width={300} 
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">Gubi Ganguly</h3>
              <p className="text-center text-neutral-600 mb-3">Co-Founder & CEO</p>
              <p className="text-neutral-700 text-center text-sm">
                Generative AI consultant with 5+ years of leading startups and implementing AI solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-neutral-100">
              <img
                src="/Christian Profile.jpg"
                alt="Christian de Frondeville"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-neutral-900 mb-2">Christian de Frondeville</h3>
              <p className="text-center text-neutral-600 mb-3">Co-Founder & CTO</p>
              <p className="text-neutral-700 text-center text-sm">
                 AI Research Lead with 5+ years of experience in machine learning, natural language processing and agnetic AI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;