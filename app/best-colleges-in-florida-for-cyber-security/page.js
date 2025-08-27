import CyberSecurityComponent from "@/blog-components/cybersecurity";
export const metadata = {
  title: "Best Colleges in Florida for Cyber Security",
  description:
    "Discover the best colleges in Florida for cyber security programs. Explore degree options, tuition, faculty, and career opportunities at top schools like University of Florida, Florida State University, and University of Central Florida.",
  keywords: [
    "Best colleges in Florida for cyber security",
    "Top cyber security programs Florida",
    "Florida cyber security degree",
    "University of Florida cyber security",
    "Florida State University cyber security program",
    "University of Central Florida cyber security",
    "Cyber security colleges Florida",
    "Top IT security schools Florida",
  ],
  openGraph: {
    title: "Best Colleges in Florida for Cyber Security",
    description:
      "Compare Florida’s top colleges for cyber security — programs, rankings, and career outcomes — to choose the best fit for your IT security studies.",
    url: "https://college-comparison.vercel.app/best-colleges-in-florida-for-cyber-security",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-florida-cybersecurity.jpg",
        width: 1200,
        height: 630,
        alt: "Best Colleges in Florida for Cyber Security",
      },
    ],
  },
};


export default function page() {
  return (
    <CyberSecurityComponent></CyberSecurityComponent>
  )
}
