"use client"
import { Button } from '@material-tailwind/react'
import React from 'react'

const Trusted = ({ data }) => {
          return (
                    <>
                              <div id="main-trust" className='md:p-10 p-10 bg-gray-100 md:px-60 '>
                                        {data.map((val) => {
                                                  return (
                                                            <>
                                                                      <div id="card" className=' md:w-full  bg-gradient-to-r from-purple-900 via-purple-500 to-[#2e2e2e] rounded-3xl py-10 md:px-16 px-5'>
                                                                                <h1 className='text-3xl font-extrabold text-white'>{val.title}</h1>
                                                                                <div id="middle-texts" className='w-[50%] py-10 grid md:grid-cols-2 grid-cols-2  nd:gap-6 gap-x-32 gap-y-10 md:gap-x-32 md:gap-y-10'>
                                                                                          <p className='flex flex-col font-semibold text-[#908c8c]'><span className='text-2xl font-extrabold text-white'>{val.a11.number}</span>{val.a11.title}</p>
                                                                                          <p className='flex flex-col font-semibold text-[#908c8c]'><span className='text-2xl font-extrabold text-white'>{val.a12.number}</span>{val.a12.title}</p>
                                                                                          <p className='flex flex-col font-semibold text-[#908c8c]'><span className='text-2xl font-extrabold text-white'>{val.a12.number}</span> {val.a21.title}</p>
                                                                                          <p className='flex flex-col font-semibold text-[#908c8c]'><span className='text-2xl font-extrabold text-white'>{val.a22.number}</span> {val.a22.title}</p>

                                                                                </div>
                                                                                <Button variant="text" className="flex items-center gap-2 bg-white bg-opacity-10 text-white" >
                                                                                          {val.button}{" "}
                                                                                          <svg
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                    fill="none"
                                                                                                    viewBox="0 0 24 24"
                                                                                                    strokeWidth={2}
                                                                                                    stroke="currentColor"
                                                                                                    className="h-5 w-5"
                                                                                          >
                                                                                                    <path
                                                                                                              strokeLinecap="round"
                                                                                                              strokeLinejoin="round"
                                                                                                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                                                                    />
                                                                                          </svg>
                                                                                </Button>
                                                                      </div>
                                                            </>)
                                        })}
                              </div>
                    </>
          )
}

export default Trusted
{/* */ }