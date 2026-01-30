'use client';

import { useEffect, useRef } from 'react';

export default function MissionVision() {
  const missionTextRef = useRef(null);
  const missionImageRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.transition =
            'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
          el.style.opacity = '1';
          el.style.transform = 'translateX(0) scale(1)';
        }
      });
    }, observerOptions);

    if (missionTextRef.current) {
      missionTextRef.current.style.opacity = '0';
      missionTextRef.current.style.transform = 'translateX(-40px)';
      observer.observe(missionTextRef.current);
    }

    if (missionImageRef.current) {
      missionImageRef.current.style.opacity = '0';
      missionImageRef.current.style.transform = 'scale(0.85)';
      observer.observe(missionImageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">

        {/* TEXT */}
        <div ref={missionTextRef} className="max-w-xl">
          <h2 className="text-4xl font-extrabold tracking-wide text-[#0B3C5D] mb-6">
            MISSION AND VISION
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-10">
            Our mission and vision are to rescue, protect, and care for dogs in
            need while building a compassionate community where every dog is
            treated with love, dignity, and kindness.
          </p>

          <button className="px-10 py-4 bg-[#0B7285] text-white rounded-full font-semibold tracking-wide hover:scale-105 transition">
            CONNECT NOW
          </button>
        </div>

        {/* IMAGE */}
        <div
          ref={missionImageRef}
          className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden flex-shrink-0"
        >
          <img
            src="/images/missionvisionpic.avif"
            alt="Dog Mission"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
