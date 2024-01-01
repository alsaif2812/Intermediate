'use client';
import { Gallery } from 'react-grid-gallery';
import ImgsViewer from 'react-images-viewer';
import { useState } from 'react';

export default function PhotoGrid({ images }) {
    const [isOpen, setOpen] = useState(false);
    const [currImg, setCurrImg] = useState(0);
    const handleClose = () => setOpen(!isOpen);
    const handlePrev = () => setCurrImg(currImg - 1);
    const handleNext = () => setCurrImg(currImg + 1);

    const setIdxAndShowViewer = (idx) => {
        setCurrImg(idx);
        setOpen(true);
    };

    return (
        <>
            <div className="my-24">
                <div id="texts-gallery" className=" text-center pb-4">
                    <p className=" font-semibold md:text-sm tracking-widest uppercase text-purple-500">
                        Gallery
                    </p>
                    <h1 className=" md:text-6xl text-4xl  mt-[2vw] md:my-[1.4vw] font-bold text-[#212121]">
                        Life at Wahni.
                    </h1>
                </div>
                <div className="mx-2 md:mx-22">
                    <Gallery
                        images={images}
                        enableImageSelection={false}
                        onClick={(idx) => setIdxAndShowViewer(idx)}
                        maxRow={4}
                    />
                </div>
                <ImgsViewer
                    imgs={images}
                    currImg={currImg}
                    isOpen={isOpen}
                    onClickNext={handleNext}
                    onClickPrev={handlePrev}
                    onClose={handleClose}
                    preventScroll={true}
                />
            </div>
        </>
    );
}
