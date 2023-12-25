"use client"
import React, { useState } from 'react';
import Modal from 'react-modal';

const Photogrid = ({ photos }) => {
          const [modalIsOpen, setModalIsOpen] = useState(false);
          const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

          const openModal = (index) => {
                    setSelectedPhotoIndex(index);
                    setModalIsOpen(true);
          };

          const closeModal = () => {
                    setModalIsOpen(false);
          };

          const navigatePhotos = (direction) => {
                    const newIndex = direction === 'next' ? selectedPhotoIndex + 1 : selectedPhotoIndex - 1;

                    if (newIndex >= 0 && newIndex < photos.length) {
                              setSelectedPhotoIndex(newIndex);
                    }
          };

          return (
                    <div>
                              <div id="photogrid" className="pt-20 md:px-[0vw] px-[5vw] bg-gray-100">
                                        {/* ... your existing content ... */}
                                        <div id="texts-gallery" className=' text-center'>
                                                  <p className=" font-semibold md:text-sm tracking-widest uppercase text-purple-500">
                                                            Gallery
                                                  </p>
                                                  <h1 className=" md:text-6xl text-4xl  mt-[2vw] md:my-[1.4vw] font-bold text-[#212121]">
                                                            Life at Wahni.
                                                  </h1>
                                                  <p className="md:my-0 my-[5vw]  md:text-xl text-sm md:mt-0 mt-[2vw]  text-gray-500">
                                                            San Diego HQ, United States, Canada, Ireland, United
                                                            Kingdom, Australia, and across the globe.
                                                  </p>
                                                  <button className=" md:mt-[1.6vw] bg-[#4735b8] px-[5vw] py-[3vw] mx-[23vw] md:rounded-md rounded-md font-bold text-white tracking-widest shadow-lg hover:shadow-2xl transition duration-300 md:px-[1vw] md:py-[0.8vw]">
                                                            Join Our Team
                                                  </button>
                                        </div>
                                        <div className="photo-grid mt-10 md:grid gap-4 flex overflow-x-auto  md:grid-cols-5 md:px-56 md:py-20">
                                                  {photos.map((photo, index) => (
                                                            <img
                                                                      key={index}
                                                                      src={photo}
                                                                      alt={`Photo ${index + 1}`}
                                                                      className="w-full h-full object-cover rounded-md cursor-pointer"
                                                                      onClick={() => openModal(index)}
                                                            />
                                                  ))}
                                        </div>
                              </div>

                              <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        contentLabel="Photo Modal"
                                        className="modal"
                                        overlayClassName="overlay"
                              >
                                        <div>
                                                  <div id="close" onClick={closeModal} className='flex items-center justify-end cursor-pointer'><i class="ri-close-fill text-5xl text-white font-extrabold"></i></div>
                                        </div>
                                        <img src={photos[selectedPhotoIndex]} alt={`Photo ${selectedPhotoIndex + 1}`} className="w-full h-full object-cover" />


                                        <div className='flex justify-between items-center font-extrabold text-white'> <button onClick={() => navigatePhotos('prev')}><i class="ri-arrow-left-fill text-5xl"></i></button>
                                                  <button onClick={() => navigatePhotos('next')}><i class="ri-arrow-right-fill text-5xl"></i></button></div>
                              </Modal>
                    </div>
          );
};

export default Photogrid;
