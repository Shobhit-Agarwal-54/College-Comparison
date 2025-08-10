import Engineeringcalifornia from "@/blog-components/engineeringcalifornia";

export const metadata = {
  title: "Best Engineering Colleges in California",
  description:
    "Explore the top engineering colleges in California with advantages, career outcomes, campus vibes and more.",
  keywords: [
    "Engineering colleges in California",
    "Top engineering universities",
    "California engineering schools",
    "Best colleges for engineering in US",
  ],
  openGraph: {
    title: "Best Engineering Colleges in California",
    description:
      "Compare top engineering colleges in California to make the best academic choice.",
    url: "https://college-comparison.vercel.app/best-engineering-colleges-in-california",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Engineering Colleges in California",
      },
    ],
  },
};

const page = () => 
  {
    return (
      <Engineeringcalifornia></Engineeringcalifornia>
    )
  }

export default page