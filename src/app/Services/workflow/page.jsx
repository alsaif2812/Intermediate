"use client"
import React from 'react'
import Head from 'next/head'
import './workflow.css'
import Image from 'next/image'
import img from '../../../../public/images/blog2.webp'
import VideoTextCard from '@/components/VideoTextCard'
import Card1Data from '../../../textContent/workflow/Card1Data.json'
import Card2Data from '../../../textContent/workflow/Card2Data.json'
import Card3Data from '../../../textContent/workflow/Card3Data.json'
import Card4Data from '../../../textContent/workflow/Card4Data.json'
import Rocket from '../../../components/Rocket'
const metadata = {
  title: "Workflow Automation — Wahni IT Solutions",
  description: "we are experienced in workflow automation in Kerala Legislative Assembly through ICFOSS a governmental agency supporting free and open-source software.",
  keyword: "Workflow Automation,wahni it,erpnext"

}

const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
      </Head>
      <div id="mainworkflow" className='w-full py-5 md:pt-6  pt-16 px-6 flex flex-col items-center justify-center '>
        <div id="maintext3" className='w-full flex flex-col items-center justify-center gap-6'>
          <h1 className='text-6xl md:text-7xl font-extrabold text-center gradient-text'>Work smarter,
            <br />  not harder</h1>
          <p className='text-lg text-center md:text-xl '> <strong>Design custom workflows, </strong> <br /> automate complex processes, <br /> and unlock the full power of your business data.
          </p>
          <button className='mt-4 bg-gradient-to-r from-[#4695F0]  to-[#FC42CE]  px-6 py-3 md:py-3 md:px-6 md:text-lg rounded-md font-bold text-white shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300'>
            Get Started, it&apos;s Free <i className="ri-arrow-right-line"></i>
          </button>

          <p className='opacity-70 text-gray-800 font-semibold'><i className="ri-trophy-fill text-yellow-600 text-xl mx-1"></i> Frappe Certified Partner</p>
        </div>
        <div id="card" className='bg-[#D2E0FB] w-full py-5 px-5 flex items-center  justify-center flex-col md:flex-row mt-20 md:mt-20 rounded-xl md:rounded-2xl md:w-[60%] md:py-20'>
          <div className='md:hidden'>
            <Image
              src={img}
              alt='img'
              height={100}
              width={500}
              className='my-5 rounded-lg'



            />
          </div>
          <div className='text-center md:text-left  md:w-96'>
            <p className='text-blue-400 font-bold text-xl '>ERPNext</p>
            <h1 className='text-3xl font-bold text-[#2e2e2e] pb-10 pt-5'>Imagine a world where tasks
              flow seamlessly, deadlines are
              met effortlessly, and repetitive
              work becomes a distant
              memory.</h1>
            <h3 className='text-xl font-semibold text-gray-900 text-opacity-90'>This isn't a utopian dream, it's the reality of workflow automation with ERPNext, the open-source enterprise resource planning platform that's transforming businesses across industries.</h3>
          </div>
          <div id="imng" className='md:block hidden'>
            <Image
              src={img}
              alt='img'
              height={100}
              width={600}
              className='my-5 rounded-lg'



            />          </div>
        </div>
      </div>
      <div className=' px-4'>
        <h1 className='md:text-4xl text-2xl font-bold md:pb-28 md:pt-20 pt-20 pb-10 text-center'>Let's dive deeper into how workflow automation <br />  with ERPNext can benefit specific departments:
        </h1>
        <div className="p-1 md:flex md:items-center md:justify-center md:px-[18vw] mb-5">
          <VideoTextCard data={Card1Data} bgColor="bg-[#D2E0FB] bg-opacity-40" btnColor="bg-[#528ff6]" borderColor="hover:border-b-4 border-[#528ff6]" />
        </div>
        <div className="p-1 md:flex md:items-center md:justify-center md:px-[18vw] mb-5">
          <VideoTextCard data={Card2Data} bgColor="bg-[#fff2cc] bg-opacity-40" btnColor="bg-[#ffd645]" borderColor="hover:border-b-4 border-[#ffd645]" />
        </div>
        <div className="p-1 md:flex md:items-center md:justify-center md:px-[18vw] mb-5">
          <VideoTextCard data={Card3Data} bgColor="bg-[#fff2cc] bg-opacity-40" btnColor="bg-[#ffd645]" borderColor="hover:border-b-4 border-[#ffd645]" />
        </div>
        <div className="p-1 md:flex md:items-center md:justify-center md:px-[18vw] mb-5">
          <VideoTextCard data={Card4Data} bgColor="bg-[#fff2cc] bg-opacity-40" btnColor="bg-[#ffd645]" borderColor="hover:border-b-4 border-[#ffd645]" />
        </div>
      </div>
      <div id="iconss" className='flex items-center justify-center my-10'>
        <Rocket />

      </div>





    </>
  )
}

export default page

