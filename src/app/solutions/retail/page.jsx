'use client';
import Hero from '@/components/Hero';
import React from 'react';
import VideoTextCard from '@/components/VideoTextCard';
import cardData from '../../../textContent/retail/cardOne.json';
import card2Data from '../../../textContent/retail/cardTwo.json';
import card3Data from '../../../textContent/retail/cardThree.json';

const Page = () => {
  return (
    <>
      <Hero />

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={cardData} bgColor="bg-[#898AA6] bg-opacity-30" />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={card2Data} bgColor="bg-[#FFF8EA] bg-opacity-30" />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={card3Data} bgColor="bg-[#FF8AAE] bg-opacity-30" />
      </div>
    </>
  );
};

export default Page;
