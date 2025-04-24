import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, step, title, description }) => {
  return (
    <div className="relative flex flex-col items-center md:items-start">
      {/* Number Circle */}
      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-4">
        {step}
      </div>
      
      {/* Content */}
      <div className="text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-3">
          <Icon className="h-6 w-6 text-primary-600 mr-2" />
          <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
        </div>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;