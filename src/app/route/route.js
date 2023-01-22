import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../page/home';
import { Paths } from './paths';

function Router() {
  return <Routes>
    <Route path={Paths.HOME} element={<Home />} />
    <Route path={Paths.SEARCH_RESULT} element={<Home />} />
    <Route path={Paths.DEFAULT} element={<h1>404 not found</h1>} />
  </Routes>;
}

export default Router