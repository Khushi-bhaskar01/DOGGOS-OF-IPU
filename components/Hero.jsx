'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroPuppyRef = useRef(null);
  const heroTextRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    // Text animation
    if (heroTextRef.current) {
      heroTextRef.current.style.opacity = '0';
      heroTextRef.current.style.transform = 'translateY(30px)';
      setTimeout(() => {
        if (heroTextRef.current) {
          heroTextRef.current.style.transition =
            'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
          heroTextRef.current.style.opacity = '1';
          heroTextRef.current.style.transform = 'translateY(0)';
        }
      }, 300);
    }

    // Puppy float animation
    if (heroPuppyRef.current) {
      heroPuppyRef.current.style.opacity = '0';
      heroPuppyRef.current.style.transform = 'scale(0.8) translateY(50px)';
      setTimeout(() => {
        if (heroPuppyRef.current) {
          heroPuppyRef.current.style.transition =
            'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
          heroPuppyRef.current.style.opacity = '1';
          heroPuppyRef.current.style.transform = 'scale(1) translateY(0)';
        }
      }, 100);
    }

    // Navbar animation
    if (navRef.current) {
      navRef.current.style.opacity = '0';
      navRef.current.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        if (navRef.current) {
          navRef.current.style.transition =
            'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
          navRef.current.style.opacity = '1';
          navRef.current.style.transform = 'translateY(0)';
        }
      }, 200);
    }

    // Floating puppy animation
    const puppyFloat = () => {
      if (heroPuppyRef.current) {
        heroPuppyRef.current.style.animation =
          'gentleFloat 3s ease-in-out infinite';
      }
    };
    setTimeout(puppyFloat, 1500);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="flex items-center justify-between px-10 py-6 absolute w-full z-20"
      >
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span>🐕</span>
          <span>DOOGOS</span>
          <span className="text-sm font-medium">IPU</span>
        </div>

        <ul className="flex gap-8 font-medium">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SUPPORT US</li>
          <li>JOIN US</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-end px-16 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/doggos.jpg")' }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* TEXT CONTENT */}
        <div
          ref={heroTextRef}
          className="relative z-10 text-right max-w-2xl text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Zoomies now,
            <br />
            <span className="text-[#0b4f5a]">Snoozies later</span>
          </h1>
          <button className="mt-4 px-8 py-4 bg-[#0b4f5a] text-white rounded-full font-semibold hover:scale-105 transition">
            ADOPT A DOG
          </button>
        </div>
      </section>

      {/* Floating animation CSS */}
      <style jsx>{`
        @keyframes gentleFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
