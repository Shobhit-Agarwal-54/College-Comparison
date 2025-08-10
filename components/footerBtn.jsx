import Link from "next/link";

const FooterBtn = ({title,content}) => {
  return (
     <div className="mx-auto max-w-3xl mt-4 mb-4 px-4">
  <h1 className="font-bold text-gray-800 text-xl sm:text-2xl text-center mb-4">{title}</h1>
  <p className="text-gray-600  text-base sm:text-lg leading-relaxed">
    {content}
    <Link
    target="_blank"
    rel="noopener noreferrer"
    href={"https://college-comparison.vercel.app/"}
    > <span className="text-purple-500">College Comparator Tool </span> </Link> 
    to compare quickly by tuition fees, SAT and ACT scores, Popular Majors, Admission Rates and more, all in one place.
    <span className="text-bold text-gray-950"> Thanks for reading. Hope it was helpful.</span>
  </p>

      <div className="max-w-3xl mx-auto flex justify-center py-6 ">
    <Link
      href="/"
      className="bg-purple-600 sm:px-6 md:px-8 px-4 rounded-xl cursor-pointer  
        hover:opacity-80 active:opacity-70 text-white font-bold sm:py-2 py-2.5 text-xs lg:text-base"
    >
      Compare Colleges
    </Link>
  </div>
  </div>
  )
}
export default FooterBtn;