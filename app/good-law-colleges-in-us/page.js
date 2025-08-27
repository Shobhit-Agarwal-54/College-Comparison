import LawUS from "@/blog-components/lawUS";
export const metadata = {
  title: "Good Law Colleges in the US",
  description:
    "Explore good law colleges in the US with details on JD programs, tuition, LSAT requirements, faculty, and career opportunities. Compare top schools like Harvard, Yale, Stanford, Columbia, and University of Chicago to find the right fit for your legal career.",
  keywords: [
    "Good law colleges in US",
    "Best law schools USA",
    "Top JD programs US",
    "Harvard Law School",
    "Yale Law School",
    "Stanford Law School",
    "Columbia Law School",
    "University of Chicago Law",
    "Law schools ranking USA",
  ],
  openGraph: {
    title: "Good Law Colleges in the US",
    description:
      "Compare the top law colleges in the US — programs, rankings, and career outcomes — to prepare for a successful legal career.",
    url: "https://college-comparison.vercel.app/good-law-colleges-in-us",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-us-law.jpg",
        width: 1200,
        height: 630,
        alt: "Good Law Colleges in the US",
      },
    ],
  },
};

export default function page() {
  return (
    <LawUS></LawUS>
  )
}
