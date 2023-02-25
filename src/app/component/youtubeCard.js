import React from "react";

function ResultCards({item, downloadVideo}) {
    console.log("re rendered");
    return <div className='bg-gray-200 rounded-md w-full flex justify-between space-x-10 font-primary px-5 py-3'>
      <div className='flex space-x-10'>
        <iframe src={item?.videoDetails?.embed?.iframeUrl} className="w-[40vw] h-[30vh] object-contain rounded-md align-top" />
        <div className='flex flex-col '>
          <div className='line-clamp-2 text-2xl'>
            {item.videoDetails.title}
          </div>
          <div className='line-clamp-4 text-base'>
            {item.videoDetails.description}
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <button onClick={() => downloadVideo(item?.videoDetails?.video_url)} className='bg-green-600 text-white px-5 py-2 rounded-sm'>Download</button>
        <button onClick={() => window.open(item?.videoDetails?.video_url)} className='bg-red-600 text-white px-5 py-2 rounded-sm mt-2'>Youtube</button>
      </div>
    </div>;
  }
  
export default React.memo(ResultCards);