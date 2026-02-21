import React from 'react';
import Link from 'next/link';
import ContactSection from "@/components/ContactSection"; 
import Navbar from "@/components/Navbar";
import { createClient } from '@/lib/supabase/server';
import SearchableGallery from '@/components/SearchableGallery';
import AdoptionBackground from "@/components/AdoptionBackground";
import AdoptedScroller from '@/components/AdoptedScroller';
export const dynamic = 'force-dynamic'; 

export default async function AdoptionGallery() {
  const supabase = await createClient();
  
  const { data: dogData, error } = await supabase
    .from('adoptions')
    .select('*')
    .eq('status', 'available') 
    .order('created_at', { ascending: false });

  const { data: adoptedData, error: adoptedError } = await supabase
    .from('adoptions')
    .select('*')
    .eq('status', 'adopted') 
    .order('created_at', { ascending: false });

  if (error || adoptedError) {
    console.error("Error fetching dogs:", error || adoptedError);
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <AdoptionBackground /> 
      <Navbar />
      
      <main className="grow pb-20 bg-transparent">
        
        {/* Hero Banner */}
        <div className="w-full h-64 md:h-80 mb-12 relative overflow-hidden bg-[#E5E7EB]">
          <img 
            src="/adoption-bg.png" 
            className="w-full h-full object-cover" 
            alt="Dogs of IPU Banner" 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
              Find Your Paw-tner
            </h1>
          </div>
        </div>

        {/* Available Dogs */}
        <SearchableGallery initialDogs={dogData || []} />

        {/* Adopted Section */}
        {adoptedData && adoptedData.length > 0 && (
        <AdoptedScroller adoptedData={adoptedData} />
        )}  
      </main>

      <ContactSection />
    </div>
  );
}