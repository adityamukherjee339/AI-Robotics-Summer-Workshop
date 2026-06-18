"use client";

import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { useRegistration } from "../context/RegistrationContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useRegistration();

  return (
    <nav className="fixed w-full bg-background/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Cpu size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight">AI & Robotics</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#curriculum" className="dark:text-gray-300 text-gray-600 hover:text-primary transition-colors font-medium">Curriculum</a>
            <a href="#details" className="dark:text-gray-300 text-gray-600 hover:text-primary transition-colors font-medium">Details</a>
            <a href="#faq" className="dark:text-gray-300 text-gray-600 hover:text-primary transition-colors font-medium">FAQ</a>
            <button onClick={openModal} className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-hover transition-colors shadow-sm shadow-primary/30">
              Enroll Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="dark:text-gray-300 text-gray-600 hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#curriculum" className="block px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">Curriculum</a>
            <a href="#details" className="block px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">Details</a>
            <a href="#faq" className="block px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">FAQ</a>
            <button onClick={() => { openModal(); setIsOpen(false); }} className="block w-full px-3 py-3 mt-4 text-center bg-primary text-white font-medium rounded-lg">Enroll Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}
