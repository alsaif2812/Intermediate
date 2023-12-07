import BlogCard from '@/components/Blogs'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'



const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
      </Head>

      <div className=' md:p-0 p-1'>
        <div id="page-1" className="  bg-opacity-80 pb-20">
          <Image
            width={1000}
            height={100}
            src='/images/team.jpg'

            alt="video"
            className="md:hidden  md:mt-[1vw]  md:mx-auto"
          />
          <div id="content">
            <div className="w-full max-h-screen flex flex-col  md:flex-row mt-[-5vw] md:mt-[-2vw] ">
              <div id="left" className="md:w-1/2 md:h-full md:px-28 md:py-28 md:ml-10 ">
                <h1 className="text-3xl h-auto  md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw]  text-gray-800" id="maintext">
                  Journey through Knowledge: Dive into Captivating <br /> Stories and Informative Articles.
                </h1>
                <p className='text-sm font-semibold my-5 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate libero <br /> nobis molestiae illo quisquam ipsa minus harum atque maiores provident.</p>


                <a href="/">
                  <button
                    id="getquote"
                    className="md:py-[0.7vw] md:px-[2vw] py-[2vw] px-[17vw] bg-blue-500 rounded-md md:mt-[0vw] mt-[6vw] shadow-xl hover:shadow-none transition duration-300 md:ml-[0vw]"
                  >
                    <span className="md:font-semibold font-extrabold text-white" id="getquote2">
                      Discover!!
                    </span>
                  </button>
                </a>

              </div>
              <div id="right" className="hidden md:block w-[60%] h-full bg-transparent object-center">
                <Image
                  src='/images/team.jpg'

                  alt="img/"
                  width={500}
                  height={100}
                  className="w-[100%] mt-14 pr-[10vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 md:p-0'>
        <Link href="/order-management">
          <BlogCard />
        </Link>
      </div>
    </>
  )
}

export default page

export const metadata = {
  title: "Best ERP software blogs from Wahni IT Solutions",
  description: "Read about cloud ERP, software, setup, integration, business solutions, and related topics on our blog, along with the most recent business news.",
  keyword: "wahni it blogs,Best ERP software,erp,erpnext"

}