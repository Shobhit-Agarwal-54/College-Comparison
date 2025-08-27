import Musicflorida from '@/blog-components/musicflordia'
import React from 'react'
export const metadata = {
  title: "Best Colleges in Florida for Music Education",
  description:
    "Find the best colleges in Florida for music education with details on degree programs, tuition fees, faculty expertise, and career opportunities.",
  keywords: [
    "Best colleges in Florida for music education",
    "Top music schools in Florida",
    "Florida music education programs",
    "University of Miami Frost School of Music",
    "Florida State University College of Music",
    "University of Florida School of Music",
    "Music degree Florida",
    "Music colleges Florida ranking",
  ],
  openGraph: {
    title: "Best Colleges in Florida for Music Education",
    description:
      "Compare Florida's top colleges for music education — programs, faculty, rankings, and career outcomes — to find the perfect school for your music journey.",
    url: "https://college-comparison.vercel.app/best-colleges-in-florida-for-music-education",
    siteName: "US College Comparator",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://college-comparison.vercel.app/og-image-florida-music.jpg",
        width: 1200,
        height: 630,
        alt: "Top Music Colleges in Florida",
      },
    ],
  },
};

export default function page() {
  return (
    <Musicflorida></Musicflorida>
  )
}
