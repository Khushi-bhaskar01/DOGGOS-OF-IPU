"use client"
import React from 'react'

const CTAButton = ({ redirect, buttonText }) => {
    return (
        <a
            href={redirect}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#042839] py-2 px-8 flex items-center justify-center text-base font-semibold font-inter cursor-pointer text-white rounded-3xl"
        >
            {buttonText}
        </a>
    );
};


function EventCard({ event }) {
    return (
        <div className='flex flex-col items-center gap-4 rounded-2xl bg-linear-to-b from-[#A7D0F8] to-[#507CA8] p-6 md:w-xs w-[360px] h-full event-card'>
            {/* Event Img */}
            <div className='w-full flex items-center justify-center '>
                <img
                    className='rounded-full overflow-hidden size-24'
                    src={event.imgLink} alt={event.title}
                />
            </div>
            {/* Event Title */}
            <div className='text-[#062C57] text-lg font-bold line-clamp-2 w-full'>
                {event.title}
            </div>

            {/* Event Details */}
            <div className='w-full flex flex-col gap-2 items-center'>
                {/* Date */}
                <div className='flex flex-row gap-2 items-center justify-start w-full'>

                    <p className='text-black text-sm font-semibold font-inter'>📅 {event.date}</p>
                </div>
                {/* Location */}
                <div className='flex flex-row gap-2 items-center justify-start w-full'>

                    <p className='text-black text-sm font-semibold font-inter'>📍 {event.location}</p>
                </div>
                {/* Timing */}
                <div className='flex flex-row gap-2 items-center justify-start w-full'>

                    <p className='text-black text-sm font-semibold font-inter'>🕒 {event.time}</p>
                </div>
                {/* Event Type */}
                <div className='flex flex-row gap-2 items-center justify-start w-full'>

                    <p className='text-black text-sm font-semibold font-inter'>🩺 Type: {event.type}</p>
                </div>
            </div>

            <div className='mt-auto w-full flex flex-col justify-center items-center'>
                {/* Parting Line */}
                <div className='h-px w-full bg-[#8A8888] my-2'></div>

                {/* Button */}
                <CTAButton redirect={event.redirectLink} buttonText={event.buttonText}/>
            </div>
        </div>
    )
}

export default EventCard