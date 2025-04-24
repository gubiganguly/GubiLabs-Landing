import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is generative AI and how can it help my business?",
      answer: "Generative AI refers to artificial intelligence systems that can create new content, including text, images, and speech. For businesses, this technology can automate customer service, generate content, analyze data, and streamline operations, ultimately saving time and resources while improving customer experiences."
    },
    {
      question: "How much do your AI solutions cost?",
      answer: "Our pricing varies based on the complexity of your project, the type of solution needed, and the level of customization required. We offer tailored packages starting at $1,500 for basic implementations, with ongoing support options available. We provide detailed quotes after our initial discovery call."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Implementation timelines vary depending on the scope and complexity of the project. Simple chatbots can be deployed in 2-4 weeks, while more complex voicebots or custom applications typically take 6-12 weeks. During our discovery phase, we'll provide a detailed timeline specific to your project."
    },
    {
      question: "Do I need technical expertise to use your AI solutions?",
      answer: "No technical expertise is required. We design our solutions to be user-friendly and provide comprehensive training for your team. Additionally, we offer ongoing support to ensure you can effectively manage and utilize your AI tools."
    },
    {
      question: "Can your AI solutions integrate with my existing systems?",
      answer: "Yes, our AI solutions are designed to integrate seamlessly with most common business systems including CRMs, e-commerce platforms, customer service software, and more. During the discovery phase, we'll assess your existing technology stack to ensure smooth integration."
    },
    {
      question: "Is my data secure with your AI solutions?",
      answer: "Absolutely. We prioritize data security and privacy in all our implementations. We use industry-standard encryption, follow best practices for data handling, and ensure compliance with relevant regulations such as GDPR and CCPA. We can also sign NDAs and provide detailed information about our security measures."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-700 text-lg">
            Have questions about AI and how it can help your business? Find answers to common questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-50 rounded-xl p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;