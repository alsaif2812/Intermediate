import React from 'react';
import Image from 'next/image';
import Teamimg from '../../../../public/images/Team.jpg';
import mission from '../../../../public/images/mission.png';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Head from 'next/head';
import Layout from '../../../app/layout'
export const metadata = {
  title: 'About Wahni ERP Softwares - Best ERP Softwares in India',
  description: 'Best ERP software in India. Our Open Source ERP Software services revolve around FOSS products. From implementation to training and support, we cover it all.',
  keyword: 'wahni it,erpnext,best accounting software in kerala'
};

const Page = () => {
  return <>
    <Layout showBackgroundImage={true}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
      </Head>
      <Hero />
      <div id="top" className="md:flex md:w-full md:h-[30vw] h-[130vw] bg-gradient-to-b from-purple-500 via-purple-600 to-blue-500">
        <div id="leftabt" className="md:w-[50%] md:pl-[10vw] pl-[3vw] md:pt-[4vw] pt-[10vw] md:mt-0 mt-[4vw] text-[#212121]">
          <h1 className="md:text-5xl text-4xl font-extrabold md:tracking-wide md:leading-tight text-white">
            We are <br /> Wahni.
          </h1>
          <p className="md:text-xl opacity-80 tracking-wide md:mt-[1vw] mt-[4vw] text-white">
            A great workplace combines exceptional <br /> people with challenging problems.
          </p>
          <p className="md:text-xl opacity-60 tracking-wide md:mt-[2vw] mt-[4vw] md:ml-[1vw] ml-[2vw] text-white">
            Watch the video to learn more about us
          </p>
        </div>
        <div id="rightabt" className="md:w-[50%] md:p-[4vw] p-[10vw] md:flex items-center justify-center">
          <Image src={Teamimg} alt="Team img" width={1000} height={100} className="object-cover w-full md:w-[90%]" />
        </div>
      </div>
      <div id="ourmission" className="md:flex md:w-full md:pt-[5vw] md:pl-[10vw]">
        <div id="leftmission" className="md:w-[30%] md:p-[0vw] p-[8vw]">
          <p className="text-blue-700 font-semibold md:text-xs text-lg uppercase tracking-widest">Mission</p>
          <h1 className="md:text-4xl text-3xl font-extrabold md:mt-2 mt-[4vw] text-[#292D34] tracking-wider">Our mission</h1>
          <div className="border-2 border-blue-500 rounded-3xl md:w-[5vw] w-[22vw] md:mt-[1vw] mt-[3vw]"></div>
          <p className="md:mt-4 mt-[12vw] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi saepe sed ipsam tenetur cum eaque molestias sequi in tempora quod sunt, nulla dolor rem odio incidunt eos illo corrupti natus culpa voluptates autem iste voluptatum enim? Provident soluta dolor obcaecati aliquid vero ipsam? Commodi.
          </p>
          <p className="md:mt-4 mt-[2vw] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi saepe sed ipsam tenetur cum eaque molestias sequi in tempora quod sunt, nulla dolor rem odio incidunt eos illo corrupti natus culpa voluptates autem iste voluptatum enim? Provident soluta dolor obcaecati aliquid vero ipsam? Commodi.
          </p>
        </div>
        <div id="rightmission" className="md:w-[50%] md:p-[10vw] md:mb-[10vw] md:flex items-center justify-center p-[5vw]">
          <Image src={mission} alt="img" width={1000} height={100} className="md:object-cover shadow-2xl rounded-3xl transition hover:scale-105 duration-500" />
        </div>
      </div>

      <div id="main" className="md:w-full md:flex md:gap-10 md:h-[130vh] md:p-[12vw] p-[10vw]">
        <h1 className="block md:hidden text-5xl font-bold leading-10 tracking-wider mb-[10vw] text-[#212121]">
          Core values <br />
          <p className="mt-[3vw] leading-[3vw] font-semibold text-sm uppercase text-purple-600 mb-[1vw]">
            & core habits
          </p>
        </h1>
        <div id="firstdiv" className="md:flex flex-col">
          <div id="first" className="md:w-[18vw] p-[5vw] md:max-h-full h-[105vw] rounded-2xl md:p-[2vw] border-l-4 border-purple-400 shadow-md hover:shadow-2xl transition duration-300 md:mt-0 mt-[2vw]">
            <p className="md:text-4xl text-3xl font-bold text-purple-400">01</p>
            <h1 className="md:text-5xl text-4xl font-bold text-[#212121] md:mt-[0.7vw] mt-[4vw]">
              Deliver the best customer experience, <br /> period
            </h1>
            <p className="uppercase md:text-sm text-purple-700 md:mt-[1.5vw] mt-[6vw] text-lg font-semibold">
              core habits
            </p>
            <h3 className="md:mt-[0.9vw] mt-[2vw] md:text-[1vw] text-[5.5vw] font-[600]">
              Details matter. Add value <br /> in every interaction
            </h3>
          </div>
          <div id="Second" className="mt-[8vw] md:w-[18vw] p-[5vw] md:max-h-full h-[105vw] rounded-2xl md:mt-[2vw] md:p-[2vw] border-l-4 border-purple-400 shadow-md hover:shadow-2xl transition duration-300">
            <p className="md:text-4xl text-3xl font-bold text-purple-400">02</p>
            <h1 className="md:text-5xl text-4xl font-bold text-[#212121] md:mt-[0.7vw] mt-[4vw]">
              Deliver the best customer experience, <br /> period
            </h1>
            <p className="uppercase md:text-sm text-purple-700 md:mt-[1.5vw] mt-[6vw] text-lg font-semibold">
              core habits
            </p>
            <h3 className="md:mt-[0.9vw] mt-[2vw] md:text-[1vw] text-[5.5vw] font-[600]">
              Details matter. Add value <br /> in every interaction
            </h3>
          </div>
        </div>
        <div id="seconddiv" className="md:flex flex-col">
          <div id="first" className="md:w-[18vw] p-[5vw] md:max-h-full h-[105vw] rounded-2xl md:mt-[0vw] mt-[8vw] md:p-[2vw] border-l-4 border-purple-400 shadow-md hover:shadow-2xl transition duration-300">
            <p className="md:text-4xl text-3xl font-bold text-purple-400">01</p>
            <h1 className="md:text-5xl text-4xl font-bold text-[#212121] md:mt-[0.7vw] mt-[4vw]">
              Deliver the best customer experience, <br /> period
            </h1>
            <p className="uppercase md:text-sm text-purple-700 md:mt-[1.5vw] mt-[6vw] text-lg font-semibold">
              core habits
            </p>
            <h3 className="md:mt-[0.9vw] mt-[2vw] md:text-[1vw] text-[5.5vw] font-[600]">
              Details matter. Add value <br /> in every interaction
            </h3>
          </div>
          <div id="Second" className=" md:w-[18vw] p-[5vw] md:max-h-full h-[105vw] mt-[8vw] rounded-2xl md:mt-[2vw] md:p-[2vw] border-l-4 border-purple-400 shadow-md hover:shadow-2xl transition duration-300">
            <p className="md:text-4xl text-3xl font-bold text-purple-400">02</p>
            <h1 className="md:text-5xl text-4xl font-bold text-[#212121] md:mt-[0.7vw] mt-[4vw]">
              Deliver the best customer experience, <br /> period
            </h1>
            <p className="uppercase md:text-sm text-purple-700 md:mt-[1.5vw] mt-[6vw] text-lg font-semibold">
              core habits
            </p>
            <h3 className="md:mt-[0.9vw] mt-[2vw] md:text-[1vw] text-[5.5vw] font-[600]">
              Details matter. Add value <br /> in every interaction
            </h3>
          </div>
        </div>
        <div id="thirddiv" className="md:flex flex-col">
          <h1 className="hidden md:block text-5xl font-bold leading-10 tracking-wider">
            Core values <br />{' '}
            <p className="leading-[3vw] font-semibold text-sm uppercase text-purple-600 mb-[1vw] ">
              & core habits
            </p>
          </h1>
          <div id="first" className="md:w-[18vw] p-[5vw] md:max-h-full h-[105vw] rounded-2xl mt-[8vw] md:mt-0 md:p-[2vw] border-l-4 border-purple-400 shadow-md hover:shadow-2xl transition duration-300">
            <p className="md:text-4xl text-3xl font-bold text-purple-400">01</p>
            <h1 className="md:text-5xl text-4xl font-bold text-[#212121] md:mt-[0.7vw] mt-[4vw]">
              Deliver the best customer experience, <br /> period
            </h1>
            <p className="uppercase md:text-sm text-purple-700 md:mt-[1.5vw] mt-[6vw] text-lg font-semibold">
              core habits
            </p>
            <h3 className="md:mt-[0.9vw] mt-[2vw] md:text-[1vw] text-[5.5vw] font-[600]">
              Details matter. Add value <br /> in every interaction
            </h3>
          </div>
          <div id="Second" className=" md:w-[18vw] p-[5vw] md:max-h-full h-[105vw] mt-[8vw] rounded-2xl md:mt-[2vw] md:p-[2vw] border-l-4 border-purple-400 shadow-md hover:shadow-2xl transition duration-300">
            <p className="md:text-4xl text-3xl font-bold text-purple-400">02</p>
            <h1 className="md:text-5xl text-4xl font-bold text-[#212121] md:mt-[0.7vw] mt-[4vw]">
              Deliver the best customer experience, <br /> period
            </h1>
            <p className="uppercase md:text-sm text-purple-700 md:mt-[1.5vw] mt-[6vw] text-lg font-semibold">
              core habits
            </p>
            <h3 className="md:mt-[0.9vw] mt-[2vw] md:text-[1vw] text-[5.5vw] font-[600]">
              Details matter. Add value <br /> in every interaction
            </h3>
          </div>
        </div>
      </div>

      <div id="milestones" className="md:max-w-full md:max-h-[50vw] h-[200vw] md:mt-[5vw] md:pt-[5vw] md:pl-[10vw] md:pr-[3vw] bg-gray-100">
        <div className="md:w-[18vw] md:p-[1vw] p-[5vw]">
          <p className="uppercase md:text-sm text-purple-500 font-semibold tracking-[0.2vw]">
            our progress
          </p>
          <h1 className="md:text-6xl text-5xl font-extrabold mt-[1vw] tracking-[0.1vw] text-[#212121]">
            Milestones
          </h1>
        </div>
        <div className="md:w-full md:mb-[10vw] md:h-[30vw] md:p-[2vw] h-[200vw] bg-white"></div>
      </div>

      <div id="photogrid" className="md:w-full md:h-[100vh] w-full h-[100vh] pt-[10vw] md:px-[0vw] px-[5vw] bg-gray-200">
        <p className="md:mx-[45vw] mx-[30vw] font-semibold md:text-sm tracking-widest uppercase text-purple-500">
          Gallery
        </p>
        <h1 className="md:mx-[38vw] ml-[17vw] md:text-6xl text-4xl md:w-[50vw] mt-[2vw] md:my-[1.4vw] font-bold text-[#212121]">
          Life at Wahni.
        </h1>
        <p className="md:my-0 my-[5vw] md:mx-[25vw] mx-[5vw] md:text-xl text-sm md:mt-0 mt-[2vw] md:w-[50vw] text-gray-500">
          San Diego HQ, United States, Canada, Ireland, United Kingdom, Australia, and across the globe.
        </p>
        <button className="md:mx-[43.5vw] md:mt-[1.6vw] bg-[#4735b8] px-[5vw] py-[3vw] mx-[23vw] md:rounded-md rounded-md font-bold text-white tracking-widest shadow-lg hover:shadow-2xl transition duration-300 md:px-[1vw] md:py-[0.8vw]">
          Join Our Team
        </button>
        <div className="bg-red-300 md:w-full md:h-[60vh] md:mb-[10vh] md:mt-[4vh] mt-[10vw] max-h-[100vh]"></div>
      </div>

      <div id="advantages" className="md:flex md:gap-10 items-center justify-center md:w-full w-[100%] md:h-[5vw] md:mb-[9vw] text-gray-700 max-h-full md:p-[0vw] p-[5vw] bg-gray-100">
        <div id="advantage1" className="md:text-xl md:flex items-center">
          <i className="ri-scan-2-fill md:text-5xl md:mr-[0.1vw] text-center text-gray-600"></i>
          <span className="font-bold hover:border-b-[2px] hover:border-slate-800 transition duration-100 md:mx-[0.5vw]">
            Free training
          </span>{" "}
          & 24-hour support
        </div>
        <div id="advantage2" className="md:my-0 my-[5vw] md:text-xl md:flex items-center">
          <i className="ri-shield-check-line md:text-5xl md:mr-[0.1vw] md:text-center text-gray-600"></i> Serious about{" "}
          <span className="font-bold hover:border-b-[2px] md:mx-[0.5vw] hover:border-gray-700 transition duration-100">
            security & privacy
          </span>
        </div>
        <div id="advantage3" className="md:text-xl md:flex items-center">
          <i className="ri-speed-up-fill md:text-5xl md:mr-[0.3vw] md:text-center text-gray-600"></i>
          <span className="font-bold hover:border-b-[2px] hover:border-slate-800 transition duration-100 md:mx-[0.5vw]">
            Highest levels of uptime{" "}
          </span>
          the last 12 months
        </div>
      </div>
      <Contact />
    </Layout>
  </>
};

export default Page;

