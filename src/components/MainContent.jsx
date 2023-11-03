import Image from 'next/image';
import amrita from '../../public/images/amrita.png';
import bios from '../../public/images/bios.png';
import cube from '../../public/images/cube.png';
import deco from '../../public/images/deco.png';
import dvcom from '../../public/images/dvcom.png';
import emdad from '../../public/images/emdad.png';
import fertech from '../../public/images/fertech.png';
import mealis from '../../public/images/mealis.png';
import shalcos from '../../public/images/shalcos.png';
import swarnam from '../../public/images/swarnam.png';
import Link from 'next/link';
import Cards from './Cards';

export default function Home() {
  return (
    <>
      <div id="page-1" className="h-full bg-opacity-80">
        <video
          width={1000}
          height={100}
          src='images/home-video.webm'
          autoPlay
          muted
          loop
          alt="img"
          className="md:hidden mt-[4vw] md:mt-[1vw] w-[70%] md:mx-auto"
          id="top-image"
        />
        <div id="content">
          <div className="w-full max-h-screen flex flex-col md:flex-row mt-[-5vw] md:mt-[-2vw]">
            <div id="left" className="md:w-1/2 md:h-full md:px-12 md:py-12 md:ml-10">
              <h1 className="text-3xl h-48 md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw] w-full" id="maintext">
                we have the solutions
                <p><span className="typed"></span></p>
              </h1>
              <div className="bg-transparent p-4 rounded-md mt-8" id="btn">
                <div className="flex flex-wrap gap-4">
                <Link href = '/solutions/manufacturing'>
                <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition">
                    <i className="ri-government-fill text-blue-600 pr-2 opacity-90"></i>
                    Manufacturing
                  </button>
                </Link>
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
              <div className="mt-[8vw] md:mt-[3vw] mx-[5vw] md:mx-[0vw]" id="qualifications">
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
            <div id="right" className="hidden md:block w-[60%] h-full bg-transparent object-center">
              <video
                src='images/home-video.webm'
                autoPlay
                loop
                muted
                alt="video"
                width={1000}
                height={100}
                className="w-[100%] mt-14 pr-[10vw]"
                id='bottom-video'
              />
            </div>
          </div>
          <div
            id="footer-page-1"
            className="flex items-center justify-center flex-col md:mt-auto p-10 md:opacity-60 opacity-50 md:items-center md:justify-center md:flex-col bg-transparent mb-[5vw]"
          >
            <p className="text-sm md:text-xl md:mb-[2vw] mb-[8vw] text-center">join our 50+ Successful Implementation stories</p>

            <div className="marquee-container">
              <div className="marquee-content md:flex md:items-center md:justify-center">
                <div className="logo">
                  <Image width={100} height={100} src={amrita} alt="amrita logo" />
                </div>
                <div className="logo">
                  <Image width={100} height={100} src={bios} alt="bios logo" />
                </div>
                <div className="logo">
                  <Image width={100} height={100} src={cube} alt="cube logo" />
                </div>
                <div className="logo">
                  <Image width={100} height={100} src={deco} alt="deco logo" />
                </div>
                <div className="logo">
                  <Image width={100} height={100} src={dvcom} alt="dvcom logo" />
                </div>
                <div className="logo">
                  <Image width={100} height={100} src={emdad} alt="emdad logo" />
                </div>
                <div className="logo">
                  <Image width={100} height={100} src={fertech} alt="fertech logo" />
                </div>
                <div className="logo">
                  <Image width={100} height={100} src={mealis} alt="mealis logo" />
                </div>
                <div className="logo">
                  <Image width={100} height={100} src={shalcos} alt="shalcos logo" />
                </div>
                <div className="logo">
                  <Image width={100} height={100} src={swarnam} alt="swarnam logo" />
                </div>
              </div>
            </div>
           
          </div>
          
         
          
        </div>
        
      </div>
      <Cards />
      



    </>
  );
}
