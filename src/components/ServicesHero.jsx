// YourComponent.js
import React from 'react'
import Frappe from './Frappe';

const ServicesHero = ({ data }) => {
          const {
                    title,
                    subtitle,
                    buttonText
          } = data.maintext;

          const renderLines = (text) => {
                    return text.split('\n').map((line, index) => (
                              <React.Fragment key={index}>
                                        {line}
                                        <br />
                              </React.Fragment>
                    ));
          };
          return (
                    <div id="maintext2" className=' pt-8 md:pt-10  w-full flex flex-col items-center justify-center gap-6'>
                              <h1 className='text-5xl md:text-7xl font-extrabold text-center gradient-text'>{renderLines(title)}</h1>
                              <p className='text-base text-center md:text-xl text-[#3f3e3e]'> <strong>{renderLines(subtitle)}</strong></p>
                              <button className='mt-4 bg-gradient-to-r from-[#4695F0]  to-[#FC42CE]  px-6 py-3 md:py-3 md:px-6 md:text-lg rounded-md font-bold text-white shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300'>
                                        {buttonText} <i className="ri-arrow-right-line"></i>
                              </button>
                              <Frappe />
                    </div>
          );
};

export default ServicesHero;
