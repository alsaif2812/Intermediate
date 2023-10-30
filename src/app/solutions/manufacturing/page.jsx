'use client';
import React, { useState } from 'react';
import VideoTextCard from '@/components/VideoTextCard';
import cardData from '../../../textContent/manufacturing/cardOne.json';
import card2Data from '../../../textContent/manufacturing/cardTwo.json';
import card3Data from '../../../textContent/manufacturing/cardThree.json';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';


const Page = () => {
  const [selectedTab, setSelectedTab] = useState('workOrder');
  const [selectedTab2, setSelectedTab2] = useState('Quality Inspection');
  const [selectedTab3, setSelectedTab3] = useState('Multi Level BOM');
  return (
    <>
  
      <Hero />
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >

        <div
          id="hero"
          className="bg-blue-500 bg-opacity-20 max-h-[100rem] md:flex md:items-center md:justify-center mb-16 mt-10 py-10 px-5 rounded-3xl md:max-w-[100vw] md:px-8 "
        >
          <div className="md:mt-[0.6vw]">
            <div
              id="tab"
              className="flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto"
            >
              <h1
                onClick={() => setSelectedTab3('Multi Level BOM')}
                className={`${selectedTab3 === 'Multi Level BOM' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                Multi Level BOM
              </h1>

            </div>
            <VideoTextCard data={card3Data[selectedTab3]} />
          </div>
        </div>
      </div>
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >

        <div
          id="hero"
          className="bg-blue-500 bg-opacity-20 max-h-[100rem] md:flex md:items-center md:justify-center mb-16 mt-10 py-10 px-5 rounded-3xl md:max-w-[100vw] md:px-8 "
        >
          <div className="md:mt-[0.6vw]">
            <div
              id="tab"
              className="flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto"
            >
              <h1
                onClick={() => setSelectedTab('workOrder')}
                className={`${selectedTab === 'workOrder' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                Work Order
              </h1>
              <h1
                onClick={() => setSelectedTab('productionPlan')}
                className={`${selectedTab === 'productionPlan' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800 `}
              >
                Production Plan
              </h1>
              <h1
                onClick={() => setSelectedTab('jobCard')}
                className={`${selectedTab === 'jobCard' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                Job Card
              </h1>
              <h1
                onClick={() => setSelectedTab('downtimeEntry')}
                className={`${selectedTab === 'downtimeEntry' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                Downtime Entry
              </h1>
            </div>
            <VideoTextCard data={cardData[selectedTab]} />
          </div>
        </div>
      </div>
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center   md:px-[18vw]"
      >

        <div
          id="hero"
          className="bg-blue-500 bg-opacity-20 max-h-[100rem] md:flex md:items-center md:justify-center mb-16 mt-10 py-10 px-5 rounded-3xl md:max-w-[100vw] md:px-8 "
        >
          <div className="md:mt-[0.6vw]">
            <div
              id="tab"
              className="flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto"
            >
              <h1
                onClick={() => setSelectedTab2('Quality Inspection')}
                className={`${selectedTab2 === 'Quality Inspection' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                Quality Inspection
              </h1>
              <h1
                onClick={() => setSelectedTab2('Quality Inspection Summary Report')}
                className={`${selectedTab2 === 'Quality Inspection Summary Report' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800 `}
              >
                Quality Inspection Summary Report
              </h1>

            </div>
            <VideoTextCard data={card2Data[selectedTab2]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;