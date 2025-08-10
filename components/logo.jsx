import Link from "next/link"


const Logo = ({title,date,imgsrc,caption}) => {
  return (
    <div>
            <Link href="/"
            className="flex items-center  gap-x-3 p-4"
            >
            <img 
                src="/Logo.webp"
                alt="US College Comparator Logo"
                className="h-12 w-12 rounded-full object-cover cursor-pointer ml-4 mt-4"
            />
             <h4 className="text-lg font-semibold text-gray-800">CompareMyCollege</h4>
            </Link>
                              <div className="max-w-3xl  mx-auto py-4">
                      <h1 className="font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl text-center">{title}</h1>
                      <div className="flex flex-col sm:flex-row gap-4 py-4 sm:justify-center">
                      <h4 className=" text-sm sm:text-base">Updated : <span className="text-purple-500">{date}</span></h4>
                        <div className="flex  gap-2 text-sm">   
                        <span className="text-sm sm:text-base ">Written by:</span>
                        <img
                          src="/Photo.jpg"
                          alt="Author"
                          className="h-6 w-6 rounded-full border border-gray-300 shadow-sm"
                        />
                        <span className="font-medium sm:text-base text-gray-800">Shobhit Agarwal</span>
                      </div>
                      </div>
                      <img 
                      className="w-full h-auto rounded-xl shadow-md mt-2"
                      src={imgsrc}></img>
                      <p className="text-center mt-2">{caption}</p>
                      </div>
    </div>
  )
}

export default Logo