import React from 'react';
function VideoTextCard(props) {
  const bodyText = props.data.body.split('\n');
  
  return (
    <React.Fragment>
      <div className="md:mt-[0.6vw] md:flex  w-full">
        <div className=' '>
          <div id="video" className='rounded-2xl md:p-4 md:mt-3 mt-6 p-10'>
            <video
              src={props.data.video}
              alt="img"
              autoPlay
              loop
              muted
              width={1000}
              height={100}
              className="md:w-full md:h-full object-cover cursor-pointer w- rounded-xl bg-black md:hidden block "
              id="topimg"
            />
          </div>
          <div id="title" className=" text-center md:text-left mt-10 ">
            <h1 className="text-4xl font-bold text-[#212121]">
              {props.data.heading}
            </h1>
          </div>
          <div
            id="text"
            className="p-2 mt-2 rounded-3xl text-lg font-semibold leading-6"
          >
            {bodyText.map((i, index) => (
              <p key={index} className="mt-4">{i}</p>
            ))}


            {props.data.points ? props.data.points.map((i, index) => <p key={index}>

              {i}</p>) : null
            }

          </div>
          <div
            id="btns"
            className="flex items-center justify-center md:block p-3"
          >
            <button className="bg-blue-300 py-2 px-4 md:py-3 md:px-7 rounded-lg font-bold text-white">
              Dummy
            </button>
          </div>
        </div>
        <div className='md:w-100vw bgblack md:pb-10 md:px-16'>
        <video
          src={props.data.video}
          alt="img"
          autoPlay
          loop
          muted
          width={100}
          height={100}
          className="md:w-[100%] md:h-full rounded-2xl bg mt-9 ml-8 cursor-pointer   md:block hidden"
          id="bottomimg"
        />
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default VideoTextCard;
