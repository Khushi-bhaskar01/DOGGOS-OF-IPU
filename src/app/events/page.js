"use client";
import React, { useEffect, useState } from 'react';
import { events as eventsData } from './data';
import EventCard from '@/components/events/EventCard';
import EventCardSkeleton from "@/components/events/EventCardSkeleton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function EventPage() {

    // const eventData = {
    //     id,
    //     title,
    //     imgLink,
    //     date,
    //     location,
    //     type,
    //     time,
    //     redirectLink,
    //     buttonText
    // }

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [showCount, setShowCount] = useState(6);


    useEffect(() => {
        if (!loading) {
            const newCards = document.querySelectorAll(".event-card:not(.animated)");

            if (newCards.length > 0) {
                gsap.fromTo(
                    newCards,
                    { opacity: 0, y: 25 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        stagger: 0.08,
                        onComplete: () => {
                            newCards.forEach(el => el.classList.add("animated"));
                        }
                    }
                );
            }
        }
    }, [loading, showCount]);

    useEffect(() => {
        gsap.from(
            ".hero-title, .hero-sub, .hero-btn",
            {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.15
            }
        );
    }, []);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from(".medical-step", {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".medical-step",
                start: "top 80%",
            }
        });
    }, []);

    useEffect(() => {
        gsap.fromTo(
            ".medical-line-desktop",
            { width: 0 },
            {
                width: "100%",
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".medical-line-desktop",
                    start: "top 80%",
                },
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            ".medical-line-mobile",
            { height: 0 },
            {
                height: "100%",
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".medical-line-mobile",
                    start: "top 60%",
                },
            }
        );
    }, []);

    useEffect(() => {
        if (!loading) {
            gsap.from(".state-box", {
                opacity: 0,
                scale: 0.98,
                duration: 0.6,
                ease: "power1.out",
            });
        }
    }, [loading, error, events.length]);

    useEffect(() => {
        const buttons = document.querySelectorAll(".cta-action");

        buttons.forEach(btn => {
            btn.addEventListener("mouseenter", () => {
                gsap.to(btn, { scale: 1.02, duration: 0.2 });
            });

            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, { scale: 1, duration: 0.2 });
            });

            btn.addEventListener("mousedown", () => {
                gsap.to(btn, { scale: 0.98, duration: 0.1 });
            });

            btn.addEventListener("mouseup", () => {
                gsap.to(btn, { scale: 1.02, duration: 0.1 });
            });
        });
    }, []);


    useEffect(() => {
        const handleEvent = async () => {
            try {
                // const res = await fetch(``);
                // const finalData = res.json();
                throw new Error("Failed to fetch");

                setEvents(eventsData);
                setError(false);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        setTimeout(() => {
            handleEvent();
        }, 5000);
    }, []);


    const scrollToEvents = () => {
        const upcomingEvents = document.getElementById("upcoming");
        if (upcomingEvents) {
            upcomingEvents.scrollIntoView({
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
                    className="hero-bg absolute inset-0 bg-[url('/event-main.jpg')] bg-cover bg-center opacity-60 " />

                {/* Main Text */}
                <div className='absolute top-1/2 left-1/2 -translate-1/2 w-full flex flex-col items-center justify-center gap-4 md:gap-0'>
                    <header className='hero-title font-inter font-bold md:text-5xl text-2xl text-[#05385B] text-center'><span className='text-black'>EVENTS AND</span> MEDICAL CARE</header>
                    <p className='hero-sub md:text-xl text-sm text-black font-semibold text-center'>Vaccination drives, sterilization camps & emergency medical help at IPU.</p>
                    {/* main-buttons */}
                    <div className='flex md:w-4xl justify-center items-center md:mt-24'>

                        <button
                            onClick={scrollToEvents}
                            className='hero-btn flex items-center justify-between cursor-pointer md:p-5 p-3 md:min-w-48 rounded-2xl bg-linear-to-r from-[#16779A] to-[#64AFEC] md:text-xl text-sm text-[#FBEFEF] font-semibold cta-action'>
                            VIEW UPCOMING EVENTS
                        </button>
                    </div>
                </div>

            </div>

            {/* Frame-2 */}
            <div id='upcoming' className='flex flex-col items-center justify-center md:max-w-5xl md:mx-auto mx-5'>
                <header className='md:text-6xl text-2xl font-bold md:mb-20 mb-8'><span className='text-[#0D5867]'>UPCOMING</span> <span className='text-black'>EVENTS</span></header>

                {/* Event List */}
                {/* Skeletons */}
                {loading && (
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mb-10">
                        <EventCardSkeleton />
                        <EventCardSkeleton />
                        <EventCardSkeleton />
                    </div>
                )}

                {/* Error State */}
                {!loading && error && (
                    <div className="state-box flex flex-col items-center justify-center text-center py-20 px-6 border-2 border-dashed border-red-300 rounded-2xl w-full">

                        <div className="md:text-5xl text-3xl mb-4">⚠️</div>

                        <h3 className="md:text-2xl text-xl font-bold text-red-600">
                            Something went wrong
                        </h3>

                        <p className="mt-2 text-gray-600 max-w-md md:text-base text-sm">
                            We couldn’t load events right now.
                            Please try again in a few moments.
                        </p>

                        <button
                            onClick={() => {
                                setLoading(true);
                                setError(false);
                                setTimeout(() => {
                                    setEvents(eventsData);
                                    setLoading(false);
                                }, 4000);
                            }}
                            className="mt-6 px-6 py-2 rounded-3xl bg-[#042839] text-white font-semibold"
                        >
                            Retry
                        </button>

                    </div>
                )}


                {/* Empty State */}
                {!loading && !error && events.length === 0 && (
                    <div className="state-box flex flex-col items-center justify-center text-center py-20 px-6 border-2 border-dashed border-gray-400 rounded-2xl w-full">
                        <div className="md:text-5xl text-3xl mb-4">📭</div>
                        <h3 className="md:text-2xl text-xl font-bold text-[#05385B]">
                            No Upcoming Events
                        </h3>
                        <p className="mt-2 text-gray-600 max-w-md md:text-base text-sm">
                            We don’t have any events scheduled right now.
                            Please check back soon or follow us for updates.
                        </p>
                    </div>
                )}

                {/* Event Cards */}
                {!loading && events.length > 0 && (
                    <>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mb-10">
                            {events.slice(0, showCount).map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>

                        {events.length > showCount && (
                            <button
                                onClick={() => setShowCount(showCount + 6)}
                                className="px-8 py-3 rounded-3xl bg-[#042839] text-white font-semibold"
                            >
                                Show More
                            </button>
                        )}
                    </>
                )}


            </div>

            {/* Frame-3 */}
            <div className='flex flex-col items-center justify-center md:max-w-5xl mx-auto'>
                <header className='md:text-5xl text-2xl font-bold md:mb-20 mb-8 text-black text-center'>🚑 HOW <span className='text-[#0D5867]'>MEDICAL</span> HELP <span className='text-[#0D5867]'>WORKS</span></header>

                <div className="relative w-full max-w-6xl mx-auto">
                    {/* Desktop */}
                    <div className="medical-line-desktop absolute left-0 top-[48px] h-[2px] bg-black hidden md:block" />
                    {/* Mobile */}
                    <div className="medical-line-mobile absolute top-0 bottom-0 left-1/2 w-[2px] bg-black -translate-x-1/2 md:hidden" />

                    {/* Steps */}
                    <div className="relative z-10 flex flex-col md:flex-row md:justify-between justify-center items-start gap-16 md:gap-0">

                        <div className="medical-step flex flex-col items-center w-full md:w-fit">
                            <img src="help-Step1.jpg" className="size-24 rounded-full object-cover" />
                            <h3 className="pt-2 rounded-lg font-medium bg-white">SEE</h3>
                        </div>

                        <div className="medical-step flex flex-col items-center w-full md:w-fit">
                            <img src="help-Step2.jpg" className="size-24 rounded-full object-cover" />
                            <h3 className="pt-2 rounded-lg font-medium bg-white">REPORT</h3>
                        </div>

                        <div className="medical-step flex flex-col items-center w-full md:w-fit">
                            <img src="help-Step3.jpg" className="size-24 rounded-full object-cover" />
                            <h3 className="pt-2 rounded-lg font-medium bg-white">RESPOND</h3>
                        </div>

                        <div className="medical-step flex flex-col items-center w-full md:w-fit">
                            <img src="help-Step4.jpg" className="size-24 rounded-full object-cover" />
                            <h3 className="pt-2 rounded-lg font-medium bg-white">TREAT</h3>
                        </div>

                    </div>
                </div>


            </div>

            {/* Frame-4 */}
            <div className="relative w-full min-h-[60vh] md:min-h-screen bg-white overflow-hidden flex items-center justify-center">

                {/* Background image layer */}
                <div className="absolute inset-0 bg-[url('/Frame-4-Hero.jpg')] bg-cover bg-center opacity-60" />

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
                            className="bg-[linear-gradient(90deg,#16779A_0%,#64AFEC_100%)] py-2 px-8 text-xl font-semibold text-[#FDF5F5] rounded-3xl cta-action">
                            👉 REPORT <span className="text-[#04344E]">NOW</span>
                        </a>

                        {/* Helpline Button */}
                        <a
                            href="tel:XXXXXXXXXX"
                            className="bg-[linear-gradient(90deg,#16779A_0%,#64AFEC_100%)] py-2 px-8 text-xl font-semibold text-[#FDF5F5] rounded-3xl cta-action">
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