'use client';
import Image from 'next/image';
import logosData from '../textContent/logos/logosData.json';
import Link from 'next/link';
import Cards from './Cards';
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIndustry,
} from '@fortawesome/free-solid-svg-icons';
import party from 'party-js';
export function triggerConfetti(e) {
  party.confetti(e.target, {
    count: party.variation.range(20, 40),
  });
}

export default function Home() {
  return (
    <>
      <div id="page-1" className="h-full bg-opacity-80">
        <video
          width={1000}
          height={100}
          src="images/home-video.webm"
          autoPlay
          muted
          loop
          alt="img"
          className="md:hidden my-[4vw] mx-3  w-[100%] "
          id="topimg"
        />
        <div id="content">
          <div className="w-full max-h-screen flex flex-col md:flex-row mt-[-5vw] md:mt-[-2vw]">
            <div
              id="left"
              className="md:w-1/2 md:h-full md:px-12 md:py-12 md:ml-10"
            >
              <h1
                className="text-[7vw] h-auto  md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw] w-full text-[#393939]"
                id="maintext"
              >
                we have the solutions to
                <p>
                  <span className="typed w-full"></span>
                </p>
              </h1>
              <div className="bg-transparent py-4 rounded-md mt-8" id="btn">
                <div className="flex flex-wrap gap-4">
                  <Link href="/solutions/manufacturing">
                    <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition">
                      <FontAwesomeIcon icon={faIndustry} />
                      Manufacturing
                    </button>
                  </Link>
                  <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" /></svg>                    Trading
                  </button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512 " className=''><path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" /></svg>                    Accounts
                  </button>
                  <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z" /></svg>                    Inventory
                  </button>
                </div>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="py-1 px-3 border-zinc-200 border-2 rounded-lg mt-6 text-lg placeholder-opacity-30 md:w-[18vw] md:ml-[0vw]"
                placeholder="Enter your work email"
              />
              <br />
              <a href="/">
                <button
                  id="getquote"
                  className="md:py-[0.7vw] md:px-[2vw] py-[2vw] px-[17vw] bg-blue-500 rounded-md md:mt-[1vw] mt-[6vw] shadow-xl hover:shadow-none transition duration-300 md:ml-[0vw]"
                >
                  <span
                    className="md:font-semibold font-extrabold  text-white"
                    id="getquote2"
                  >
                    Get a Quote
                  </span>
                </button>
              </a>
              <div
                className="mt-[8vw] md:mt-[3vw] mx-[5vw] md:mx-[0vw]"
                id="qualifications"
              >
                <p>
                  <i
                    onMouseOver={triggerConfetti}
                    className="ri-trophy-fill text-yellow-300 text-2xl"
                  ></i>
                  <span className="text-md text-gray-600">
                    Frappe Certified Partner
                  </span>
                </p>

                <p>
                  <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                  <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                  <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                  <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                  <span className="text-sm text-gray-600 ml-1">
                    Based on Customer Reviews
                  </span>
                </p>
              </div>
            </div>
            <div
              id="right"
              className="hidden md:block w-[60%] h-full bg-transparent object-center"
            >
              <video
                src="images/home-video.webm"
                autoPlay
                loop
                muted
                alt="video"
                width={1000}
                height={100}
                className="w-[100%] mt-14 pr-[10vw]"
                id="bottomimg"
              />
            </div>
          </div>
          <div
            id="footer-page-1"
            className="flex items-center justify-center flex-col md:mt-auto p-10 md:opacity-60 opacity-50 md:items-center md:justify-center md:flex-col bg-transparent mb-[5vw]"
          >
            <p className="text-sm md:text-xl md:mb-[2vw] mb-[8vw] text-center">
              Join our 50+ Successful Implementation stories
            </p>
            <Marquee pauseOnHover direction="left">
              <div className="gap-[5rem] flex items-center pt-12">
                {logosData.map((logo, index) => (
                  <div className="logo" key={index}>
                    <a href={logo.link} target="_blank">
                      {' '}
                      <Image
                        width={100}
                        height={90}
                        src={`/images/${logo.src}`}
                        alt={`${logo.name} logo`}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
}
