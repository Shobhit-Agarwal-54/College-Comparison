import PsychologyFlorida from "@/blog-components/psychologyFlorida";
export const metadata = {
  title: "Best Colleges in Florida for Psychology",
  description:
    "Discover the best colleges in Florida for psychology degrees with details on undergraduate and graduate programs, tuition fees, faculty, and career opportunities. Compare top schools like University of Florida, Florida State University, and University of Miami to start your psychology career.",
  keywords: [
    "Best colleges in Florida for psychology",
    "Top psychology schools in Florida",
    "Florida psychology degree programs",
    "University of Florida psychology",
    "Florida State University psychology",
    "University of Miami psychology program",
    "Psychology colleges Florida ranking",
    "Psychology degree Florida",
  ],
  openGraph: {
    title: "Best Colleges in Florida for Psychology",
    description:
      "Compare Florida’s top psychology colleges — programs, rankings, and career outcomes — to choose the best fit for your psychology studies.",
    url: "https://college-comparison.vercel.app/best-colleges-in-florida-for-psychology",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-florida-psychology.jpg",
        width: 1200,
        height: 630,
        alt: "Top Psychology Colleges in Florida",
      },
    ],
  },
};

export default function page() 
{
  return (
    <PsychologyFlorida></PsychologyFlorida>
  )
}
