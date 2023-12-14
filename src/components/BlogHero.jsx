import React from 'react'
import Image from 'next/image'
import img from '../../public/images/dummy.jpg'
import profile from '../../public/images/member2.png'
const BlogHero = () => {
          return (
                    <>
                              <div className="w-full  md:flex md:h-[30rem] h-[45rem] my-5 md:my-0 items-center justify-center bg-gradient-to-r from-[#CAF2EF] via-[#C9EFDC] to-[#F2BBF1]">
                                        <div className='   md:py-4 overflow-hidden px-5 py-10' >
                                                  <Image
                                                            src={img}
                                                            height={500}
                                                            width={500}
                                                            alt='img'
                                                            className=' rounded-xl'
                                                  />
                                        </div>
                                        <div className='md:w-[30%] w-full  md:py-4 md:px-0 px-6'>
                                                  <div id="text">
                                                            <p className='uppercase text-sm font-extrabold text-purple-600 '>software</p>
                                                            <h1 className='md:text-4xl text-3xl font-bold text-[#2e2e2e] my-2'>10 best mindgrasp AI Alternative in 2023 (Reviews & Pricing)</h1>
                                                            <div id="name" className=' my-10 flex items-center justify-between w-full  p-3'>
                                                                      <div className='flex gap-2 items-center mr-5'>
                                                                                <Image
                                                                                          src={profile}
                                                                                          height={100}
                                                                                          width={25}
                                                                                          alt='img'
                                                                                          className=' rounded-full' />
                                                                                <div className='leading-none '>
                                                                                          <h1 className='font-semibold'>Alex York</h1>
                                                                                          <p className='text-sm'>Senior Content Marketing Manager</p>
                                                                                </div>
                                                                      </div> |
                                                                      <div className=' items-center px-3'>

                                                                                <div className='leading-none '>
                                                                                          <h1 className='text-sm'>December 5,2023</h1>
                                                                                </div>
                                                                      </div> |
                                                                      <div className='s'>

                                                                                <div className='leading-none '>
                                                                                          <h1 className=''>10min read</h1>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                            <div>
                                                                      <i className="ri-twitter-x-line bg-gray-800 rounded-full mx-3 p-2 text-white cursor-pointer"></i>
                                                                      <i className="ri-linkedin-box-fill bg-gray-800 rounded-full mx-3 p-2 text-white cursor-pointer"></i>
                                                                      <i className="ri-facebook-circle-fill bg-gray-800 rounded-full mx-3 p-2 text-white cursor-pointer"></i>
                                                                      <i className="ri-share-line bg-gray-800 rounded-full mx-3 p-2 text-white cursor-pointer"></i>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </>
          )
}

export default BlogHero
