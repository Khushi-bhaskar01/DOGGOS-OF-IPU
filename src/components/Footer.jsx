"use client";

import Link from "next/link";
import { IoPawSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white [font-family:var(--font-poppins)]"
      style={{
        backgroundImage: "url('/gallery-section-images/footer-bg2.png')",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* title */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold tracking-wide">
            DOGGOS IPU
          </h2>
          <p className="text-yellow-300 text-xl mt-2">
            Care. Rescue. Love.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg">
          {/* links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-white/90">
              <li>
                <Link
                  href="/adoption"
                  className="flex items-center gap-2 hover:text-teal-300 transition"
                >
                  <IoPawSharp /> Adoption
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="flex items-center gap-2 hover:text-teal-300 transition"
                >
                  <IoPawSharp /> Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* instagram */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Follow Us
            </h3>
            <a
              href="https://www.instagram.com/doggosofipu/"
              target="_blank"
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur px-5 py-3 rounded-full hover:bg-white/30 transition"
            >
              <img
                src="/insta-logo.png"
                className="w-8 h-8"
                alt="Instagram"
              />
              <span className="font-medium">@doggosipu</span>
            </a>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-16 border-t border-white/30 pt-6 text-center text-sm text-white/80">
          © 2026 DOGGOS IPU. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
