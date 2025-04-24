import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, company, image }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-neutral-100">
      <div className="flex flex-col">
        <blockquote className="text-neutral-700 mb-6 italic relative">
          <span className="text-4xl text-primary-300 absolute -top-3 -left-1">"</span>
          <p className="pl-5">{quote}</p>
          <span className="text-4xl text-primary-300 absolute bottom-0 right-0">"</span>
        </blockquote>
        
        <div className="flex items-center mt-2">
          <img 
            src={image} 
            alt={`${name} from ${company}`} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-neutral-900">{name}</h4>
            <p className="text-sm text-neutral-600">{role}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;