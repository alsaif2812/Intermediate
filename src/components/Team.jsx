'use client';
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Teamdata from '../textContent/team/team.json';

const Card = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <Fragment>
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
            <div className="md:m-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                {Teamdata.map((member) => (
                    <div
                        key={member.id}
                        className="relative rounded-lg p-4 m-4 transition duration-500 ease-in-out transform hover:scale-100"
                    >
                        <div
                            onMouseEnter={() => setHoveredCard(member.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="relative w-full p-2 object-cover rounded-t-lg transition-opacity duration-300 ease-in-out"
                        >
                            <div className="flex justify-between items-end">
                                <Image
                                    src={
                                        hoveredCard === member.id
                                            ? member.cameoImage
                                            : member.photo
                                    }
                                    alt="img"
                                    height={200}
                                    width={800}
                                    className="w-100"
                                />
                                <div
                                    className={`${
                                        hoveredCard !== member.id
                                            ? 'invisible'
                                            : null
                                    } transition-all duration-200`}
                                >
                                    {member.links.linkedin ? (
                                        <a
                                            href={member.links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center"
                                        >
                                            <i className="ri-linkedin-box-fill mx-2 text-3xl text-blue-800"></i>
                                        </a>
                                    ) : null}

                                    {member.links.instagram ? (
                                        <a
                                            href={member.links.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center"
                                        >
                                            <i className="ri-instagram-fill mx-2 text-3xl text-pink-400"></i>
                                        </a>
                                    ) : null}

                                    {member.links.facebook ? (
                                        <a
                                            href={member.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center"
                                        >
                                            <i className="ri-facebook-circle-fill mx-2 text-3xl text-blue-800"></i>
                                        </a>
                                    ) : null}

                                    {member.links.github ? (
                                        <a
                                            href={member.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center"
                                        >
                                            <i className="ri-github-fill mx-2 text-3xl cursor-pointer"></i>
                                        </a>
                                    ) : null}

                                    {member.links.frappeForum ? (
                                        <a
                                            href={member.links.frappeForum}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center"
                                        >
                                            <Image
                                                src="/images/frappe-logo.png"
                                                alt="frappe logo"
                                                width={24}
                                                height={24}
                                            />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-10">
                            <h2 className="text-xl font-semibold">
                                {member.name}
                            </h2>
                            <p className="text-gray-500 font-medium">
                                {member.position}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Card;
