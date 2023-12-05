import Cards from '@/components/Cards'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Cards />

    </>
  )
}

export default page

export function generateMetadata({ params }) {
  return {
    title: "ERPNext Kerala: Open-source ERP Platform, Wahni IT Solutions",
    description: "ERPNext in Ernakulam, Kerala. Open-source, easy-to-use, budget-friendly ERP platform for trading, distribution, manufacturing & more. Frappe technologies"
  }
}
