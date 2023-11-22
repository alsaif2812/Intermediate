import React from 'react';
import data from '../textContent/blogs/blogsData.json';
import Image from 'next/image';

const BlogCard = ({ image, heading, bodyText, profile }) => {
  return (
<<<<<<< HEAD
    <div className="max-w-[30rem] mb-10 mx-auto bg-white shadow-lg rounded-md overflow-hidden m-4 mt-20 hover:shadow-2xl transition duration-300">
      <Image height={100} width={100} src={image} alt="Blog Image" className="w-full max-h-96 object-cover " />
=======
    <div className="md:max-w-[30rem] mb-10 mx-auto bg-white shadow-lg rounded-md overflow-hidden m-4 mt-20 hover:shadow-2xl transition duration-300">
      <Image height={100} width={1000} src={image} alt="Blog Image" className="w-full max-h-96 object-cover " />
>>>>>>> f76af97b5a10d35d933426642f02c4d39fbfb4f2
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{heading}</h1>
        <p className="text-gray-600">{bodyText}</p>
        <div className="flex items-center justify-start mt-4 gap-2">
<<<<<<< HEAD
          <Image height={100} width={100}  src={profile.image} alt="Profile Image" 
=======
          <Image height={100} width={1000}  src={profile.image} alt="Profile Image" 
>>>>>>> f76af97b5a10d35d933426642f02c4d39fbfb4f2
          className="w-8 h-8 rounded-full" />
          <p className="font-semibold pr-10">{profile.name}</p>
          <div className="ml-2 flex items-center gap-2">
          <i class="ri-time-line text-2xl text-gray-400"></i>
          <p className='text-gray-500 text-md'>Max 10min read</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCardList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.blogCards.map((card, index) => (
        <BlogCard key={index} {...card} />
      ))}
    </div>
  );
};

export default BlogCardList;
