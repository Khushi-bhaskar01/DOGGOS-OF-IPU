'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function RabiesCampus() {
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.style.transition =
              'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.15 }
    );

    if (mapRef.current) {
      mapRef.current.style.opacity = '0';
      mapRef.current.style.transform = 'translateY(40px)';
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={mapRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* MAP */}
      <div className="absolute inset-0">
        <iframe
          title="GGSIPU Campus Map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4706.936441804614!2d77.01326056880204!3d28.593953539044644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sguru%20gobind%20singh%20indraprastha%20university%20staff%20quarters%20III!5e0!3m2!1sen!2sin!4v1769620613672!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
          RABIES FREE CAMPUS
        </h2>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto transition-all shadow-xl hover:scale-105">
          KNOW MORE <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}
