'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
export default function StanfordCard({name,about,department,advantages,outcomes,vibes}) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const width = current.clientWidth;
      current.scrollBy({ left: direction === 'left' ? -width : width, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
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

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 px-8 py-6 scrollbar-hide"
      >
        {/* Page 1 */}
        <div className="min-w-full snap-center bg-white shadow-xl rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-bold">{name}</h2>

          <div>
            <h3 className="text-xl font-semibold"> About the School:</h3>
            <p>
            {about}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Top Engineering Departments:</h3>
            <ul className="list-disc list-inside">
                {
                department.map((dept,index)=>
                <li key={index}>{dept}</li>
                )
                }
            </ul>
          </div>
        </div>

        {/* Page 2 */}
        <div className="min-w-full snap-center bg-white shadow-xl rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-semibold">Unique Advantages:</h3>
          <ul className="list-disc list-inside">
                            {
                advantages.map((advt,index)=>
                <li key={index}>{advt}</li>
                )
                }
          </ul>
        </div>

        {/* Page 3 */}
        <div className="min-w-full snap-center bg-white shadow-xl rounded-2xl p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold">Career Outcomes:</h3>
            {
                outcomes.map((outcome,index)=>
                <p key={index}>{outcome}</p>
                )
            }
          </div>

          <div>
            <h3 className="text-xl font-semibold">Campus Vibe:</h3>
            {
                vibes.map((vibe,index)=>
                <p key={index}>{vibe}</p>
                )
            }
          </div>
          <p className='text-gray-900 text-lg leading-relaxed'>Want to compare this college with others? Try our
            <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://college-comparison.vercel.app/"}
            > <span className="text-purple-500">Free College Comparator Tool </span> </Link>
            for instant comparisons.
            </p>
        </div>
      </div>
    </div>
  );
}
