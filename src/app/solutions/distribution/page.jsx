import Cards from '@/components/Cards';
import Hero from '@/components/Hero';
import React from 'react';
import Head from 'next/head';

export const metadata = {
    title: 'The best erp distribution system in India',
    description:
        'Efficiently manage supply chains, inventory, and more. Transform your distribution business with user-friendly, cost-effective open source solutions.',
    keywords:
        'Distribution,The best erp distribution system in India,wahni it,erpnext',
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
            <h1>hello from distribution</h1>
            <Cards />
        </>
    );
};

export default page;
