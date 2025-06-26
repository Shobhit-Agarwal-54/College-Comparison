"use client";
import React, { useEffect, useRef, useState } from 'react'
import data from '../data/college';

import DropdownList from "react-widgets/DropdownList";
import Link from 'next/link';

const Table = () => {
     const [colleges, setColleges] = useState([null,null,null,null]);
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => setHasMounted(true), []);

    const details =[
      {label:"Overview",key:"OverView"},
    { label: 'ACT Score', key: 'ACTRange' },
    { label: 'SAT Score', key: 'SATRange' },
    { label: 'Average GPA', key: 'AvgGPA' },
    {label:"Admission Chances",key:"Admission Chances"},
    { label: 'Fees', key: 'Fees' },
    { label: 'Popular Majors', key: 'PopularMajors' },
    { label: 'Acceptance Rate', key: 'AcceptanceRate' },
    { label: 'Graduation Rate', key: 'GraduationRate' },
  ];

      const [query,setQuery]=useState({
      name: "Enter College Name"
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

        <div className=' hover:shadow-lg transition-shadow duration-300 mt-10 mb-10 py-10
         shadow-md bg-gray-100 w-[70%] flex flex-col items-center justify-center  mx-auto
          rounded-xl max-w-[90vw] sm:w-[95%] '>
            {
              colleges?.some(college => college === null) && (
                <div>
                <h2 className='text-lg font-semibold mb-4 text-center'>Add a college to compare upto four colleges</h2>
                <div>
            {
              hasMounted&&
              <DropdownList
          ref={inputRef}
          className='max-w-xl w-[90vw] sm:w-full'
          data={data}
          textField={"name"}
          dataKey={"name"}
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
              <tr className='bg-gray-200'>
                <th></th>
                {
                  colleges.map((college,index)=>
                    (
                      <th  className='whitespace-normal break-words w-[140px] sm:w-[180px] py-6 px-2'
                       key={index}>
                        {
                          college?(
                            <span className='font-poppins'> {college.name} </span>
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
                      className='bg-purple-600 ml-2 px-2 rounded-xl cursor-pointer  
                      hover:opacity-80 active:opacity-70 text-white py-2 text-xs lg:text-base'
                      onClick={()=>removeCollege(idx)}
                      >Remove
                      </button>)
                      :
                      (<button 
                      className='bg-purple-600 ml-2 px-2 rounded-xl cursor-pointer  
                      hover:opacity-80 active:opacity-70 text-white py-2 text-sm lg:text-base'
                      onClick={handleClick}
                      >
                        <span className="block md:hidden">Add</span>
                        <span className="hidden md:block">Add College</span>
                      </button>)
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
                  className='even:bg-gray-100 hover:bg-gray-200 transition-colors duration-200'
                   key={detail.key}>
                     <td className='pb-6 pt-6 w-[140px] sm:w-[180px] px-2 sm:text-xl font-semi-bold text-base '>{detail.label}</td>
                     {
                      detail.key=="Admission Chances"?(
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
                            className='text-[#0A88D3]  hover:text-[#0667A8] hover:underline'
                            >Calculate</Link>
                        </td>
                        )
                        :(
                         <td key={idx}><p></p></td>  
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
                                const match = major.match(/^(.*?)\s*\((.*?)\)$/);
                                const subject = match?.[1] || major;
                                const percentage = match?.[2] || "";

                                return (
                                  <li key={index} className="">
                                    <div className="text-[#495057]">{subject}</div>
                                    <div className="text-[#495057]">{percentage}</div>
                                  </li>
                                );
                              })}
                            </ul>
                          </td>
                        ))
                      ):(
                      colleges.map((college,idx)=>(
                        <td
                        className='whitespace-normal break-words  max-w-[140px] sm:max-w-[180px]  text-center align-middle pb-6 pt-6'
                        key={idx}>
                          <p className='font-poppins text-base text-[#495057]'>{college?.[detail.key]??""}</p>
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