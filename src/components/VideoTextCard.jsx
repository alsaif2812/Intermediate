import React, { useState } from 'react';
function VideoTextCard({ data }) {
  const tabs = Object.keys(data);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div
      id="hero"
      className="bg-blue-500 bg-opacity-20 max-h-[100rem] md:flex md:items-center md:justify-center md:mt-3 mb-[-5rem] md:mb-0  mt-28 py-10 px-5 rounded-3xl md:max-w-[1000rem] md:px-8 "
    >
      <div className="md:mt-[0.6vw]">
        {tabs.length > 1 ? (
          <div
            id="tab"
            className="flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto"
          >
            {tabs.map((tab) => (
              <h1
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`${
                  selectedTab === tab ? 'border-b-4 border-blue-gray-800' : ''
                } hover:border-b-4 transition duration-500 hover:border-blue-gray-800 cursor-pointer`}
              >
                {tab}
              </h1>
            ))}
          </div>
        ) : null}

        <div className="md:mt-[0.6vw] md:flex  w-full">
          <div className=" ">
            <div id="video" className="rounded-2xl md:p-4 md:mt-3 mt-6 p-10">
              <video
                src={data[selectedTab].video}
                alt="img"
                autoPlay
                loop
                muted
                width={1000}
                height={100}
                className="md:w-full md:h-full object-cover cursor-pointer w- rounded-xl bg-black md:hidden block "
                id="topimg"
              />
            </div>
            <div id="title" className=" text-center md:text-left mt-10 ">
              <h1 className="text-4xl font-bold text-[#212121]">
                {data[selectedTab].heading}
              </h1>
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
                ? data[selectedTab].points.map((i, index) => <p key={index}>{i}</p>)
                : null}
            </div>
            <div
              id="btns"
              className="flex items-center justify-center md:block p-3"
            >
              <button className="bg-blue-300 py-2 px-4 md:py-3 md:px-7 rounded-lg font-bold text-white">
                Dummybtn
              </button>
            </div>
          </div>
          <div className="md:w-100vw bgblack md:pb-10 md:px-16">
            <video
              src={data[selectedTab].video}
              alt="img"
              autoPlay
              loop
              muted
              width={100}
              height={100}
              className="md:w-[100%] md:h-full rounded-2xl bg mt-9 ml-8 cursor-pointer   md:block hidden"
              id="bottomimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoTextCard;
