import Card11 from "@/components/card11";
import FooterBtn from "@/components/footerBtn";
import Logo from "@/components/logo";

export default function LawUS() {
    const lawColleges = [
  {
    name: "1. Yale Law School",
    overview:
      "Yale Law School in New Haven, Connecticut, is widely regarded as one of the most prestigious law schools in the world, known for its rigorous academics, intimate learning environment, and unparalleled influence in legal scholarship and public service.",
    tuition: "$71,425 per year",
    why: [
      "Ranked consistently as the #1 law school in the U.S.",
      "Extremely low student-to-faculty ratio for personalized learning",
      "Strong emphasis on public service and interdisciplinary study"
    ],
    academic: [
      "Comprehensive JD, LLM, and JSD programs",
      "Clinics covering constitutional law, criminal justice, and human rights",
      "Renowned faculty including Supreme Court advocates",
      "Flexible curriculum allowing early specialization",
      "Strong integration of policy, philosophy, and legal theory"
    ],
    careerOutcomes: [
      "High placement in federal judicial clerkships",
      "Frequent pathway to academia and policy leadership",
      "Graduates often secure positions at top law firms",
      "Influential roles in government and international law",
      "Strong alumni network in global legal circles"
    ],
    campusVibes: [
      "Historic Gothic architecture in a close-knit campus",
      "Intellectual and collaborative student environment",
      "Access to Yale's extensive library system",
      "Frequent guest lectures by global legal leaders",
      "Vibrant arts and cultural scene in New Haven",
      "Active student organizations on social justice",
      "Small class sizes fostering mentorship"
    ]
  },
  {
    name: "2. Harvard Law School",
    overview:
      "Harvard Law School in Cambridge, Massachusetts, offers an unparalleled breadth of legal study, global influence, and a history of producing leaders in every sector of the legal profession.",
    tuition: "$71,734 per year",
    why: [
      "Largest law library in the world",
      "Diverse course offerings covering every legal field",
      "Strong global reputation with influential alumni"
    ],
    academic: [
      "JD, LLM, and SJD programs",
      "Over 400 courses and seminars",
      "Extensive clinical and pro bono opportunities",
      "World-class research centers in multiple legal areas",
      "Collaborations with Harvard's other graduate schools"
    ],
    careerOutcomes: [
      "High employment rate at elite law firms",
      "Strong judicial clerkship placements",
      "Influence in politics, business, and international law",
      "Extensive global alumni network",
      "Frequent recruitment by top NGOs and government agencies"
    ],
    campusVibes: [
      "Historic campus with modern learning spaces",
      "Dynamic academic and extracurricular life",
      "Proximity to Boston's legal and business hubs",
      "Networking events with distinguished alumni",
      "Active student-led law journals",
      "Supportive community for international students",
      "Year-round cultural and social events"
    ]
  },
  {
    name: "3. Stanford Law School",
    overview:
      "Stanford Law School in California is renowned for innovation, interdisciplinary learning, and a collaborative academic environment that bridges law with technology, business, and policy.",
    tuition: "$68,997 per year",
    why: [
      "Small, tight-knit student body",
      "Strong focus on law and technology",
      "Proximity to Silicon Valley and global innovation hubs"
    ],
    academic: [
      "JD, LLM, and advanced degree options",
      "Interdisciplinary programs with Stanford’s business and engineering schools",
      "Leading research in IP, environmental, and constitutional law",
      "Extensive clinic programs",
      "Global law and policy initiatives"
    ],
    careerOutcomes: [
      "High placement in tech-sector legal roles",
      "Judicial clerkship opportunities nationwide",
      "Graduates lead startups and legal innovation firms",
      "Strong presence in top-tier law firms",
      "Influential in policy-making and legislative work"
    ],
    campusVibes: [
      "Sunny California campus with modern facilities",
      "Collaborative and supportive peer culture",
      "Easy access to entrepreneurship opportunities",
      "Close ties to venture capital and tech industry",
      "Outdoor-friendly lifestyle",
      "Regular events with legal innovators",
      "Small community fostering deep connections"
    ]
  },
  {
    name: "4. Columbia Law School",
    overview:
      "Located in New York City, Columbia Law School offers a powerful combination of academic rigor, global reach, and access to one of the most dynamic legal markets in the world.",
    tuition: "$78,278 per year",
    why: [
      "Prime location in New York City",
      "Strong corporate and international law programs",
      "Vast alumni network in influential positions"
    ],
    academic: [
      "JD, LLM, and Executive LLM programs",
      "Extensive corporate, constitutional, and human rights offerings",
      "Strong clinical and externship programs",
      "Collaborations with international institutions",
      "Access to cross-disciplinary study at Columbia University"
    ],
    careerOutcomes: [
      "Strong placement in NYC’s top law firms",
      "Opportunities in global finance and corporate law",
      "Significant alumni in judiciary and public office",
      "Pathways to international legal careers",
      "High bar passage rates"
    ],
    campusVibes: [
      "Urban campus in Morningside Heights",
      "Access to NYC’s cultural and legal institutions",
      "Diverse and ambitious student body",
      "Active student organizations in multiple fields",
      "Regular high-profile legal events",
      "Supportive faculty mentorship",
      "Energy of living in a global city"
    ]
  },
  {
    name: "5. University of Chicago Law School",
    overview:
      "The University of Chicago Law School is known for its emphasis on intellectual rigor, interdisciplinary study, and influential scholarship in law and economics.",
    tuition: "$73,185 per year",
    why: [
      "Strong focus on law and economics",
      "Intense but collaborative academic culture",
      "Influential faculty in legal theory and policy"
    ],
    academic: [
      "JD and LLM programs with flexible specializations",
      "Leading research centers in multiple legal disciplines",
      "Extensive clinical offerings",
      "Integration of economics and law in curriculum",
      "Opportunities for cross-registration across the university"
    ],
    careerOutcomes: [
      "High placement in academia",
      "Strong judicial clerkship rates",
      "Employment in top law firms",
      "Policy-making and think tank leadership",
      "Global corporate and financial law opportunities"
    ],
    campusVibes: [
      "Gothic campus architecture",
      "Tight-knit academic community",
      "Proximity to Chicago’s legal and business hubs",
      "Active intellectual debates and discussions",
      "Supportive student-faculty relationships",
      "Vibrant city life nearby",
      "Culture of analytical rigor"
    ]
  },
  {
    name: "6. New York University School of Law",
    overview:
      "NYU School of Law offers a globally oriented legal education with particular strength in international law, tax law, and public interest law, located in the heart of New York City.",
    tuition: "$76,878 per year",
    why: [
      "Leading programs in international and tax law",
      "Strong commitment to public interest law",
      "Vibrant urban campus in Greenwich Village"
    ],
    academic: [
      "JD, LLM, and JSD programs",
      "Renowned faculty in global and public law",
      "Extensive clinical opportunities",
      "Global study programs",
      "Collaboration with UN and international organizations"
    ],
    careerOutcomes: [
      "Strong employment in public interest organizations",
      "High placement in international law firms",
      "Influence in global legal policy",
      "Leadership in NGOs and non-profits",
      "Access to UN and global institutions"
    ],
    campusVibes: [
      "Urban, artistic environment in Greenwich Village",
      "Diverse student population",
      "Active legal debates and speaker events",
      "Strong public service culture",
      "Proximity to major legal employers",
      "Engaged and socially active student groups",
      "Dynamic nightlife and cultural scene"
    ]
  },
  {
    name: "7. University of Virginia School of Law",
    overview:
      "UVA School of Law in Charlottesville offers a balanced legal education combining academic excellence, collegial atmosphere, and a strong tradition of public service.",
    tuition: "$68,500 per year",
    why: [
      "Highly ranked for student quality of life",
      "Strong alumni connections in law and government",
      "Emphasis on ethics and leadership"
    ],
    academic: [
      "JD and LLM programs with diverse electives",
      "Clinics in criminal defense, immigration, and civil rights",
      "Strong moot court and trial advocacy programs",
      "Cross-disciplinary study with other UVA departments",
      "Opportunities for pro bono service"
    ],
    careerOutcomes: [
      "High placement in federal clerkships",
      "Employment in top national law firms",
      "Leadership in public service",
      "Corporate legal careers",
      "Academic and policy-making opportunities"
    ],
    campusVibes: [
      "Picturesque campus in the Blue Ridge Mountains",
      "Friendly and collaborative community",
      "Rich traditions and social events",
      "Access to outdoor recreation",
      "Strong honor code culture",
      "Active alumni engagement",
      "Vibrant student life in Charlottesville"
    ]
  }
];

  return (
    <main className="min-h-screen bg-gray-100  px-4 sm:px-6 md:px-8">            
                <Logo
                title={"Good Law Colleges in US"}
                date={"13th August 2025"}
                imgsrc={"/B19S19.webp"}
                caption={"Yale Law School"}
                ></Logo>
    
              <section className="max-w-3xl mx-auto px-4 py-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed ">
Choosing the right law college isn’t just about lectures and textbooks—it’s the foundation of 
your entire legal career. Pick the right one, and you could be defending high-profile clients,
 shaping national policies, or standing before the Supreme Court. Pick wrong, and you might 
 find yourself drowning in student loans with a degree that doesn’t open the right doors. The
  stakes are high, the competition is fierce, and the rewards—immeasurable. Whether you dream
   of becoming a fearless trial lawyer, a sharp corporate attorney, or a justice reform advocate,
    the journey starts here.          Here is the list:
                <span className="text-bold text-gray-950"> ranked from top to bottom</span>.
            </p>
            </section>
    <div>
        {
            lawColleges.map((college,index)=>(
                <Card11
                key={index}
                {...college}
                ></Card11>
            ))
        }
    </div>
    <FooterBtn
    title={"Your Verdict Starts Here: Compare, Choose, Conquer"}
    content={"In law, every decision has consequences—and the choice of your law school is no exception. The right college can arm you with prestige, networks, and skills that last a lifetime, while the wrong choice could limit your opportunities before you even pass the bar. The courtroom of your future is waiting, and the time to prepare is now. Use our "}
    ></FooterBtn>
    </main>
  )
}
