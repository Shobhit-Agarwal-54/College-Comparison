import BusinessCalifornia from "@/blog-components/businessCalifornia"

export const metadata = {
  title: "Best Business Colleges in California",
  description:
    "Explore California's best business colleges with details on MBA programs, fees, salary, GMAT score, work experience and IELTS, TOEFL, GPA requirements.Compare schools like Stanford, Berkeley Haas, USC Marshall, UCLA Anderson, and UC Irvine Merage to make the smartest choice.",
  keywords: [
    "Best business colleges in California",
    "Top MBA colleges in California",
    "California business schools ranking",
    "Stanford vs Berkeley Haas",
    "USC Marshall MBA",
    "UCLA Anderson School of Management",
    "UC Irvine Merage School of Business",
    "Business degree California",
  ],
  openGraph: {
    title: "Best Business Colleges in California",
    description:
      "Get a side-by-side comparison of California's top business colleges — programs, rankings, campus life, and career outcomes — to find the right match for your goals.",
    url: "https://college-comparison.vercel.app/best-business-colleges-in-california",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-business.jpg",
        width: 1200,
        height: 630,
        alt: "Top 5 Business Colleges in California",
      },
    ],
  },
};

export const page = () => {
  return (
    <div>
        <BusinessCalifornia></BusinessCalifornia>
    </div>
  )
}
export default page