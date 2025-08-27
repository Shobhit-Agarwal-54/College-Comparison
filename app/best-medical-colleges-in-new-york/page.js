import MedicalNewYork from '@/blog-components/medicalNewYork'
export const metadata = {
  title: "Best Medical Colleges in New York",
  description:
    "Explore the best medical colleges in New York with details on MD programs, tuition, admission requirements, and residency opportunities. Compare top schools like Columbia Vagelos, NYU Grossman, Weill Cornell, and Icahn School of Medicine to start your medical career.",
  keywords: [
    "Best medical colleges in New York",
    "Top medical schools New York",
    "MD programs New York",
    "Columbia University medical school",
    "NYU Grossman School of Medicine",
    "Weill Cornell Medical College",
    "Icahn School of Medicine",
    "Medical degree New York",
    "Medical schools ranking NY",
  ],
  openGraph: {
    title: "Best Medical Colleges in New York",
    description:
      "Compare New York’s top medical colleges — programs, rankings, and career outcomes — to choose the best path to becoming a doctor.",
    url: "https://college-comparison.vercel.app/best-medical-colleges-in-new-york",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-newyork-medical.jpg",
        width: 1200,
        height: 630,
        alt: "Top Medical Colleges in New York",
      },
    ],
  },
};

export default function page() {
  return (
    <MedicalNewYork></MedicalNewYork>
  )
}
