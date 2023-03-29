import React from 'react';
import {Route, Routes} from "react-router-dom";

import AppHeader from "../AppHeader/app-header";

import Index from '../../pages';
import FourOFour from '../../pages/four-o-four';
import ForgotPassword from '../../pages/forgot-password';
import Ingredients from '../../pages/ingredients-id';
import Login from '../../pages/login';
import Profile from '../../pages/profile';
import Register from '../../pages/register';
import ResetPassword from '../../pages/reset-password';

import styles from "./app.module.css";


// App component
export default function App() {

  return (
      <>
        <AppHeader />
          <Routes>
            <Route path='/' element={
              <main className={styles.main}>
                <Index />
              </main>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/ingredients/:id' element={<Ingredients />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
      </>
  );
}
