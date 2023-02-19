import { Modal } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Error from '../component/error';
import Loader from '../component/loader';
import SearchCard from '../component/searchCard';
import { SkeleotonPopularQuestion } from '../component/searchLoader';
import { Paths } from '../route/paths';
import { searchSlice, searchThunk } from '../slice/searchSlice';

function SearchResult() {
    const {searchString} = useParams();
    const [advanceSearchPopup, setAdvaceSearchPopup] = React.useState(false);
    const searchState = useSelector((state) => state.search);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        if (decodeURIComponent(searchString) === "") {
            navigate(Paths.HOME);
        }
    });

    React.useEffect(() => {
        dispatch(searchSlice.actions.setSearch(decodeURIComponent(searchString)));
        dispatch(searchThunk(decodeURIComponent(searchString)));
        return () => {
            dispatch(searchSlice.actions.setSearch(""));
        }
    }, [decodeURIComponent(searchString)]);
    if (searchState.loading) {
        return <div className='flex h-[calc(100vh-30vh)] justify-center items-center'>
            <Loader />
        </div>;
    }
    if (searchState.error) {
        return <div className='flex h-[calc(100vh-30vh)]justify-center items-center'>
            <Error />
        </div>;
    }
    return (
        <div className='w-full' >
            <div className='flex justify-between font-primary px-10 mt-10'>
                <p className='line-clamp-1 text-lg'>Search result for &ldquo;<span className='italic font-secondary text-violet-900 font-bold'>{searchState.search}</span> &rdquo;</p>
                <button className='text-indigo-400 text-lg' onClick={() => setAdvaceSearchPopup((prev) => !prev)}>
                </button>
                <Modal open={advanceSearchPopup} onClose={() => setAdvaceSearchPopup(false)}>
                    <div>
                        Modal contet goes here
                    </div>
                </Modal>
            </div>
            {/* <div className='flex pr-10 lg:pr-0 pl-10 mt-5 gap-4 lg:gap-10 flex-wrap lg:flex-nowrap'>
                <div className='space-y-8'>
                    {searchState.data?._items?.map((element) => <SearchCard id={element.key} key={element.key} {...element}/> )}
                </div>
                <div className='w-full lg:w-[27%]'>
                    <div className='font-primary mt-2 font-medium text-lg'>Popular questions</div>
                    <div className='font-secondary lg:mt-3 space-y-2 font-light text-zinc-800'>
                        {
                            searchState.loading ?
                                Array(10).fill(0).map((_, index) => <SkeleotonPopularQuestion key={index+"_skeleoton_popular_question"} />)
                                : <>  
                                    <div className='line-clamp-3'>
                                    What is the best way to learn react?
                                    </div>
                                    <div className='line-clamp-3'>
                                    What is the best way to learn react?
                                    </div>
                                    <div className='line-clamp-3'>
                                    What is the best way to learn react?
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
            <div> */}
            <div className='px-10 mt-5'>
                <div className='space-y-8'>
                    {searchState.data?._items?.map((element) => <SearchCard id={element.key} key={element.key} {...element}/> )}
                </div>
            </div>
        </div>
    )
}

export default SearchResult;
