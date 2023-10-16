"use client"
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div
        id="page-1"
        className="h-screen ml-1 md:ml-[2vw] bg-opacity-80"
      >
        <Image
        width={1000}
        height={100}
          src="https://erpnext.com/files/erpnext-hero-compressed.png"
          alt="img"
          className="md:hidden mt-[4vw] md:mt-[1vw] w-[70%] md:mx-auto"
        />
        <div
          id="content"
          className="w-screen h-screen flex flex-col md:flex-row mt-[-5vw] md:mt-[-2vw]"
        >
          <div
            id="left"
            className="w-full md:w-1/2 md:h-full h-[100%] px-4 md:px-12 py-6 md:py-12 ml-0 md:ml-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold mt-[5vw] md:mt-[3vw] w-full">
              we have the solutions <br />
              to run your business.
            </h1>
            <div className="bg-transparent p-4 rounded-md mt-8">
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
              className="py-1 px-8 border-zinc-200 border-2 rounded-lg mt-6 text-lg placeholder-opacity-30 md:w-[18vw] w-[70vw] ml-[8vw] md:ml-[0vw]"
              placeholder="Enter your work email"
            />
            <br />
            <a href="/">
              <button
                id="getquote"
                className="md:py-[0.7vw] md:px-[2vw] py-[2.5vw] px-[17vw] bg-blue-500 rounded-md md:mt-[2vw] mt-[6vw] shadow-xl hover:shadow-none transition duration-300 ml-[14vw] md:ml-[0vw]"
              >
                <span className="md:font-semibold font-bold md:text-[0.9vw] text-[4vw] text-white">
                  Get a Quote
                </span>
              </button>
            </a>
            <div className="mt-[8vw] md:mt-[3vw] mx-[5vw] md:mx-[0vw]">
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
          <div
            id="right"
            className="hidden md:block w-[60%] h-full bg-transparent object-center mb-[10vw]"
          >
            <Image
              src="https://erpnext.com/files/erpnext-hero-compressed.png"
              alt="img"
              className="w-[90%] mt-[10vw] pr-[10vw]"
              width={1000}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}

