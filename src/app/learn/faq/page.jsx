import HeroForFaq from '@/components/HeroForFaq';
import FaqQuestions from '@/components/FaqQuestions';
import React from 'react';
import Head from 'next/head';

export const metadata = {
    title: 'Frequently Asked Questions About ERP Softwares in India',
    description:
        'Here are some frequently asked questions about enterprise resource planning (ERP)systems and Open source Software systems for different industries.',
    keyword:
        'wahni it,easy to use erp software, best erp software in india,top erp software in kerala',
};

const page = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <HeroForFaq />
            <FaqQuestions />
        </>
    );
};

export default page;
