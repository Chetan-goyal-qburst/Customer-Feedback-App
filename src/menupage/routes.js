import React from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import RegisterPage from './register';

const AppRoutes = () =>{
      return(
         <BrowserRouter>
         <Routes>
            <Route path="/register" Component={<RegisterPage/>} />
         </Routes>
         </BrowserRouter>
      );
};

export default AppRoutes;