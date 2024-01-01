'use client';

import React, { Fragment } from 'react';

const TeamSection = ({ data }) => {
    return (
        <div
            id="main-team"
            className="  bg-white py-32 md:px-5 md:flex md:flex-col md:items-center px-8"
        >
            <div id="center">
                <div id="upper" className=" text-center py-5 ">
                    <h1 className="md:text-6xl text-5xl font-extrabold text-[#2e2e2e]">
                        All{' '}
                        <span className="gradient-text">teams love Wahni</span>
                    </h1>
                    <p className="text-md mt-3 font-semibold">
                        Get started fast with out-of-the-box solutions.
                    </p>
                    <p>Easily customize to your needs!</p>
                </div>
                <div className=" gap-20 ">
                    <div
                        id="lower"
                        className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-16 "
                    >
                        {data.map((section) => (
                            <Fragment key={section.id}>
                                {section.content.map((item) => (
                                    <div
                                        id="card"
                                        key={item.id}
                                        className="relative md:w-[20rem] w-[20rem] h-[28rem] rounded-2xl overflow-hidden"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: 'cover',
                                        }}
                                    >
                                        <div className="absolute bottom-[45%] left-1/2 transform -translate-x-1/2 bg-white h-1 w-full rotate-[5deg]"></div>

                                        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 md:w-[60vw] w-[100vw] h-[55%] bg-gradient-to-b from-blue-500 to-purple-500 bg-opacity-5 rotate-[5deg] flex-col flex items-center">
                                            {/* Text content */}
                                            <div className="p-4 text-white rotate-[-5deg] w-80">
                                                <h2 className="text-xl font-bold mb-2">
                                                    {item.title}
                                                </h2>
                                                <p className="text-sm">
                                                    {item.description}
                                                </p>
                                                <button className="px-8 py-1 text-[#fff] bg-white bg-opacity-10 my-4 rounded-md">
                                                    Read story{' '}
                                                    <i className="ri-arrow-right-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
