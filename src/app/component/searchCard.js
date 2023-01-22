import React from 'react'
import {BiUpvote} from 'react-icons/bi';

function SearchCard() {
  return (
    <div className='w-full'>
        <div className='flex '>
            <p className='font-primary line-clamp-1 font-medium text-lg text-primary_black'>How to setup node js in windows 10?</p>
            <div></div>
            <div className='rounded-sm ml-2 text-primary_white font-primary px-2 text-lg  bg-green-600'>Accepted</div>
        </div>
        <div className="font-secondary text-base line-clamp-3 text-slate-800 mt-2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
            lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
            lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className='mt-3 flex items-center'>
            <div className='line-clamp-1 space-x-2'>
                <div className='font-primary text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
            </div>
            <BiUpvote className='ml-3 text-xl text-green-400' />
            <p className='font-secondary text-base text-green-600'>10 Upvote</p>
        </div>
    </div>
  )
}

export default SearchCard