import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-neutral-100 h-full">
      <div className="flex flex-col items-center text-center">
        <div className="bg-primary-50 p-4 rounded-full mb-4">
          <Icon className="h-8 w-8 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-neutral-900">{title}</h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;