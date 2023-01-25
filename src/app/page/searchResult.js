import { Modal } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchCard from '../component/searchCard';
import { Paths } from '../route/paths';

function SearchResult() {
    const [advanceSearchPopup, setAdvaceSearchPopup] = React.useState(false);
    const searchState = useSelector((state) => state.search);
    const navigate = useNavigate();

    // React.useEffect(() => {
    //     if (searchState.search === "") {
    //         navigate(Paths.HOME);
    //     }
    // });

    return (
        <div className='w-full'>
            <div className='flex justify-between font-primary px-10 mt-10'>
                <p className='line-clamp-1 text-lg'>Search Result &ldquo; <span className='italic'>{searchState.search}</span> &rdquo;</p>
                <button className='text-indigo-400 text-lg' onClick={() => setAdvaceSearchPopup((prev) => !prev)}>
                    Advance search 
                </button>
                <Modal open={advanceSearchPopup} onClose={() => setAdvaceSearchPopup(false)}>
                    <div>
                        Modal contet goes here
                    </div>
                </Modal>
            </div>
            <div className='flex pr-10 lg:pr-0 pl-10 mt-5 gap-4 lg:gap-10 flex-wrap-reverse lg:flex-nowrap'>
                <div className='lg:w-[83%] space-y-8'>
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                </div>
                <div className='w-full lg:w-[27%]'>
                    <div className='font-primary mt-2 font-medium text-lg'>Popular questions</div>
                    <div className='font-secondary lg:mt-3 space-y-2 font-light text-zinc-800'>
                        <div className='line-clamp-3'>
                           What is the best way to learn react?
                        </div>
                        <div className='line-clamp-3'>
                           What is the best way to learn react?
                        </div>
                        <div className='line-clamp-3'>
                           What is the best way to learn react?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;
