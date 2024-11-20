import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a variety of technical services including desktop support, laptop support, MacBook support, printer support, coding issue resolution, and server support.',
    },
    {
      question: 'How can I book a service?',
      answer: 'You can book a service directly on our website by selecting the service you need and following the booking process.',
    },
    {
      question: 'What are your payment options?',
      answer: 'We accept all major credit cards, debit cards, and online payment options such as PayPal.',
    },
    {
      question: 'Is there a subscription option for ongoing support?',
      answer: 'Yes, we offer subscription plans for monthly services. You can choose a plan that best fits your needs on our services page.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faqs-container">
      <h1 className="heading">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
