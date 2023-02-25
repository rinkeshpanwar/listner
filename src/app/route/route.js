import React from 'react'
import { Routes, Route } from "react-router-dom";
import DetailQuestion from '../page/detailQuestion';
import Home from '../page/home';
import SearchResult from '../page/searchResult';
import { Paths } from './paths';
import Navbar from '../component/navbar';
import Login from '../page/login';
import { useDispatch, useSelector } from 'react-redux';
import { authSlice } from '../slice/authSlice';
import Loader from '../component/loader';
import Youtube from '../page/youtube';

function Router() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  React.useEffect(() => {
    dispatch(authSlice.actions.autoLogin())
  }, [dispatch])
  if (authState.loading) {
    return <div className='h-screen w-screen flex justify-center items-center'>
        <Loader />
    </div>
  }
  if (authState.data === null) {
    return <Routes >
      <Route path={Paths.LOGIN} element={<Login />} />
      <Route path={Paths.DEFAULT} element={<Login />} />
    </Routes>;
  }
  return <Routes >
    <Route element={<Navbar />}>
      <Route path={Paths.HOME} element={<Home />} />
      <Route path={Paths.SEARCH_RESULT} element={<SearchResult />} />
      <Route path={Paths.DETAIL_QUESTION} element={<DetailQuestion />} />
      <Route path={Paths.YOUTUBE} element={<Youtube />} />
      <Route path={Paths.DEFAULT} element={<h1>404 not found</h1>} />
    </Route>
  </Routes>;
}

export default Router