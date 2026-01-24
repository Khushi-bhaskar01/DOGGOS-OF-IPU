"use client";
import React from 'react';

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

function EventPage() {

    const scrollToEvents = () => {
        const el = document.getElementById("upcoming");
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className='space-y-16'>
            {/* Frame-1 */}
            <div className="relative w-full min-h-[70vh] md:min-h-screen">
                {/* first BackGround Img */}
                <div
                    className=" absolute inset-0 bg-[url('/event-main.jpg')] bg-cover bg-center opacity-60 " />

                {/* Main Text */}
                <div className='absolute top-1/2 left-1/2 -translate-1/2 w-full flex flex-col items-center justify-center gap-4 md:gap-0'>
                    <header className='font-inter font-bold md:text-5xl text-2xl text-[#05385B] text-center'><span className='text-black'>EVENTS AND</span> MEDICAL CARE</header>
                    <p className='md:text-xl text-sm text-black font-semibold text-center'>Vaccination drives, sterilization camps & emergency medical help at IPU.</p>
                    {/* main-buttons */}
                    <div className=' flex md:w-4xl justify-center items-center md:mt-24'>

                        <button
                            onClick={scrollToEvents}
                            className='flex items-center justify-between cursor-pointer md:p-5 p-3 md:min-w-48 rounded-2xl bg-linear-to-r from-[#16779A] to-[#64AFEC] md:text-xl text-sm text-[#FBEFEF] font-semibold'>
                            VIEW UPCOMING EVENTS
                        </button>
                    </div>
                </div>

            </div>

            {/* Frame-2 */}
            <div id='upcoming' className='flex flex-col items-center justify-center md:max-w-5xl mx-auto'>
                <header className='md:text-6xl text-2xl font-bold md:mb-20 mb-8'><span className='text-[#0D5867]'>UPCOMING</span> <span className='text-black'>EVENTS</span></header>
                {/* Event List */}
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mb-10'>
                    {/* Events */}
                    {/* 1st */}
                    <div className='flex flex-col justify-start items-center gap-4 rounded-2xl bg-linear-to-b from-[#A7D0F8] to-[#507CA8] p-6 md:w-xs'>
                        {/* Event Img */}
                        <div className='w-full flex items-center justify-center '>
                            <img
                                className='rounded-full overflow-hidden size-24'
                                src="Ellipse 12.jpg" alt=""
                            />
                        </div>
                        {/* Event Title */}
                        <div className='text-[#062C57] text-lg font-bold line-clamp-2 w-full'>
                            ANTI-RABIES VACCINATION DRIVE
                        </div>

                        {/* Event Details */}
                        <div className='w-full flex flex-col gap-2 items-center'>
                            {/* Date */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>📅 24 Feb 2026</p>
                            </div>
                            {/* Location */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>📍 Gate No. 3, Main Campus</p>
                            </div>
                            {/* Timing */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>🕒 10 AM – 4 PM</p>
                            </div>
                            {/* Event Type */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>🩺 Type: Vaccination</p>
                            </div>
                        </div>
                        {/* Parting Line */}
                        <div className='h-px w-full bg-[#8A8888] my-2'></div>

                        {/* Button */}
                        <CTAButton redirect={"https://drive.google.com/drive/folders/1ScTDwPITUjMCBvFJNCDUbPnFJ6NYB50j?usp=drive_link"} buttonText={"VOLUNTEER"} />
                    </div>
                    {/* 2nd */}
                    <div className='flex flex-col justify-start items-center gap-4 rounded-2xl bg-linear-to-b from-[#A7D0F8] to-[#507CA8] p-6 md:w-xs'>
                        {/* Event Img */}
                        <div className='w-full flex items-center justify-center '>
                            <img
                                className='rounded-full overflow-hidden size-24'
                                src="/Ellipse 12.jpg" alt=""
                            />
                        </div>
                        {/* Event Title */}
                        <div className='text-[#062C57] text-lg font-bold line-clamp-2 w-full'>
                            ANTI-RABIES VACCINATION DRIVE
                        </div>

                        {/* Event Details */}
                        <div className='w-full flex flex-col gap-2 items-center'>
                            {/* Date */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>📅 24 Feb 2026</p>
                            </div>
                            {/* Location */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>📍 Gate No. 3, Main Campus</p>
                            </div>
                            {/* Timing */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>🕒 10 AM – 4 PM</p>
                            </div>
                            {/* Event Type */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>🩺 Type: Vaccination</p>
                            </div>
                        </div>
                        {/* Parting Line */}
                        <div className='h-px w-full bg-[#8A8888] my-2'></div>

                        {/* Button */}
                        <CTAButton redirect={"https://drive.google.com/drive/folders/1ScTDwPITUjMCBvFJNCDUbPnFJ6NYB50j?usp=drive_link"} buttonText={"VOLUNTEER"} />
                    </div>
                    {/* 3rd */}
                    <div className='flex flex-col justify-start items-center gap-4 rounded-2xl bg-linear-to-b from-[#A7D0F8] to-[#507CA8] p-6 md:w-xs'>
                        {/* Event Img */}
                        <div className='w-full flex items-center justify-center '>
                            <img
                                className='rounded-full overflow-hidden size-24'
                                src="/Ellipse 12.jpg" alt=""
                            />
                        </div>
                        {/* Event Title */}
                        <div className='text-[#062C57] text-lg font-bold line-clamp-2 w-full'>
                            ANTI-RABIES VACCINATION DRIVE
                        </div>

                        {/* Event Details */}
                        <div className='w-full flex flex-col gap-2 items-center'>
                            {/* Date */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>📅 24 Feb 2026</p>
                            </div>
                            {/* Location */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>📍 Gate No. 3, Main Campus</p>
                            </div>
                            {/* Timing */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>🕒 10 AM – 4 PM</p>
                            </div>
                            {/* Event Type */}
                            <div className='flex flex-row gap-2 items-center justify-start w-full'>

                                <p className='text-black text-sm font-semibold font-inter'>🩺 Type: Vaccination</p>
                            </div>
                        </div>
                        {/* Parting Line */}
                        <div className='h-px w-full bg-[#8A8888] my-2'></div>

                        {/* Button */}
                        <CTAButton redirect={"https://drive.google.com/drive/folders/1ScTDwPITUjMCBvFJNCDUbPnFJ6NYB50j?usp=drive_link"} buttonText={"VOLUNTEER"} />
                    </div>
                </div>
            </div>

            {/* Frame-3 */}
            <div className='flex flex-col items-center justify-center md:max-w-5xl mx-auto'>
                <header className='md:text-5xl text-2xl font-bold md:mb-20 mb-8 text-black text-center'>🚑 HOW <span className='text-[#0D5867]'>MEDICAL</span> HELP <span className='text-[#0D5867]'>WORKS</span></header>

                <div className="relative w-full max-w-6xl mx-auto">
                    {/* Desktop */}
                    <div className="absolute left-0 right-0 top-[48px] h-[2px] bg-black hidden md:block" />
                    {/* Mobile */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-black -translate-x-1/2 md:hidden" />

                    {/* Steps */}
                    <div className="relative z-10 flex flex-col md:flex-row md:justify-between justify-center items-start gap-16 md:gap-0">

                        <div className="flex flex-col items-center w-full md:w-fit">
                            <img src="help-Step1.jpg" className="size-24 rounded-full object-cover" />
                            <h3 className="pt-2 rounded-lg font-medium bg-white">SEE</h3>
                        </div>

                        <div className="flex flex-col items-center w-full md:w-fit">
                            <img src="help-Step2.jpg" className="size-24 rounded-full object-cover" />
                            <h3 className="pt-2 rounded-lg font-medium bg-white">REPORT</h3>
                        </div>

                        <div className="flex flex-col items-center w-full md:w-fit">
                            <img src="help-Step3.jpg" className="size-24 rounded-full object-cover" />
                            <h3 className="pt-2 rounded-lg font-medium bg-white">RESPOND</h3>
                        </div>

                        <div className="flex flex-col items-center w-full md:w-fit">
                            <img src="help-Step4.jpg" className="size-24 rounded-full object-cover" />
                            <h3 className="pt-2 rounded-lg font-medium bg-white">TREAT</h3>
                        </div>

                    </div>
                </div>


            </div>

            {/* Frame-4 */}
            <div className="relative w-full min-h-[60vh] md:min-h-screen bg-white overflow-hidden flex items-center justify-center">

                {/* Background image layer */}
                <div className="absolute inset-0 bg-[url('/Frame-4-Hero.jpg')] bg-cover bg-center opacity-60"/>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">

                    <header className="text-4xl md:text-6xl font-bold">
                        REPORT AN <span className="text-[#0D5867]">INJURED</span>{" "}
                        <span className="text-black">DOG</span>
                    </header>

                    <p className="mt-3 text-[#065052] font-semibold text-lg md:text-xl">
                        Your quick action can save a life.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 mt-16 w-full md:justify-evenly">

                        {/* Report Now Button */}
                        <a
                            href="https://chat.whatsapp.com/JFb6e4cQxqD81jUKbIxq63](https://chat.whatsapp.com/JFb6e4cQxqD81jUKbIxq63)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[linear-gradient(90deg,#16779A_0%,#64AFEC_100%)] py-2 px-8 text-xl font-semibold text-[#FDF5F5] rounded-3xl">
                            👉 REPORT <span className="text-[#04344E]">NOW</span>
                        </a>

                        {/* Helpline Button */}
                        <a
                            href="tel:XXXXXXXXXX"
                            className="bg-[linear-gradient(90deg,#16779A_0%,#64AFEC_100%)] py-2 px-8 text-xl font-semibold text-[#FDF5F5] rounded-3xl">
                            📞 CALL <span className="text-[#04344E]">NOW</span> HELPLINE
                        </a>

                    </div>
                </div>
            </div>

        </div>
    )
}

// all Event cards needed to be fixed

export default EventPage