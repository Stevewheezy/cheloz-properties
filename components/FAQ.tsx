"use client";
import React, { useState } from "react";
import styled from "styled-components";

const FAQWrapper = styled.div`
  padding: 50px 20px;
  background: #f9f9f9;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #222;
    margin-bottom: 20px;
  }

  .faq-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
  }

  .faq-item {
    background: #fff;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .faq-question {
    background: #ff6600;
    color: #fff;
    padding: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-question:hover {
    background: #e65c00;
  }

  .faq-answer {
    padding: 15px;
    background: #fff;
    color: #444;
    display: none;
  }

  .faq-answer.active {
    display: block;
  }
`;

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "How do I buy a property?", answer: "Simply browse our listings and contact us for details." },
    { question: "Do you offer payment plans?", answer: "Yes, we have flexible installment options." },
    { question: "Can I schedule a property viewing?", answer: "Absolutely! Contact us to book an appointment." },
    { question: "Do you handle property documentation?", answer: "Yes, we provide full legal support." },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQWrapper id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? "active" : ""}`}>{faq.answer}</div>
          </div>
        ))}
      </div>
    </FAQWrapper>
  );
};

export default FAQ;
