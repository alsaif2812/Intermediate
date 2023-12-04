import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default page

export function generateMetadata({ params }) {
  return {
    title: "Work-Flow",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}
