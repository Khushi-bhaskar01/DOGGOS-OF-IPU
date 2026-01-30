'use client';

import { useEffect, useRef } from 'react';

export default function CTASection() {
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.transition =
              'all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.15 }
    );

    if (ctaRef.current) {
      ctaRef.current.style.opacity = '0';
      ctaRef.current.style.transform = 'translateY(40px)';
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ctaRef}
      className="relative w-full py-24 mt-32 bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/ctasection.jpg')",
        backgroundPosition: 'left 60%',
      }}
    >
      {/* TEXT GRID */}
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-2">
        
        {/* EMPTY LEFT */}
        <div />

        {/* RIGHT TEXT BLOCK */}
        <div className="flex flex-col justify-center text-left">
          <h2
            className="
              inline-block
              font-extrabold
              leading-[1.15]
              mb-8
              text-black
              text-[35px]
              md:text-[40px]
            "
          >
            <span className="block whitespace-nowrap">
              🐾 ADOPT. REPORT. SAVE A
            </span>

            <span className="block text-center text-[#0b4f5a]">
              LIFE TODAY 🐾
            </span>
          </h2>

          <button className="w-fit bg-[#0b4f5a] hover:bg-[#093e47] text-white px-14 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-xl">
            ADOPT NOW
          </button>
        </div>

      </div>
    </section>
  );
}
