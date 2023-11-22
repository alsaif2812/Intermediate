<<<<<<< HEAD
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
=======
"use client"
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function AccordionAlwaysOpen() {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div id="text" className="w-full flex items-center justify-center md:mt-20 my-10 md:p-0 px-5">
        <h1 className="text-4xl font-bold text-purple-300">Frequently Asked Questions (FAQ&apos;s )</h1>
      </div>
      <div id="mainfaq" className="max-h-[1000vw]  md:w-full md:mx-auto md:mb-20  md:p-10">

        <div className="md:w-full md:p-0 p-5 " id="firstfaq">

          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">General</h1>
            <Accordion open={alwaysOpen} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl  my-3">
              <AccordionHeader onClick={handleAlwaysOpen} className="capitalizet">What is open source-software?</AccordionHeader>
              <AccordionBody>
                Open-source software is computer software whose source code is available openly on the internet and programmers can modify it to add new features and capabilities without any cost. Here the software is developed and tested through open collaboration. This software is managed by an open-source community of developers. It provides community support, as well as commercial support, is available for maintenance.
              </AccordionBody>
            </Accordion>
          </div>
          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">Security</h1>

            <Accordion open={open === 1} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl my-3">
              <AccordionHeader onClick={() => handleOpen(1)}>
                If it is open-source and available in the market, why are you charging for the open-source solutions
              </AccordionHeader>
              <AccordionBody>
                We are charging for our efforts only. You can download and use the software yourself. But if you require our help on installation, implementation, support, customization, etc, we will charge for the same based on our efforts.
              </AccordionBody>
            </Accordion>
          </div>
          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">Customization</h1>

            <Accordion open={open === 2} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl my-3">
              <AccordionHeader onClick={() => handleOpen(2)}>
                Is the open-source solutions are secure? As the source code is available to everyone,is it vulnerable to cyber-attack?
              </AccordionHeader>
              <AccordionBody>
                As far as security is concerned, the big win in using open source software is transparency. The problems are likely to be discovered faster and the fixes will be released fast. The update cycle of open source solutions is shorter compared to proprietary solutions. High visibility creates an urgency to fix issues, and may even lead to better code in the first place.
              </AccordionBody>
            </Accordion>
          </div>
          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">ERPNext</h1>
            <Accordion open={open === 3} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl my-3">
              <AccordionHeader onClick={() => handleOpen(3)}>
                What happened if the customer required customization? Willit affect the upgrades?
              </AccordionHeader>
              <AccordionBody>
                As a company, Wahni follows strict rules when it comes to customization. Our development team won’t change the core code of the software so the customizations won’t affect the upgrades. We will create separate apps for the customizations required and will be integrated into the core code. When an upgrade is required, we will do plug n play of custom apps and will upgrade the software.
              </AccordionBody>
            </Accordion>
          </div>
          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">Host</h1>

            <Accordion open={open === 4} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl my-3">
              <AccordionHeader onClick={() => handleOpen(4)}>
                Can I host the ERP on-premise? Why are you prefer the cloud server?
              </AccordionHeader>
              <AccordionBody>
                In today’s world, cyber-attacks are one of the main issues enterprises are facing. Cloud Datacenters employ security measures beyond the affordability of most businesses, therefore your data is often safer in the cloud than on a server in your offices. You can access your applications anytime and anywhere via a Mobile APP/We browser from any device. You don’t need to worry about the maintenance of the hardware it resides on, compatibility and upgrades are taken care of by the cloud service provider. Also, cloud technologies provide greater md:flexibility and can easily scale to meet demand, for example adding and scaling back companies / users.
              </AccordionBody>
            </Accordion>
          </div>

        </div>
        <div className="md:w-full md:p-0 p-5" id="secondfaq">
          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">Importance</h1>

            <Accordion open={open === 5} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl my-3 ">
              <AccordionHeader onClick={() => handleOpen(5)} className="capitalizet">Why do I need an ERP?</AccordionHeader>
              <AccordionBody>
                ERP solution helps businesses to find more ways to grow with a satisfied customer base in the competitive market. You can manage your operations and departments in a centralized integrated system. It will help the companies to streamline their business process, better accounting and financial reporting, faster response time to customers, reduce the unwanted operational costs effectively, increase productivity, Mobility and md:flexibility. It will provide accurate real-time information that will help the stakeholders to make a good business decisions efficiently and effectively. Also, it will help the enterprises to secure the information about their business completely. If your employees are spending more time on manual tasks or if you are not able to make the business decision fast, then this is the right time to find an ERP solution for your business.
              </AccordionBody>
            </Accordion>
          </div>
          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">Time</h1>
            <Accordion open={open === 6} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl my-3">
              <AccordionHeader onClick={() => handleOpen(6)}>
                Howlong it will take for an ERP Implementation?
              </AccordionHeader>
              <AccordionBody>
                Usually, it will take 60-90 days to complete an ERP implementation. This includes installation, data migration, configuration, customization, training, testing, and parallel run. This also depends upon the client providing data, time to complete testing, etc. We will create an SRS (Software Requirement Specification) document before starting the implementation and we will define the timeline on the document.
              </AccordionBody>
            </Accordion>
          </div>
          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">Migration</h1>
            <Accordion open={open === 7} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl my-3">
              <AccordionHeader onClick={() => handleOpen(7)}>
                Can we migrate the historical data from the legacy software?        </AccordionHeader>
              <AccordionBody>
                We will migrate all the master data from the existing software like the chart of accounts, customer list, supplier list, employee list, item list, BOM list, etc. Also during the final migration, we will migrate the outstanding invoices of customers and suppliers along with the opening balances. We have some API integrations available for migrating the historical data if it is very much relevant to the customer.
              </AccordionBody>
            </Accordion>
          </div>
          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">Cost</h1>
            <Accordion open={open === 8} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl my-3">
              <AccordionHeader onClick={() => handleOpen(8)}>
                What is the cost of the ERP solution?
              </AccordionHeader>
              <AccordionBody>
                As we are providing an open-source ERP solution, we are not charging based on the companies or users. We are charging only for our efforts to do the implementation. Here you are not paying any amount for the new users or new companies. There will be a one-time implementation cost. We are also providing AMC to our customers but the AMCs are not mandatory.
              </AccordionBody>
            </Accordion>
          </div>
          <div id="category" className="md:flex items-center gap-5">
            <h1 className="text-2xl font-extrabold text-purple-100">Integration</h1>
            <Accordion open={open === 9} className="bg-[#F4F0FE] w-full py-2 px-6 rounded-xl my-3">
              <AccordionHeader onClick={() => handleOpen(9)}>
                Can we integrate your ERP with any other third-party software or hardware?
              </AccordionHeader>
              <AccordionBody>
                Yes. Our solutions can be integrated with biometric machines, marketplaces, Payment gateways, Google calendars, third-party backup servers, etc.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
>>>>>>> f76af97b5a10d35d933426642f02c4d39fbfb4f2
    </>
  );
}

export default AccordionAlwaysOpen;
