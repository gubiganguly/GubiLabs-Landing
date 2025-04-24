import React from 'react';
import { BrainCircuit, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <BrainCircuit className="h-8 w-8 text-primary-400 mr-2" />
              <span className="text-xl font-bold">GubiLabs</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Supercharging small businesses with generative AI solutions. Custom voicebots, chatbots, 
              AI agents, and full-stack development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <span className="text-neutral-300">gubi@gubilabs.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <span className="text-neutral-300">(517) 281-3926</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-0.5" />
                <span className="text-neutral-300">
                  43 Rainey St.<br />
                  Austin, TX
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} GubiLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;