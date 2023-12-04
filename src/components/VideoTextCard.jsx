"use client"
import React, { useState } from 'react';

function VideoTextCard({ data, bgColor, borderColor, btnColor }) {
  const tabs = Object.keys(data);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div
      id="Videotextcard"
      className={`${bgColor} text-[#3d3d3d] max-h-[1000rem] md:flex md:items-center md:justify-center md:mt-3 md:mb-0 mt-28 py-10 px-5 rounded-3xl md:max-w-[1000rem] md:px-8`}
    >
      <div className="md:mt-[0.6vw] ">
        {tabs.length > 1 ? (
          <div
            id="tab"
            className="flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto"
          >
            {tabs.map((tab) => (
              <h1
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`cursor-pointer text-lg capitalize leading-normal transition duration-300 ${selectedTab === tab
                  ? `${borderColor} border-b-4`
                  : 'border-b-4 border-transparent' // Transparent border for non-active tabs
                  }`}
              >
                {tab}
              </h1>



            ))}
          </div>
        ) : (
          <div id="tab" className="mb-[-3rem]"></div>
        )}

        <div className="md:mt-[0.6vw] md:flex w-full">
          <div className="md:w-[60%] mt-10 w-[100%]">
            <div
              id="video"
              className="rounded-2xl my-6 w-full md:hidden block"
            >
              <video
                src={data[selectedTab].video}
                alt="img"
                autoPlay
                loop
                muted
                width={1000}
                height={100}
                className="md:w-full md:h-full object-cover cursor-pointer w- rounded-xl "
                id="topimg"
              />
            </div>
            <div id="title" className="text-center md:text-left">
              <h1 className="text-4xl font-bold">{data[selectedTab].heading}</h1>
            </div>
            <div
              id="text"
              className="p-2 mt-2 rounded-3xl text-lg font-semibold leading-6"
            >
              {data[selectedTab].body.split('\n').map((i, index) => (
                <p key={index} className="mt-4">
                  {i}
                </p>
              ))}

              {data[selectedTab].points
                ? data[selectedTab].points.map((i, index) => (
                  <p key={index}>{i}</p>
                ))
                : null}
            </div>
            <div id="btns" className="flex items-center justify-center md:block p-3">
              <button
                className={`${btnColor} py-2 px-4 md:py-3 md:px-7 rounded-lg font-bold text-white`}
              >
                Dummybtn
              </button>
            </div>
          </div>
          <div className="md:w-[100%] md:pb-10 md:px-16 hidden md:block">
            <video
              src={data[selectedTab].video}
              alt="img"
              autoPlay
              loop
              muted
              width={400}
              height={100}
              className="md:w-[100%] md:rounded-lg bg mt-9 ml-8 cursor-pointer "
              id="bottomimg"
            />
          </div>
        </div>
      </div>
    </div>




  );
}

export default VideoTextCard;
