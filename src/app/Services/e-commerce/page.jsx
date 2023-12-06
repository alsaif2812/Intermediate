import Hero from '@/components/Hero'
import React from 'react'
import Head from 'next/head'
export const metadata = {

  title: "E-Commerce — Wahni IT Solutions",
  description: "We provide setting up of E-commerce sites and integrating the same with all the payment with all backend operations also integrated with ERPNext",
  keyword: "ECommerce, E-Commerce, ecommerce,wahni it"

}

const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
      </Head>
      <Hero />
    </>
  )
}

export default page

