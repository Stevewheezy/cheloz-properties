import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

// ✅ Metadata now works correctly in a Server Component
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
        url: "https://cheloz-properties.vercel.app/images/hero/luxury_home_1.jpg", // ✅ Absolute URL
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
    images: ["https://cheloz-properties.vercel.app/images/hero/luxury_home_1.jpg"], // ✅ Fixed path
  },
};

// ✅ RootLayout is now a Server Component
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