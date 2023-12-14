"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import JobCard from '../../components/JobCard'
import Layout from '../layout'
import { Select, Option } from "@material-tailwind/react";

const metadata = {
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Jiachi Liu',
  publisher: 'Sebastian Markbåge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

const page = () => {
  return (

    <>
      <Layout showBackgroundImage={true}>


        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keyword} />
        </Head>
        <div id="page-1" className="h-full bg-opacity-80 mb-52">
          <Image
            width={1000}
            height={100}
            src='/images/rightimg.png'
            autoPlay
            muted
            loop
            alt="Image"
            className="md:hidden mt-[4vw] md:mt-[1vw] w-[70%] md:mx-auto"
            id="top-image"
          />
          <div id="content">
            <div className="w-full max-h-screen md:flex flex-col md:flex-row mt-[-5vw] ">
              <div id="left" className="md:w-1/2 md:h-full md:pl-36 md:py-12 md:ml-10  md:pt-32">
                <h1 className="text-3xl h-auto  md:h-auto md:text-6xl font-extrabold mt-[5vw] md:mt-[3vw] w-full text-gray-800" id="maintext">
                  Unlock Your Potential with Our Thriving Team
                </h1>
                <p className='text-sm text-gray-600 pt-8'>We&apos;re not your average company, and neither should your career be. Here, diversity thrives, ideas ignite, and boundaries blur. We&apos;re all about pushing limits, celebrating differences, and building something extraordinary together.</p>

                <Link href="/" >
                  <button
                    id="getquote"
                    className="md:py-[0.7vw] md:px-[2vw] py-[2vw] px-[17vw] bg-[#57CCF9] rounded-md md:mt-[2vw] mt-[6vw] shadow-xl hover:shadow-none transition duration-300 md:ml-[0vw]"
                  >
                    <span className="md:font-semibold font-extrabold text-[#f1f2f3]" id="getquote2">
                      Apply Now
                    </span>
                  </button>
                </Link>

              </div>
              <div id="right" className="hidden md:block w-[60%] h-full bg-transparent object-center md:pt-20">
                <Image
                  src='/images/rightimg.png'
                  autoPlay
                  loop
                  muted
                  alt="Image"
                  width={1000}
                  height={100}
                  className="w-[100%] mt-14 pr-[10vw]"
                  id='bottom-Image'
                />
              </div>
            </div>




          </div>

        </div>
        <div id="jobmain" className='  px-20 py-10 flex flex-col items-center'>
          <div id="nav" className='flex flex-col md:flex-row gap-5 items-center justify-center'>
            <Select label="Job Title">
              <Option>SDE-1</Option>
              <Option>SDE-2</Option>
              <Option>Senior Software Engineer</Option>
              <Option>Accountant</Option>
            </Select>


            <Select label="Location">
              <Option>Thrissur</Option>
              <Option>Trivandrum</Option>
            </Select>

            <Select label="Job Type">
              <Option>Full Time</Option>
              <Option>Internship</Option>
              <Option>Remote</Option>
            </Select>

          </div>
        </div>

        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Layout>
    </>
  )
}

export default page;