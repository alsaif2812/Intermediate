import React from 'react';
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
import mobile from '../../public/images/undraw_mobile_application_re_13u3.svg';

const Cards = () => {
  return (
    <>
      <div id="page-2">
        <div
          id="footer-page-1"
          className="flex items-center justify-center flex-col md:mt-[-4vw] p-10 md:opacity-60 opacity-50 md:items-center md:justify-center md:flex-col bg-transparent md:bg-white mb-[5vw]  "
        >
          <p className=" text-xs md:text-sm md:mb-[2vw] mb-[8vw] text-center">Join our 50+ Successful Implementation stories</p>
          <div id="Image-container" className="flex flex-wrap gap-10 justify-center md:mt-[2vw] mt-[10vw]">
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={amrita} alt="amrita logo" />
            </div>
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={bios} alt="bios logo" />
            </div>
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={cube} alt="cube logo" />
            </div>
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={deco} alt="deco logo" />
            </div>
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={dvcom} alt="dvcom logo" />
            </div>
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={emdad} alt="emdad logo" />
            </div>
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={fertech} alt="fertech logo" />
            </div>
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={mealis} alt="mealis logo" />
            </div>
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={shalcos} alt="shalcos logo" />
            </div>
            <div className="w-24 h-16 md:w-24 md:h-16">
              <Image width={100} height={100} src={swarnam} alt="swarnam logo" />
            </div>
          </div>
        </div>

        <div id="hero2" className="md:px-[12vw] px-[1vw] ">
          <div id="main" className="mb-[8vw] md:mt-[-1vw] md:rounded-[2vw] rounded-2xl bg-blue-100 bg-opacity-30 md:p-[2vw] p-[4vw] md:w-[80%] w-[80vw] mx-auto text-[#292d34] lg:h-[25vw] sm:h-[35vw] shadow-lg hover:shadow-none transition duration-500">
            <div id="nav2" className=" p-[0.9vw] ">
              <ul className="flex gap-7 items-baseline font-semibold mb-[2vw] text-[2.5vw] md:text-[0.9vw]">
                <li><a href="" className=" border-b-[3px] border-sky-600">Accounts Dashboard</a></li>
                <li><a href="" className="">Trial balance</a></li>
                <li><a href="" className="">Profit & Loss</a></li>
              </ul>
            </div>
            <Image width={900} height={1000} src="https://erpnext.com/files/accounts-dashboard-1335c7cb.png" alt="Image" className="md:hidden block mt-[5vw]" />
            <div id="content2" className=" md:flex md:h-[16vw] ">
              <div id="left" className="md:w-[100vh]">
                <h1 className="font-bold md:text-3xl text-[6vw] mb-6 hidden md:block">Lorem Ipsum is simply <br />
                  dummy text</h1>
                <h1 className=" md:hidden text-center mt-[5vw] font-bold ml-[vw] text-[5vw] mb-[4vw]">Lorem Ipsum is simply <br />
                  dummy text</h1>
                <p className="md:text-[0.7vw] mb-5 text-[2.8vw] ml-[7vw] md:ml-[0.5vw] font-medium">There are many variations of passages of Lorem <br />
                  Ipsum available, but the majority have suffered <br />
                  alteration in some form, by injected humour, or <br />
                  randomised words.</p>
                <button className="bg-blue-500 md:px-[1.9vw] md:py-[0.7vw] px-[5.9vw] py-[1.8vw] rounded-lg text-white text-sm font-bold mt-[1vw] ml-[20vw] md:ml-[1vw] mb-[4vw] shadow-md bg-opacity-70 hover:bg-opacity-100">Try Demo</button>
              </div>
              <div id="right" className="h-full w-[80%]">
                <Image width={900} height={1000} src="https://erpnext.com/files/accounts-dashboard-1335c7cb.png" alt="Image" className="hidden md:block " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="page-3" className="mt-[17vw]">
        <div id="hero2" className="md:px-[12vw] px-[1vw] ">
          <div id="main" className="mb-[8vw] md:mt-[-10vw] md:rounded-[2vw] rounded-2xl bg-orange-50 bg-opacity-40 md:p-[2vw] p-[4vw] md:w-[80%] w-[80vw] mx-auto text-[#292d34] lg:h-[25vw] sm:h-[35vw] shadow-lg hover:shadow-none transition duration-500">
            <div id="nav2" className=" p-[0.9vw] ">
              <ul className="flex gap-7 items-baseline font-semibold mb-[2vw] text-[2.5vw] md:text-[0.9vw]">
                <li><a href="" className="border-b-[3px] border-orange-400">Accounts Dashboard</a></li>
                <li><a href="" className="">Trial balance</a></li>
                <li><a href="" className="">Profit & Loss</a></li>
              </ul>
            </div>
            <Image width={900} height={1000} src="https://erpnext.com/files/accounts-dashboard-1335c7cb.png" alt="Image" className="md:hidden block mt-[5vw]" />
            <div id="content2" className=" md:flex md:h-[16vw] ">
              <div id="left" className="md:w-[100vh]">
                <h1 className="font-bold md:text-3xl text-[6vw] mb-6 hidden md:block">Lorem Ipsum is simply <br />
                  dummy text</h1>
                <h1 className=" md:hidden text-center mt-[5vw] font-bold ml-[vw] text-[5vw] mb-[4vw]">Lorem Ipsum is simply <br />
                  dummy text</h1>
                <p className="md:text-[0.7vw] mb-5 text-[2.8vw] ml-[7vw] md:ml-[0.5vw] font-medium">There are many variations of passages of Lorem <br />
                  Ipsum available, but the majority have suffered <br />
                  alteration in some form, by injected humour, or <br />
                  randomised words.</p>
                <button className="bg-orange-400 md:px-[1.9vw] md:py-[0.7vw] px-[5.9vw] py-[1.8vw] rounded-lg text-white text-sm font-bold mt-[1vw] ml-[20vw] md:ml-[1vw] mb-[4vw] shadow-md bg-opacity-70 hover:bg-opacity-100">Try Demo</button>
              </div>
              <div id="right" className="h-full w-[80%]">
                <Image width={900} height={1000} src="https://erpnext.com/files/accounts-dashboard-1335c7cb.png" alt="Image" className="hidden md:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="page-4" className="mt-[17vw]">
        <div id="hero2" className="md:px-[12vw] px-[1vw] ">
          <div id="main" className="mb-[8vw] md:mt-[-10vw] md:rounded-[2vw] rounded-2xl bg-[#6C63FF] bg-opacity-5 md:p-[2vw] p-[4vw] md:w-[80%] w-[80vw] mx-auto text-[#292d34] lg:h-[25vw] sm:h-[35vw] shadow-lg hover:shadow-none transition duration-500">
            <div id="nav2" className=" p-[0.9vw] ">
              <ul className="flex gap-7 items-baseline font-semibold mb-[2vw] text-[2.5vw] md:text-[0.9vw]">
                <li><a href="" className="border-b-[3px] border-[#6C63FF]">Accounts Dashboard</a></li>
                <li><a href="" className="">Trial balance</a></li>
                <li><a href="" className="">Profit & Loss</a></li>
              </ul>
            </div>
            <Image width={180} height={200} src={mobile} alt="Image" className="md:hidden block mt-[5vw] h-[50vw] ml-[9vw]" />
            <div id="content2" className=" md:flex md:h-[16vw] ">
              <div id="left" className="md:w-[100vh]">
                <h1 className="font-bold md:text-3xl text-[6vw] mb-6 hidden md:block">Lorem Ipsum is simply <br />
                  dummy text</h1>
                <h1 className=" md:hidden text-center mt-[5vw] font-bold ml-[vw] text-[5vw] mb-[4vw]">Lorem Ipsum is simply <br />
                  dummy text</h1>
                <p className="md:text-[0.7vw] mb-5 text-[2.8vw] ml-[7vw] md:ml-[0.5vw] font-medium">There are many variations of passages of Lorem <br />
                  Ipsum available, but the majority have suffered <br />
                  alteration in some form, by injected humour, or <br />
                  randomised words.</p>
                <button className="bg-[#6C63FF] md:px-[1.9vw] md:py-[0.7vw] px-[5.9vw] py-[1.8vw] rounded-lg text-white text-[2.9vw] md:text-[0.9vw] md:font-bold font-bold mt-[1vw] ml-[20vw] md:ml-[1vw] mb-[4vw] shadow-md bg-opacity-80 hover:bg-opacity-100">Try Demo</button>
              </div>
              <div id="right" className="h-full w-[80%]">
                <Image width={400} height={500} src={mobile} alt="Image" className="hidden md:block  max-h-full max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
