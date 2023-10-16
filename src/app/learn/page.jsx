import React from 'react'
import Footer from '@/components/Footer' 

const page = () => {
  return (
    <>
    <div className=' flex bg-transparent mt-[-1vw]   text-zinc-900'>
    <div id='iconsleft' className=' items-center justify-center flex-wrap w-[48%]  h-[15vw] py-[1vw] px-[2vw] ml-[9vw]'>

      <div className='flex ml-[0vw] mt-[5vw] gap-[5vw]'>
      <div id="icon1" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-green-50 transition duration 200 hover:rounded-2xl'>
        <a href="">
        <h1 className='font-bold text-md'><i class="ri-line-chart-line mr-[0.3vw] text-green-300 text-left text-xl"></i>Blogs</h1>
        <p className='text-sm font-[500] mt-[0.5vw] opacity-90'>Break down any size projectinto customized tasks</p>
        </a>
       
      </div>
      <div id="icon2" className=' w-[24vh] h-[autovw] bg-transparent p-[0.8vw] hover:bg-blue-50 transition duration 200 hover:rounded-2xl'>
        <a href="">
        <h1 className='font-bold text-md'><i class="ri-team-fill mr-[0.3vw] text-blue-400 text-left text-xl"></i>case studies</h1>
        <p className='text-sm font-[500] mt-[0.5vw] opacity-90'>Create beautiful docs and connect them to tasks</p>

        </a>
      </div>
 
      </div>
      <br />
      
    </div>
   <hr />
 
   </div>
   <div className='md:block hidden'>

   <Footer/>
   
   </div>

    </>
  )
}

export default page
