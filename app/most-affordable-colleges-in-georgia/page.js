import Affordablegeorgia from "@/blog-components/affordablegeorgia";
export const metadata = {
  title: "Most Affordable Colleges in Georgia",
  description:
    "Find the most affordable colleges in Georgia with details on tuition, financial aid, programs, and career outcomes. Compare top budget-friendly schools like University of Georgia, Georgia State University, and Kennesaw State University.",
  keywords: [
    "Most affordable colleges in Georgia",
    "Cheap colleges in Georgia",
    "Low tuition colleges Georgia",
    "Affordable universities Georgia",
    "Budget-friendly colleges Georgia",
    "University of Georgia tuition",
    "Georgia State University affordable",
    "Kennesaw State University tuition",
  ],
  openGraph: {
    title: "Most Affordable Colleges in Georgia",
    description:
      "Compare Georgia’s most affordable colleges — tuition rates, financial aid options, and career prospects — to choose the best value for your education.",
    url: "https://college-comparison.vercel.app/most-affordable-colleges-in-georgia",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-georgia-affordable.jpg",
        width: 1200,
        height: 630,
        alt: "Most Affordable Colleges in Georgia",
      },
    ],
  },
};

export default function page() {
  return (
    <Affordablegeorgia></Affordablegeorgia>
  )
}
