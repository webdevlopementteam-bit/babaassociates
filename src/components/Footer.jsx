"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1208] text-white mt-20">
      {/* Golden Top Border */}
      <div className="h-[2px] bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Logo */}

          <div>
            <Image
              src="/balogo.png"
              width={90}
              height={90}
              alt="Baba Associates"
            />

            <p className="text-gray-300 text-sm mt-4 leading-7">
              Building Dreams with Trust.
            </p>
          </div>

          {/* Links */}

          <div>
            <h4 className="font-cinzel text-yellow-400 font-semibold mb-4">
              Quick Links
            </h4>

            <div className="space-y-2 text-sm">
              <Link href="/">Home</Link>
              <br />
              <Link href="/about-us/">About</Link>
              <br />
              <Link href="/services/">Services</Link>
              <br />
              <Link href="/gallery/">Gallery</Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="font-cinzel text-yellow-400 font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="text-yellow-400 mt-1" />
                <a href="tel:+919999774811" className="hover:underline">
                  +91 9999774811
                </a>
              </div>

              <div className="flex gap-2">
                <Mail size={16} className="text-yellow-400 mt-1" />
                <a
                  href="mailto:ishkumar.asm@gmail.com"
                  className="hover:underline"
                >
                  ishkumar.asm@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Address */}

          <div>
            <h4 className="font-cinzel text-yellow-400 font-semibold mb-4">
              Office
            </h4>

            <div className="flex gap-2 text-sm leading-7">
              <MapPin size={18} className="text-yellow-400 mt-1 shrink-0" />

              <p>
                I-4/21 & H-5/57,
                <br />
                Sector-16, Rohini
                <br />
                Delhi-110085
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-xs text-gray-400">
          <p>© 2026 Baba Associates. All Rights Reserved.</p>

          <p>
            Designed & Developed by
            <span className="text-yellow-400"> Bharat Bizmart</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
