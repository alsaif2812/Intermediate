import Contact from '@/components/Contact'
import React from 'react'

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  )
}

export default page

export function generateMetadata({ params }) {
  return {
    title: "Contact-Us",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}