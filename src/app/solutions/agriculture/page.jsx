import VideoTextCard from '@/components/VideoTextCard';
import Hero from '@/components/Hero';
import React from 'react';
import card1Data from '../../../textContent/agriculture/card1Data.json';
import card2Data from '../../../textContent/agriculture/card2Data.json';
import Head from 'next/head';

export const metadata = {
    title: 'Best farm ERP Software For Agriculture Sector in India',
    description:
        "Utilize our cloud-based agriculture software to manage your agricultural business. Manage your fields with the world's best farm ERP software. ",
    keyword:
        'erp software solutions,wahni it,erp for manufacturing industry in india',
};

const page = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <Hero />
            <div className="p-5 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                <VideoTextCard data={card1Data} />
            </div>
            <div className="p-5 md:flex md:items-center md:justify-center md:px-[12vw] mb-5">
                <VideoTextCard data={card2Data} />
            </div>
        </>
    );
};

export default page;
