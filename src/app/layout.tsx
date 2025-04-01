"use client"; 

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; // Import the Footer component
import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cheloz-properties.vercel.app"),
  title: "Cheloz Properties | Buy & Rent Luxury Homes",
  description: "Find your dream home with Cheloz Properties. Explore luxury apartments, houses, and investment opportunities.",
  openGraph: {
    title: "Cheloz Properties | Buy & Rent Luxury Homes",
    description: "Find your dream home with Cheloz Properties. Explore luxury apartments, houses, and investment opportunities.",
    url: "https://cheloz-properties.vercel.app",
    siteName: "Cheloz Properties",
    images: [
      {
        url: "https://cheloz-properties.vercel.app/images/hero/luxury_home_1.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Home",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheloz Properties | Buy & Rent Luxury Homes",
    description: "Find your dream home with Cheloz Properties. Explore luxury apartments, houses, and investment opportunities.",
    images: ["/images/hero/luxury_home_1.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}