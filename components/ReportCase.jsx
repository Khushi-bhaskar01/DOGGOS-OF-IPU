'use client';

import { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ReportCase() {
  const reportRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const animateOnScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.style.transition =
            'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    };

    const observer = new IntersectionObserver(
      animateOnScroll,
      observerOptions
    );

    if (reportRef.current) {
      reportRef.current.style.opacity = '0';
      reportRef.current.style.transform = 'translateY(40px)';
      observer.observe(reportRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={reportRef}
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/reportcasepic.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">REPORT A CASE</h2>

        <p className="text-lg opacity-90 mb-10">
          If you see an animal in distress, please contact our team via the
          WhatsApp link below and share images or videos of the injured animal so
          our team can guide you further.
        </p>

        <a
          href="https://wa.me/XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 transition font-semibold text-black"
        >
          <MessageCircle size={22} />
          CONNECT WITH US
        </a>
      </div>
    </section>
  );
}
