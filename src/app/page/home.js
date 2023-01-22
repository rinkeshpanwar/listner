import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import Searchbar from '../component/searchbar'
import { Paths } from '../route/paths';
import { searchSlice } from '../slice/searchSlice';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSearch(value) {
    dispatch(searchSlice.actions.setSearch(value));
    navigate(Paths.SEARCH_RESULT);
  }
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
      <Searchbar onSearch={handleSearch}/>
      </div>
    </div>
  )
}

export default Home