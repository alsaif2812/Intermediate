// import Hero from '@/components/Hero'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <>
      <div id="page-1" className="h-full bg-opacity-80 mb-52">
        <Image
          width={1000}
          height={100}
          src='/images/rightimg.png'
          autoPlay
          muted
          loop
          alt="Image"
          className="md:hidden mt-[4vw] md:mt-[1vw] w-[70%] md:mx-auto"
          id="top-image"
        />
        <div id="content">
          <div className="w-full max-h-screen md:flex flex-col md:flex-row mt-[-5vw] ">
            <div id="left" className="md:w-1/2 md:h-full md:pl-36 md:py-12 md:ml-10  md:pt-32">
              <h1 className="text-3xl h-auto  md:h-auto md:text-6xl font-extrabold mt-[5vw] md:mt-[3vw] w-full text-gray-800" id="maintext">
                change your Life <br /> with Wahni.
              </h1>
              <p className='text-sm text-gray-600 pt-8'>A great workplace combines exceptional people <br /> with challenging problems.</p>

              <Link href="/" >
                <button
                  id="getquote"
                  className="md:py-[0.7vw] md:px-[2vw] py-[2vw] px-[17vw] bg-purple-400 rounded-md md:mt-[2vw] mt-[6vw] shadow-xl hover:shadow-none transition duration-300 md:ml-[0vw]"
                >
                  <span className="md:font-semibold font-extrabold text-[#f1f2f3]" id="getquote2">
                    Apply Now
                  </span>
                </button>
              </Link>

            </div>
            <div id="right" className="hidden md:block w-[60%] h-full bg-transparent object-center md:pt-20">
              <Image
                src='/images/rightimg.png'
                autoPlay
                loop
                muted
                alt="Image"
                width={1000}
                height={100}
                className="w-[100%] mt-14 pr-[10vw]"
                id='bottom-Image'
              />
            </div>
          </div>




        </div>

      </div>
    </>
  )
}

export default page;

export function generateMetadata({ params }) {
  return {
    title: "Careers",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}