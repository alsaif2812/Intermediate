'use client';
import './Main.css';
import {
    faCoins,
    faIndustry,
    faStore,
    faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-tailwind/react';
import ChangeText from './ChangeText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import Frappe from './Frappe';
import Link from 'next/link';
import LogosMarquee from './LogosMarquee';
import logosData from '../textContent/logos/logosData.json';

export default function Home() {
    const textContent = [
        'streamline operations',
        'automate production',
        'increase profits',
        'reduce costs',
        'boost productivity',
    ];

    return (
        <Fragment>
            <div id="page-1" className="h-full bg-opacity-80">
                <video
                    src="images/home-video.webm"
                    autoPlay={true}
                    muted={true}
                    loop
                    alt="img"
                    className="md:hidden my-[4vw] mx-3"
                    id="topimg"
                />
                <div id="content">
                    <div className="w-full max-h-screen grid md:grid-cols-2">
                        <div className="mx-4 md:mx-24 md:py-12">
                            <ChangeText
                                staticText="we have the solutions to"
                                animTextContent={textContent}
                                interval={2000}
                                staticTextClass="text-3xl md:text-5xl h-auto md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw] w-full text-[#393939]"
                                animTextClass="w-full typed"
                            />

                            <div
                                className="bg-transparent py-4 rounded-md mt-8"
                                id="btn"
                            >
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/solutions/manufacturing">
                                        <button className="py-2 px-4 bg-transparent rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                                            <FontAwesomeIcon
                                                icon={faIndustry}
                                                className="text-blue-600"
                                            />
                                            Manufacturing
                                        </button>
                                    </Link>
                                    <button className="py-2 px-4 bg-transparent rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                                        <FontAwesomeIcon
                                            icon={faStore}
                                            className="text-blue-600"
                                        />
                                        Trading
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <button className="py-2 px-4 bg-transparent rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                                        <FontAwesomeIcon
                                            icon={faCoins}
                                            className="text-blue-600"
                                        />{' '}
                                        Accounts{' '}
                                    </button>
                                    <button className="py-2 px-4 bg-transparent rounded-md hover:shadow-2xl shadow-md font-semibold flex items-center transition gap-2">
                                        <FontAwesomeIcon
                                            icon={faWarehouse}
                                            className="text-blue-600"
                                        />{' '}
                                        Warehouse{' '}
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link href="/contact-sales">
                                    <Button variant="gradient" color="blue">
                                        Schedule a Free Demo
                                    </Button>
                                </Link>
                            </div>
                            {/*                 <input
                                type="tel"
                                name="number"
                                id="number"
                                className="py-1 px-3 border-zinc-200  rounded-lg my-6 text-lg placeholder-opacity-30 md:w-[18vw] md:ml-[0vw] bg-transparent border  shadow-md shadow-gray-300"
                                placeholder="Enter your Phone Number"
                            />
                            <br />
                            <a href="/">
                                <button
                                    id="getquote"
                                    className="md:py-[0.7vw] md:px-[2vw] py-[2vw] px-[17vw] bg-blue-500 rounded-md md:mt-0  mt-[6vw] shadow-xl hover:shadow-none transition duration-300 md:ml-[0vw]"
                                >
                                    <span
                                        className="md:font-semibold font-extrabold  text-white"
                                        id="getquote2"
                                    >
                                        Get a Callback
                                    </span>
                                </button>
                            </a> */}
                            <div
                                className="mt-[8vw] md:mt-[3vw] mx-[5vw] md:mx-[0vw]"
                                id="qualifications"
                            >
                                <Frappe />

                                <p>
                                    <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                                    <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                                    <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                                    <i className="ri-star-fill text-yellow-300 text-2xl"></i>
                                    <span className="text-sm text-gray-600 ml-1">
                                        Based on Customer Reviews
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div id="right" className="hidden md:block h-100">
                            <video
                                src="images/home-video.webm"
                                autoPlay
                                loop
                                muted
                                width={100}
                                height={100}
                                alt="video"
                                className="w-[40rem]"
                                id="bottomimg"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col md:mt-auto p-10 md:opacity-60 opacity-50 md:items-center md:justify-center md:flex-col bg-transparent mb-[5vw]">
                        <LogosMarquee data={logosData} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
