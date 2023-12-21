'use client'
import React, { useState } from 'react';
import './ScrollableIcons.css';

const ScrollableIcons = ({ data }) => {
          const [selectedIcon, setSelectedIcon] = useState(data);

          return (
                    <div>
                              <div className="md:mt-[0.6vw]">
                                        <div
                                                  id="icon"
                                                  className="flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto"
                                        >
                                                  <div
                                                            onClick={() => setSelectedIcon(data)}
                                                            className={`cursor-pointer text-lg capitalize leading-normal transition duration-300 ${selectedIcon.id === data.id ? 'border-b-4' : ''
                                                                      }`}
                                                  >
                                                            <span dangerouslySetInnerHTML={{ __html: data.html }} />
                                                  </div>
                                        </div>
                              </div>
                              <div className="md:mt-[0.6vw] md:flex w-full">
                                        <div className="mt-10">
                                                  <div className="rounded-2xl my-6 md:hidden block">
                                                            <img
                                                                      src={data.path}
                                                                      alt={`Image for ${data.name}`}
                                                                      width={600}
                                                                      height={100}
                                                                      className="object-cover cursor-pointer w-full rounded-xl"
                                                                      onError={(e) => {
                                                                                console.error('Image failed to load:', e.target.src);
                                                                                e.target.style.display = 'none'; // Hide the image if it fails to load
                                                                      }}
                                                            />
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
};

export default ScrollableIcons;
