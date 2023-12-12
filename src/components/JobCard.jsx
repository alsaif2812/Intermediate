import React from 'react'
import Link from 'next/link'

const JobCard = () => {
          return (
                    <>
                              <div id="jobmain" className='  px-20 py-10 flex flex-col items-center'>
                                        <Link href='/jobModal' id="jobcard" className='w-full md:max-w-[70%] rounded-xl border-2 border-gray-500 mt-5  py-5 px-10'>
                                                  <div id="upper" className='w-full flex flex-col md:flex-row gap- items-center justify-between'>
                                                            <div className='flex flex-col md:flex-row gap-3 md:gap-20 items-center'>
                                                                      <i class="ri-briefcase-4-line text-3xl"></i>
                                                                      <h1 className='text-2xl font-extrabold'>Junior UI/UX Designer</h1>
                                                            </div>
                                                            <p className='flex items-center text-xl font-bold mt-4 md:mt-0'>
                                                                      <i class="ri-money-dollar-circle-line text-2xl text-blue-400 mx-2"></i>$12k-$14k
                                                                      <span className='text-sm text-gray-600 ml-2'>/Month</span>
                                                            </p>
                                                  </div>
                                                  <div id="lower" className='w-full pt-6 md:pt-14 flex flex-col md:flex-row items-center justify-between'>
                                                            <div id="btns" className='flex flex-col md:flex-row gap-5 font-bold'>
                                                                      <button className='bg-blue-gray-700 py-2 px-5 rounded-lg bg-opacity-25'>
                                                                                Fulltime
                                                                      </button>
                                                                      <button className='bg-blue-gray-700 py-2 px-5 rounded-lg bg-opacity-25'>
                                                                                Design
                                                                      </button>
                                                                      <button className='bg-blue-gray-700 py-2 px-5 rounded-lg bg-opacity-25'>
                                                                                Remote
                                                                      </button>
                                                            </div>
                                                            <button className='mt-4 md:mt-0 py-3 px-6 bg-blue-800 text-white text-sm font-bold rounded-lg'>Apply Now</button>
                                                  </div>
                                        </Link>

                              </div>
                    </>
          )
}

export default JobCard
