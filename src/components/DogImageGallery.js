'use client';

import React, { useState, useEffect, useCallback } from 'react';

export default function DogImageGallery({ photos = [], dogName }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const images = photos.length > 0 ? photos : ['/simba.png'];
  const hasMultiple = images.length > 1;

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handleNext, handlePrev]);

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;

    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrev();

    setTouchStart(null);
  };

  return (
    <>
      {/* ================= MAIN IMAGE ================= */}
      <div
  className="relative w-full h-[380px] md:h-[520px] bg-gray-200 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group"
  onClick={() => setIsModalOpen(true)}
>
        <img
          src={images[currentIndex]}
          alt={dogName}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Photo count badge */}
        {hasMultiple && (
          <div className="absolute top-4 right-4 bg-black/40 px-3 py-1 rounded-full text-xs text-white font-semibold backdrop-blur-sm">
            {images.length} Photos
          </div>
        )}

        {/* Dots indicator */}
        {hasMultiple && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'bg-white w-6'
                    : 'bg-white/40 w-2'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/50 via-black/40 to-black/60 backdrop-blur-lg"          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl h-[80vh] bg-black rounded-2xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-xl z-20"
            >
              ✕
            </button>

            {/* Arrows */}
            {hasMultiple && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 text-white text-3xl z-20"
                >
                  ‹
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 text-white text-3xl z-20"
                >
                  ›
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={images[currentIndex]}
              alt="Gallery"
              className="max-h-full max-w-full object-contain"
            />

            {/* Counter */}
            <div className="absolute bottom-4 bg-black/50 px-4 py-1 rounded-full text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}