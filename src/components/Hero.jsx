import Image from 'next/image';

export default function Home() {
    return (
        <div id="page-1" className="bg-opacity-80 pb-20">
            <Image
                width={1000}
                height={100}
                src="/images/team.jpg"
                alt="video"
                className="md:hidden mt-[4vw] md:mt-[1vw] w-[70%] md:mx-auto"
                id="top-image"
            />
            <div id="content" className="mt-5">
                <div className="w-full flex flex-col md:flex-row mt-[-5vw] md:mt-[-2vw]">
                    <div id="left" className="md:w-1/2 md:px-12 md:pt-32 md:ml-10">
                        <h1 className="text-3xl md:text-5xl font-bold mt-[5vw] md:mt-[3vw] text-gray-800">
                            Lorem ipsum dolor sit amet consectetur
                        </h1>
                        <p className="my-5 text-gray-600 font-semibold">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, suscipit ex.
                            Voluptas consectetur incidunt, temporibus veniam fugit corporis deleniti ea.
                        </p>
                        <a href="/">
                            <button className="md:py-2 md:px-8 py-4 px-14 bg-blue-500 rounded-md md:mt-0 mt-6 shadow-xl hover:shadow-none transition duration-300">
                                <span className="font-bold text-white">Dummy</span>
                            </button>
                        </a>
                    </div>
                    <div id="right" className="hidden md:block w-[60%]">
                        <Image
                            src="/images/team.jpg"
                            alt="video"
                            width={700}
                            height={100}
                            className="w-full pr-10"
                            id="bottom"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
