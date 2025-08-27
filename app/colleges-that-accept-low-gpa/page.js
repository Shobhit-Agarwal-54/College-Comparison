import LowGPA from "@/blog-components/lowGPA";

export const metadata = {
  title: "Colleges That Accept Low GPA",
  description:
    "Find top colleges that accept students with a low GPA. Explore admission requirements, support programs, and universities across the US that provide opportunities for students with lower academic scores.",
  keywords: [
    "Colleges that accept low GPA",
    "Universities for low GPA students",
    "Best colleges for low GPA applicants",
    "Colleges with flexible admissions",
    "Low GPA college admissions",
    "Top US colleges for low GPA",
    "Colleges that don't require high GPA",
    "Universities that accept low GPA",
  ],
  openGraph: {
    title: "Colleges That Accept Low GPA",
    description:
      "Compare US colleges that welcome students with lower GPAs — admission policies, support services, and opportunities.",
    url: "https://college-comparison.vercel.app/colleges-that-accept-low-gpa",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-low-gpa.jpg",
        width: 1200,
        height: 630,
        alt: "Top Colleges That Accept Low GPA",
      },
    ],
  },
};

export default function page() {
  return (
    <LowGPA></LowGPA>
  )
}
