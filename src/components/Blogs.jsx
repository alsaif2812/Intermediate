import React from 'react';
import data from '../textContent/blogs/blogsData.json';

const BlogCard = ({ image, heading, bodyText, profile }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden m-4">
      <img src={image} alt="Blog Image" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{heading}</h1>
        <p className="text-gray-600">{bodyText}</p>
        <div className="flex items-center mt-4">
          <img src={profile.image} alt="Profile Image" className="w-8 h-8 rounded-full" />
          <div className="ml-2">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-gray-500">{profile.date}</p>
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
