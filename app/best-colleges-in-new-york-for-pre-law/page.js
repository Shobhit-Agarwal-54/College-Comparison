import  NewYorkPreLaw  from "@/blog-components/newYorkPreLaw";
export const metadata = {
  title: "Best Colleges in New York for Pre-Law",
  description:
    "Explore the best colleges in New York for pre-law programs with details on courses, tuition, LSAT prep, faculty, and career outcomes. Compare top schools like Columbia University, NYU, Fordham, and Cornell to prepare for law school success.",
  keywords: [
    "Best colleges in New York for pre-law",
    "Top pre-law programs New York",
    "Pre-law schools NY",
    "Columbia University pre-law",
    "NYU pre-law program",
    "Fordham pre-law",
    "Cornell pre-law program",
    "Pre-law degree New York",
    "Pre-law colleges ranking NY",
  ],
  openGraph: {
    title: "Best Colleges in New York for Pre-Law",
    description:
      "Compare New York’s top colleges for pre-law — programs, LSAT preparation, and career outcomes — to find the right path to law school.",
    url: "https://college-comparison.vercel.app/best-colleges-in-new-york-for-pre-law",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-newyork-prelaw.jpg",
        width: 1200,
        height: 630,
        alt: "Top Pre-Law Colleges in New York",
      },
    ],
  },
};

 const page = () => {
  return (
    <div>
        <NewYorkPreLaw></NewYorkPreLaw>
    </div>
  )
}
export default page;