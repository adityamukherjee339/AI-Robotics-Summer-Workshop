"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are there any technical prerequisites?",
      answer: "No prior coding or robotics experience is required! We start from the absolute basics and gradually build up. All your child needs is a computer with internet access and a curiosity to learn."
    },
    {
      question: "How will the physical robotics kit be shipped?",
      answer: "Once enrolled, the physical robotics kit will be shipped directly to your registered address within 3-5 business days. The cost of the kit is fully included in the course fee, with no hidden shipping charges."
    },
    {
      question: "What are the batch timings and are sessions recorded?",
      answer: "We offer flexible evening and weekend batches. The exact schedule can be chosen during checkout. Yes, all live sessions are recorded and made available in the student dashboard for future reference or if a class is missed."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about the workshop.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md ring-1 ring-primary/20' : 'hover:border-gray-300'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-primary' : ''}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
