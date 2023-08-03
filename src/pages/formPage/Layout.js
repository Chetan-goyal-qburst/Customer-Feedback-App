import React from 'react'
import Page1 from './Page1';
import PageBody from './PageBody';
import NavBar from '../menupage/navbar';
import Header from '../../components/header/Header';
import { flag } from "../menupage/myconstants";
import ErrorMessage from "../menupage/errorpage";

const Layout = () => {
  if(flag===true){
    return (
      <div>
          <NavBar/>
          <Header/>
         <Page1/>
         <PageBody/>
      </div>
    )
  }
  else{
    return (<ErrorMessage/>);
    
  }
  
}

export default Layout;