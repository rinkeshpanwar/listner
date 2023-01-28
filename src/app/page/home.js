import React from 'react';
import { Snackbar } from '@mui/material';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import Searchbar from '../component/searchbar'
import { Paths } from '../route/paths';
import { searchSlice } from '../slice/searchSlice';

function Home() {
  const [notifySearch, setNotifySearch] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSearch(value) {
    if (!isEmpty(value)){
      dispatch(searchSlice.actions.setSearch(value));
      navigate(Paths.SEARCH_RESULT);
    } else {
      setNotifySearch(true);
    }
  }
  return (<>
      <Snackbar open={notifySearch}
        autoHideDuration={3000}
        onClose={() => setNotifySearch(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'top',
        }}
      >
        <div className='font-secondary w-screen md:w-1/5 bg-red-400 font-medium text-sm px-5 py-3 rounded-md text-white'>
          Enter the search query.
        </div>
      </Snackbar>
      <div className='h-screen flex justify-center items-center'>
        <Searchbar onSearch={handleSearch}/>
      </div>
    </>
  )
}

export default Home