"use client"
import { useState } from 'react';
import Hero from '@/components/Hero'
import React from 'react'
import VideoTextCard from '@/components/VideoTextCard';
import cardData from '../../../textContent/retail/cardOne.json';
import card2Data from '../../../textContent/retail/cardTwo.json';
import card3Data from '../../../textContent/retail/cardThree.json';

const page = () => {

  const [selectedTab, setSelectedTab] = useState('POSAwesome');
  const [selectedTab2, setSelectedTab2] = useState('Warehouse stock management');

  const [selectedTab3, setSelectedTab3] = useState(' NeuPOS');

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
                onClick={() => setSelectedTab('Warehouse stock management')}
                className={`${selectedTab === 'Warehouse stock management' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                Warehouse stock management
              </h1>
              <h1
                onClick={() => setSelectedTab('Inventory Forecasting')}
                className={`${selectedTab === 'Inventory Forecasting' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800 `}
              >
Inventory Forecasting
              </h1>
              <h1
                onClick={() => setSelectedTab('Price Lists')}
                className={`${selectedTab === 'Price Lists' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                Price Lists
              </h1>

            </div>
            <VideoTextCard data={cardData[selectedTab]} />
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
                onClick={() => setSelectedTab2('POSAwesome')}
                className={`${selectedTab2 === 'POSAwesome' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                POSAwesome
              </h1>
              <h1
                onClick={() => setSelectedTab2('Custom Invoice Print Format Templates')}
                className={`${selectedTab2 === 'Custom Invoice Print Format Templates' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800 `}
              >
                Custom Invoice Print Format Templates
              </h1>
              <h1
                onClick={() => setSelectedTab2('Coupon Codes and Loyalty')}
                className={`${selectedTab2 === 'Coupon Codes and Loyalty' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                Coupon Codes and Loyalty
              </h1>

            </div>
            <VideoTextCard data={card2Data[selectedTab2]} />
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
                onClick={() => setSelectedTab3(' NeuPOS ')}
                className={`${selectedTab3 === 'NeuPOS' ? 'border-b-4 border-blue-gray-800' : ''} hover:border-b-4 transition duration-500 hover:border-blue-gray-800`}
              >
                NeuPOS
              </h1>

            </div>
            <VideoTextCard data={card3Data[selectedTab3]} />
          </div>
        </div>
      </div>

    </>
  )
}

export default page
