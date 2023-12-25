import './erp.css'
import React from 'react';
import Head from 'next/head';
import Data from '../../../textContent/servicesHeroContent/erp-next.json'
import ServicesHero from '@/components/ServicesHero';
import cardData from '../../../textContent/manufacturing/cardOne.json';
import VideoTextCard from '@/components/VideoTextCard';
import ScrollableIcons from '@/components/ScrollableIcons';
import IconsData from '@/textContent/scrollableicons/Data.json'


const page = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <ServicesHero data={Data} />
            <div
                id="main"
                className="p-5 md:flex md:items-center md:justify-center md:px-[12vw]"
            >
                <VideoTextCard
                    data={cardData}
                    bgColor="bg-[#D2E0FB] bg-opacity-40"
                    btnColor="bg-[#528ff6]"
                    borderColor=" border-[#528ff6]"
                />
            </div>
            <ScrollableIcons data={IconsData} />        </>
    );
};

export default page;

export const metadata = {
    title: 'ERPNext Kerala: Open-source ERP Platform, Wahni IT Solutions',
    description:
        'ERPNext in Ernakulam, Kerala. Open-source, easy-to-use, budget-friendly ERP platform for trading, distribution, manufacturing & more. Frappe technologies',
    keyword: 'next in',
};
