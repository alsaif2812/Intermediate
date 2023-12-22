'use client'
import { Button } from '@material-tailwind/react'
import React from 'react';

const TeamSection = () => {
          return (
                    <div id="main-team" className='w-full min-h-screen bg-white py-20 px-5 flex flex-col items-center'>
                              <div id="center">
                                        <div id="upper" className='w-full text-center py-5 '>
                                                  <h1 className='text-6xl font-extrabold text-[#2e2e2e]'>
                                                            All <span className="gradient-text">teams love Wahni</span>
                                                  </h1>
                                                  <p className='text-md mt-3 font-semibold'>Get started fast with out-of-the-box solutions.</p>
                                                  <p>Easily customize Wahni as team needs grow!</p>
                                        </div>
                                        <div id="lower" className='mt-10 grid md:grid-cols-3 grid-cols-1 gap-16'>
                                                  <div
                                                            id="card"
                                                            className='relative w-[20rem] h-[28rem] rounded-2xl overflow-hidden'
                                                            style={{ backgroundImage: 'url(https://clickup.com/assets/home-test/finastra.png)', backgroundSize: 'cover' }}
                                                  >
                                                            {/* Gradient line */}
                                                            <div className="absolute bottom-[45%] left-1/2 transform -translate-x-1/2 bg-white h-1 w-full rotate-[5deg]"></div>

                                                            {/* Gradient div below the line */}
                                                            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 md:w-[60vw] w-[100vw] h-[55%] bg-gradient-to-b from-blue-500 to-purple-500 bg-opacity-5 rotate-[5deg] flex-col flex items-center ">
                                                                      {/* Text content */}
                                                                      <div className="p-4 text-white rotate-[-5deg] w-80">
                                                                                <h2 className="text-xl font-bold mb-2">FINASTRA</h2>
                                                                                <p className="text-sm">Some description about the person.Some description about the person.Some description about the person.</p>
                                                                                <button className='px-8 py-1 text-[#fff] bg-white bg-opacity-10 my-4 rounded-md'>Read story <i className="ri-arrow-right-line"></i></button>
                                                                      </div>
                                                            </div>
                                                  </div>

                                                  <div
                                                            id="card"
                                                            className='relative w-[20rem] h-[28rem] rounded-2xl overflow-hidden'
                                                            style={{ backgroundImage: 'url(https://clickup.com/assets/home-test/finastra.png)', backgroundSize: 'cover' }}
                                                  >
                                                            {/* Gradient line */}
                                                            <div className="absolute bottom-[45%] left-1/2 transform -translate-x-1/2 bg-white h-1 w-full rotate-[5deg]"></div>

                                                            {/* Gradient div below the line */}
                                                            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 md:w-[60vw] w-[100vw] h-[55%] bg-gradient-to-b from-blue-500 to-purple-500 bg-opacity-5 rotate-[5deg] flex-col flex items-center ">
                                                                      {/* Text content */}
                                                                      <div className="p-4 text-white rotate-[-5deg] w-80">
                                                                                <h2 className="text-xl font-bold mb-2">FINASTRA</h2>
                                                                                <p className="text-sm">Some description about the person.Some description about the person.Some description about the person.</p>
                                                                                <button className='px-8 py-1 text-[#fff] bg-white bg-opacity-10 my-4 rounded-md'>Read story <i className="ri-arrow-right-line"></i></button>
                                                                      </div>
                                                            </div>
                                                  </div>

                                                  <div
                                                            id="card"
                                                            className='relative w-[20rem] h-[28rem] rounded-2xl overflow-hidden'
                                                            style={{ backgroundImage: 'url(https://clickup.com/assets/home-test/finastra.png)', backgroundSize: 'cover' }}
                                                  >
                                                            {/* Gradient line */}
                                                            <div className="absolute bottom-[45%] left-1/2 transform -translate-x-1/2 bg-white h-1 w-full rotate-[5deg]"></div>

                                                            {/* Gradient div below the line */}
                                                            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 md:w-[60vw] w-[100vw] h-[55%] bg-gradient-to-b from-blue-500 to-purple-500 bg-opacity-5 rotate-[5deg] flex-col flex items-center ">
                                                                      {/* Text content */}
                                                                      <div className="p-4 text-white rotate-[-5deg] w-80">
                                                                                <h2 className="text-xl font-bold mb-2">FINASTRA</h2>
                                                                                <p className="text-sm">Some description about the person.Some description about the person.Some description about the person.</p>
                                                                                <button className='px-8 py-1 text-[#fff] bg-white bg-opacity-10 my-4 rounded-md'>Read story <i className="ri-arrow-right-line"></i></button>
                                                                      </div>
                                                            </div>
                                                  </div>


                                        </div>
                              </div>
                    </div>
          );
};

export default TeamSection;
