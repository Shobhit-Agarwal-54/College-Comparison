"use client";
import Link from "next/link";
import { useState } from "react";
const Card3 = ({
  title,
  description,
  specialities,
  fees,
  salary,
  gmat,
  requirements,
  experience,
}) => 
    {
    const data = [
    ['Popular MBA Specialities', specialities],
    ['Average Fees', fees],
    ['Average Salary After Graduation', salary],
    ['Average GMAT Score Required', gmat],
    ['IELTS, TOEFL, GPA Requirements', requirements],
    ['Average Work Experience', experience],
  ];

    const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionLimit = 150; // characters to show before "Read more"
  const isLong = description.length > descriptionLimit;
  const shortDescription = description.slice(0, descriptionLimit);

  return (
 <div className="bg-white shadow-lg rounded-xl p-6 mb-6 max-w-3xl mx-auto">
  <h2 className="text-xl font-semibold text-gray-900 mb-1">{title}</h2>
  <p className="text-gray-700 mb-4">
     {showFullDescription || !isLong ? description : `${shortDescription}...`}
        {isLong && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-blue-600 ml-2 text-sm underline focus:outline-none cursor-pointer"
          >
            {showFullDescription ? "Show less" : "Read more"}
          </button>
        )}
    </p>

  <div className="overflow-x-auto  px-2">
    <table className="w-full text-left border-t border-l border-r px-2 border-b border-gray-200 border-separate border-spacing-0">
      <tbody>
        {
       data.map(([label, value], index) => (
          <tr key={index} className="border-b border-gray-200">
            <td className="font-medium py-3  border-r border-gray-300 text-gray-800 w-1/2">
              {label}
            </td>
            <td className="py-3 pl-4 text-gray-700 align-top">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className='text-gray-900 mt-4 text-sm sm:text-base leading-relaxed'>Want to compare this college with others? Try our
            <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://college-comparison.vercel.app/"}
            > <span className="text-purple-500">Free College Comparator Tool </span> </Link>
            for instant comparisons.
            </p>
  </div>
</div>

  )
}

export default Card3