"use client";

import Card10 from "@/components/card10";
import FooterBtn from "@/components/footerBtn";
import Logo from "@/components/logo";

export default function DaytonOhio() {
  return (
       <main className="min-h-screen bg-gray-100  px-4 sm:px-6 md:px-8">
                    <Logo
            title={"Colleges in Dayton Ohio"}
            date={"11th August 2025"}
            imgsrc={"/B15S15.webp"}
            caption={"University of Dayton"}
            ></Logo>

          <section className="max-w-3xl mx-auto px-4 py-4">
  <p className="text-gray-600 text-base sm:text-lg leading-relaxed ">
Choosing a college is one of the most exciting—and nerve-wracking—decisions you’ll ever make.
 For students exploring Dayton, Ohio, the stakes feel real: Will you find the right program?
  The right campus vibe? The right opportunities to shape your future? Dayton offers a wide 
  range of colleges, from research-driven universities to career-focused community colleges,
   each providing unique programs, campus experiences, and pathways to success. The thrill 
   lies in imagining your future here, while the fear comes from knowing that one choice can
    have a lasting impact. With the right information, you can navigate these options confidently
     and find the college that’s the perfect fit for you.

    Here is the list of Dayton Ohio colleges
<span className="text-bold text-gray-950"> ranked from top to bottom</span>.
  </p>
</section>
<Card10
  name="1. University of Dayton"
  overview="A private Catholic research university renowned for strong academics and community service."
  programs={[
    "Engineering",
    "Business",
    "Health Sciences",
    "Law",
    "Arts & Humanities"
  ]}
  bestFor={[
    "Materials Research",
    "Catholic College Engineering Programs",
    "Physical Science and Engineering Research"
  ]}
  nearbyOpportunities={[
    "Wright-Patterson Air Force Base internships",
    "Tech and healthcare industry collaborations",
    "Local research projects",
    "Networking events and career fairs"
  ]}
  campusVibes={[
    "Active student organizations",
    "Diverse cultural events",
    "Community service focus",
    "Modern facilities and green spaces",
    "Supportive faculty",
    "Engaging campus traditions"
  ]}
/>

<Card10
  name="2. Wright State University"
  overview="A public research university offering diverse programs and degrees across multiple disciplines."
  programs={[
    "Engineering",
    "Computer Science",
    "Business",
    "Health Sciences",
    "Education"
  ]}
  bestFor={[
    "Graduate Engineering and Computer Science",
    "Part-time MBA Programs",
    "Undergraduate Engineering Programs"
  ]}
  nearbyOpportunities={[
    "Wright-Patterson Air Force Base collaborations",
    "Internships in tech sector",
    "Local business research partnerships",
    "Career and networking events"
  ]}
  campusVibes={[
    "Diverse student body",
    "Active student government",
    "Modern facilities",
    "Engaging campus activities",
    "Supportive academic advising",
    "Focus on student success"
  ]}
/>

<Card10
  name="3. Sinclair Community College"
  overview="A public community college providing accessible education and workforce training."
  programs={[
    "Electrical Construction Management",
    "Early Childhood Education",
    "Electrocardiography",
    "Nursing",
    "Cybersecurity"
  ]}
  bestFor={[
    "Affordable tuition",
    "Technical and vocational training",
    "Transfer programs to four-year universities"
  ]}
  nearbyOpportunities={[
    "Teaching placements in local schools",
    "Internships in construction and healthcare",
    "Job placement services",
    "Access to Dayton’s educational and healthcare sectors"
  ]}
  campusVibes={[
    "Supportive learning environment",
    "Diverse student population",
    "Flexible schedules for working students",
    "Modern campus facilities",
    "Active student clubs",
    "Community engagement focus"
  ]}
/>

<Card10
  name="4. Central State University – Dayton"
  overview="A branch campus offering degree completion programs for adult learners and professionals."
  programs={[
    "Business Administration",
    "Management",
    "Healthcare Administration",
    "Education",
    "Social Sciences"
  ]}
  bestFor={[
    "Adult learners completing bachelor's degrees",
    "Working professionals advancing careers",
    "Flexible learning options"
  ]}
  nearbyOpportunities={[
    "Access to Dayton business networks",
    "Internships and career fairs",
    "Local business collaborations",
    "Networking events"
  ]}
  campusVibes={[
    "Supportive and inclusive",
    "Flexible class schedules",
    "Focus on student success",
    "University resources access",
    "Community engagement opportunities",
    "Career readiness emphasis"
  ]}
/>

<Card10
  name="5. Kettering College"
  overview="A private Adventist college focused on healthcare education with clinical partnerships."
  programs={[
    "Nursing",
    "Radiologic Sciences",
    "Health Sciences",
    "Physician Assistant Studies",
    "Medical Laboratory Science"
  ]}
  bestFor={[
    "Nursing programs",
    "Radiologic Sciences programs",
    "Physician Assistant studies"
  ]}
  nearbyOpportunities={[
    "Clinical placements at Kettering Health",
    "Healthcare internships",
    "Graduate job placement",
    "Access to Dayton healthcare industry"
  ]}
  campusVibes={[
    "Small class sizes",
    "Hands-on learning",
    "Supportive faculty",
    "Spiritual and ethical focus",
    "Modern facilities",
    "Active student organizations"
  ]}
/>

<Card10
  name="6. International College of Broadcasting"
  overview="Specialized college for broadcasting and media production with hands-on learning."
  programs={[
    "Video Production",
    "Audio Engineering",
    "Multimedia Broadcasting",
    "Media Studies",
    "Digital Marketing"
  ]}
  bestFor={[
    "Careers in broadcasting",
    "Hands-on media training",
    "Focused, career-oriented education"
  ]}
  nearbyOpportunities={[
    "Internships with local media outlets",
    "Job placement in media industry",
    "Access to Dayton media scene",
    "Networking with professionals"
  ]}
  campusVibes={[
    "Small class sizes",
    "Industry-standard equipment training",
    "Close-knit student community",
    "Practical skills focus",
    "Supportive environment",
    "Opportunities for creative expression"
  ]}
/>

<Card10
  name="7. Edison State Community College"
  overview="A public community college offering affordable programs and strong transfer options."
  programs={[
    "Associate Degrees",
    "Certificate Programs",
    "Business Administration",
    "Health Sciences",
    "Information Technology"
  ]}
  bestFor={[
    "Affordable education",
    "Transfer to four-year universities",
    "Career-focused programs"
  ]}
  nearbyOpportunities={[
    "Transfer agreements with four-year colleges",
    "Internship and job placements",
    "Local industry connections",
    "Community service projects"
  ]}
  campusVibes={[
    "Supportive and inclusive environment",
    "Flexible schedules",
    "Student success focus",
    "Modern facilities",
    "Active clubs and organizations",
    "Community involvement"
  ]}
/>
<FooterBtn
title={"Compare, Choose, and Step Confidently into Your Future"}
content={"Choosing the right college in Dayton doesn’t have to be overwhelming. With so many options, it’s easy to feel both excited and uncertain. Our College Comparator Tool helps you quickly compare programs, tuition, campus vibes, and career outcomes. Make informed decisions without the stress and find the school that truly fits your goals. Use our "}
></FooterBtn>
</main>
  )
}
