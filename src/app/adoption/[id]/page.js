"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { dogData } from '../page';

export default function DogProfile() {
  const { id } = useParams();
  const router = useRouter();
  const dog = dogData.find(d => d.id === id) || dogData[0]; 

  return (
    <div className="min-h-screen py-10 flex items-center justify-center px-4" style={{ backgroundColor: '#F9FBFC' }}>
      
      <div className="w-full max-w-sm bg-white rounded-[50px] shadow-2xl overflow-hidden border border-[#E5E7EB]">
        

        <div className="h-52 w-full bg-[#E5E7EB] mb-4">
             <img src={dog.image} alt={dog.name} className="w-full h-full object-cover" />
        </div>


        <div className="px-6 pb-12 flex flex-col items-center gap-y-2">
            
            <div className="-mt-12 mb-12 py-4 px-12 rounded-2xl shadow-xl text-3xl font-black text-white uppercase tracking-tighter"
                 style={{ backgroundColor: '#4FB6B2' }}>
                {dog.name}
            </div>

            <div className="flex justify-center w-full gap-3 mb-12">
                <StatBox label="AGE" value={dog.age} color="#FFF4E8" />
                <StatBox label="SIZE" value={dog.size} color="#FFF4E8" />
                <StatBox label="GENDER" value={dog.gender} color={dog.gender === 'FEMALE' ? '#FFE1D6' : '#CFEAF5'} />
            </div>

            <div className="w-full p-6 rounded-[25px] mb-12 text-white shadow-lg" style={{ backgroundColor: '#C89B6A' }}>
                <h3 className="font-black text-lg mb-2 italic">About Me...</h3>
                <p className="text-xs font-medium leading-relaxed opacity-95">{dog.about}</p>
            </div>


            <div className="w-full flex flex-col gap-6 mb-14">
                <DetailRow label="VACCINATION" value={dog.status} />
                <DetailRow label="PERSONALITY" value="Friendly & Calm" />
                <DetailRow label="FAV FOOD" value="Chicken & Rice" />
            </div>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUydyWVHgWnfoNjU6uGaUtrlrRNvCN8izgGhxsBeyJGv03dg/viewform" target="_blank" className="w-full">
                <button className="w-full py-5 rounded-2xl text-xl font-black text-white uppercase tracking-widest shadow-xl"
                        style={{ backgroundColor: '#6BCF9B' }}>
                    Adopt Me
                </button>
            </a>

            <div className="w-full flex justify-start mt-12">
                <button onClick={() => router.back()} className="w-12 h-12 rounded-full border-[3px] flex items-center justify-center text-xl font-bold"
                        style={{ borderColor: '#2E2E2E', color: '#2E2E2E' }}>
                    ←
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

const StatBox = ({ label, value, color }) => (
    <div className="flex-1 py-4 rounded-xl text-center shadow-sm flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
        <p className="text-[9px] font-black text-[#6B7280] uppercase mb-2">{label}</p>
        <p className="text-[11px] font-black text-[#2E2E2E] leading-tight">{value}</p>
    </div>
);

const DetailRow = ({ label, value }) => (
    <div className="flex items-center gap-4 mb-2">
        <span className="w-24 py-2 rounded-lg text-center font-black text-white uppercase text-[9px] shadow-sm" style={{ backgroundColor: '#4FB6B2' }}>{label}</span>
        <span className="flex-1 py-2 px-4 rounded-lg font-bold text-xs shadow-sm" style={{ backgroundColor: '#CFEAF5', color: '#2E2E2E' }}>{value}</span>
    </div>
);