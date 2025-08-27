import PsychologyPennsylvania from "@/blog-components/psychologyPennsylvania";
export const metadata = {
  title: "Good Colleges in Pennsylvania for Psychology",
  description:
    "Discover good colleges in Pennsylvania for psychology programs. Explore details on courses, tuition, faculty, and career outcomes at top schools like University of Pennsylvania, Penn State, Temple University, and Carnegie Mellon.",
  keywords: [
    "Good colleges in Pennsylvania for psychology",
    "Best psychology programs Pennsylvania",
    "Pennsylvania psychology degree",
    "University of Pennsylvania psychology",
    "Penn State psychology program",
    "Temple University psychology",
    "Carnegie Mellon psychology",
    "Top psychology schools in Pennsylvania",
  ],
  openGraph: {
    title: "Good Colleges in Pennsylvania for Psychology",
    description:
      "Compare Pennsylvania’s top colleges for psychology — programs, rankings, and career opportunities — to find the best fit for your goals.",
    url: "https://college-comparison.vercel.app/good-colleges-in-pennsylvania-for-psychology",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-pennsylvania-psychology.jpg",
        width: 1200,
        height: 630,
        alt: "Good Colleges in Pennsylvania for Psychology",
      },
    ],
  },
};

export default function page() {
  return (
    <PsychologyPennsylvania></PsychologyPennsylvania>
  )
}
