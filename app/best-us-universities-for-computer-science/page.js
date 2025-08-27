import ComputerScienceUS from "@/blog-components/computerScienceUS";
export const metadata = {
  title: "Best US Universities for Computer Science",
  description:
    "Discover the best US universities for computer science with details on top programs, tuition, faculty, and career opportunities. Compare leading schools like MIT, Stanford, Carnegie Mellon, UC Berkeley, and Harvard to launch your tech career.",
  keywords: [
    "Best US universities for computer science",
    "Top computer science programs USA",
    "Computer science colleges ranking US",
    "MIT computer science",
    "Stanford computer science program",
    "Carnegie Mellon computer science",
    "UC Berkeley computer science",
    "Harvard computer science degree",
    "Best CS schools USA",
  ],
  openGraph: {
    title: "Best US Universities for Computer Science",
    description:
      "Compare the top US universities for computer science — programs, rankings, and career outcomes — to find the perfect fit for your tech future.",
    url: "https://college-comparison.vercel.app/best-us-universities-for-computer-science",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-us-computer-science.jpg",
        width: 1200,
        height: 630,
        alt: "Top US Universities for Computer Science",
      },
    ],
  },
};

export default function page() {
  return (
   <ComputerScienceUS></ComputerScienceUS>
  )
}
