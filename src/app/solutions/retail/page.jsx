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
        <VideoTextCard data={cardData} />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={card2Data} />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={card3Data} />
      </div>
    </>
  );
};

export default Page;
