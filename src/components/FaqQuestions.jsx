'use client';
import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import FAQCardData from '../textContent/faq/faq.json';

function AccordionAlwaysOpen() {
          const [open, setOpen] = React.useState({ group: null, index: null });

          const handleOpen = (groupKey, index) => {
                    setOpen((prevOpen) => (
                              prevOpen.group === groupKey && prevOpen.index === index ? { group: null, index: null } : { group: groupKey, index }
                    ));
          };

          return (
                    < >
                              <h2 className="text-5xl font-bold text-blue-700 text-center py-10">
                                        Frequently Asked Questions
                              </h2>
                              <div className=' py-5 px-12 md:px-0 '>

                                        {Object.keys(FAQCardData).map((key) => (
                                                  <div key={key} className="grid grid-cols-12  md:p-0 py-5 ">
                                                            <div className="col-span-12 md:col-span-4 md:flex  md:px-10 lg:px-10 items-start justify-end ">
                                                                      <p className='text-3xl font-semibold font-sans text-purple-300'>{key}</p>
                                                            </div>
                                                            <div className="col-span-12 md:col-span-6 mr-1 md:mr-1 lg:mr-2">
                                                                      {FAQCardData[key].map((item, index) => (
                                                                                <div key={item.title}>
                                                                                          <Accordion open={open.group === key && open.index === index} className=' md:mb-20'>
                                                                                                    <AccordionHeader onClick={() => handleOpen(key, index)} className="capitalize bg-blue-300 bg-opacity-50 flex flex-col items-start gap-1   px-5 md:px-4 rounded-md">
                                                                                                              <p className='text-[#2e2d2d]'>{item.title}<i class="ri-arrow-down-s-line px-3 text-2xl"></i></p>
                                                                                                              <AccordionBody>
                                                                                                                        <p className="text-xl font-medium font-serif text-zinc-500 py-3 rounded-lg capitalize">
                                                                                                                                  {item.body}
                                                                                                                        </p>
                                                                                                              </AccordionBody>
                                                                                                    </AccordionHeader>

                                                                                          </Accordion>
                                                                                </div>
                                                                      ))}
                                                            </div>
                                                  </div>

                                        ))}
                              </div>
                    </>
          );
}

export default AccordionAlwaysOpen;
