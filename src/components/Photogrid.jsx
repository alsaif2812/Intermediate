import React from 'react'

const Photogrid = () => {
          return (
                    <div>
                              <div id="photogrid" className=" pt-20 md:px-[0vw] px-[5vw] bg-gray-100">
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
                                        <div className="photo-grid mt-10 grid gap-4 grid-cols-4 md:grid-cols-5 px-56 py-20 ">
                                                  {/* Placeholder for photos */}
                                                  <img src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg" alt="Photo 1" className="w-full h-full object-cover rounded-md" />
                                                  <img src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg" alt="Photo 2" className="w-full h-full object-cover rounded-md" />
                                                  <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" alt="Photo 3" className="w-full h-full object-cover rounded-md" />
                                                  <img src="https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg" alt="Photo 4" className="w-full h-full object-cover rounded-md" />
                                                  <img src="https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg" alt="Photo 5" className="w-full h-full object-cover rounded-md" />
                                                  <img src="https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg" alt="Photo 6" className="w-full h-full object-cover rounded-md" />
                                                  <img src="https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg" alt="Photo 7" className="w-full h-full object-cover rounded-md" />
                                                  <img src="https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg" alt="Photo 8" className="w-full h-full object-cover rounded-md" />
                                                  <img src="https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg" alt="Photo 9" className="w-full h-full object-cover rounded-md" />
                                                  <img src="https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg" alt="Photo 10" className="w-full h-full object-cover rounded-md" />
                                                  {/* Add more images as needed */}
                                        </div>                              </div>
                    </div>
          )
}

export default Photogrid
