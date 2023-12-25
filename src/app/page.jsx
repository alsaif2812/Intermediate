import Delivery from '@/components/Delivery';
import IndexTeam from '@/components/IndexTeam';
import MainContent from '@/components/MainContent';
import ScrollableIcons from '@/components/ScrollableIcons';
import Trusted from '@/components/Trusted';
import Head from 'next/head';
import TrustedData from '@/textContent/trusted/CardData1.json'
import IndexteamData from '@/textContent/indexTeam/CardData.json'


export const metadata = {
    title: 'Best ERP Software in Kerala, ERP Companies in Kochi, Wahni',
    description:
        'Wahni IT Solutions offers Top ERP Software in Kochi Kerala for Retail, Healthcare, Education, Manufacturing, Real Estate, Distribution & Agriculture.',
    keyword:
        'erp solutions, best erp software in india, erp for schools india, erp software solutions',
    icons: {
        icon: '/images/favicon.png',
        apple: '/images/apple-icon.png',
    },
};
export default function Home() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <MainContent />
            <ScrollableIcons />
            <Delivery />
            <IndexTeam data={IndexteamData} />
            <Trusted data={TrustedData} />
        </>
    );
}
