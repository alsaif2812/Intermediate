'use client';
import React from 'react';
import VideoTextCard from '@/components/VideoTextCard';
import cardData from '../../../textContent/manufacturing/cardOne.json';
import card2Data from '../../../textContent/manufacturing/cardTwo.json';
import card3Data from '../../../textContent/manufacturing/cardThree.json';
import Hero from '@/components/Hero';

const Page = () => {
  return (
    <>
      <Hero />
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={card3Data} />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={cardData} />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center   md:px-[18vw]"
      >
        <VideoTextCard data={card2Data} />
      </div>
    </>
  );
};

export default Page;
