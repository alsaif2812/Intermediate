'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Teamdata from '../textContent/team/team.json';

const Card = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <>
            <h1 className="my-10 text-center text-5xl text-gray-800 font-bold font-sans">
                Our Leadership Team
            </h1>
            <p className="mt-10 text-center text-base text-gray-800 font-bold font-sans px-4 md:px-10">
                This is our team, a lot of smiling happy people who work hard to
                empower your teams.
            </p>
            <div className="flex items-center justify-center">
                <p className="border-b-pink-200 border-b-4 mb-10 w-[5%] mt-2"></p>
            </div>
            <div className="flex flex-wrap justify-center">
                {Teamdata.map((member) => (
                    <div
                        key={member.id}
                        className="relative  rounded-lg p-4 m-4 w-full sm:w-1/2 md:w-[45%] lg:w-[30%] transition duration-500 ease-in-out transform hover:scale-100"
                    >
                        <div
                            onMouseEnter={() => setHoveredCard(member.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="relative w-full p-2 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg transition-opacity duration-300 ease-in-out"
                        >
                            <div>
                                <Image
                                    src={
                                        hoveredCard === member.id
                                            ? member.cameoImage
                                            : member.photo
                                    }
                                    alt="img"
                                    height={200}
                                    width={800}
                                    className="w-full"
                                />
                                {hoveredCard === member.id && (
                                    <div className="md:top-[91.5%] top-[87%] flex items-center justify-center bg-white bg-opacity-50 w-full max-h-10 transition-opacity duration-500 mt-2 md:mt-4 absolute">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center"
                                        >
                                            <i className="ri-linkedin-box-fill mx-2 text-3xl cursor-pointer"></i>
                                        </a>
                                        <a
                                            href={member.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center"
                                        >
                                            <i className="ri-instagram-line mx-2 text-3xl cursor-pointer"></i>
                                        </a>
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center"
                                        >
                                            <i className="ri-facebook-circle-fill mx-2 text-3xl cursor-pointer"></i>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-4 mb-10">
                            <h2 className="text-xl font-semibold">
                                {member.name}
                            </h2>
                            <p className="text-gray-500">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Card;
