"use server";

import React from "react";
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import AdoptionBackground from "@/components/AdoptionBackground";
import DogImageGallery from "@/components/DogImageGallery";

export default async function DogProfile({ params }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: dog, error } = await supabase
    .from("adoptions")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !dog) {
    return (
      <div className="flex flex-col min-h-screen bg-[#F9FBFC]">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 text-center">
          <h2 className="text-3xl font-black text-[#2E2E2E] uppercase">
            Dog not found 🐶
          </h2>
          <BackButton />
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <AdoptionBackground />
      <Navbar />

      <main className="flex-1 py-10 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-12">

          {/* Name */}
          <h1 className="text-3xl md:text-5xl font-black uppercase text-center text-[#2E2E2E] mb-10">
            {dog.name}
          </h1>

<div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
            {/* ✅ CLEAN IMAGE SECTION (No aspect wrapper) */}
            <div className="w-full">
              <DogImageGallery
                photos={dog.photos}
                dogName={dog.name}
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-8">

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <InfoBox label="Age" value={dog.age || "N/A"} />
                <InfoBox label="Breed" value={dog.breed || "INDIE"} />
                <InfoBox label="Gender" value={dog.gender || "N/A"} />
                <InfoBox label="Location" value={dog.location || "IPU Campus"} />
                <InfoBox label="Vaccinated" value={dog.vaccinated ? "Yes" : "No"} />
                <InfoBox label="Sterilized" value={dog.sterilized ? "Yes" : "No"} />
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F7FA] shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-[#2E2E2E]">
                  Favorite Food
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {dog.favorite_food || "Not specified"}
                </p>
              </div>

              {dog.status !== "adopted" && (
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeUydyWVHgWnfoNjU6uGaUtrlrRNvCN8izgGhxsBeyJGv03dg/viewform"
                  target="_blank"
                  className="w-full"
                >
                  <button className="w-full py-4 rounded-2xl text-lg font-bold text-white uppercase tracking-wide bg-[#6BCF9B] hover:scale-[1.02] transition-all duration-300 shadow-lg">
                    Adopt Me
                  </button>
                </a>
              )}

              <BackButton />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const InfoBox = ({ label, value }) => (
  <div className="p-4 rounded-2xl bg-[#E9F3F8] shadow-sm">
    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
      {label}
    </p>
    <p className="text-sm md:text-base font-semibold text-[#2E2E2E]">
      {value}
    </p>
  </div>
);