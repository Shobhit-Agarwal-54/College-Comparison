"use client";
import Link from "next/link";
import FAQAccordion from "../components/accordion";
import Card3 from "../components/card3"
import Logo from "../components/logo";
import FooterBtn from "@/components/footerBtn";

const BusinessCalifornia = () => {
  return (
    <main className="min-h-screen bg-gray-100  px-4 sm:px-6 md:px-8">
        <Logo
        title={"Best Business Colleges in California"}
        date={"6th August 2025"}
        imgsrc={"/B3S3.webp"}
        caption={"University of Southern California (Marshall School of Business)"}
        ></Logo>
            <Card3
            title="1. Stanford University (Stanford Graduate School of Business)"
            description={"Stanford University’s MBA program stands among the most prestigious and sought-after in the world, attracting ambitious students from across the globe. Located in the heart of Silicon Valley, it offers unparalleled opportunities to connect with top entrepreneurs, venture capitalists, and industry leaders. The program blends rigorous academics with real-world innovation, empowering students to think strategically and lead with impact.Graduates of Stanford’s MBA program enjoy exceptional career outcomes, with an impressive average post-graduation salary of around USD 175,000 (~INR 1.45 crore). Many alumni go on to become influential entrepreneurs, CEOs, and changemakers who shape industries and drive global progress."}
            specialities={"General Management, Entrepreneurship, Finance, Marketing, Operations and Supply Chain Management, Technology"}
            fees={"USD 76,950 (~INR 63.3 L)"}
            salary={"USD 175,000 (~INR 1.45 crore)"}
            gmat={"730+"}
            requirements={"TOEFL: 100+, GPA: 3.6+ (on a 4.0 scale)"}
            experience={"4-5"}
            ></Card3>
            <Card3
            title={"2. University of California Berkeley (Haas School of Business)"}
            description={"The Haas School of Business at the University of California, Berkeley, is a globally recognized leader in business education, celebrated for its strong emphasis on sustainability, innovation, and ethical leadership. Haas integrates forward-thinking principles into its curriculum, preparing students to address complex global challenges with creativity and responsibility.Its close proximity to Silicon Valley provides students with unrivaled access to a thriving hub of startups, tech giants, and venture capital firms, fostering an environment rich in entrepreneurial opportunities. The results speak for themselves — an impressive 95% of graduates secure employment within just three months of completing their program, reflecting the school’s academic excellence and strong industry connections."}
            specialities={"Finance, Marketing, Entrepreneurship, Social Impact, Technology and Innovation, Strategy and Consulting"}
            fees={"USD 67,650 (~INR 56.3 L)"}
            salary={"USD 150,000 (~INR 1.25 crore)"}
            gmat={"725+"}
            requirements={"TOEFL: 100+, GPA: 3.5+ (on a 4.0 scale)"}
            experience={"5 years on average"}
            >
            </Card3>

            <Card3
            title={"3. University of Southern California (Marshall School of Business)"}
            description={"The Marshall School of Business at the University of Southern California is renowned for its global perspective, entrepreneurial spirit, and strong alumni network. The school’s curriculum emphasizes real-world application, equipping students with the skills to thrive in competitive and dynamic business environments.Located in the vibrant city of Los Angeles, Marshall offers students direct access to diverse industries, from entertainment and technology to finance and international trade. Its robust experiential learning programs and industry partnerships ensure graduates are well-prepared for leadership roles. With a large and influential alumni base spanning across the globe, Marshall students benefit from lifelong connections that open doors to exceptional career opportunities."}
            specialities={"Entrepreneurship, Finance, Marketing, Business Analytics, Strategy, Consulting"}
            fees={"USD 70,000 (~INR 58 L)"}
            salary={"USD 140,000 (~INR 1.16 crore)"}
            gmat={"700+"}
            requirements={"	TOEFL: 100+, GPA: 3.3"}
            experience={"4-5 years"}
            >
            </Card3>

            <Card3
            title={"4. University of California, Los Angeles (Anderson School of Management)"}
            description={"The Anderson School of Management at UCLA is recognized for its innovative teaching methods, collaborative culture, and strong focus on leadership development. The program encourages students to think creatively, work across disciplines, and embrace a forward-looking mindset.Situated in one of the world’s most dynamic cities, UCLA Anderson offers unparalleled access to industries such as technology, media, finance, and healthcare. The school’s extensive corporate partnerships and hands-on learning opportunities allow students to apply classroom concepts to real-world challenges. Anderson graduates are highly sought after, often stepping into impactful roles across industries and around the world."}
            specialities={"Finance, Marketing, Entrepreneurship, Technology Management, Real Estate, Media and Entertainment"}
            fees={"USD 65,000 (~INR 53.8 L)"}
            salary={"USD 145,000 (~INR 1.2 crore)"}
            gmat={"715+"}
            requirements={"TOEFL: 100+, GPA: 3.4+"}
            experience={"5 years"}
            />
            <Card3
            title={"5. University of California, Irvine (Paul Merage School of Business)"}
            description={"The Paul Merage School of Business at UC Irvine is a rising force in business education, known for its emphasis on digital transformation, global leadership, and sustainable business practices. Its forward-thinking curriculum is designed to prepare students for the rapidly evolving demands of the modern business world.Located in the heart of Southern California’s innovation corridor, Merage provides students with unique access to a wide range of industries, including technology, healthcare, and finance. The school fosters close collaboration between students, faculty, and industry leaders, creating a supportive learning environment that inspires growth. Graduates benefit from strong employment outcomes and a growing reputation that positions them for long-term career success."}
            specialities={"Finance, Marketing, Information Technology, Strategy, Healthcare Management, Real Estate"}
            fees={"USD 55,000 (~INR 45.8 L)"}
            salary={"USD 125,000 (~INR 1.04 crore)"}
            gmat={"680+"}
            requirements={"TOEFL: 95+, GPA: 3.3+"}
            experience={"4–5 years"}
            />
  <div className="pt-4">
    <FooterBtn
    title={"Choose Smarter, Succeed Faster"}
    content=
    {`
      Choosing the best business college in California is more than just chasing rankings — it’s about aligning with a school that fits your ambitions, resources, and career path. Use our
    `}
    >
    </FooterBtn>
    </div>
     <div className="mx-auto max-w-3xl mt-20 mb-15 px-4">
      <FAQAccordion></FAQAccordion>
     </div>

    </main>
  )
}

export default BusinessCalifornia