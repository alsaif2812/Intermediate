import Hero from '@/components/Hero'
import React from 'react'
import Head from 'next/head'

export const metadata = {
  title: "Accounting ERP software in Kochi Kerala, Wahni",
  description: "Transform your business with Wahni's ERPNext solutions. Streamline operations, including accounting, in Kochi, Kerala. Elevate efficiency across verticals.",
  keywords: "ERP Implementation,wahni it,erpnext"

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
