import Hero from '@/components/Hero'
import React from 'react'
import Head from 'next/head'

export const metadata = {
  title: "Business Consulting — Wahni IT Solutions",
  description: "Facing tax or accounting issues? Our skilled Chartered Accountants provide expert consultation and ensure seamless tax filings.",
  keyword: "Business Consulting,Business Consulting wahni it,wahni it"

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


