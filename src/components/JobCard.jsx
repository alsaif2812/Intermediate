"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const JobCard = () => {
          const [showPopup, setShowPopup] = useState(false);

          const togglePopup = () => {
                    setShowPopup(!showPopup);
          };

          return (
                    <>
                              <div id="jobmain" className='px-20 py-10 flex flex-col items-center'>
                                        <div id="jobcard" className='w-full md:max-w-[70%] rounded-xl border-2 border-gray-500 mt-5 py-5 px-10'>
                                                  <div id="upper" className='w-full flex flex-col md:flex-row gap- items-center justify-between'>
                                                            <div className='flex flex-col md:flex-row gap-3 md:gap-20 items-center'>
                                                                      <i className="ri-briefcase-4-line text-3xl text-[#535353]"></i>
                                                                      <h1 className='text-2xl font-extrabold text-[#535353]'>Junior UI/UX Designer</h1>
                                                            </div>
                                                            <p className='flex items-center text-xl font-bold mt-4 md:mt-0 text-[#535353]'>
                                                                      <i className="ri-map-pin-line text-2xl "></i>Trivandrum
                                                            </p>
                                                  </div>
                                                  <div id="lower" className='w-full pt-6 md:pt-14 flex flex-col md:flex-row items-center justify-between'>
                                                            <div id="btns" className='flex flex-col md:flex-row gap-5 font-bold'>
                                                                      <button className='bg-[#2e2e2e] text-[#535353] py-2 px-5 rounded-lg bg-opacity-25'>
                                                                                Fulltime
                                                                      </button>
                                                                      <button className='bg-[#2e2e2e] text-[#535353] py-2 px-5 rounded-lg bg-opacity-25'>
                                                                                Design
                                                                      </button>
                                                                      <button className='bg-[#2e2e2e] text-[#535353] py-2 px-5 rounded-lg bg-opacity-25'>
                                                                                Remote
                                                                      </button>
                                                            </div>
                                                            <button onClick={togglePopup} className='mt-4 md:mt-0 py-3 px-6 bg-blue-700 text-white text-sm font-bold rounded-lg'>Read more</button>
                                                  </div>
                                        </div>

                                        {/* Popup */}
                                        {showPopup && (
                                                  <div className="page-dim-overlay">
                                                            {/* Popup Content */}
                                                            <div className="popup-content " >
                                                                      {/* Add your job description here */}
                                                                      <div className=' w-full'>
                                                                                <strong className='my-3 pb-5'>Wahni IT Solutions is looking for a Project Manager (Preferably Malayalam Speaking) to join our team and to drive ERPNext implementation for our clients, the job location is based in Thripayar, near Thrissur. </strong>The role of the Project Manager is to execute the project and deliver the desired outcomes in an effective and professional manner in a defined time period. You will be responsible for the project planning, execution, control; and project closure, once all the identified and agreed scope of work is implemented and tested for quality.
                                                                                <p>Your responsibilities would include, but not be limited to, the following:</p>
                                                                                <ul className='my-3'>
                                                                                          <li>Understanding the project scope, schedule, deliverables; and working closely with internal stakeholders to recognize their needs and expectations</li>
                                                                                          <li>End to end program management – project initiation, planning, execution, control, and closure;</li>
                                                                                          <li>Collaborating effectively with internal stakeholders, both in-person and through remote working models as needed;</li>
                                                                                          <li>Transition and change management – pre, during and post project implementation;</li>
                                                                                          <li>Partner relationship management – maintaining a healthy working relationship without compromising on deliverables and outcomes;</li>
                                                                                          <li>Project scope and schedule management;</li>
                                                                                          <li>Driving periodic project reviews and mitigating risks with due diligence and a data driven approach;</li>
                                                                                          <li>Escalating project issues to the senior management when needed;</li>
                                                                                          <li>Contributing to the delivery of all aspects of the project and services: controlling and reporting on project activities, systems and information security;</li>
                                                                                          <li> Driving accountability and continual service improvements - reviewing support practices, performing trend analysis on key operational metrics, ensuring a high focus on end-to-end project delivery;</li>
                                                                                          <li>Reporting, analyzing, and resolving issues related to the implementation, stakeholders, and project operations that may impact service quality; ensuring that stakeholders’ questions and problems are resolved properly and quickly;</li>
                                                                                          <li> Improving support experience for quality results by studying, evaluating, and redesigning processes, establishing and communicating service metrics, monitoring and analyzing results, and implementing changes;</li>
                                                                                          <li> Using and creating knowledge base articles based on new product information, support incidents, and/or common or critical issues;</li>
                                                                                          <li> Implementing process optimization, improvements, and modernization initiatives where appropriate;</li>
                                                                                          <li> Identifying process inefficiencies and compliance issues, and implementing strategic solutions;</li>
                                                                                          <li>Participating actively and collaborating within the IT team, providing feedback on current day to day activities, and recommending improvements;</li>

                                                                                </ul>
                                                                      </div>

                                                                      {/* Close button */}
                                                                      <div className="close-button" onClick={togglePopup}>
                                                                                Close
                                                                      </div>

                                                                      {/* Apply Now button */}
                                                                      <button className='mt-4 md:mt-0 py-3 px-6 bg-blue-700 text-white text-sm font-bold rounded-lg'>
                                                                                Apply Now
                                                                      </button>
                                                            </div>
                                                  </div>
                                        )}
                              </div>
                    </>
          );
};

export default JobCard;
