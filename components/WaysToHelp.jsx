'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function WaysToHelp() {
  const waysCardsRef = useRef([]);

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
          target.style.transform = 'translateX(0) scale(1)';
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    waysCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = `translateX(${index === 0 ? '-40px' : '40px'}) scale(0.95)`;
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-20">
          WAYS TO HELP US <span className="inline-block ml-2">🤝</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div
            ref={(el) => {
              waysCardsRef.current[0] = el;
            }}
            className="bg-cyan-200 rounded-3xl p-12 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <div className="text-5xl mb-6">🐾</div>

            <h3 className="text-2xl font-semibold mb-4">
              VOLUNTEER WITH US
            </h3>

            <p className="opacity-80 mb-8">
              The heartbeat of charities, driving profound impact with unwavering commitment.
            </p>

            <button className="inline-flex items-center gap-2 font-semibold group">
              Donate Now
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => {
              waysCardsRef.current[1] = el;
            }}
            className="bg-cyan-200 rounded-3xl p-12 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <div className="text-5xl mb-6">💝</div>

            <h3 className="text-2xl font-semibold mb-4">
              DONATE / SUPPORT US
            </h3>

            <p className="opacity-80 mb-8">
              Every contribution helps us rescue injured dogs, provide medical care, and give them the love and safety they need to heal.
            </p>

            <button className="inline-flex items-center gap-2 font-semibold group">
              Join Us
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
