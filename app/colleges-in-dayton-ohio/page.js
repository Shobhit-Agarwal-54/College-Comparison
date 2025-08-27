import DaytonOhio from "@/blog-components/daytonOhio";
export const metadata = {
  title: "Colleges in Dayton Ohio",
  description:
    "Explore the top colleges in Dayton, Ohio with details on programs, tuition, campus life, and career opportunities. Compare schools like University of Dayton, Wright State University, and Sinclair College to find the right fit for your education.",
  keywords: [
    "Colleges in Dayton Ohio",
    "Best colleges in Dayton",
    "University of Dayton",
    "Wright State University Dayton",
    "Sinclair College Dayton",
    "Dayton Ohio universities",
    "Top colleges Dayton Ohio",
    "Higher education Dayton Ohio",
  ],
  openGraph: {
    title: "Colleges in Dayton, Ohio",
    description:
      "Compare Dayton’s top colleges — programs, rankings, and campus life — to choose the right school for your future.",
    url: "https://college-comparison.vercel.app/colleges-in-dayton-ohio",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-dayton-ohio.jpg",
        width: 1200,
        height: 630,
        alt: "Top Colleges in Dayton Ohio",
      },
    ],
  },
};

export default function page() {
  return (
    <DaytonOhio></DaytonOhio>
  )
}
