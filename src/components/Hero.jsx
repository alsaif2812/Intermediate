import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div id="page-1" className="h-full bg-opacity-80 mb-52">
                <Image
                    width={1000}
                    height={100}
                    src="/images/team.jpg"
                    autoPlay
                    muted
                    loop
                    alt="video"
                    className="md:hidden mt-[4vw] md:mt-[1vw] w-[70%] md:mx-auto"
                    id="top-image"
                />
                <div id="content" className=" mt-5">
                    <div className="w-full max-h-screen flex flex-col md:flex-row mt-[-5vw] md:mt-[-2vw]">
                        <div
                            id="left"
                            className="md:w-1/2 md:h-full md:px-12 md:pt-32 md:ml-10  "
                        >
                            <h1
                                className="text-3xl h-auto  md:h-auto md:text-5xl font-bold mt-[5vw] md:mt-[3vw] w-full text-gray-800"
                                id="maintext"
                            >
                                Lorem ipsum dolor sit amet consectetur{' '}
                            </h1>
                            <p className="my-5 text-gray-600 font-semibold">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Repellat, suscipit ex.
                                Voluptas <br /> consectetur incidunt, temporibus
                                veniam fugit corporis deleniti ea.
                            </p>

                            <a href="/">
                                <button
                                    id="getquote"
                                    className="md:py-[0.7vw] md:px-[2vw] py-[2vw] px-[17vw] bg-blue-500 rounded-md md:mt-[0vw] mt-[6vw] shadow-xl hover:shadow-none transition duration-300 md:ml-[0vw]"
                                >
                                    <span
                                        className="md:font-semibold font-bold text-white"
                                        id="getquote2"
                                    >
                                        Dummy
                                    </span>
                                </button>
                            </a>
                        </div>
                        <div
                            id="right"
                            className="hidden md:block w-[60%] h-full bg-transparent object-center "
                        >
                            <Image
                                src="/images/team.jpg"
                                alt="video"
                                width={700}
                                height={100}
                                className="w-[100%]  pr-[10vw]"
                                id="bottom-video"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
