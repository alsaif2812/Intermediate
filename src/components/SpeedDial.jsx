"use client"
import React from 'react';
import { IconButton, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/outline";

const SpeedDialComponent = () => {
          return (
                    <div >
                              <SpeedDial className=''>
                                        <SpeedDialHandler>
                                                  <IconButton size="lg" className='rounded-full bg-blue-400'>
                                                            <PlusIcon className="h-5 w-4 transition-transform group-hover:rotate-[45deg] duration-150 " />
                                                  </IconButton>
                                        </SpeedDialHandler>
                                        <SpeedDialContent>
                                                  <SpeedDialAction>
                                                            <i className="ri-whatsapp-line h-5 w-5"></i>
                                                  </SpeedDialAction>
                                                  <SpeedDialAction>
                                                            <i className="ri-customer-service-line h-5 w-5"></i>
                                                  </SpeedDialAction>
                                                  <SpeedDialAction>
                                                            <i className="ri-mail-line h-5 w-5"></i>
                                                  </SpeedDialAction>
                                        </SpeedDialContent>
                              </SpeedDial>
                    </div>
          );
}

export default SpeedDialComponent;
