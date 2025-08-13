'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Card10({
  name,
  overview,
  programs,
  bestFor,
  nearbyOpportunities,
  campusVibes
}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const width = current.clientWidth;
      current.scrollBy({
        left: direction === 'left' ? -width : width,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Pages */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 px-8 py-6 scrollbar-hide"
      >
        {/* Page 1 */}
        <div className="min-w-full snap-center bg-white shadow-xl rounded-2xl p-4 sm:p-6 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">{name}</h2>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Overview:</h3>
            <p className="text-sm sm:text-base">{overview}</p>
          </div>

          <div>
            <h3 className="sm:text-xl text-lg font-semibold">Programs Offered</h3>
            <ul className="list-disc list-inside text-sm sm:text-base">
              {programs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Page 2 */}
        <div className="min-w-full snap-center bg-white shadow-xl rounded-2xl p-4 sm:p-6 space-y-4">
          <div>
            <h3 className="sm:text-xl text-lg font-semibold">Best For</h3>
            <ul className="list-disc list-inside text-sm sm:text-base">
              {bestFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="sm:text-xl text-lg font-semibold">Nearby Opportunities</h3>
            <ul className="list-disc list-inside text-sm sm:text-base">
              {nearbyOpportunities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Page 3 */}
        <div className="min-w-full snap-center bg-white shadow-xl rounded-2xl p-4 sm:p-6 space-y-4">
          <div>
            <h3 className="sm:text-xl text-lg font-semibold">Campus Vibes</h3>
            <ul className="list-disc list-inside text-sm sm:text-base">
              {campusVibes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="text-gray-900 text-sm sm:text-base leading-relaxed">
            Want to compare this college with others? Try our
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://college-comparison.vercel.app/"
            >
              <span className="text-purple-500"> Free College Comparator Tool </span>
            </Link>
            for instant comparisons.
          </p>
        </div>
      </div>
    </div>
  );
}
