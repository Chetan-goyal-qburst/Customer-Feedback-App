import React from 'react'
import Page1 from './Page1';
import PageBody from './PageBody';
import NavBar from '../menupage/navbar';
import Header from '../../components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormList from './FormList'


const Layout = () => {
  
    return (
      <div>
          <NavBar/>
          <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page1/>}/>
            <Route path="/list" element={<FormList/>}/>
            <Route path="/form" element={<Page1/>}/>
          </Routes>
      </BrowserRouter>
         <PageBody/>
      </div>
    )
  
  
}

export default Layout;