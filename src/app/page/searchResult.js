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
        <div className='w-screen'>
            <div className='flex justify-between font-primary px-10 mt-10'>
                <p className='line-clamp-1 font-medium text-xl'>Search Result &ldquo; {searchState.search} &rdquo;</p>
                <button className='text-indigo-400 text-lg' onClick={() => setAdvaceSearchPopup((prev) => !prev)}>
                    Advance search 
                </button>
                <Modal open={advanceSearchPopup} onClose={() => setAdvaceSearchPopup(false)}>
                    <div>
                        Modal contet goes here
                    </div>
                </Modal>
            </div>
            <div className='flex px-10 mt-5'>
                <div className='w-4/5'>
                    <SearchCard />
                </div>
                <div className=''>other information</div>
            </div>
        </div>
    )
}

export default SearchResult;
