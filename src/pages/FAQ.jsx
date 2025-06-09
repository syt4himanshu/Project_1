import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I join a fitness challenge?",
      answer: "You can join a fitness challenge by visiting the Challenges page and clicking on any challenge that interests you. Click the 'Join Challenge' button to participate and start tracking your progress."
    },
    {
      question: "Can I create my own fitness group?",
      answer: "Yes! You can create your own fitness group by going to the Community page and clicking the 'Create Group' button. You'll be able to set the group's focus, schedule, and location."
    },
    {
      question: "How do I track my progress?",
      answer: "Your progress is automatically tracked when you participate in challenges. You can view your progress in your Profile page, where you'll see your achievements, active challenges, and overall statistics."
    },
    {
      question: "Is FitSphere free to use?",
      answer: "Yes, FitSphere is completely free to use! We believe in making fitness accessible to everyone. Some premium features may be added in the future, but the core functionality will remain free."
    },
    {
      question: "How do I connect with other members?",
      answer: "You can connect with other members through the Community page. Join existing groups, participate in discussions, and share your fitness journey. You can also use the search feature to find members with similar fitness goals."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about FitSphere
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <button
              onClick={() => window.location.href = '/contact'}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact us
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage; 