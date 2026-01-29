'use client';

import { useEffect, useRef } from 'react';
import { Heart, Share2, MessageCircle, Instagram as InstagramIcon } from 'lucide-react';

const instagramPosts = [
  { image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop', likes: '2K+', comments: '100+', shares: '200+', reposts: '1K+' },
  { image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop', likes: '3K+', comments: '100+', shares: '300+', reposts: '1K+' },
  { image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&h=400&fit=crop', likes: '3K+', comments: '100+', shares: '300+', reposts: '1K+' }
];

export default function Instagram() {
  const instagramCardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
          target.style.opacity = '1';
          target.style.transform = 'translateY(0) rotateY(0deg)';
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    instagramCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) rotateY(10deg)';
        card.style.transitionDelay = `${index * 0.12}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post, index) => (
            <div 
              key={index}
              ref={el => { instagramCardsRef.current[index] = el; }}
              className="bg-gray-100 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="overflow-hidden">
                <img src={post.image} alt="Instagram post" className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 flex justify-around text-sm text-gray-700">
                <span className="flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                  <Heart size={16} className="text-red-500 hover-pulse" /> {post.likes}
                </span>
                <span className="flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                  <MessageCircle size={16} /> {post.comments}
                </span>
                <span className="flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                  <Share2 size={16} /> {post.shares}
                </span>
                <span className="flex items-center gap-1 hover:scale-110 transition-transform cursor-pointer">
                  ↻ {post.reposts}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-teal-700 hover:bg-teal-800 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto transition-all shadow-lg hover:shadow-xl hover:scale-105">
            <InstagramIcon size={24} />
            VIEW ON INSTAGRAM
          </button>
        </div>
      </div>
    </section>
  );
}
