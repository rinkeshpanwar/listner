import { Button } from '@mui/material';
import { intervalToDuration } from 'date-fns';
import React from 'react';

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
            <span className='font-primary text-gray-500 font-normal'>Viewed</span>
        </div>
    </div>
  )
}

export default DetailQuestion