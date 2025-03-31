import Navbar from "../../components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Set `metadataBase` to your live Vercel URL
export const metadata: Metadata = {
  metadataBase: new URL("https://cheloz-properties.vercel.app"), // Replace with your real domain when live
  title: "Cheloz Properties | Buy & Rent Luxury Homes",
  description: "Find your dream home with Cheloz Properties. Explore luxury apartments, houses, and investment opportunities.",
  openGraph: {
    title: "Cheloz Properties | Buy & Rent Luxury Homes",
    description: "Find your dream home with Cheloz Properties. Explore luxury apartments, houses, and investment opportunities.",
    url: "https://cheloz-properties.vercel.app",
    siteName: "Cheloz Properties",
    images: [
      {
        url: "https://cheloz-properties.vercel.app/images/hero/luxury_home_1.jpg", // Uses full URL now
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
    images: ["/images/hero/luxury_home_1.jpg"], // Uses full URL now
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
