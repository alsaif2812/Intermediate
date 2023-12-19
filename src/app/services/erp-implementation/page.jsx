'use client';
import React from 'react';
import './implementation.css';
import Head from 'next/head';
import Timeline from '../../../components/Timeline.jsx';
import Data1 from '../../../textContent/servicesHeroContent/Implementation';
import ResourceCard from '@/components/ResourceCard';
import ServicesHero from '@/components/ServicesHero';

const metadata = {
    title: 'Accounting ERP software in Kochi Kerala, Wahni',
    description:
        "Transform your business with Wahni's ERPNext solutions. Streamline operations, including accounting, in Kochi, Kerala. Elevate efficiency across verticals.",
    keywords: 'ERP Implementation,wahni it,erpnext',
};

const page = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
            </Head>
            <div
                id="mainerp"
                className=" py-5 md:pt-6  pt-10 px-3 flex flex-col "
            >
                <ServicesHero data={Data1} />
                <div
                    id="timeline"
                    className="flex flex-col items-center justify-center px-5"
                >
                    <h1 className="md:text-4xl text-2xl font-bold md:pb-28 md:pt-20 pt-20 pb-10 text-center text-[#3f3e3e]">
                        Unveiling our blueprint for <br /> successful ERP
                        implementation.
                    </h1>
                    <Timeline />
                </div>
                <div id="resources" className="pt-20">
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-purple-600 font-extrabold text-sm my-3">
                            RESOURCES
                        </p>
                        <h1 className="text-4xl font-extrabold text-[#3f3e3e]">
                            <strong>Beyond the Hype:</strong> Dive into Real
                            Results <br /> with ERPNext Case Studies
                        </h1>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row items-center justify-center ">
                        <ResourceCard />
                        <ResourceCard />
                        <ResourceCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
