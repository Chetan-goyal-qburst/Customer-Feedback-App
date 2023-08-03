import React from 'react'
import Page1 from './Page1';
import PageBody from './PageBody';
import NavBar from '../menupage/navbar';
import Header from '../../components/header/Header';


const Layout = () => {
  
    return (
      <div>
          <NavBar/>
          <Header/>
         <Page1/>
         <PageBody/>
      </div>
    )
  
  
}

export default Layout;