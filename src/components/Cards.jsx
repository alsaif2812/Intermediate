import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/images/Team.jpg';




const Cards = () => {
  return (
    <>
      <div id="main" className='p-5 md:flex md:items-center md:justify-center  md:px-[18vw] md:mt-10'>
        <div id="hero" className='bg-[#BEADFA] bg-opacity-20 max-h-[100rem] md:flex md:items-center md:justify-center mb-16 mt-10 py-10 px-5 rounded-3xl md:max-w-[100vw] md:px-8'>
          <div className='md:mt-[0.6vw]'>
            <div id="tab" className='flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto'>
              <h1 className='border-b-4 border-blue-gray-800 '>Work Order</h1>


              <h1 className='hover:border-b-4 transition duration-500 hover:border-blue-gray-800 '>Production Plan</h1>


              <h1 className='hover:border-b-4 transition duration-500 hover:border-blue-gray-800 ' >Job Card</h1>


              <h1 className='hover:border-b-4 transition duration-500 hover:border-blue-gray-800 '>Downtime Entry</h1>

            </div>
            <div id="image">
              <Image
                src={img}
                alt='img'
                width={1000}
                height={100}
                className='w-full mt-9 rounded-xl md:hidden'
                id='topimg'
              />
            </div>
            <div id="title" className=' text-center md:text-left mt-10 '>
              <h1 className='text-4xl font-bold text-[#212121]'>Track all the production metrics</h1>
            </div>
            <div id="text" className='p-2 mt-2 rounded-3xl text-lg font-semibold leading-6'>
              <p className=' mb-6'>A work order in ERPNext is a document that is used to track the production of a specific item. It includes information such as the item to be manufactured, the quantity to be manufactured, the planned start and end dates, the actual start and end dates, the status, and the quantity produced.

              </p>
              <p>Work orders are a powerful tool that can be used to improve the efficiency and profitability of manufacturing businesses. By using work orders, businesses can track the progress of production, identify bottlenecks, and reduce cost</p>
            </div>
            <div id="btns" className='flex items-center justify-center md:block p-3'>
              <button className='bg-blue-300 py-2 px-4 md:py-3 md:px-7 rounded-lg font-bold text-white'>Dummy</button>
            </div>
          </div>
          <Image
            src={img}
            alt='img'
            width={1000}
            height={100}
            className='md:w-[38%] rounded-xl md:block hidden'
            id='bottomimg'
          />
        </div>


      </div>
      <div id="main" className='p-5 md:flex md:items-center md:justify-center  md:px-[18vw]'>
        <div id="hero" className='bg-[#BEADFA] bg-opacity-20 max-h-[100rem] md:flex md:items-center md:justify-center mb-16 mt-10 py-10 px-5 rounded-3xl md:max-w-[100vw] md:px-8'>
          <div className='md:mt-[0.6vw]'>
            <div id="tab" className='flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto'>
              <Link href='/solutions/Manufacturing'>          <h1 className='border-b-4 border-blue-gray-800 '>Work Order</h1>
              </Link>
              <Link href='/solutions/Manufacturing/Nav2'>
                <h1 className='hover:border-b-4 transition duration-500 hover:border-blue-gray-800 '>Production Plan</h1>
              </Link>
              <Link href='/solutions/Manufacturing/Nav3'>
                <h1 className='hover:border-b-4 transition duration-500 hover:border-blue-gray-800 ' >Job Card</h1>
              </Link>
              <Link href='/solutions/Manufacturing/Nav4'>
                <h1 className='hover:border-b-4 transition duration-500 hover:border-blue-gray-800 '>Downtime Entry</h1>
              </Link>
            </div>
            <div id="image">
              <Image
                src={img}
                alt='img'
                width={1000}
                height={100}
                className='w-full mt-9 rounded-xl md:hidden'
                id='topimg'
              />
            </div>
            <div id="title" className=' text-center md:text-left mt-10 '>
              <h1 className='text-4xl font-bold text-[#212121]'>Track all the production metrics</h1>
            </div>
            <div id="text" className='p-2 mt-2 rounded-3xl text-lg font-semibold leading-6'>
              <p className=' mb-6'>A work order in ERPNext is a document that is used to track the production of a specific item. It includes information such as the item to be manufactured, the quantity to be manufactured, the planned start and end dates, the actual start and end dates, the status, and the quantity produced.

              </p>
              <p>Work orders are a powerful tool that can be used to improve the efficiency and profitability of manufacturing businesses. By using work orders, businesses can track the progress of production, identify bottlenecks, and reduce cost</p>
            </div>
            <div id="btns" className='flex items-center justify-center md:block p-3'>
              <button className='bg-blue-300 py-2 px-4 md:py-3 md:px-7 rounded-lg font-bold text-white'>Dummy</button>
            </div>
          </div>
          <Image
            src={img}
            alt='img'
            width={1000}
            height={100}
            className='md:w-[38%] rounded-xl md:block hidden'
            id='bottomimg'
          />
        </div>


      </div>
      <div id="main" className='p-5 md:flex md:items-center md:justify-center  md:px-[18vw]'>
        <div id="hero" className='bg-[#BEADFA] bg-opacity-20 max-h-[100rem] md:flex md:items-center md:justify-center mb-16 mt-10 py-10 px-5 rounded-3xl md:max-w-[100vw] md:px-8'>
          <div className='md:mt-[0.6vw]'>
            <div id="tab" className='flex items-center justify-around md:justify-start md:gap-10 text-sm font-bold gap-5 overflow-x-auto'>
              <Link href='/'>          <h1 className='border-b-4 border-blue-gray-800 '>Work Order</h1>
              </Link>
              <Link href='/'>
                <h1 className='hover:border-b-4 transition duration-500 hover:border-blue-gray-800 '>Production Plan</h1>
              </Link>
              <Link href='/'>
                <h1 className='hover:border-b-4 transition duration-500 hover:border-blue-gray-800 ' >Job Card</h1>
              </Link>
              <Link href='/'>
                <h1 className='hover:border-b-4 transition duration-500 hover:border-blue-gray-800 '>Downtime Entry</h1>
              </Link>
            </div>
            <div id="image">
              <Image
                src={img}
                alt='img'
                width={1000}
                height={100}
                className='w-full mt-9 rounded-xl md:hidden'
                id='topimg'
              />
            </div>
            <div id="title" className=' text-center md:text-left mt-10 '>
              <h1 className='text-4xl font-bold text-[#212121]'>Track all the production metrics</h1>
            </div>
            <div id="text" className='p-2 mt-2 rounded-3xl text-lg font-semibold leading-6'>
              <p className=' mb-6'>A work order in ERPNext is a document that is used to track the production of a specific item. It includes information such as the item to be manufactured, the quantity to be manufactured, the planned start and end dates, the actual start and end dates, the status, and the quantity produced.

              </p>
              <p>Work orders are a powerful tool that can be used to improve the efficiency and profitability of manufacturing businesses. By using work orders, businesses can track the progress of production, identify bottlenecks, and reduce cost</p>
            </div>
            <div id="btns" className='flex items-center justify-center md:block p-3'>
              <button className='bg-blue-300 py-2 px-4 md:py-3 md:px-7 rounded-lg font-bold text-white'>Dummy</button>
            </div>
          </div>
          <Image
            src={img}
            alt='img'
            width={1000}
            height={100}
            className='md:w-[38%] rounded-xl md:block hidden'
            id='bottomimg'
          />
        </div>


      </div>
    </>
  );
};

export default Cards;
