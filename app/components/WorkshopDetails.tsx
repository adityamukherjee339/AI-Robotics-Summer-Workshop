"use client";

import { Clock, Calendar, CreditCard, CheckCircle2 } from "lucide-react";
import { useRegistration } from "../context/RegistrationContext";

export default function WorkshopDetails() {
  const { openModal } = useRegistration();

  return (
    <section id="details" className="py-24 bg-gradient-to-br from-navy via-plum to-crimson text-white rounded-t-[3rem] mt-12 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute right-0 top-0 opacity-10">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">Our Details</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
            We build the best learning experience
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            We are committed to excellence and dedicated to helping your child succeed in the modern tech world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Orange Accent */}
          <div className="bg-accent/80 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col justify-between shadow-2xl transform transition hover:-translate-y-2">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Age Group & Duration</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Perfectly tailored for young minds aiming to grasp modern concepts. A comprehensive deep-dive.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-white/80" />
                <span className="font-semibold text-white">Ages 8-14 Years</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-white/80" />
                <span className="font-semibold text-white">4 Weeks Intensive</span>
              </li>
            </ul>
          </div>

          {/* Card 2 - Dark Gray */}
          <div className="glass-card-dark rounded-3xl p-8 flex flex-col justify-between shadow-xl transform transition hover:-translate-y-2">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="text-cyan" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Mode & Schedule</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Flexible online learning from the comfort of your home, with live interactive sessions and real-time guidance.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>100% Online Live</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Starts: 15 July 2026</span>
              </li>
            </ul>
          </div>

          {/* Card 3 - Dark Gray */}
          <div className="glass-card-dark rounded-3xl p-8 flex flex-col justify-between shadow-xl transform transition hover:-translate-y-2">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="text-cyan" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Course Fee</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                An investment in your child's future. Includes all digital materials, software licenses, and certification.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-6">
                ₹2,999
              </div>
              <button onClick={openModal} className="flex items-center justify-center w-full py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
