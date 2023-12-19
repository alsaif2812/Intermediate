'use client';
import React, { useMemo, useState } from 'react';
import videoTextCardColors from '../theme/videoTextCardColors';
import { Chip } from '@material-tailwind/react';

function VideoTextCard({ data }) {
    const tabs = Object.keys(data);
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const randInt = useMemo(
        () => Math.floor(Math.random() * videoTextCardColors.length),
        [],
    );
    const theme = useMemo(() => videoTextCardColors[randInt], []);

    return (
        <div
            id="Videotextcard"
            style={{ backgroundColor: theme.primary }}
            className={`text-[#3d3d3d]  w-100 md:mt-3 md:mb-0 mt-28 py-10 px-5 rounded-3xl  md:px-8`}
        >
            {data[selectedTab] && data[selectedTab].top ? (
                <p
                    style={{ color: theme.secondary }}
                    className={`text-2xl font-extrabold`}
                >
                    {data[selectedTab].top}
                </p>
            ) : (
                ''
            )}
            <div className="md:mt-[0.6vw] ">
                {tabs.length > 0 ? (
                    <div
                        id="tab"
                        className="flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto"
                    >
                        {tabs.map((tab) => (
                            <h1
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                style={{
                                    borderColor:
                                        selectedTab === tab
                                            ? theme.secondary
                                            : 'transparent',
                                }}
                                className={`cursor-pointer text-lg capitalize leading-normal transition duration-300 ${
                                    selectedTab === tab ? `border-b-4` : ''
                                }`}
                            >
                                {tab}
                            </h1>
                        ))}
                    </div>
                ) : (
                    <div id="tab" className="mb-[-3rem]"></div>
                )}
            </div>
            <div className="md:mt-[0.6vw] md:flex w-full">
                <div className="md:w-[60%] mt-10 w-[100%]">
                    <div
                        id="video"
                        className="rounded-2xl my-6 md:hidden block"
                    >
                        <video
                            src={data[selectedTab].video}
                            alt="img"
                            autoPlay
                            loop
                            muted
                            width={600}
                            height={100}
                            className=" object-cover cursor-pointer  rounded-xl "
                            id="topimg"
                        />
                    </div>
                    <div id="title" className="text-center md:text-left">
                        <h1 className="text-4xl font-bold">
                            {data[selectedTab].heading}
                        </h1>
                    </div>
                    <div
                        id="text"
                        className="p-2 mt-2 rounded-3xl text-lg font-semibold leading-6"
                    >
                        {data[selectedTab] &&
                            data[selectedTab].body &&
                            data[selectedTab].body
                                .split('\n')
                                .map((i, index) => (
                                    <p key={index} className="mt-4">
                                        {i}
                                    </p>
                                ))}

                        {data[selectedTab].points
                            ? data[selectedTab].points.map((i, idx) => (
                                  <div
                                      key={idx}
                                      className="flex items-start py-2"
                                  >
                                      <div className="mr-2">
                                          <Chip
                                              className="px-2.5 rounded-full"
                                              style={{
                                                  backgroundColor:
                                                      theme.secondary,
                                              }}
                                              value={idx + 1}
                                          />
                                      </div>
                                      <p className="w-full">{i}</p>
                                  </div>
                              ))
                            : null}
                    </div>
                    <div
                        id="btns"
                        className="flex items-center justify-center md:block p-3"
                    >
                        <button
                            style={{ backgroundColor: theme.secondary }}
                            className={`py-2 px-4 md:py-3 md:px-7 rounded-lg font-bold text-white`}
                        >
                            Dummybtn
                        </button>
                    </div>
                </div>
                <div className=" md:pb-10 md:px-16 hidden md:block">
                    <video
                        src={data[selectedTab].video}
                        alt="img"
                        autoPlay
                        loop
                        muted
                        width={950}
                        height={100}
                        className=" md:rounded-lg bg mt-9 ml-8 cursor-pointer "
                        id="bottomimg"
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoTextCard;
