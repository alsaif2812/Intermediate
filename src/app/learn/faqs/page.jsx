'use client';
import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import FAQCardData from '../../../textContent/faq/faq.json';

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
      <div className=' py-20 px-12 md:px-0'>

      {Object.keys(FAQCardData).map((key) => (
        <div key={key} className="grid grid-cols-12  md:p-0 py-5">
          <div className="col-span-12 md:col-span-4 md:flex  md:px-10 lg:px-20 items-center justify-left">
            <p className='text-3xl font-semibold font-sans text-purple-300'>{key}</p>
          </div>
          <div className="col-span-12 md:col-span-8 mr-5 md:mr-10 lg:mr-20">
            {FAQCardData[key].map((item, index) => (
              <div key={item.title}>
                <Accordion open={open.group === key && open.index === index} className=''>
                  <AccordionHeader onClick={() => handleOpen(key, index)} className="capitalize bg-blue-gray-50 my-3 px-5 md:px-10 rounded-md">
                    <p className='text-[#2e2d2d]'>{item.title}</p>
                  </AccordionHeader>
                  <AccordionBody>
                    <p className="text-xl font-semibold font-sans text-gray-500 bg-white py-5 rounded-lg capitalize  px-20">
                      {item.body}
                    </p>
                  </AccordionBody>
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
