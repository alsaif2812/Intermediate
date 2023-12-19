import Cards from '@/components/Cards';
import Hero from '@/components/Hero';
import React from 'react';
import Head from 'next/head';

export const metadata = {
    title: 'NEUpos',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    keyword: 'lorem ipsum dolor sit amet, consect',
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
            <Cards />
        </>
    );
};

export default page;
