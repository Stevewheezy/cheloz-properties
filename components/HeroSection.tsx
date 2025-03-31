"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import styled from "styled-components";
import Image from "next/image";

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  }

  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    z-index: 2;
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
    padding: 20px;
    border-radius: 10px;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }

  .cta-buttons {
    margin-top: 20px;
  }

  button {
    background: #ff6600;
    border: none;
    padding: 12px 24px;
    margin: 5px;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
  }

  button:hover {
    background: #e65c00;
  }

  /* ✅ Mobile Responsive Styles */
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem; /* Smaller headline */
    }

    p {
      font-size: 1rem; /* Smaller paragraph */
    }
  }
`;


const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <Swiper
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        modules={[EffectFade, Autoplay, Navigation]}
      >
        <SwiperSlide>
        <Image src="/images/hero/luxury_home_1.jpg" alt="Luxury Home 1" fill style={{ objectFit: "cover" }} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/images/hero/luxury_home_2.jpg" alt="Luxury Home 2" fill style={{ objectFit: "cover" }} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/images/hero/luxury_home_3.jpg" alt="Luxury Home 3" fill style={{ objectFit: "cover" }} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src="/images/hero/luxury_home_4.jpg" alt="Luxury Home 4" fill style={{ objectFit: "cover" }} />
        </SwiperSlide>
      </Swiper>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Find Your Dream Home</h1>
        <p>Luxury properties curated just for you.</p>
        <div className="cta-buttons">
          <button onClick={() => window.open("https://wa.me/2348169481061", "_blank")}>
            Chat on WhatsApp
          </button>
          <button onClick={() => window.open("tel:+2348169481061")}>Call Now</button>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default HeroSection;
