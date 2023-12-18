'use client';
import Image from 'next/image';
import logosData from '../textContent/logos/logosData.json';
import Link from 'next/link';
import Cards from './Cards';
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIndustry,
  faStore,
  faCoins,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import Frappe from './Frappe';
import ChangeText from './ChangeText';

export default function Home() {
  const textContent = [
    'streamline operations',
    'automate production',
    'increase profits',
    'reduce costs',
    'boost productivity',
  ];

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
              <ChangeText
                staticText="we have the solutions to"
                animTextContent={textContent}
                interval={2000}
                staticTextClass="text-[7vw] h-auto  md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw] w-full text-[#393939]"
                animTextClass="w-full typed"
              />

              <div className="bg-transparent py-4 rounded-md mt-8" id="btn">
                <div className="flex flex-wrap gap-4">
                  <Link href="/solutions/manufacturing">
                    <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                      <FontAwesomeIcon
                        icon={faIndustry}
                        className="text-blue-600"
                      />
                      Manufacturing
                    </button>
                  </Link>
                  <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                    <FontAwesomeIcon icon={faStore} className="text-blue-600" />
                    Trading
                  </button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                    <FontAwesomeIcon icon={faCoins} className="text-blue-600" />{' '}
                    Accounts{' '}
                  </button>
                  <button className="py-2 px-4 bg-white rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                    <FontAwesomeIcon
                      icon={faWarehouse}
                      className="text-blue-600"
                    />{' '}
                    Warehouse{' '}
                  </button>
                </div>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="py-1 px-3 border-zinc-200 border-2 rounded-lg my-6 text-lg placeholder-opacity-30 md:w-[18vw] md:ml-[0vw]"
                placeholder="Enter your work email"
              />
              <br />
              <a href="/">
                <button
                  id="getquote"
                  className="md:py-[0.7vw] md:px-[2vw] py-[2vw] px-[17vw] bg-blue-500 rounded-md md:mt-0  mt-[6vw] shadow-xl hover:shadow-none transition duration-300 md:ml-[0vw]"
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
                <Frappe />

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
