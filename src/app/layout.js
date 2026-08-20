import {
  Geist,
  Geist_Mono,
  Cinzel_Decorative,
  Poppins,
} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://rohinihomes.in"),
  title: "Baba Associates",
  description:
    "Baba Associates - Construction, Renovation, Redesign & Real Estate Solutions",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/balogo.png",
    shortcut: "/balogo.png",
    apple: "/balogo.png",
  },
    verification: {
    google: "y-2g0z3cvXmHKSpH4mZDLrNE3cnfWZ4zRoaiUuyYWQI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${cinzel.variable}
        ${poppins.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
