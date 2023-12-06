import Cards from '@/components/Cards'
import Hero from '@/components/Hero'
import React from 'react'
import Head from 'next/head'

export const metadata = {

  title: "Mobile-App Kerala: Open-source ERP Platform, Wahni IT Solutions",
  description: "lorem ipsum dolor sit amet, consectetur adip",
  keyword: "open-source"

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
      <Cards />
    </>
  )
}

export default page