"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import witLogo from '../../public/images/wit-logo.png';
import photogrid from '../../public/images/photogrid.jpg';
import Link from 'next/link';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);
  const handleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const mobileMenu = document.querySelector('#mobileMenu');
    if (mobileMenu) {
      if (isMobileMenuOpen) {
        mobileMenu.style.height = 'auto'; // Open the menu
      } else {
        mobileMenu.style.height = '0'; // Close the menu
      }
    }
  }, [isMobileMenuOpen]);
  return (
    <>
      <div
        id="navbar"
        className="bg-transparent py-1 px-6 md:px-12 flex items-center justify-between md:h-[6vw] max-h-[18vw] mt-[0vw] md:mt-[0vw] mr-[2vw] w-[100%]"
      >
        <div id="nav1">
          <Image
            src={witLogo}
            className="md:h-[54px] md:w-[78px] h-[13vw] w-[20vw] rounded-lg mt-[9vw] md:mt-[0vw]"
            id="logo"
            alt='img'
          />
        </div>
        <div
          id="nav2"
          className="hidden md:flex items-center justify-between gap-5 font-bold text-[#20262e]"
        >
          <Link
            href="/"
            className="bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
          >
            Home
          </Link>
          <div id="solutions" className='mx-[-1vw]'>
            <Menu open={openMenu} handler={setOpenMenu} >
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex items-center gap-1 text-base font-bold capitalize tracking-normal bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                >
                  Solutions{" "}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform bg-sky-blue hover:bg-light-purple duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${openMenu ? "rotate-180" : "/"
                      }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="hidden bg-white lg:grid rounded-2xl mt-[1vw]">
                <MenuItem>
                  <div className='md:flex mt-[-1vw] bg-white hidden w-[100vw] p-[1vw]'>
                    <div id='iconsleft' className='items-center justify-center flex-wrap w-[60%] h-[25vw] py-[1vw] px-[2vw] max-w-full md:border-r-2 md:border-gray-100'>
                      <h3 className='text-md font-bold mt-[2vw] uppercase'>Team</h3>
                      <div className='flex ml-[0vw] mt-[2vw] gap-[5vw]'>
                        <div id="icon1" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/solutions/retail">
                            <h1 className='font-semibold text-md'><i class="ri-store-2-line mr-[0.3vw] text-blue-400 text-left text-xl"></i>Retail </h1>
                            <p className='font-[500] text-sm opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                          </Link>
                        </div>
                        <div id="icon2" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/solutions/services">
                            <h1 className='font-semibold text-md'><i class="ri-service-fill mr-[0.3vw] text-blue-400 text-left text-xl"></i>services</h1>
                            <p className='font-[500] text-sm opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </Link>
                        </div>
                        <div id="icon3" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/solutions/healthcare">
                            <h1 className='font-semibold text-md'><i class="ri-hospital-fill mr-[0.3vw] text-blue-400 text-left text-xl"></i>Healthcare</h1>
                            <p className='font-[500] text-sm opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </Link>
                        </div>
                        <div id="icon4" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/solutions/education">
                            <h1 className='font-semibold text-md'><i class="ri-hospital-fill mr-[0.3vw] text-blue-400 text-left text-xl"></i>Education</h1>
                            <p className='font-[500] text-sm opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </Link>
                        </div>
                      </div>
                      <br />
                      <div className='flex ml-[0vw] mt-[2vw] gap-[5vw]'>
                        <div id="icon4" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/solutions/manufacturing">
                            <h1 className='font-semibold text-md'><i class="ri-tools-fill mr-[0.3vw] text-blue-400 text-left text-xl"></i>Manufacturing</h1>
                            <p className='font-[500] text-sm opacity-75'>Lorem ipsum dolor sit amet consectetur </p>
                          </Link>
                        </div>
                        <div id="icon5" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/solutions/realestate">
                            <h1 className='font-semibold text-md'><i class="ri-pencil-line mr-[0.3vw] text-blue-400 text-left text-xl"></i>Real Estate</h1>
                            <p className='font-[500] text-sm opacity-75'>Lorem ipsum dolor sit </p>
                          </Link>
                        </div>
                        <div id="icon6" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/solutions/distribution">
                            <h1 className='font-semibold text-md'><i class="ri-truck-line mr-[0.3vw] text-blue-400 text-left text-xl"></i>Distribution</h1>
                            <p className='font-[500] text-sm opacity-75'>Lorem ipsum dolor sit amet</p>
                          </Link>
                        </div>
                        <div id="icon7" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/solutions/agriculture">
                            <h1 className='font-semibold text-md'><i class="ri-hand-heart-line mr-[0.3vw] text-blue-400 text-left text-xl"></i>Agriculture</h1>
                            <p className='font-[500] text-sm opacity-75'>Lorem ipsum dolor sit amet</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div id="right" className=' max-w-[50%] max-h-full pl-[2vw]'>
                      <div className='flex items-center justify-between w-[30vw] h-[10%]  p-[1vw]'>
                        <h1 className='font-bold uppercase text-[#212121]'>Latest From blog</h1>
                        <h1 className='font-bold uppercase text-[#212121]'>see all<i class="ri-arrow-right-line text-blue-500"></i></h1>
                      </div>
                      <div>
                        <div className='flex items-center  gap-7 mt-[1vw]'>
                          <Image
                            src={photogrid}
                            alt='img'
                            height={100}
                            width={100}
                            className='rounded-lg'
                          />
                          <h1 className='capitalize  text-lg tracking-wider leading-tight text-[#212121]'>12 benefits that make wahni unique</h1>
                        </div>
                        <div className='flex items-center  gap-7 mt-[1vw]'>
                          <Image
                            src={photogrid}
                            alt='img'
                            height={100}
                            width={100}
                            className='rounded-lg'
                          />
                          <h1 className='capitalize  text-lg tracking-wider leading-tight text-[#212121]'>How to write effective OKRs(with  <br /> 60+ OKR examples)</h1>
                        </div>
                        <div className='flex items-center  gap-7 mt-[1vw]'>
                          <Image
                            src={photogrid}
                            alt='img'
                            height={100}
                            width={100}
                            className='rounded-lg'
                          />
                          <h1 className='capitalize  text-lg tracking-wider leading-tight text-[#212121]'>Top 18 project Management <br /> methodologies</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div id="products" className='mx-[-1vw]'>
            <Menu open={openMenu2} handler={setOpenMenu2} >
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex items-center gap-1 text-base font-bold capitalize tracking-normal bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                >
                  Products{" "}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform bg-sky-blue hover:bg-light-purple duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${openMenu2 ? "rotate-180" : "/"
                      }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="hidden w-[100%] bg-white lg:grid mt-[3vw]">
                <MenuItem>
                  <div className='md:flex mt-[-1vw]  hidden text-zinc-900 '>
                    <div id='iconsleft' className=' items-center justify-center flex-wrap w-[48%]  h-[15vw] py-[1vw] px-[2vw] ml-[9vw]'>
                      <h3 className='text-md font-bold mt-[2vw] uppercase'>Product</h3>
                      <div className='flex ml-[0vw] mt-[2vw] gap-[5vw]'>
                        <div id="icon1" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-green-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/products/erpnext">
                            <h1 className='font-bold text-md'><i class="ri-task-line mr-[0.3vw] text-green-300 text-left text-xl"></i>ERPNext</h1>
                            <p className='text-sm font-[500] mt-[0.5vw] opacity-90'>Break down any size projectinto customized tasks</p>
                          </Link>
                        </div>
                        <div id="icon2" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/products/mobileapp">
                            <h1 className='font-bold text-md'><i class="ri-file-text-line mr-[0.3vw] text-blue-400 text-left text-xl"></i>Mobile App</h1>
                            <p className='text-sm font-[500] mt-[0.5vw] opacity-90'>Create beautiful docs and connect them to tasks</p>
                          </Link>
                        </div>
                        <div id="icon3" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-pink-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/products/neupos">
                            <h1 className='font-semibold text-md'><i class="ri-trophy-line mr-[0.3vw] text-pink-400 text-left text-xl"></i>NeuPOS</h1>
                            <p className='text-sm font-[500] mt-[0.5vw] opacity-90'>Track work against strategy with measurable targets</p>
                          </Link>
                        </div>
                      </div>
                      <br />
                    </div>
                    <hr />
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div id="services" className='mx-[-1vw]'>
            <Menu open={openMenu3} handler={setOpenMenu3} >
              <MenuHandler>
                <Button
                  variant="text"
                  className="flex items-center gap-1 text-base font-bold capitalize tracking-normal bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                >
                  Services{" "}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform  ${openMenu3 ? "rotate-180" : "/"
                      }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="hidden w-[100%] bg-white lg:grid mt-[3vw]">
                <MenuItem>
                  <div className='md:flex mt-[-1vw]  hidden text-zinc-900'>
                    <div id='iconsleft' className=' items-center justify-center flex-wrap w-[70%]  h-[15vw] py-[1vw] px-[2vw] ml-[9vw]'>

                      <div className='flex ml-[0vw] mt-[5vw] gap-[5vw]'>
                        <div id="icon1" className=' w-[28vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-green-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/Services/business">
                            <h1 className='font-bold text-md'><i class="ri-line-chart-line mr-[0.3vw] text-green-300 text-left text-xl"></i>Business Consulting</h1>
                            <p className='text-sm font-[500] mt-[0.5vw] opacity-90'>Break down any size projectinto customized </p>
                          </Link>

                        </div>
                        <div id="icon2" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/Services/ecommerce">
                            <h1 className='font-bold text-md'><i class="ri-file-list-2-line mr-[0.3vw] text-blue-400 text-left text-xl"></i>E-commerce</h1>
                            <p className='text-sm font-[500] mt-[0.5vw] opacity-90'>Create beautiful docs and connect them to tasks</p>

                          </Link>
                        </div>
                        <div id="icon2" className=' w-[28vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/Services/implementation">
                            <h1 className='font-bold text-md'><i class="ri-swap-fill mr-[0.3vw] text-blue-400 text-left text-xl"></i>ERP Implementation</h1>
                            <p className='text-sm font-[500] mt-[0.5vw] opacity-90'>Create beautiful docs and connect them to tasks</p>

                          </Link>
                        </div>
                        <div id="icon2" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
                          <Link href="/Services/workflow">
                            <h1 className='font-bold text-md'><i class="ri-team-fill mr-[0.3vw] text-blue-400 text-left text-xl"></i>Workflow automation</h1>
                            <p className='text-sm font-[500] mt-[0.5vw] opacity-90'>Create beautiful docs and connect them to tasks</p>

                          </Link>
                        </div>
                      </div>
                      <br />
                    </div>
                    <hr />

                  </div>

                </MenuItem>

              </MenuList>
            </Menu>
          </div>
          <Link
            href="/about"
            className="bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
          >
            About
          </Link>
          <Link
            href="/learn"
            className="bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
          >
            Learn
          </Link>
          <Link
            href="/careers"
            className="bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
          >
            Careers
          </Link>

        </div>
        <div id="nav3" className="hidden md:flex items-center justify-between gap-2">
          <button className="py-2 px-4 bg-[#ffffff] rounded-lg font-bold text-blue-400 bg-opacity-90 transition hover:bg-blue-500 hover:text-white hover:scale-105 hover:mt-[0.1vw] duration-300">
            Free Demo
          </button>
          <button className="py-2 px-4 bg-white rounded-lg font-bold bg-opacity-20 text-white transition hover:bg-blue-500 hover:text-white hover:scale-105 hover:mt-[0.1vw] duration-300">
            Contact Sales
          </button>
        </div>
        <div
          id="mobileMenu"
          className="md:hidden relative "
        >
          <button id="menuToggle"
            className={`block text-gray-600 hover:text-gray-900 focus:outline-none ${isMobileMenuOpen ? 'hidden' : ''}`}
            onClick={handleMenu}
          >
            <i id="menuIcon" className="ri-menu-3-line text-3xl"></i>
          </button>
          <div
            id="menu"
            className={`${isMobileMenuOpen ? 'block' : 'hidden'
              } fixed inset-0 max-w-full max-h-[150vw] z-50 shadow-lg p-[1vw] md:p-[2vw] flex flex-col items-center bg-[#fff] pt-[20vw] justify-start`}
          >
            <button
              id="closeMenu"
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none pr-[8vw] pt-[11vw]"
              onClick={handleMenu}
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <Link
              href="/"
              className="flex items-center justify-center py-3 px-4 text-gray-800 hover:bg-gray-200  "
            >
              Home
            </Link>
            <a

              className="flex items-center justify-center py-3 px-4 text-gray-800 hover:bg-gray-200"
            >
              <Menu>
                <MenuHandler>
                  <Button
                    variant="text"
                    className="flex items-center gap-1 text-base font-normal capitalize tracking-normal transition duration-300 ease-in-out transform my-[-2vw]"
                  >
                    Solutions{" "}
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform  duration-300 ease-in-out transform  ${openMenu ? "rotate-180" : "/"
                        }`}
                    />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Retail</MenuItem>
                  <MenuItem>Services</MenuItem>
                  <MenuItem>Healthcare</MenuItem>
                  <MenuItem>Manufacturing</MenuItem>
                  <MenuItem>Real Estate</MenuItem>
                  <MenuItem>Distribution</MenuItem>
                  <MenuItem>Agriculture</MenuItem>
                </MenuList>
              </Menu>

            </a>
            <a

              className="flex items-center justify-center py-3 px-4 text-gray-800 hover:bg-gray-200"
            >
              <Menu>
                <MenuHandler>
                  <Button
                    variant="text"
                    className="flex items-center gap-1 text-base font-normal capitalize transition duration-300 ease-in-out transform my-[-2vw]"
                  >
                    Products{" "}
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform  duration-300 ease-in-out transform  ${openMenu ? "rotate-180" : "/"
                        }`}
                    />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>ERPNext</MenuItem>
                  <MenuItem>Mobile App</MenuItem>
                  <MenuItem>Neu POS</MenuItem>
                </MenuList>
              </Menu>

            </a>
            <a

              className="flex items-center justify-center py-3 px-4 text-gray-800 hover:bg-gray-200"
            >
              <Menu>
                <MenuHandler>
                  <Button
                    variant="text"
                    className="flex items-center gap-1 text-base font-normal capitalize transition duration-300 ease-in-out transform my-[-2vw]"
                  >
                    Services{" "}
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform  duration-300 ease-in-out transform  ${openMenu ? "rotate-180" : "/"
                        }`}
                    />
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Business Consulting</MenuItem>
                  <MenuItem>E-commerce</MenuItem>
                  <MenuItem>ERP Implementation</MenuItem>
                  <MenuItem>Workflow automation</MenuItem>

                </MenuList>
              </Menu>

            </a>
            <Link
              href="/about"
              className="flex items-center justify-center py-3 pr-8 text-gray-800 hover:bg-gray-200 "
            >
              About
            </Link>
            <Link
              href="/learn"
              className="flex items-center justify-center py-3 pr-8 text-gray-800 hover:bg-gray-200 "
            >
              Learn
            </Link>
            <Link
              href="/careers"
              className="block py-3 pr-7 text-gray-800 hover:bg-gray-200 "
            >
              Careers
            </Link>
            <button className='capitalize my-[1.9vw] ml-[-3vw] px-[4vw] py-[2vw] bg-deep-purple-300 rounded-lg font-semibold text-sm text-[#212121]'>free demo</button>
            <button className='capitalize my-[1.9vw] ml-[-3vw] px-[4vw] py-[2vw] bg-deep-purple-300 rounded-lg font-semibold text-sm text-[#212121]'>Contact sales</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;