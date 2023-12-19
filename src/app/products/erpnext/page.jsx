import Cards from '@/components/Cards';
import Hero from '@/components/Hero';
import React from 'react';
import Head from 'next/head';
const page = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <Hero />
            <Cards />
        </>
    );
};

export default page;

export const metadata = {
    title: 'ERPNext Kerala: Open-source ERP Platform, Wahni IT Solutions',
    description:
        'ERPNext in Ernakulam, Kerala. Open-source, easy-to-use, budget-friendly ERP platform for trading, distribution, manufacturing & more. Frappe technologies',
    keyword: 'next in',
};
