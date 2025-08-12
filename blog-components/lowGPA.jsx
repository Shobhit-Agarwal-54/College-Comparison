"use client";
import Card6 from "@/components/card6";
import FooterBtn from "@/components/footerBtn";
import Logo from "@/components/logo";

export default function LowGPA() {
    const colleges = [
  {
    name: "1. Northern Kentucky University (NKU)",
    overview: "Located in Highland Heights, Kentucky, NKU is a welcoming public university known for its supportive academic environment and commitment to student success.",
    admission: "Accepts students with a minimum GPA of 2.0, with automatic admission for those at 2.75 or higher. Acceptance rate around 90%. Test-optional policy — though SAT (1020–1240) or ACT (20–26) can strengthen applications.",
    academic: [
      "Diverse programs through colleges of Business, Informatics, Health Professions, Law, and Honors",
      "Small class sizes and dedicated faculty mentorship",
      "Experiential learning opportunities through internships and projects"
    ],
    why: "With a flexible admissions process and broad academic offerings, NKU is ideal for motivated students seeking both opportunity and community."
  },
  {
    name: "2. University of La Verne",
    overview: "Located in Southern California, the University of La Verne blends a close-knit campus feel with access to Los Angeles–area opportunities.",
    admission: "Average GPA is around 3.24, but applicants with lower GPAs who show potential are considered. Acceptance rate ~73.5%. Test-optional with most admitted students not submitting test scores.",
    academic: [
      "Popular majors: Education, Business Administration, Criminal Justice, Health Sciences",
      "Strong emphasis on real-world experience through internships and community engagement",
      "Personalized advising and career development programs"
    ],
    why: "Students benefit from small class sizes, personalized support, and strong professional networks in Southern California."
  },
  {
    name: "3. Goucher College",
    overview: "A liberal arts college in Baltimore, Maryland, Goucher is known for its progressive approach to admissions and global learning focus.",
    admission: "Average GPA 3.14, but offers holistic review. Unique 'video application' option — no transcripts, essays, or test scores required. Acceptance rate ~79%.",
    academic: [
      "Popular programs: Psychology, Communications, Biology, International Studies",
      "Global education requirement — all students participate in study abroad",
      "Creative, interdisciplinary curriculum with project-based learning"
    ],
    why: "Innovative admissions and a commitment to global, real-world learning make Goucher ideal for creative, independent thinkers."
  },
  {
    name: "4. Asbury University",
    overview: "A private, faith-based university in Wilmore, Kentucky, Asbury is committed to academic excellence and Christian values.",
    admission: "Average GPA is 3.65, but holistic review allows for lower GPAs. Test-blind — SAT/ACT scores not considered. Acceptance rate ~64.1%.",
    academic: [
      "50+ majors including Media Communication, Business, Christian Studies, Equine Studies",
      "12:1 student-faculty ratio for close mentorship",
      "Integration of faith and learning with service-focused opportunities"
    ],
    why: "Faith-centered mission, strong academics, and vibrant service culture make it a great fit for values-driven students."
  },
  {
    name: "5. Adelphi University",
    overview: "Located in Garden City, New York, Adelphi combines the warmth of a close campus with access to New York City's vast resources.",
    admission: "Considers GPAs as low as 2.5 with holistic review. Acceptance rate ~73%. Test-optional admissions policy.",
    academic: [
      "Popular programs: Nursing, Business, Social Work, Psychology",
      "Hands-on internships and career access in NYC",
      "Small class sizes and individualized academic advising"
    ],
    why: "Adelphi offers personalized attention and a location that bridges campus comfort with big-city opportunity."
  },
  {
    name: "6. Southern New Hampshire University (SNHU)",
    overview: "Based in Manchester, New Hampshire, SNHU is a private university with expansive online and on-campus programs.",
    admission: "Admits students with GPAs as low as 2.5. Acceptance rate ~92%. SAT/ACT scores not required.",
    academic: [
      "Programs in Business, Psychology, Information Technology, Education",
      "Strong online learning infrastructure",
      "Support services for adult learners and working students"
    ],
    why: "SNHU’s flexibility and comprehensive student support make it a strong choice for nontraditional learners."
  },
  {
    name: "7. Louisiana State University (LSU)",
    overview: "Louisiana’s flagship university, located in Baton Rouge, offers strong academics and a vibrant campus culture.",
    admission: "Considers GPAs as low as 2.0 if balanced with strong test scores. Acceptance rate ~73%. Test-optional.",
    academic: [
      "Programs in Engineering, Business, Mass Communication, Biological Sciences",
      "Extensive research opportunities across disciplines",
      "Division I athletics and spirited campus life"
    ],
    why: "LSU offers a large-university experience with diverse academic and extracurricular resources."
  },
  {
    name: "8. North Carolina State University (NC State)",
    overview: "A public research university in Raleigh, NC State is recognized for excellence in STEM fields and innovation.",
    admission: "Competitive but may admit students near 2.0 GPA based on strengths. Acceptance rate ~47%. Test-optional.",
    academic: [
      "Top-tier programs in Engineering, Agriculture, Computer Science, Design",
      "Industry ties through the Research Triangle",
      "Collaborative research and entrepreneurship opportunities"
    ],
    why: "Perfect for students aiming for strong STEM programs with direct links to industry and research."
  },
  {
    name: "9. Southern Arkansas University (SAU)",
    overview: "Located in Magnolia, Arkansas, SAU offers an affordable and supportive learning environment.",
    admission: "Admits GPAs between 2.5–3.0. Acceptance rate ~69%. Test-optional for most applicants.",
    academic: [
      "Popular majors: Business, Agriculture, Education, Computer Science",
      "Affordable tuition and cost-of-living",
      "Strong academic support and community engagement"
    ],
    why: "SAU combines value, support, and quality education in a welcoming setting."
  },
  {
    name: "10. Lewis-Clark State College",
    overview: "Located in Lewiston, Idaho, Lewis-Clark State is a public college emphasizing accessibility and career preparation.",
    admission: "Admits students with GPAs as low as 2.0. Acceptance rate ~97%. Test scores optional.",
    academic: [
      "Strong programs in Nursing, Business, Education, Social Sciences",
      "Small class sizes with personal faculty interaction",
      "Practical, career-focused curriculum"
    ],
    why: "High acceptance rate, low cost, and career-focused programs make Lewis-Clark an excellent choice."
  }
];

  return (
         <main className="min-h-screen bg-gray-100  px-4 sm:px-6 md:px-8">            
            <Logo
            title={"Colleges That Accept Low GPA"}
            date={"8th August 2025"}
            imgsrc={"/B6S6.webp"}
            caption={"Northern Kentucky University (NKU)"}
            ></Logo>

          <section className="max-w-3xl mx-auto px-4 py-4">
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed ">
For many students, the moment they see their GPA fall below the “ideal” range, a wave of panic sets
 in. Thoughts like “Will I even get into a good college?” or “Have I ruined my future?” can be overwhelming. 
But here’s the exciting reality—your GPA isn’t the only thing that defines you. 
Across the US, there are excellent colleges that look beyond the numbers,
 valuing your skills, passions, experiences, and determination. This guide uncovers 10 reputable U.S
 . colleges that welcome students with lower GPAs, offering them a chance to shine academically,
  grow personally, and still chase ambitious career dreams.            Here is the list:
            <span className="text-bold text-gray-950"> ranked from top to bottom</span>.
        </p>
        </section>
    <div>
        {
            colleges.map((college,index)=>
            (
                <Card6
                key={index}
                {...college}
                ></Card6>
            ))
        }
    </div>
    <FooterBtn
    title={"Low GPA? Compare Colleges That Welcome You"}
    content={"A low GPA might feel like a roadblock, but in reality, it’s just a small part of your academic journey. The colleges we’ve explored prove that determination, unique talents, and personal growth can open doors that grades alone can’t close. Whether you’re aiming for career-focused programs, vibrant campus communities, or flexible learning environments, opportunities are still within your reach. Use our "}
    ></FooterBtn>
    </main>
  )
}
