"use client";
import React, { useEffect, useRef, useState } from 'react'
import data from "../data/popular_colleges_modified";

import DropdownList from "react-widgets/DropdownList";
import Link from 'next/link';

const Table = () => {
     const [colleges, setColleges] = useState([null,null,null,null]);
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);

    const details =[
      {label:"Overview",key:"INSTNM"},
    { label: 'ACT Score', key: 'ACTRange' },
    { label: 'SAT Score', key: 'SATRange' },
    {label:"Admission Chances",key:"Admission Chances"},
    { label: 'Tuition Fee (In State)', key: 'TUITIONFEE_IN' },
    { label: 'Tuition Fee (Out State)', key: 'TUITIONFEE_OUT' },
    { label: 'Popular Majors', key: 'PopularMajors' },
    { label: 'Acceptance Rate', key: 'ADM_RATE' },
    { label: 'Graduation Rate', key: 'C150_4' },
  ];

      const [query,setQuery]=useState({
      INSTNM: "Enter College Name"
        });
      const inputRef = useRef(null);

    const handleClick = () => {
      inputRef.current?.focus();
    };
  
    const addCollege=(value)=>
      {
        const emptyIndex = colleges.findIndex(college => college === null);
        console.log(emptyIndex);
        console.log(query);
        const updated = [...colleges];
        const newCollege=value;
        updated[emptyIndex] = newCollege;
        setColleges(updated);
      }
    
      const removeCollege=(idx)=>
      {
         const updated = [...colleges];
         updated[idx]=null;
         setColleges(updated);
      }
    return (
        <div className=''>

        <div className=' transition-shadow duration-300 mt-10 mb-10 py-10
            shadow-md dark:shadow-lg hover:shadow-lg dark:hover:shadow-2xl 
            bg-gray-100 dark:bg-gray-700 w-[70%] flex flex-col items-center justify-center mx-auto
            rounded-xl max-w-[90vw] sm:w-[95%] text-black dark:text-white'>
            {
              colleges?.some(college => college === null) && (
                <div>
                <h2 className='text-lg font-semibold mb-4 text-center'>Add a college to compare upto four colleges</h2>
                <div>
            {
              hasMounted&&
              <DropdownList
          ref={inputRef}
          className='max-w-xl w-[90vw] sm:w-full focus:outline-none focus:ring-2
           focus:ring-purple-500 dark:focus:ring-purple-300
           bg-white dark:bg-gray-900 '
          data={data}
          textField={"INSTNM"}
          dataKey={"INSTNM"}
          value={query}

          onChange={(nextValue) => setQuery(nextValue)}
            onSelect={(value) => 
              {
                setQuery(value);
                addCollege(value);
              }}
          >
          </DropdownList>
            }
          </div>
          </div>
              )
            }

          {colleges?.every(college => college !== null) && (
            <h2 className="text-lg font-semibold mt-4 text-center ">
            You are comparing the maximum of four schools. Remove a college to compare additional schools.
            </h2>
          )}

        </div>

        <div className='flex items-start justify-start
        sm:items-center sm:justify-center min-h-screen
         lg:overflow-x-visible w-full relative z-0 overflow-x-scroll px-4
        '>
          <table
          >
            <thead>
              <tr className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white'>
                <th></th>
                {
                  colleges.map((college,index)=>
                    (
                      <th  className='whitespace-normal break-words w-[140px] sm:w-[180px] py-6 px-2'
                       key={index}>
                        {
                          college?(
                            <span className='font-poppins'> {college.INSTNM} </span>
                          ):
                          (
                             <span> College {index+1} </span>
                          )
                        }
                       
                      </th>
                    )
                  )
                }
              </tr>
              <tr 
              >
                <th colSpan={colleges.length + 1} className="h-5"></th>
              </tr>
              <tr 
              className='h-15'
              >
                <th></th>
                {
                  colleges.map((college,idx)=>(
                    <th key={idx}>
                      {
                        college?
                        (<button 
                      className='bg-purple-600 ml-2 sm:px-6 md:px-8 px-4 rounded-xl cursor-pointer  
                      hover:opacity-80 active:opacity-70 text-white sm:py-2 py-2.5 text-xs lg:text-base'
                      onClick={()=>removeCollege(idx)}
                      >Delete
                      </button>)
                      :
                      (<button 
                      className='bg-purple-600 ml-2 sm:px-6 md:px-8 px-4 rounded-xl cursor-pointer  
                      hover:opacity-80 active:opacity-70 text-white py-2 text-sm lg:text-base'
                      onClick={handleClick}
                      >
                        Insert
                      </button>
                      )
                      }
                      
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                details.map((detail)=>(
                  <tr
                  className='even:bg-gray-100 even:dark:bg-gray-800 hover:bg-gray-200
                   hover:dark:bg-gray-700 transition-colors duration-200 text-black 
                   dark:text-white'
                   key={detail.key}>
                     <td className='pb-6 pt-6 w-[140px] sm:w-[180px] px-2 sm:text-xl font-semi-bold text-base '>{detail.label}</td>
                     {
                      detail.label=="Admission Chances"?(
                        colleges?.map((college,idx)=>

                        college ?
                        (
                        <td
                        key={idx}
                        className='whitespace-normal break-words  max-w-[140px] sm:max-w-[180px]  text-center align-middle pb-6 pt-6'
                        >  
                            <Link 
                            href={"https://www.gradgpt.com/college-admissions-calculator"}
                            target="_blank" rel="noopener noreferrer"
                            className='text-[#0A88D3]   hover:text-[#0667A8] hover:underline'
                            >Calculate
                            </Link>
                        </td>
                        )
                        :(
                         <td className='text-[#0A88D3]  hover:text-[#0667A8] hover:underline'
                          key={idx}><p></p></td>  
                        )
                      )
                      ):            
                      detail.key=="PopularMajors"?
                      (
                        colleges?.map((college,idx)=>(
                          <td key={idx}
                          className='whitespace-normal break-words  max-w-[140px] sm:max-w-[180px]  text-center  pb-6 pt-6 align-top'
                          >
                            <ul className="font-poppin text-sm sm:text-base 
                               px-4 space-y-2 ">

                              {college?.PopularMajors?.map((major, index) => {
                                return (
                                  <li key={index} className="">
                                    <div className="text-[#495057] dark:text-gray-200">{major.major}</div>
                                    <div className="text-[#495057] dark:text-gray-200">{`${major.percentage}%`}</div>
                                  </li>
                                );
                              })}
                            </ul>
                          </td>
                        ))
                      ):(
                      colleges.map((college,idx)=>(
                        <td
                        className='whitespace-normal break-words  max-w-[140px] sm:max-w-[180px] 
                         text-center align-middle pb-6 pt-6 px-2'
                        key={idx}>
                          <p className='font-poppins text-base text-[#495057] dark:text-gray-200'>{college?.[detail.key]??""}</p>
                        </td>
                      ))
                      )
                    }
                    
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        </div>
  )
}

export default Table