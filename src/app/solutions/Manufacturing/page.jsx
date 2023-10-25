'use client';
import React, { useState } from 'react';
import VideoTextCard from '@/components/VideoTextCard';
import cardsData from '../../../textContent/manufacturing/cardOne.json'
import Hero from '@/components/Hero';


const Page = () => {
  const [selectedTab, setSelectedTab] = useState('workOrder');
  return (
    <>
    <Hero/>
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        
        <div
          id="hero"
          className="bg-blue-500 bg-opacity-20 max-h-[100rem] md:flex md:items-center md:justify-center mb-16 mt-10 py-10 px-5 rounded-3xl md:max-w-[100vw] md:px-8"
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
            <VideoTextCard data={cardsData[selectedTab]}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
