import React from 'react';

const YourComponent = ({ data }) => {
          return (
                    <div id="main" className="flex flex-row md:flex-col gap-6 p-5 pt-20 md:pt-0 md:p-8">
                              <h1 className="hidden md:block text-5xl font-bold leading-10 tracking-wider mb-10 text-[#212121]  text-center">
                                        Core values <br />
                                        <p className="mt-3 leading-3 font-semibold text-sm uppercase text-purple-600 mb-1">
                                                  & core habits
                                        </p>
                              </h1>
                              <div className="md:grid flex  md:grid-cols-3 mx-auto gap-x-12  gap-y-10 overflow-x-auto overflow-hidden ">
                                        {data.map((section) => (
                                                  <React.Fragment key={section.id}>
                                                            {section.content.map((item) => (
                                                                      <div
                                                                                key={item.id}
                                                                                className="md:max-w-[18vw]  w-80 p-5 rounded-2xl border-l-4 border-purple-400 shadow-md hover:shadow-2xl transition duration-300"
                                                                                style={{ flex: "0 0 auto" }}
                                                                      >
                                                                                <p className="text-4xl font-bold text-purple-400">{item.number}</p>
                                                                                <h1 className="text-5xl font-bold text-[#212121] mt-4">{item.title}</h1>
                                                                                <p className="uppercase text-purple-700 mt-6 text-lg font-semibold">
                                                                                          {item.subtitle}
                                                                                </p>
                                                                                <h3 className="mt-2 md:mt-4 md:text-[1vw] text-sm font-[600]">{item.details}</h3>
                                                                      </div>
                                                            ))}
                                                  </React.Fragment>
                                        ))}
                              </div>

                    </div>

          );
};

export default YourComponent;
