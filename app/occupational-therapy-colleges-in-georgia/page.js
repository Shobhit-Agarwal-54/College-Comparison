import OccupationalTherapyGeorgia from "@/blog-components/therapygeorgia";
export const metadata = {
  title: "Occupational Therapy Colleges in Georgia",
  description:
    "Explore the top occupational therapy colleges in Georgia with details on programs, tuition, faculty, and career opportunities. Compare schools like Emory University, Georgia State University, and Mercer University to start your OT career.",
  keywords: [
    "Occupational therapy colleges in Georgia",
    "Best OT programs Georgia",
    "Georgia occupational therapy degree",
    "Emory University occupational therapy",
    "Georgia State University OT program",
    "Mercer University OT program",
    "Top occupational therapy schools Georgia",
    "Georgia OT colleges ranking",
  ],
  openGraph: {
    title: "Occupational Therapy Colleges in Georgia",
    description:
      "Compare Georgia’s top occupational therapy colleges — programs, rankings, and career outcomes — to choose the best fit for your career.",
    url: "https://college-comparison.vercel.app/occupational-therapy-colleges-in-georgia",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-georgia-ot.jpg",
        width: 1200,
        height: 630,
        alt: "Occupational Therapy Colleges in Georgia",
      },
    ],
  },
};

export default function page() {
  return (
    <OccupationalTherapyGeorgia></OccupationalTherapyGeorgia>
  )
}
