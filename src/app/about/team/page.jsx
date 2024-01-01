import Card from '@/components/Team';
import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    return (
        <Fragment>
            ,
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keyword} />
            </Head>
            <div id="page-1" className="max-h-full  mt-3 bg-opacity-80 mb-52">
                <Image
                    width={1000}
                    height={100}
                    src="/images/company-vector.png"
                    alt="video"
                    className="md:hidden mt-[4vw] md:mt-[1vw] w-[70%] md:mx-auto"
                />
                <div id="content">
                    <div className="w-full max-h-screen flex flex-col  md:flex-row mt-[-5vw] md:mt-[-2vw]">
                        <div className="md:w-1/2 md:h-full md:px-28 md:py-28 md:ml-10 ">
                            <h1 className="text-3xl h-auto  md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw] w-full text-gray-800">
                                Fueled by Passion ⚡️, Driven by Results 💯
                            </h1>
                            <p className="text- font-semibold my-5 text-gray-600">
                                From ideation to implementation, Wahni IT
                                Solutions boasts a diverse team of specialists,
                                each dedicated to exceeding expectations.
                            </p>
                        </div>
                        <div className="hidden md:block w-[60%] h-full bg-transparent object-center">
                            <Image
                                src="/images/company-vector.png"
                                alt="img/"
                                width={500}
                                height={100}
                                className="w-[100%] mt-14 pr-[10vw]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Card />
        </Fragment>
    );
}

export const metadata = {
    title: 'Meet Our Team - Wahni IT Solutions',
    description:
        'Meet Our ERP Software Team. Behind Our Success, We have a young and vibrant software team, who are inspired by advanced technologies',
    keyword:
        'wahni it,top erp software in kerala, erp software companies in kerala',
};
