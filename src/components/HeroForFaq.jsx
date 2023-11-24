import React from 'react'
import Image from 'next/image'
import social from '../../public/images/righticon.avif'
const HeroForFaq = () => {
          return (
                    <>
                              <div id="mainfaq" className="w-full max-h-screen pb-64  md:flex flex md:flex-row flex-col items-center justify-center ">
                                        <div id="top" className=' w-full h-full  flex items-start justify-center md:hidden px-10 pt-20 '>

                                                  <Image src={social} alt='img' height={100} width={800} className='rounded-md  ' />
                                        </div>
                                        <div id="left" className=' md:w-1/2 w-full md:h-full md:flex flex-col  md:justify-start md:items-center '>
                                                  <div className='md:max-w-96 w-full md:px-36 px-20  py-10 wrap'>
                                                            <div id="title" className='md:text-5xl text-6xl font-extrabold md:leading-[3.5rem] text-[#212121]'>FAQs Unveiled: Your Quick <br /> Answers Guide"</div>
                                                            <div id="paragraph" className='my-10 md:text-lg text-2xl font-semibold  text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perferendis obcaecati a quidem itaque necessitatibus tenetur unde et excepturi quibusdam!</div>
                                                            <div id="button" className='bg-blue-400 md:py-4 py-3 md:px-6 px-12 md:w-44 w-52 rounded-lg text-md font-bold text-white'> Explore Further!!</div>
                                                  </div>
                                        </div>
                                        <div id="right" className=' w-1/2 h-full  items-start justify-center pt-20  pr-10 hidden md:block'>

                                                  <Image src={social} alt='img' height={100} width={800} className='rounded-md my-20 ' />
                                        </div>
                              </div>
                    </>
          )
}

export default HeroForFaq
