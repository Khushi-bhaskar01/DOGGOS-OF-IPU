import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-6 hover-wiggle cursor-pointer">
              <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-800 hover:scale-110">
                <div className="text-white text-3xl">🐕</div>
              </div>
              <div>
                <div className="text-amber-900 font-bold text-3xl">DOOGOS</div>
                <div className="text-gray-800 font-semibold text-2xl">IPU</div>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Help the life of our little paw friends. Contribute with a donation or help to adopt a pet.
            </p>
            <div className="space-y-2">
              <div className="text-gray-900 font-semibold text-lg hover:text-teal-700 cursor-pointer transition-colors">Privacy</div>
              <div className="text-gray-900 font-semibold text-lg hover:text-teal-700 cursor-pointer transition-colors">Terms and Condition</div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-teal-700">CONTACT <span className="text-gray-900">US</span></h3>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-all hover:scale-110 hover-pulse">
                <Instagram className="text-white" size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-all hover:scale-110 hover-pulse">
                <MessageCircle className="text-white" size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-all hover:scale-110 hover-pulse">
                <span className="text-white font-bold">in</span>
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer">
                <div className="text-teal-600 text-2xl">✉️</div>
                <div>
                  <div className="font-semibold text-gray-900">EMAIL:</div>
                  <div className="text-gray-700">doogosipu@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer">
                <div className="text-teal-600 text-2xl">📍</div>
                <div>
                  <div className="font-semibold text-gray-900">ADDRESS:</div>
                  <div className="text-gray-700">
                    Guru Gobind Singh Indraprastha University, Sector-16C Dwarka, New Delhi 110078.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
          Copyright © 2026 DOOGOS IPU. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}