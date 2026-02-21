"use client";
import Link from "next/link";
import { useRef } from "react";

export default function AdoptedScroller({ adoptedData }) {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="mt-32 px-6 max-w-7xl mx-auto relative">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-[#4FB6B2] uppercase tracking-tighter">
          The Hall of Hearts
        </h2>
        <p className="text-sm md:text-base font-medium text-[#C89B6A] mt-2 italic opacity-90">
          Our Forever Family Archive: Cherishing the stories of the dogs who found their perfect home.
        </p>
      </div>

      <div className="relative">

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-6 scrollbar-hide snap-x scroll-smooth"
        >
          {adoptedData.map((dog) => (
            <Link
              key={dog.id}
              href={`/adoption/${dog.id}`}
              className="flex-shrink-0 snap-center"
            >
              <div className="w-72 bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-500">

                <div className="w-full h-72 overflow-hidden">
                  <img
                    src={dog.photos?.[0] || "/simba.png"}
                    alt={dog.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {dog.name}
                  </h3>

                  <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                    {dog.breed || "INDIE"}
                  </p>

                  <div className="mt-4 inline-block px-4 py-1 text-xs font-semibold text-white rounded-full bg-[#4FB6B2]">
                    Adopted ❤️
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Fade */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md shadow-xl rounded-full p-4 hover:scale-110 transition z-10 hidden md:flex items-center justify-center"
        >
          →
        </button>

      </div>
    </section>
  );
}