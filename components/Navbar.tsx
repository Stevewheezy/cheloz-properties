"use client";
import Image from "next/image";
import logo from "../public/images/logo.jpeg";

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";


const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  color: #fff;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  .logo {
    display: flex;
    align-items: center;
    gap: 10px; /* Space between image and text */
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
  }

  .menu {
    display: flex;
    gap: 20px;
  }

  .menu a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
  }

  .menu a:hover {
    color: #ff6600;
  }

  .mobile-menu {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .menu {
      display: none;
    }

    .mobile-menu {
      display: block;
      font-size: 2rem;
    }

    .mobile-nav {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(5px);
      padding: 20px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .mobile-nav a {
      color: #fff;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
`;

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <NavbarWrapper>
      <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
  <Image src={logo} alt="Cheloz Properties Logo" width={50} height={50} />
  <span className="logo-text">Cheloz Properties</span>
</div>

  
        {/* Logo */}

      {/* Desktop Menu */}
      <div className="menu">
        <Link to="hero" smooth={true} duration={500}>Home</Link>
        <Link to="properties" smooth={true} duration={500}>Properties</Link>
        <Link to="faq" smooth={true} duration={500}>FAQ</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="mobile-nav">
          <Link to="hero" smooth={true} duration={500} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="properties" smooth={true} duration={500} onClick={() => setMobileOpen(false)}>Properties</Link>
          <Link to="faq" smooth={true} duration={500} onClick={() => setMobileOpen(false)}>FAQ</Link>
          <Link to="contact" smooth={true} duration={500} onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
// This component creates a responsive navigation bar with a logo and links to different sections of the page.