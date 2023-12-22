"use client"
import { Button } from '@material-tailwind/react'
import React from 'react'

const Trusted = () => {
          return (
                    <>
                              <div id="main-trust" className='p-20 bg-gray-100 md:px-96 '>
                                        <div id="card" className=' w-full  bg-gradient-to-r from-purple-900 via-purple-500 to-[#2e2e2e] rounded-3xl py-10 px-16'>
                                                  <h1 className='text-3xl font-extrabold text-white'>Trusted by over 2,000,000 teams</h1>
                                                  <div id="middle-texts" className='w-[50%] py-10 grid md:grid-cols-2 grid-cols-1 gap-6'>
                                                            <p className='flex flex-col font-semibold text-[#908c8c]'><span className='text-2xl font-extrabold text-white'>305M+</span> Tasks completed</p>
                                                            <p className='flex flex-col font-semibold text-[#908c8c]'><span className='text-2xl font-extrabold text-white'>55M+</span> Docs Created</p>
                                                            <p className='flex flex-col font-semibold text-[#908c8c]'><span className='text-2xl font-extrabold text-white'>615M+</span> Messages sent</p>
                                                            <p className='flex flex-col font-semibold text-[#908c8c]'><span className='text-2xl font-extrabold text-white'>11M+</span> Automation Created</p>

                                                  </div>
                                                  <Button variant="text" className="flex items-center gap-2 bg-white bg-opacity-10 text-white" >
                                                            Join today fo free{" "}
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
                              </div>
                    </>
          )
}

export default Trusted
