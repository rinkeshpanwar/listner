import React from 'react'
import {BiDownvote, BiUpvote} from 'react-icons/bi'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function SearchCard(props) {
  const navigate = useNavigate()
  return (
    <div className='w-full'>
        <div className='flex' onClick={() => navigate(`/question/${props.id}`)}>
            <p className='font-primary line-clamp-1 font-medium text-lg text-primary_black cursor-pointer'>{props.title}</p>
            <div className='rounded-sm ml-2 text-primary_white font-primary px-2 text-lg cursor-pointer bg-green-600'>Accepted</div>
        </div>
        <div className="mt-5 font-secondary text-base text-slate-800 bg-stone-200 rounded-lg pl-3 py-4">
            <div className='line-clamp-3' dangerouslySetInnerHTML={{__html : props.description}}>
            </div>
        </div>
        <div className='mt-3 flex items-center' onClick={() => navigate(`/question/${props.key}`)}>
            <div className='line-clamp-1 space-x-2'>
                {
                    props.description_text_tag?.map((element) => 
                    <div className='font-primary cursor-pointer text-sm max-w-[100px] truncate inline-block px-2 py-1 bg-slate-200 rounded-sm text-indigo-600 '>{element}
                    </div>)
                }
            </div>
            <div className="flex items-center min-w-max">
                <BiUpvote className='ml-3 text-xl text-green-400' />
                <p className='font-secondary text-base font-medium text-green-600'>{props.upvote}</p>
                <BiDownvote className='ml-3 text-xl text-red-400' />
                <p className='font-secondary text-base text-red-600 font-medium'>{props.downvote}</p>
            </div>
        </div>
    </div>
  )
}

SearchCard.propType = {
    id: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    tags: propTypes.array,
    upvote: propTypes.number,
    downvote: propTypes.number,
    description_text_tag: propTypes.array
}
export default SearchCard