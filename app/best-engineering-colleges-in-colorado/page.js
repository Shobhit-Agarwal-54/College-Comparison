import EngineeringColorado from "@/blog-components/engineeringColorado";
export const metadata = {
  title: "Best Engineering Colleges in Colorado",
  description:
    "Discover the best engineering colleges in Colorado with details on programs, tuition, faculty, and career opportunities. Compare top schools like Colorado School of Mines, University of Colorado Boulder, and Colorado State University to start your engineering journey.",
  keywords: [
    "Best engineering colleges in Colorado",
    "Top engineering schools Colorado",
    "Engineering degree Colorado",
    "Colorado School of Mines engineering",
    "University of Colorado Boulder engineering",
    "Colorado State University engineering",
    "Engineering colleges ranking Colorado",
    "Engineering programs in Colorado",
  ],
  openGraph: {
    title: "Best Engineering Colleges in Colorado",
    description:
      "Compare Colorado’s top engineering colleges — programs, rankings, and career outcomes — to choose the best fit for your future.",
    url: "https://college-comparison.vercel.app/best-engineering-colleges-in-colorado",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-colorado-engineering.jpg",
        width: 1200,
        height: 630,
        alt: "Top Engineering Colleges in Colorado",
      },
    ],
  },
};

export default function page() {
  return (
    <EngineeringColorado></EngineeringColorado>
  )
}
