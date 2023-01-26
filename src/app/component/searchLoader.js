import React from 'react'
import { Skeleton } from '@mui/material'

export function SkeleotonPopularQuestion(params) {
    
    return (
        <div className='font-secondary lg:mt-3 space-y-2 font-light text-zinc-800'>
                <Skeleton variant="text" animation="wave" className='h-10 w-64' />
        </div>
    )
}

function SearchLoader() {
  return (
    <div className='w-full'>
        <div className='flex flex-wrap gap-2'>
            <Skeleton variant="text" animation="wave" className='h-10 w-1/2' />
            <Skeleton variant="text" animation="wave" className='h-10 w-14' />
        </div>
        <Skeleton variant="rounded" animation="wave" className='h-40' />
        <div className='flex gap-2 flex-wrap '>
            {
                Array(6).fill(0).map((_, index) => 
                <Skeleton variant="text" animation="wave" key={index+"skeleoton_chips"} className='h-10 w-24' />)
            }
        </div>
    </div>
  )
}

export default SearchLoader