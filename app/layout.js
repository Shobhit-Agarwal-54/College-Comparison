import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "US College Comparator",
  description: "Free college comparison tool to evaluate US universities based on tuition fee, SAT/ACT scores, acceptance rate, graduation rate, majors.",
  keywords: ["College Comparison", "Compare US Colleges", "SAT ACT Requirements", "College Tuition", "Acceptance Rates", "US Universities","Graduation Rate","Popular Majors"],
  robots: "index, follow",
  authors: [{ name: "Shobhit Agarwal" }],
  metadataBase: new URL("https://college-comparison.vercel.app/"), // Replace with your actual URL
  openGraph: {
    title: "College Comparator",
    description: "Compare US Colleges on tuition, test scores, and more — fast and free.",
    url: "https://college-comparison.vercel.app/",
    siteName: "US College Comparator",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    >
      <head>
      <meta name="google-site-verification" content="Pkh1pGVVCt7c6Uo6rF9BRw-qVdDuKTyWa8d3zFXkHlE" />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
        </head>    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
