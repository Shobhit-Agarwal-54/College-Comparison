"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What factors should I consider when choosing a business college?",
    answer:
      "Key factors include accreditation, faculty expertise, alumni network, location, internship opportunities, tuition costs, and specialization options.",
  },
  {
    question: "Are there affordable business schools in California?",
    answer:
      "Yes. While private universities can be expensive, public institutions like California State University campuses often provide high-quality business programs at more affordable rates for in-state students.",
  },
  {
    question: "Do business colleges in California offer online MBA programs?",
    answer:
      "Many universities, such as UC Davis, Pepperdine University, and University of San Diego, offer flexible online or hybrid MBA options to cater to working professionals.",
  },
  {
    question: "How can your college comparator tool help me?",
    answer:
      "Our college comparator tool lets you quickly compare tuition fees, Popular Majors, SAT, ACT scores and more details to help you make the best decision.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
