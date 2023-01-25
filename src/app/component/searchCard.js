import React from 'react'
import {BiDownvote, BiUpvote} from 'react-icons/bi';

function SearchCard() {
  return (
    <div className='w-full'>
        <div className='flex'>
            <p className='font-primary line-clamp-1 font-medium text-lg text-primary_black cursor-pointer'>How to setup node js in windows 10?</p>
            <div className='rounded-sm ml-2 text-primary_white font-primary px-2 text-lg cursor-pointer bg-green-600'>Accepted</div>
        </div>
        <div className="mt-5 font-secondary text-base text-slate-800 bg-stone-200 rounded-lg pl-3 py-4">
            <div className='line-clamp-3'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
                lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </div>
        <div className='mt-3 flex items-center'>
            <div className='line-clamp-1 space-x-2'>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
                <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>Tafsfsfdsfsdfsdfsdfdsfsfsdfsdfs1
                </div>
            </div>
            <div className="flex items-center min-w-max">
                <BiUpvote className='ml-3 text-xl text-green-400' />
                <p className='font-secondary text-base font-medium text-green-600'>10 Upvote</p>
                <BiDownvote className='ml-3 text-xl text-red-400' />
                <p className='font-secondary text-base text-red-600 font-medium'>10 Downvote</p>
            </div>
        </div>
    </div>
  )
}

export default SearchCard