"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "55bf3ebf-8e1b-4804-9bad-437f5ec3dc8f";
// sessionStorage lives only as long as the browser tab: the popup shows once
// per tab session, and again only after the tab is closed and reopened.
const STORAGE_KEY = "ba_enquiry_popup_shown";
const DELAY_MS = 5000;

const inputClass =
  "w-full rounded-xl border border-gray-200 pl-11 pr-4 py-3 text-sm font-poppins focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Popup Enquiry from Baba Associates",
          from_name: "Baba Associates",
          page: window.location.href,
          ...form,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-[fadeIn_.3s_ease-out]"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-popup-title"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-gold-950 px-8 pt-8 pb-7 text-center">
          <Image
            src="/balogo.webp"
            alt="Baba Associates"
            width={56}
            height={56}
            className="mx-auto object-contain"
          />
          <h2
            id="enquiry-popup-title"
            className="mt-3 font-cinzel text-2xl font-bold text-white"
          >
            Get A Free Quote
          </h2>
          <span className="mx-auto mt-3 block h-[2px] w-12 bg-gold-400" />
          <p className="mt-3 text-sm leading-6 text-gold-100/75">
            Buying, selling, building or renovating in Rohini? Share your
            details and our team will call you back.
          </p>
        </div>

        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 size={48} className="text-gold-600" />
              <h3 className="mt-4 font-cinzel text-xl font-bold text-gray-900">
                Thank You!
              </h3>
              <p className="mt-2 text-gray-600">
                Your enquiry has been received. We&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 rounded-xl bg-gold-950 px-8 py-3 font-semibold text-white transition hover:bg-gold-800"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
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
                  placeholder="Full Name"
                  aria-label="Full Name"
                  className={inputClass}
                />
              </div>

              <div className="relative">
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
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address (optional)"
                  aria-label="Email Address"
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your requirement (e.g. 3 BHK in Sector 16)"
                  aria-label="Your requirement"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold-400 px-8 py-4 font-semibold text-gold-950 transition hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Request a Call Back"}
                <Send size={18} />
              </button>

              <p className="text-center text-xs text-gray-500">
                Or call us directly on{" "}
                <a
                  href="tel:+919999774811"
                  className="font-semibold text-gold-700"
                >
                  +91 9999774811
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
