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
    title: "NEUpos",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}
