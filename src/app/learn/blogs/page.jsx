import BlogCard from '@/components/Blogs'
import React from 'react'

const page = () => {
  return (
    <>
<div id="blogs" className=" flex flex-wrap gap-10 items-center justify-around">
   <BlogCard/>
  </div>   
    </>
  )
}

export default page
