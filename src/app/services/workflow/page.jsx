import Hero from '@/components/Hero'
import React from 'react'
import Head from 'next/head'

export const metadata = {
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
      <Hero />
    </>
  )
}

export default page

