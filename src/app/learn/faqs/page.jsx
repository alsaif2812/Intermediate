import HeroForFaq from '@/components/HeroForFaq'
import FaqQuestions from '@/components/FaqQuestions'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroForFaq />
      <FaqQuestions />

    </>
  )
}

export default page

export function generateMetadata({ params }) {
  return {
    title: "Frequently asked questions",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}