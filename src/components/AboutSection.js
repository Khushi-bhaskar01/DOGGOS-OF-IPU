"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { IoPawSharp } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);

  const stats = [
    { number: "100%", label: "Rabies-Free Campus", image: "/rabies.JPG" },
    { number: "300+", label: "Community Members", image: "/stat4.jpeg" },
    { number: "6", label: "Dogs Adopted", image: "/stat3.jpg" },
    { number: "30+", label: "Dogs Sterilized", image: "/sterilized.JPG" },
    { number: "60+", label: "Dogs Vaccinated", image: "/stat1.jpeg" },
    { number: "7+", label: "Years of Service", image: "/stat6.jpg" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imagesRef.current.children, {
        x: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          About Us
          <IoPawSharp className="ml-2 inline-block text-teal-500" />
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <div className="text-lg md:text-xl leading-relaxed text-gray-600 space-y-6">
            <p>
              Doggos of IPU is a student-led animal welfare community that has been
              working within the IPU campus for over 7 years. What began as a small
              initiative has grown into a compassionate family of 300+ community
              members, including 50+ active volunteers dedicated to ensuring peaceful
              coexistence between students and campus dogs
            </p>
            <p>
             Our mission is simple yet powerful: to build a safe, compassionate, and
              responsible campus where humans and doggos live together in harmony —
              through care, awareness, and action 🐾
                </p>
          </div>

          {/* RIGHT GRID */}
          <div
            ref={imagesRef}
            className="grid grid-cols-4 auto-rows-[110px] gap-4"          
          >

            {/* BIG IMAGE */}
            <div className="col-span-4 row-span-2 relative rounded-2xl overflow-hidden group">
              <Image
                src={stats[0].image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <Overlay stat={stats[0]} />
            </div>

            {/* MEDIUM IMAGES */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden group">
              <Image
                src={stats[1].image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <Overlay stat={stats[1]} />
            </div>

            <div className="col-span-2 relative rounded-2xl overflow-hidden group">
              <Image
                src={stats[2].image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <Overlay stat={stats[2]} />
            </div>

            {/* SMALL IMAGES */}
            {stats.slice(3).map((stat, i) => (
             <div
               key={i}
               className={`${
                 i === 0 ? "col-start-2" : ""
               } col-span-1 relative rounded-2xl overflow-hidden group`}
             >
               <Image
                 src={stat.image}
                 alt=""
                 fill
                 className="object-cover transition duration-500 group-hover:scale-105"
               />
               <Overlay stat={stat} />
             </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Overlay({ stat }) {
  return (
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
      <h3 className="text-xl font-bold">{stat.number}</h3>
      <p className="text-sm">{stat.label}</p>
    </div>
  );
}