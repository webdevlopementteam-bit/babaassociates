"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const teamContacts = [
  { name: "⁠Ish Kumar Wanvani", phone: "9999774811" },
  { name: "⁠Madhukar Wanvani", phone: "9899350043" },
  { name: "Lalit Wanvani", phone: "9711434491" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gold-950 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[4px] text-gold-300 font-semibold text-sm">
            Get In Touch
          </span>

          <h1 className="mt-4 font-cinzel text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>

          <span className="block w-16 h-[2px] bg-gold-400 mx-auto mt-6" />

          <p className="mt-6 max-w-2xl mx-auto text-gold-100/70 leading-8 font-poppins">
            Have a plot, a home to sell, or a renovation in mind? Reach out —
            our team is ready to help you take the next step.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-[#FBF6EC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* LEFT: Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-gold-100 shadow-sm p-8">
                <h2 className="font-cinzel text-2xl font-bold text-gray-900">
                  Contact Numbers
                </h2>

                <div className="mt-6 space-y-4">
                  {teamContacts.map((c) => (
                    <a
                      key={c.phone}
                      href={`tel:+91${c.phone}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center shrink-0 group-hover:bg-gold-950 transition">
                        <Phone
                          size={18}
                          className="text-gold-600 group-hover:text-white transition"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{c.name}</p>
                        <p className="text-gray-500 text-sm font-poppins">
                          +91 {c.phone}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gold-100 shadow-sm p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:ishkumar.asm@gmail.com"
                      className="text-gray-500 text-sm font-poppins hover:text-gold-700 transition"
                    >
                      ishkumar.asm@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gold-100 shadow-sm p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Office Address
                    </p>
                    <p className="text-gray-500 text-sm font-poppins mt-1 leading-6">
                      I-4/21 & H-5/57
                      <br />
                      Rohini, Delhi-110085
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gold-100 shadow-sm p-8 md:p-10 h-full">
                <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-gray-900">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-gray-600 font-poppins">
                  Fill out the form below and our team will get back to you
                  shortly.
                </p>

                {submitted ? (
                  <div className="mt-6 flex flex-col items-center text-center py-16">
                    <CheckCircle2 size={48} className="text-gold-600" />
                    <h3 className="mt-4 font-cinzel text-xl font-bold text-gray-900">
                      Thank You!
                    </h3>
                    <p className="mt-2 text-gray-600 font-poppins">
                      Your message has been received. We&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <div className="mt-2 relative">
                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full rounded-xl border border-gray-200 pl-11 pr-4 py-3 text-sm font-poppins focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <div className="mt-2 relative">
                          <Phone
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 00000 00000"
                            className="w-full rounded-xl border border-gray-200 pl-11 pr-4 py-3 text-sm font-poppins focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="mt-2 relative">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-gray-200 pl-11 pr-4 py-3 text-sm font-poppins focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <div className="mt-2 relative">
                        <MessageSquare
                          size={18}
                          className="absolute left-4 top-4 text-gray-400"
                        />
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          className="w-full rounded-xl border border-gray-200 pl-11 pr-4 py-3 text-sm font-poppins focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-gold-950 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gold-800 transition"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-gold-100 shadow-sm h-[420px]">
            <iframe
              title="Baba Associates Office Location"
              src="https://www.google.com/maps?q=H-5%2F57%2C+Sector-16%2C+Rohini%2C+Delhi+110085&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
