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
                                                            <div className='flex flex-col md:flex-row gap-3 md:gap-6 items-center'>
                                                                      <i className="ri-briefcase-4-line text-3xl text-[#535353]"></i>
                                                                      <h1 className='text-2xl font-extrabold text-[#535353]'>Junior UI/UX Designer</h1>
                                                            </div>
                                                            <p className='flex items-center text-xl font-bold mt-4 md:mt-0 text-[#535353]'>
                                                                      <i className="ri-map-pin-line text-xl "></i>Trivandrum
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
                                                            <div className='flex gap-3'>
                                                                      <button className='mt-4 md:mt-0 py-3 px-6 bg-blue-700 text-white text-sm font-bold rounded-lg'>
                                                                                Apply Now
                                                                      </button>
                                                                      <button onClick={togglePopup} className='mt-4 md:mt-0 py-3 px-6 bg-[#f5f5f5] text-[#2e2e2e] text-sm font-bold rounded-lg'>Read Description</button>
                                                            </div>
                                                  </div>
                                                  {showPopup && (
                                                            <div className="page-dim-overlay  py-10 ">
                                                                      {/* Popup Content */}
                                                                      <div className="popup-content  p-5 rounded-md" >
                                                                                {/* Add your job description here */}
                                                                                <div className=' w-full'>
                                                                                          <h1 className=' pb-2 font-semibold text-gray-700  text-4xl text-center mb-5'>Junior UI/UX Engineer</h1>
                                                                                          <strong className='my-3 pb-5'>Wahni IT Solutions is looking for a Project Manager (Preferably Malayalam Speaking) to join our team and to drive ERPNext implementation for our clients, the job location is based in Thripayar, near Thrissur. </strong>The role of the Project Manager is to execute the project and deliver the desired outcomes in an effective and professional manner in a defined time period. You will be responsible for the project planning, execution, control; and project closure, once all the identified and agreed scope of work is implemented and tested for quality.
                                                                                          <p className='mt-2 text-lg font-semibold'>Your responsibilities would include, but not be limited to, the following:</p>
                                                                                          <ul className='my-3 list-disc list-inside'>
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
                                                                                          <p className='mt-2 text-lg font-semibold my-3' >Required/Preferred Skill Set:</p>
                                                                                          <ul className='my-3 list-decimal list-inside'>
                                                                                                    <li>A Bachelor’s and/or Master’s degree in Computer Science, or Computer Applications, or Information Systems, or any other engineering degree, with at least 4 years of work experience, including a minimum of 1-2 years in a project management/team lead role;</li>
                                                                                                    <li>Hands-on experience of managing projects such as implementation of ERP or similar migration projects;</li>
                                                                                                    <li>Knowledge or exposure to SDLC and quality processes will be an added advantage;</li>
                                                                                                    <li>Knowledge or hands-on experience with business process mapping, project planning, execution and control; sound understanding of ERPs;</li>
                                                                                                    <li>Knowledge or exposure to cloud infrastructure and migration, and integration with various software solutions;</li>
                                                                                                    <li>Excellent verbal and written communication skills; be able to communicate effectively at all levels of the Organization, including with senior management;</li>
                                                                                                    <li>Ability to handle changing priorities, deal with ambiguity and use good judgment in stressful situations; ability to take on-time decisions even in the face of complexity, balancing systematic analysis with decisiveness.</li>

                                                                                          </ul>
                                                                                </div>



                                                                                {/* Apply Now button */}
                                                                      </div>
                                                            </div>
                                                  )}
                                        </div>

                                        {/* Popup */}

                              </div>
                    </>
          );
};

export default JobCard;
