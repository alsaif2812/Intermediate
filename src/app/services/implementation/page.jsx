"use client"
import Layout from '../../layout'
import React from 'react'
import './implementation.css'
import Head from 'next/head'
import Timeline from '../../../components/Timeline.jsx'

import ResourceCard from '@/components/ResourceCard'



const metadata = {
  title: "Accounting ERP software in Kochi Kerala, Wahni",
  description: "Transform your business with Wahni's ERPNext solutions. Streamline operations, including accounting, in Kochi, Kerala. Elevate efficiency across verticals.",
  keywords: "ERP Implementation,wahni it,erpnext"

}

const page = () => {
  return (
    <>
      <Layout showBackgroundImage={false}>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
        </Head>
        <div id="mainerp" className=' py-5 md:pt-6  pt-16 px-3 flex flex-col '>
          <div id="maintext2" className='w-full flex flex-col items-center justify-center gap-6'>
            <h1 className='text-5xl md:text-7xl font-extrabold text-center gradient-text'>Don&apos;t Just Manage, <br />  Thrive with ERPNext</h1>
            <p className='text-base text-center md:text-xl '> <strong>Break free from limitations</strong> <br />  Boost productivity 🚀, improve accuracy🎯, <br /> and gain a competitive edge with our powerful solution⚡️.
            </p>
            <button className='mt-4 bg-gradient-to-r from-[#4695F0]  to-[#FC42CE]  px-6 py-3 md:py-3 md:px-6 md:text-lg rounded-md font-bold text-white shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300'>
              Schedule a Demo, it&apos;s Free <i className="ri-arrow-right-line"></i>
            </button>

            <p className='opacity-70 text-gray-800 font-semibold'><i className="ri-trophy-fill text-yellow-600 text-xl mx-1"></i> Frappe Certified Partner</p>
          </div>
          <div id="timeline" className='flex flex-col items-center justify-center px-5'>
            <h1 className='md:text-4xl text-2xl font-bold md:pb-28 md:pt-20 pt-20 pb-10 text-center'>Unveiling our blueprint for <br /> successful ERP implementation.</h1>
            <Timeline />
          </div>
          <div id="resources" className='pt-20'>
            <div className='flex flex-col items-center justify-center text-center'>
              <p className='text-purple-600 font-extrabold text-sm my-3'>RESOURCES</p>
              <h1 className='text-4xl font-extrabold text-[#2e2e2e]'><strong>Beyond the Hype:</strong> Dive into Real Results <br /> with ERPNext Case Studies
              </h1>
            </div>
            <div className='flex flex-col gap-4 md:flex-row items-center justify-center '>
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
            </div>

          </div>
        </div>

      </Layout>
    </>
  )
}

export default page
