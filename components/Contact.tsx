"use client";
import React from "react";
import styled from "styled-components";


const ContactWrapper = styled.div`
  padding: 50px 20px;
  background: #fff;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #222;
    margin-bottom: 20px;
  }

  .contact-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
  }

  .contact-info {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    background: #ff6600;
    border: none;
    padding: 12px 20px;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
    width: 100%;
  }

  button:hover {
    background: #e65c00;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactWrapper id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <p className="contact-info">📍 Location: Lagos, Nigeria</p>
        <p className="contact-info">📞 Phone: +234 907 393 1047</p>
        <p className="contact-info">📧 Email: chelozproperties@gmail.com</p>

        <div className="cta-buttons">
          <button onClick={() => window.open("https://wa.me/2348169481061", "_blank")}>Chat on WhatsApp</button>
          <button onClick={() => window.open("tel:+2348169481061")}>Call Now</button>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
// This component is styled using styled-components.