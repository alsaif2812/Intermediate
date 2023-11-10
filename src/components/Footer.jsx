"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/wit-logo.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
<footer class=" text-gray-600 body-font bg-gray-100">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left justify-center flex flex-col items-center">
       
    
      <Image

src={logo}
height={100}
width={70}
/>
      <p className='mt-5'><i class="ri-customer-service-2-fill mr-3"></i><a  href="tel:<phone>">9005768830</a>
 </p>
      <p><i class="ri-mail-fill mr-2"></i> <a  href="mailto:<mail>">wahniIT@gmail.com</a>
</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 capitalize ">Products</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href= '/products/erpnext' className="text-gray-600 hover:text-gray-800">ERPNext</Link>
          </li>
          <li>
            <Link href= '/products/mobileapp' className="font-semibold text-gray-600 hover:text-gray-800">Mobile App</Link>
          </li>
          <li>
            <Link href= '/products/neupos' className="font-semibold text-gray-600 hover:text-gray-800">NeuPOS</Link>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 capitalize ">Solutions</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href= '/solutions/retail' className="font-semibold text-gray-600 hover:text-gray-800">Retail</Link>
          </li>
          <li>
            <Link href= '/solutions/healthcare' className="font-semibold text-gray-600 hover:text-gray-800">Healthcare</Link>
          </li>
          <li>
            <Link href= '/solutions/manufacturing' className="font-semibold text-gray-600 hover:text-gray-800">Manufacturing</Link>
          </li>
          <li>
            <Link href= '/solutions/distribution' className="font-semibold text-gray-600 hover:text-gray-800">Distribution</Link>
          </li>
          <li>
            <Link href= '/solutions/services' className="font-semibold text-gray-600 hover:text-gray-800">Services</Link>
          </li>
          <li>
            <Link href= '/solutions/education' className="font-semibold text-gray-600 hover:text-gray-800">Education</Link>
          </li>
          <li>
            <Link href= '/solutions/realestate' className="font-semibold text-gray-600 hover:text-gray-800">Real Estate</Link>
          </li>
          <li>
            <Link href= '/solutions/agriculture' className="font-semibold text-gray-600 hover:text-gray-800">Agriculture</Link>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 capitalize ">Resources</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href= '/' className="font-semibold text-gray-600 hover:text-gray-800">Case Studies</Link>
          </li>
          <li>
            <Link href= '/' className="font-semibold text-gray-600 hover:text-gray-800">Blogs</Link>
          </li>
         
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 capitalize ">About</h2>
        <nav class="list-none mb-10">
          <li>
            <Link href= '/' className="font-semibold text-gray-600 hover:text-gray-800">Company</Link>
          </li>
          <li>
            <Link href= '/' className="font-semibold text-gray-600 hover:text-gray-800">Team</Link>
          </li>
          <li>
            <Link href= '/' className="font-semibold text-gray-600 hover:text-gray-800">Careers</Link>
          </li>
          <li>
            <Link href= '/' className="font-semibold text-gray-600 hover:text-gray-800">Contact Us</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>

  <hr />

  <div className='bg-white'>
    <div class="container mx-auto py-4 px-5 flex  flex-wrap flex-col sm:flex-row  items-center m">
      <p class="text-gray-500 text-sm text-center sm:text-left ">© 2020 Wahni
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <p className='mx-5'><span className='mx-2'>Terms</span> | <span className='mx-2'>Privacy Policy</span> </p>
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
        <i class="ri-twitter-x-fill "></i>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
      
    </>
  )
}

export default Footer
