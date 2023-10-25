import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
       <div id="page-1" className="h-screen bg-opacity-80">
  <video
  autoPlay
  muted
  loop
    width={1000}
    height={100}
    src="/images/home-video.webm"
    alt="img"
    className="md:hidden mt-[4vw] md:mt-[1vw] w-[70%] md:mx-auto"
    id="top-image"
  />
  <div id="content" >
    <div className="w-full h-full flex flex-col md:flex-row mt-[-5vw] md:mt-[-2vw] ">
      <div id="left" className="md:w-1/2 md:h-full md:px-12 md:py-12 md:ml-10">
        <h1 className="text-3xl h-48 md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw] w-full" id="maintext">
          we have the solutions
          <p><span className="typed"></span></p>
        </h1>
        <div className="bg-transparent p-4 rounded-md mt-8" id="btn">
          <div className="flex flex-wrap gap-4">
            <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition">
              <i className="ri-government-fill text-blue-600 pr-2 opacity-90"></i>
              Manufacturing
            </button>
            <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition">
              <i className="ri-government-fill text-blue-600 pr-2 opacity-90"></i>
              Trading
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition">
              <i className="ri-government-fill text-blue-600 pr-2 opacity-90"></i>
              Accounts
            </button>
            <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition">
              <i className="ri-government-fill text-blue-600 pr-2 opacity-90"></i>
              Inventory
            </button>
          </div>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="py-1 px-8 border-zinc-200 border-2 rounded-lg mt-6 text-lg placeholder-opacity-30 md:w-[18vw] md:ml-[0vw]"
          placeholder="Enter your work email"
        />
        <br />
        <a href="/">
          <button
            id="getquote"
            className="md:py-[0.7vw] md:px-[2vw] py-[2vw] px-[17vw] bg-blue-500 rounded-md md:mt-[2vw] mt-[6vw] shadow-xl hover:shadow-none transition duration-300 md:ml-[0vw]"
          >
            <span className="md:font-semibold font-bold text-white" id="getquote2">
              Get a Quote
            </span>
          </button>
        </a>
        <div className="pt-[8vw] md:pt-[3vw] mx-[5vw] md:mx-[0vw] " id="qualifications">
          <p>
            <i className="ri-trophy-fill text-yellow-300 text-2xl"></i>
            <span className="text-md text-gray-600">
              Frappe Certified partner
            </span>
          </p>
          <p>
            <i className="ri-star-fill text-yellow-300 text-2xl"></i>
            <i className="ri-star-fill text-yellow-300 text-2xl"></i>
            <i className="ri-star-fill text-yellow-300 text-2xl"></i>
            <i className="ri-star-fill text-yellow-300 text-2xl"></i>
            <span className="text-sm text-gray-600 ml-1">
              Based on Customer reviews
            </span>
          </p>
        </div>
      </div>
      <div id="right" className="hidden md:block w-1/2 h-full bg-transparent object-center">
        <video
        autoPlay
        muted
        loop
  src="/images/home-video.webm"
            alt="img"
          className="w-full mt-24 pr-52"
          width={1000}
          height={100}
        />
      </div>
    </div>
    
  </div>
</div>
    </>
  )
}

export default Hero