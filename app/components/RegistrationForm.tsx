"use client";

import { useState } from "react";
import { Loader2, CheckCircle, X } from "lucide-react";
import { useRegistration } from "../context/RegistrationContext";

export default function RegistrationForm() {
  const { isModalOpen, closeModal } = useRegistration();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Blurred overlay background */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={closeModal}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl z-10 animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={closeModal} 
          className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full p-2 backdrop-blur-md"
        >
          <X size={28} />
        </button>

        {/* Decorative Blob */}
        <div className="absolute blob bg-plum w-96 h-96 rounded-full top-[-100px] right-[-100px] mix-blend-multiply filter blur-[100px] opacity-40 animate-pulseBlob pointer-events-none"></div>

        {/* Success Toast / Overlay inside section */}
        {status === "success" && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 border border-green-200 text-green-800 px-6 py-3 rounded-full flex items-center gap-3 shadow-lg z-20 animate-in fade-in slide-in-from-top-4">
            <CheckCircle size={20} className="text-green-600" />
            <span className="font-medium">Enquiry submitted successfully! We'll be in touch.</span>
          </div>
        )}

        <div className="glass-card rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/60">

          <div className="bg-gradient-to-br from-crimson to-plum text-white p-10 md:w-5/12 flex flex-col justify-between relative overflow-hidden">
            {/* Watermark icon */}
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12 2.1 7.1" /><path d="M12 12l9.9 4.9" /></svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Secure your spot today</h2>
              <p className="text-primary-100 opacity-90 leading-relaxed">
                Fill out the form below and our admission counselors will contact you to confirm the enrollment process.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">📞</div>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">✉️</div>
                <span>admissions@airobotics.edu</span>
              </div>
            </div>
          </div>

          <div className="p-10 md:w-7/12 bg-white/40 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Parent / Guardian Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/50 focus:ring-2 focus:ring-plum focus:border-plum outline-none transition-all bg-white/60 focus:bg-white shadow-sm text-gray-900 placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/50 focus:ring-2 focus:ring-plum focus:border-plum outline-none transition-all bg-white/60 focus:bg-white shadow-sm text-gray-900 placeholder-gray-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/50 focus:ring-2 focus:ring-plum focus:border-plum outline-none transition-all bg-white/60 focus:bg-white shadow-sm text-gray-900 placeholder-gray-500"
                  placeholder="+91 98765 XXXXX"
                />
              </div>

              {status === "error" && (
                <div className="text-red-500 text-sm font-medium">{errorMessage}</div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-plum to-crimson text-white font-bold text-lg hover:from-crimson hover:to-plum transition-all shadow-lg shadow-plum/25 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
