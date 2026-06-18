"use client";

import { Play, Users, CheckCircle, Triangle } from "lucide-react";
import Image from "next/image";
import { useRegistration } from "../context/RegistrationContext";

export default function Hero() {
  const { openModal } = useRegistration();

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Animated Gradient Blobs */}
      <div className="blob bg-plum w-96 h-96 rounded-full top-10 left-[-100px] mix-blend-multiply filter blur-[100px] opacity-70 animate-pulseBlob"></div>
      <div className="blob bg-cyan w-96 h-96 rounded-full bottom-[-50px] right-[-50px] mix-blend-multiply filter blur-[100px] opacity-70 animate-pulseBlob" style={{ animationDelay: '2s' }}></div>
      <div className="blob bg-crimson w-80 h-80 rounded-full top-1/2 left-1/3 mix-blend-multiply filter blur-[100px] opacity-60 animate-pulseBlob" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col items-start gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/20 shadow-sm relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-plum/10 to-crimson/10"></span>
              <span className="text-sm font-semibold text-plum relative z-10">✨ 96% Parents Satisfied</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
              Empower future <br className="hidden md:block"/>
              innovators with our <br/>
              <span className="text-accent relative inline-block">
                AI & Robotics
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg>
              </span> masterclass.
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Partner with us to ensure your child builds the strongest foundation in technology, critical thinking, and modern programming logic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <button onClick={openModal} className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25">
                Enroll Now
              </button>
              <a href="#curriculum" className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-white text-gray-800 border border-gray-200 font-medium hover:bg-gray-50 transition-colors">
                Explore Curriculum
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Playful squiggles / Background decorative */}
            <div className="absolute -top-10 -left-10 w-32 h-32 text-gray-200">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 50 Q 25 20 50 50 T 90 50" /></svg>
            </div>
            
            {/* Main Image Collage */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[520px] w-full z-10 mt-6 lg:mt-0">
              {/* Image 1 - Top Right */}
              <div className="absolute top-0 right-0 w-[75%] h-[70%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 bg-gray-100">
                <Image src="/hero-1.jpg" alt="Students building robot" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              
              {/* Image 2 - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 bg-gray-200">
                <Image src="/hero-2.jpg" alt="Student coding" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Image 3 - Bottom Right */}
              <div className="absolute -bottom-4 -right-2 w-[45%] h-[40%] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-30 bg-gray-300 hidden sm:block">
                <Image src="/hero-3.jpg" alt="Student with robot" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-6 -right-2 md:top-4 md:-right-6 floating-badge glass-card p-3 rounded-2xl shadow-xl flex items-center gap-3 z-40">
              <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan-600">
                <Play size={20} className="ml-1" />
              </div>
              <div>
                <p className="text-xs text-gray-600 font-medium">Live Session</p>
                <p className="text-sm font-bold text-gray-900">Interactive</p>
              </div>
            </div>

            <div className="absolute top-1/2 left-2 md:top-2/3 md:-left-8 floating-badge glass-card-dark text-white p-4 rounded-2xl shadow-2xl flex flex-col gap-3 z-40" style={{ animationDelay: '3s' }}>
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-cyan flex items-center justify-center border-2 border-dark-card shadow-sm">
                  <Users size={14} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-dark-card shadow-sm">
                  <Play size={14} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-crimson flex items-center justify-center border-2 border-dark-card shadow-sm">
                  <CheckCircle size={14} className="text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center border-2 border-dark-card shadow-sm">
                  <Users size={14} className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-xs text-white/90 font-medium tracking-wide drop-shadow-md">People who joined over</p>
                <p className="text-2xl font-bold drop-shadow-md">4500+</p>
              </div>
              <div className="absolute top-3 right-3 bg-black rounded-full p-2 shadow-sm border border-white/10 flex items-center justify-center">
                 <Triangle size={12} className="text-white fill-white" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
