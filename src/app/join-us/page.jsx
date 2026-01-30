"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function JoinUsPage() {
  const GOOGLE_FORM_URL =
    "#";

  return (
    <main className="w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#dff1f6] to-[#e8f7f3] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-white px-4 py-1 rounded-full text-sm font-medium text-teal-600 mb-4">
              Make a Difference Today
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Join Us. <br />
              <span className="text-teal-500">Change a Life.</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-md">
              Every volunteer makes a difference in the life of a rescued dog.
              Join our compassionate community and help provide love, care, and
              hope to animals in need.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://forms.gle/bwrejAy9Ciofss3x7%5D%28https:/forms.gle/bwrejAy9Ciofss3x7%29"
                className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-600 transition"
              >
                Become a Volunteer
              </a>

              <a
                href="#benefits"
                className="bg-white px-6 py-3 rounded-full font-medium border hover:bg-gray-50 transition"
              >
                Join our Community
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-10 text-center">
              <div>
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-sm text-gray-600">Dogs Rescued</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">150+</h3>
                <p className="text-sm text-gray-600">Volunteers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">98%</h3>
                <p className="text-sm text-gray-600">Happy Homes</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-8 border-white shadow-lg">
              <Image
                src="/image.png"
                alt="Rescued Dog"
                width={700}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  WHY VOLUNTEER */}
      <section id="benefits" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-[#f2f9f8] px-4 py-1 rounded-full text-sm text-teal-600 mb-4">
            The Benefits
          </span>

          <h2 className="text-4xl font-bold text-gray-900">
            Why Volunteer <span className="text-teal-500">With Us?</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Volunteering isn’t just about giving — it’s about growing,
            connecting, and creating lasting change in the lives of animals who
            need us most.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "Make a Real Impact",
                desc: "Every hour you volunteer directly improves the life of a rescued animal.",
              },
              {
                title: "Join a Community",
                desc: "Connect with like-minded people who share your passion for animal welfare.",
              },
              {
                title: "Flexible Schedule",
                desc: "Volunteer on your own time with opportunities that fit your availability.",
              },
              {
                title: "Learn & Grow",
                desc: "Gain valuable experience in animal care, welfare, and community service.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  REGISTRATION  */}
      <section id="register" className="bg-[#fff4e8] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white px-4 py-1 rounded-full text-sm text-teal-600 mb-4">
            Ready to Join?
          </span>

          <h2 className="text-4xl font-bold text-teal-500">
            Volunteer Registration
          </h2>

          <p className="mt-4 text-gray-600">
            Fill out the form below and take the first step towards making a
            real difference in the lives of rescued dogs.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
            <Step number="1" title="Fill out the form" />
            <Arrow />
            <Step number="2" title="Get Verified" />
            <Arrow />
            <Step number="3" title="Start Volunteering" />
          </div>

          {/* Google Form Card */}
          <div className="bg-white rounded-2xl p-10 mt-12 shadow-md">
            <h3 className="text-xl font-semibold">Continue with Google</h3>

            <p className="text-sm text-gray-600 mt-2">
              To avoid spam and duplicate entries, we use a secure Google Form.
              Your active Google account will be auto-selected.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeUydyWVHgWnfoNjU6uGaUtrlrRNvCN8izgGhxsBeyJGv03dg/viewform"
              target="_blank"
              className="block mt-6 bg-teal-500 text-white py-3 rounded-full font-medium hover:bg-teal-600 transition"
            >
              Continue to Volunteer Form
            </a>

            <p className="text-xs text-gray-500 mt-3">
              Opens the official Google Form • Takes less than 1 minute
            </p>
          </div>
        </div>
        {/* FOOTER  */}
        <footer className="bg-[#fdeeee] px-6 pt-16 pb-6">
          <div className="max-w-6xl mx-auto">
            {/* Top Footer */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left Section */}
              <div>
                <div className="flex items-center gap-4">
                  <Image src="/dog.png" alt="Dog" width={70} height={70} />
                  <h3 className="font-bold text-lg text-[#7a3e00]">
                    DOOGOS <br /> IPU
                  </h3>
                </div>

                <p className="mt-4 text-sm text-gray-700 max-w-sm">
                  Help the life of our little paw friends. Contribute with a
                  donation or help to adopt a pet.
                </p>

                <div className="mt-4 text-sm font-medium">
                  <p className="cursor-pointer hover:underline">Privacy</p>
                  <p className="cursor-pointer hover:underline">
                    Terms and Condition
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div>
                <h3 className="font-bold text-lg text-teal-700 mb-4">
                  CONTACT US
                </h3>

                {/* Social Icons */}
                <div className="flex gap-4 mb-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/doggosofipu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-full text-white hover:bg-teal-600 transition"
                  >
                    <FaInstagram size={18} />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://chat.whatsapp.com/JFb6e4cQxqD81jUKbIxq63](https://chat.whatsapp.com/JFb6e4cQxqD81jUKbIxq63)"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-full text-white hover:bg-teal-600 transition"
                  >
                    <FaWhatsapp size={18} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center bg-teal-500 rounded-full text-white hover:bg-teal-600 transition"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                </div>

                <p className="text-sm text-gray-700">
                  <strong>EMAIL:</strong>
                </p>

                <p className="text-sm text-gray-700 mt-2">
                  <strong>ADDRESS:</strong> Guru Gobind Singh <br />
                  Indraprastha University, Sector-16C <br />
                  Dwarka, New Delhi 110078
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-5 border-gray-800" />

            {/* Bottom */}
            <p className="text-center text-sm text-gray-700">
              Copyright © 2026 DOOGOS IPU. All Rights Reserved.
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}

/* SMALL COMPONENTS */

function Step({ number, title, time }) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 mx-auto rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">
        {number}
      </div>
      <p className="font-medium mt-2">{title}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
  );
}

function Arrow() {
  return <span className="hidden md:block text-2xl">→</span>;
}
