// ContactMeCard.jsx
'use client'
const ContactMeCard = () => {
          return (
                    <div className="  h-full  px-5  py-10 ">
                              <div className="bg-gradient-to-r from-purple-300 to-blue-400  flex items-start md:items-center justify-center text-white  rounded-xl  md:px-5 py-8 px-5 shadow-lg font-bold">
                                        <div>
                                                  <h1 className="md:text-4xl text-3xl  font-bold mb-6">Here&apos;s My personal details!</h1>
                                                  <div className="mb-4 flex flex-col gap-6 md:items-center items-center">
                                                            <p className="text-3xl text-center mb-2 flex gap-3 uppercase">

                                                                      Mohd Al Saif

                                                            </p>
                                                            <p className="text-lg mb-2 flex gap-2 items-center">
                                                                      <i className="ri-linkedin-box-fill text-blue-800 text-3xl"></i>                                                                      <p className="ml-2 underline cursor-pointer " onClick={() => window.open('https://www.linkedin.com/in/al-saif-a0400a287/', '_blank')}>
                                                                                LinkedIn
                                                                      </p>
                                                            </p>

                                                            <p className="text-lg mb-2 flex items-center gap-2"><i className="ri-phone-fill text-3xl text-black"></i> or <i className="ri-whatsapp-line text-3xl text-green-400"></i> <span className="  underline cursor-pointer" onClick={() => window.location.href = 'tel:+919005768830'}>+91 9005768830</span></p>

                                                            <p className="text-lg mb-2 flex gap-2 items-center"><i className="ri-mail-open-line text-3xl text-[#2e2e2e]"></i> <span className="  underline cursor-pointer" onClick={() => window.location.href = 'mailto:alsaifsiddiqui1@gmail.com'}>alsaifsiddiqui1@gmail.com</span></p>

                                                            <p className="text-lg  flex gap-2 items-center">
                                                                      <i className="ri-github-fill text-3xl text-blue-gray-900"></i>                                                                      <p className="  ml-2 underline cursor-pointer" onClick={() => window.open('https://github.com/alsaif2812', '_blank')}>
                                                                                GitHub
                                                                      </p>
                                                            </p>
                                                            <p className="text-lg mb-2 flex items-center gap-2">
                                                                      <i className="ri-pass-valid-fill text-3xl text-blue-gray-900"></i>                                                                      <p className="  ml-2 underline cursor-pointer" onClick={() => window.location.href = 'https://alsaif-personal-portfolio-o7g5.vercel.app/'}>
                                                                                Portfolio
                                                                      </p>
                                                            </p>
                                                  </div>


                                        </div>
                              </div>
                    </div>

          );
};

export default ContactMeCard;
