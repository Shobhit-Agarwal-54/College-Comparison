import CardAffordable from "@/components/card8";
import FooterBtn from "@/components/footerBtn";
import Logo from "@/components/logo";

export default function Affordablegeorgia() 
{
    
  return (
    <main className="min-h-screen bg-gray-100  px-4 sm:px-6 md:px-8">            
            <Logo
            title={"Most Affordable Colleges in Georgia"}
            date={"10th August 2025"}
            imgsrc={"/B12S12.webp"}
            caption={"East Georgia State College"}
            ></Logo>

          <section className="max-w-3xl mx-auto px-4 py-4">
  <p className="text-gray-600 text-base sm:text-lg leading-relaxed ">
Dreaming of a quality college education in Georgia without drowning in debt? You’re not alone. Many 
students worry that chasing their dream degree will mean years of financial struggle, but the truth 
is—you can get both affordability and excellence. Georgia is home to remarkable colleges that combine 
low tuition costs with strong academic reputations, modern facilities, and career-ready programs. Whether
 you’re a Georgia local or an out-of-state student hoping for a budget-friendly education, this list
  will show you that your future doesn’t have to come with a hefty price tag—just the right choice.

Here is the list 
<span className="text-bold text-gray-950"> ranked from top to bottom</span>.
  </p>
</section>
    <div>
        <CardAffordable
  name="1. East Georgia State College"
  overview={`East Georgia State College (EGSC) is one of the most affordable public colleges in Georgia, 
offering small class sizes, flexible learning options, and a supportive community. With campuses in Swainsboro, 
Statesboro, and Augusta, EGSC provides accessible education and smooth transfer pathways to four-year universities.`}
  
  tuitionFees={`In-state tuition is about $3,136 per year, while out-of-state students pay around $9,488. 
Its low costs, combined with HOPE Scholarships and other aid, make it a great choice for students seeking a debt-free start.`}
  
  programs={[
    "Associate’s degrees in liberal arts, business, education, and allied health",
    "Flexible online and hybrid courses",
    "Guaranteed transfer agreements with major Georgia universities",
    "Accelerated pathways to bachelor’s programs"
  ]}
  
  financialAid={[
    "HOPE Scholarships for eligible in-state students",
    "Correll Scholars merit awards",
    "Need-based grants and scholarships",
    "On-campus work-study programs"
  ]}
  
  facilities={[
    "Modern classrooms and labs",
    "Student support and tutoring centers",
    "Campus green spaces and recreation areas"
  ]}
  
  careerOutcomes={[
    "Smooth transfer to four-year universities",
    "Graduates with low student debt",
    "Job-ready skills in high-demand fields"
  ]}
/>

<CardAffordable
  name="2. Georgia Highlands College"
  overview={`Georgia Highlands College offers affordable tuition, strong academic support, and multiple campuses across northwest Georgia. 
Known for transfer opportunities and career-focused programs, it caters to both traditional and non-traditional students.`}
  
  tuitionFees={`In-state tuition is around $3,344 per year, while out-of-state students pay about $9,696. 
Low tuition combined with state and federal aid helps minimize student debt.`}
  
  programs={[
    "Associate degrees in STEM, healthcare, and business",
    "Online learning options",
    "Pathways to University System of Georgia universities",
    "Career-focused certificate programs"
  ]}
  
  financialAid={[
    "HOPE and Zell Miller Scholarships",
    "Federal Pell Grants",
    "Institutional scholarships",
    "Work-study employment"
  ]}
  
  facilities={[
    "Modern learning centers",
    "Science and computer labs",
    "Student activity spaces"
  ]}
  
  careerOutcomes={[
    "Successful transfers to bachelor’s programs",
    "Graduates entering local industries",
    "Preparation for high-demand careers"
  ]}
/>

<CardAffordable
  name="3. Atlanta Metropolitan State College"
  overview={`Atlanta Metropolitan State College serves as an affordable gateway to higher education with small class sizes 
and a commitment to student success. Its central Atlanta location offers access to cultural and career opportunities.`}
  
  tuitionFees={`In-state tuition is approximately $3,505 annually, with out-of-state tuition around $9,641. 
Generous financial aid options keep education costs low.`}
  
  programs={[
    "Associate and bachelor’s degrees in various fields",
    "Flexible evening and online classes",
    "Bridge programs to other Georgia universities",
    "Career-focused training certificates"
  ]}
  
  financialAid={[
    "HOPE Scholarship programs",
    "Federal grants",
    "Institutional need-based aid",
    "Part-time campus employment"
  ]}
  
  facilities={[
    "Technology-enabled classrooms",
    "Library and resource center",
    "Student lounge areas"
  ]}
  
  careerOutcomes={[
    "High transfer rates to four-year institutions",
    "Entry-level job readiness",
    "Strong alumni support network"
  ]}
/>

<CardAffordable
  name="4. South Georgia State College"
  overview={`South Georgia State College offers affordable tuition, personal attention, and a strong community atmosphere 
with campuses in Douglas and Waycross. The college emphasizes smooth transfer pathways and workforce preparation.`}
  
  tuitionFees={`In-state tuition is about $3,310 per year, with out-of-state students paying around $9,692. 
Financial aid and scholarships make education more accessible.`}
  
  programs={[
    "Associate degrees in multiple disciplines",
    "Online and hybrid classes",
    "Dual enrollment for high school students",
    "Technical and professional certifications"
  ]}
  
  financialAid={[
    "HOPE and Zell Miller Scholarships",
    "Need-based grants",
    "Athletic scholarships",
    "Work-study programs"
  ]}
  
  facilities={[
    "Updated classrooms and labs",
    "Athletic facilities",
    "Student life and recreation areas"
  ]}
  
  careerOutcomes={[
    "Smooth transition to bachelor’s programs",
    "Skilled graduates in local industries",
    "Strong community and employer connections"
  ]}
/>

<CardAffordable
  name="5. Abraham Baldwin Agricultural College"
  overview={`Abraham Baldwin Agricultural College (ABAC) blends affordable education with hands-on learning, 
particularly in agriculture, natural resources, and related sciences. The Tifton campus offers a welcoming environment.`}
  
  tuitionFees={`In-state tuition is approximately $3,565 annually, and out-of-state tuition is about $10,471. 
Scholarships and financial aid further reduce student expenses.`}
  
  programs={[
    "Degrees in agriculture, forestry, and environmental science",
    "Business and liberal arts programs",
    "Hands-on training and internships",
    "Transfer-ready associate degrees"
  ]}
  
  financialAid={[
    "HOPE Scholarships",
    "Merit-based academic awards",
    "Need-based grants",
    "Campus work opportunities"
  ]}
  
  facilities={[
    "Agricultural research facilities",
    "Modern labs and classrooms",
    "On-campus housing and dining"
  ]}
  
  careerOutcomes={[
    "Strong employment in agriculture sectors",
    "Smooth university transfers",
    "Graduates with practical skills"
  ]}
/>

<CardAffordable
  name="6. Dalton State College"
  overview={`Dalton State College provides affordable, high-quality education with a focus on career readiness and 
transfer opportunities. Located in northwest Georgia, it serves a diverse student population.`}
  
  tuitionFees={`In-state tuition is about $3,204 per year, while out-of-state students pay roughly $9,276. 
Extensive financial aid options make Dalton State a budget-friendly choice.`}
  
  programs={[
    "Associate and bachelor’s degrees",
    "Online learning options",
    "Business, education, and healthcare programs",
    "Technical certification courses"
  ]}
  
  financialAid={[
    "HOPE Scholarships",
    "Federal and state grants",
    "Institutional scholarships",
    "Work-study positions"
  ]}
  
  facilities={[
    "Modern academic buildings",
    "Fitness and recreation centers",
    "Student resource and tutoring centers"
  ]}
  
  careerOutcomes={[
    "Graduates securing local employment",
    "Successful transfers to universities",
    "Industry-recognized qualifications"
  ]}
/>

<CardAffordable
  name="7. College of Coastal Georgia"
  overview={`The College of Coastal Georgia offers affordable tuition with a scenic campus in Brunswick. 
It combines academic rigor with community engagement and coastal research opportunities.`}
  
  tuitionFees={`In-state tuition is approximately $3,933 annually, and out-of-state tuition is around $10,539. 
Scholarships and flexible payment plans help students manage costs effectively.`}
  
  programs={[
    "Bachelor’s degrees in nursing, business, and education",
    "Associate degrees for university transfer",
    "Online and hybrid learning formats",
    "Coastal-focused environmental programs"
  ]}
  
  financialAid={[
    "HOPE and Zell Miller Scholarships",
    "Merit-based awards",
    "Federal and state grants",
    "Work-study employment"
  ]}
  
  facilities={[
    "Modern labs and libraries",
    "Campus housing and dining",
    "Recreational and athletic facilities"
  ]}
  
  careerOutcomes={[
    "Graduates entering coastal and local industries",
    "Strong job placement rates",
    "Smooth transfers to larger universities"
  ]}
/>
    </div>
    <FooterBtn
    title={"Smart Choices, Brighter Futures"}
    content={"Choosing the right college isn’t just about cost—it’s about value. Georgia’s most affordable colleges prove you can get quality education without breaking the bank. Use our "}
    ></FooterBtn>
    </main>
  )
}
