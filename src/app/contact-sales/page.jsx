"use client"
import React from 'react'
import { Textarea, Input } from "@material-tailwind/react";
const page = () => {
          return (
                    <>

                              <div id="contact-sales-main" style={{ background: 'linear-gradient(to bottom,  #E1F8F7 50%, #fff 50%)' }} className='h-screen w-full md:flex   items-center justify-center flex-col  pt-10 md:pt-0 '>
                                        <div id="upper-text" className=' my-6 text-[#2e2e2e] text-center p-5'>
                                                  <h1 className='md:text-5xl text-4xl font-extrabold'>Get In Touch</h1>
                                                  <p className='md:text-lg tracking-wider my-3 text-sm font-semibold'>We'll create high-quality linkable content and build at least 40 hogh-authority links to each <br /> asset,paving the way for you to grow your rankings,improve brand.</p>
                                        </div>
                                        <div id="center-div" className=' md:h-[70%] md:w-[75%] rounded-3xl md:flex p-3 gap-4  shadow-xl bg-white'>
                                                  <div id="left-div" className='md:w-[35%] bg-[#01B8B0] rounded-2xl w-full md:p-5 md:pt-10 p-8'>
                                                            <div id="text-div" className='text-left'>
                                                                      <h2 className='md:text-2xl text-4xl text-[#fff] my-2 font-extrabold'>Contact Information</h2>
                                                                      <p className='md:text-sm text-lg text-[#fff] md:my-2 my-5 tracking-wider'>We'll create high-quality linkable content and build at least 40 high-authority</p>
                                                                      <div id="call-section" className='flex  items-center justify-start md:pt-10 md:pb-5 p-5 md:p-0 gap-3'>
                                                                                <div id="icon"><i className="ri-phone-fill md:text-2xl text-3xl text-[#fff]"></i></div>
                                                                                <div id="numbers" className='md:text-md text-lg text-[#fff] flex flex-col'>
                                                                                          <a href="tel:<phone>">+91 806 925 6448</a>
                                                                                          <a href="tel:<phone>">+91 9535 818 200</a>
                                                                                </div>
                                                                      </div>
                                                                      <div id="mail-section" className='flex  items-center justify-start md:pt-10 md:pb-5 gap-3 p-5 md:p-0'>
                                                                                <div id="icon"><i className="ri-mail-fill md:text-2xl text-3xl text-[#fff]"></i></div>
                                                                                <div id="text1" className='text-white md:text-md text-lg'>
                                                                                          <a href="mailto:info@wahni.com">info@wahni.com</a>
                                                                                </div>
                                                                      </div>
                                                                      <div id="location" className='flex items-center justify-start md:pt-10 md:pb-5 gap-3 p-5 md:p-0'>
                                                                                <div id="icon"><i className="ri-map-pin-line md:text-2xl text-3xl text-[#fff]"></i></div>
                                                                                <div id="text1" className='text-white md:text-md text-lg'>
                                                                                          New-York, USA
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                                  <div id="right-div" className='md:w-[60%] md:h-full w-full h-full pt-20 p-5 md:pt-0 md:p-0 md:py-0 py-10 rounded-2xl'>
                                                            <div id="content-div" className='md:p-10 md:w-full md:h-full'>
                                                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                                                <div className='w-full'>
                                                                                          <Input type="text" label="Name" variant="standard" />
                                                                                </div>
                                                                                <div className='w-full'>
                                                                                          <Input type="text" label="Organization" variant="standard" />
                                                                                </div>
                                                                                <div className='w-full'>
                                                                                          <Input type="email" label="Email" variant="standard" />
                                                                                </div>
                                                                                <div className='w-full'>
                                                                                          <Input type="tel" label="Phone" variant="standard" />
                                                                                </div>
                                                                                <div className="col-span-2 md:w-full">
                                                                                          <Textarea variant="standard" label="Description" rows="4" />
                                                                                </div>
                                                                      </div>

                                                                      <div className='  pt-10'>
                                                                                <button className='bg-[#67D4CF] py-2 px-5 font-bold text-white rounded-lg'>Send Message</button>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                    </>
          )
}

export default page
