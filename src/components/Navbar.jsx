"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* Replace with your logo */}
            <Image
              src="/balogo.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative flex items-center gap-1 text-white font-medium text-[15px] transition duration-300 hover:text-gold-300"
              >
                {item.name}

                {item.dropdown && (
                  <ChevronDown size={16} strokeWidth={2} />
                )}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-2 rounded-xl border border-gold-400/70 px-6 py-3 text-white font-medium hover:bg-gold-400 hover:text-gold-950 transition duration-300"
            >
              Schedule Consultation
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenu ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl px-6 py-6 space-y-5">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="flex items-center justify-between text-white text-lg"
            >
              {item.name}

              {item.dropdown && <ChevronDown size={18} />}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileMenu(false)}
            className="block text-center rounded-lg border border-gold-400/70 px-5 py-3 text-white hover:bg-gold-400 hover:text-gold-950 transition"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}