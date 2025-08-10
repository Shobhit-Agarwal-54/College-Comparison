import PsychologyCalifornia2 from '@/blog-components/psychologyCalifornia2'
import React from 'react'

export const metadata = {
  title: "Best Colleges for Psychology in California",
  description:
    "Explore the top psychology colleges in California with details on academic strengths, advantages, career outcomes, and campus vibes. Compare leading schools like Stanford, UC Berkeley, UCLA, UC San Diego, and UC Irvine to choose the best fit for your goals.",
  keywords: [
    "Best psychology colleges in California",
    "Top psychology universities California",
    "California psychology degree",
    "Psychology schools ranking California",
    "Stanford psychology program",
    "UC Berkeley psychology department",
    "UCLA psychology degree",
    "UC San Diego psychology",
    "UC Irvine psychology program",
  ],
  openGraph: {
    title: "Best Colleges for Psychology in California",
    description:
      "Compare California's best psychology colleges by academics, career outcomes, and campus life to find the perfect match for your future.",
    url: "https://college-comparison.vercel.app/best-colleges-for-psychology-in-california",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-psychology.jpg",
        width: 1200,
        height: 630,
        alt: "Best Colleges for Psychology in California",
      },
    ],
  },
};

const page = () => {
  const x= [
          ['Popular MBA Specialities', 'specialities'],
          ['Average Fees', 'fees'],
          ['Average Salary After Graduation', 'salary'],
          ['Average GMAT Score Required', 'gmat'],
          ['IELTS, TOEFL, GPA Requirements', 'requirements'],
          ['Average Work Experience', 'experience'],
        ];
  return (
    <div>
      <PsychologyCalifornia2></PsychologyCalifornia2>
      </div>
  )
}

export default page