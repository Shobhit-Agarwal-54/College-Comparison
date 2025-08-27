import ExpensiveTexas from "@/blog-components/expensiveTexas";
export const metadata = {
  title: "Most Expensive Colleges in Texas",
  description:
    "Discover the most expensive colleges in Texas with details on tuition costs, programs, campus facilities, and career outcomes. Compare top high-cost schools like Rice University, Southern Methodist University, and Texas Christian University.",
  keywords: [
    "Most expensive colleges in Texas",
    "High tuition colleges Texas",
    "Top private universities Texas",
    "Rice University tuition",
    "Southern Methodist University cost",
    "Texas Christian University fees",
    "Expensive universities in Texas",
    "Elite colleges in Texas",
  ],
  openGraph: {
    title: "Most Expensive Colleges in Texas",
    description:
      "Compare Texas’s most expensive colleges — tuition, programs, and campus facilities — to find the right premium education option.",
    url: "https://college-comparison.vercel.app/most-expensive-colleges-in-texas",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-texas-expensive.jpg",
        width: 1200,
        height: 630,
        alt: "Most Expensive Colleges in Texas",
      },
    ],
  },
};

export default function page() {
  return (
    <ExpensiveTexas></ExpensiveTexas>
  )
}
