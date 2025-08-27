import HighGPA from "@/blog-components/highGPA";
export const metadata = {
  title: "Colleges That Accept High GPA",
  description:
    "Explore top colleges that value high GPA applicants. Discover admission requirements, scholarships, and programs at leading universities across the US for students with strong academic records.",
  keywords: [
    "Colleges that accept high GPA",
    "Universities for high GPA students",
    "Best colleges for high GPA applicants",
    "Scholarships for high GPA",
    "Colleges that prioritize GPA",
    "High GPA college admissions",
    "Top US colleges for strong academics",
    "Universities that accept high GPA",
  ],
  openGraph: {
    title: "Colleges That Accept High GPA",
    description:
      "Compare top US colleges that prioritize high GPA students — admission criteria, scholarships, and career outcomes.",
    url: "https://college-comparison.vercel.app/colleges-that-accept-high-gpa",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-high-gpa.jpg",
        width: 1200,
        height: 630,
        alt: "Top Colleges That Accept High GPA",
      },
    ],
  },
};

export default function page() {
  return (
   <HighGPA></HighGPA> 
  )
}
