import { Button } from '@mui/material';
import { intervalToDuration } from 'date-fns';
import React from 'react';
import { BiDownvote, BiUpvote } from 'react-icons/bi';

function TimeCalculator({start, end, maxElement = 2}) {
    let totalElement = 0;

    const interValDuration = intervalToDuration({
        start: start,
        end: end
    });

    for( let i in interValDuration) {
        if(interValDuration[i] === 0) {
            delete interValDuration[i];
        } else {
            if (totalElement === maxElement) {
                delete interValDuration[i];
            } else {
                totalElement++;
            }
        }
    }
    return (
        <div className='flex items-center'>
            {
                Object.keys(interValDuration).map((key, index) => {
                    return (
                        <div key={index+"time_calculator"}>
                            <span className='font-primary text-zinc-800 font-normal'>&nbsp; {interValDuration[key]} </span>
                            <span className='font-primary text-zinc-800 font-normal'>{key}.</span>
                        </div>
                    )
                    })
            }
        </div>
    )
}
function DetailQuestion() {
  return (
    <div className='px-10'>
        <div className='flex justify-between mt-10 font-primary items-start'>
            <p className='font-semibold text-zinc-800'>Why is processing a sorted array faster than processing an unsorted array fdsfds fdsfsd fdsfsdfds fdsfdsfsd fds?</p>
            <Button variant="contained" color="primary" className='w-fit bg-violet-500 shadow-sm hover:shadow-md '>
                Ask Question
            </Button> 
        </div>  
        <div className='flex text-xs gap-8'>
            <div className='flex flex-col items-center'>
                <span className='font-primary text-gray-500 font-normal'>Asked</span>
                <TimeCalculator start={new Date()} end={new Date(2022, 10, 10)} />
                <span className='font-primary text-zinc-800 font-normal'>&nbsp;ago</span>
            </div>
            <div className='flex flex-col items-center'>
                <span className='font-primary text-gray-500 font-normal'>Modified</span>
                <TimeCalculator start={new Date()} end={new Date(2022, 10, 10)} maxElement={1}/>
            </div>
            <div className='flex flex-col items-center'>
                <span className='font-primary text-gray-500 font-normal'>Viewed</span>
                {new Intl.NumberFormat().format(1000000)} Times
            </div>
        </div>
        <hr className='my-3 '/>
        <div className='flex gap-8'>
            <div className='w-[3%] flex flex-col items-center gap-2 font-secondary cursor-pointer'>
                <BiUpvote className='text-4xl text-green-500 '/>
                <span className='font-primary text-zinc-600 font-normal'>Vote</span>
                <BiDownvote className='text-4xl text-red-500 cursor-pointer'/>
            </div>
            <div className='w-[70%] font-primary text-neutral-900 flex-shrink'>
                <div className='px-4'>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc ni</div>
                <div className='mt-3 px-4 py-7 rounded-md bg-slate-300 max-h-screen overflow-auto max-w-full scroll-smooth'>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, nec aliquet nunc nisl
                </div>
            </div>
            <div className='bg-red-400 w-[26%]'>
                suggestion
            </div>
        </div>
    </div>
  )
}

export default DetailQuestion