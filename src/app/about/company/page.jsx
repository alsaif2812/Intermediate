import React from 'react';
import Hero from '@/components/Hero';
import CoreData from '@/textContent/cores/Data.json'
import Head from 'next/head';
import Core from '@/components/Core';
import Photogrid from '@/components/Photogrid';
import Mission from '@/components/Mission';
import Trusted from '@/components/Trusted';
import photo from '@/textContent/photogrid/photo.json'
import TrustedData from '@/textContent/trusted/CardData2.json'
import './company.css'
export const metadata = {
    title: 'About Wahni ERP Softwares - Best ERP Softwares in India',
    description:
        'Best ERP software in India. Our Open Source ERP Software services revolve around FOSS products. From implementation to training and support, we cover it all.',
    keyword: 'wahni it,erpnext,best accounting software in kerala',
};

const Page = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <Hero />
            <Mission />
            <Core data={CoreData} />
            <Photogrid photos={photo} />
            <Trusted data={TrustedData} />
        </>
    );
};

export default Page;
