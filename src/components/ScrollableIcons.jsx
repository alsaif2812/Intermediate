'use client';
import React, { useState } from 'react';
import { RiHome2Line, RiBuilding2Line, RiMapPinLine } from 'react-icons/ri'; // Import React Icons
import './ScrollableIcons.css';

const ScrollableIcons = ({ data }) => {
          const [activeTab, setActiveTab] = useState(1); // Initially set the active tab to 1
          const icons = [RiHome2Line, RiBuilding2Line, RiBuilding2Line, RiHome2Line, RiBuilding2Line, RiHome2Line]; // Replace with the desired icons
          const addresses = [
                    'https://clickup.com/assets/home-test/projects.png',
                    'https://clickup.com/assets/home-test/whiteboard.png',
                    'https://clickup.com/assets/home-test/chat.png',
                    'https://clickup.com/assets/home-test/projects.png',
                    'https://clickup.com/assets/home-test/whiteboard.png',
                    'https://clickup.com/assets/home-test/chat.png',

          ]; // Replace with the actual image paths

          const handleTabClick = (index) => {
                    setActiveTab(index);
          };

          return (
                    <>
                              <>
                                        <div className='flex gap-6 justify-center items-start p-5 overflow-x-auto overflow-hidden'>
                                                  {icons.map((Icon, index) => (
                                                            <div
                                                                      key={index}
                                                                      className={`cursor-pointer ${activeTab === index + 1 ? 'text-[#2e2e2e] font-extrabold p-6 border-[1px] border-gray-300 rounded-lg scale-110 shadow-lg shadow-red-100 transition duration-300' : 'font-extrabold text-[#2e2e2e]  border-[1px]  shadow-sm p-6 rounded-lg transition duration-300  hover:scale-95 '}`}
                                                                      onClick={() => handleTabClick(index + 1)}
                                                            >
                                                                      <Icon size={40} />
                                                                      <h1>lorem</h1>
                                                            </div>
                                                  ))}


                                        </div>
                                        <div className='flex items-center justify-center md:pt-1 md:pb-5 gap-3 p-5 md:p-0 md:py-20 '>
                                                  <div className='px-10 py-20'>
                                                            <img
                                                                      src={addresses[activeTab - 1]}
                                                                      alt={`Location ${activeTab}`}
                                                                      width={1000}
                                                                      height={100}
                                                                      className='icon-image rounded-lg shadow-2xl shadow-[#402060]' // Add any additional styling for the image
                                                            />

                                                  </div>
                                                  {/* You can add additional styling or components for the address here */}
                                        </div>
                              </>
                    </>
          );
};

export default ScrollableIcons;
