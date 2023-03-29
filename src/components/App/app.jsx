import React from 'react';
import {Route, Routes} from "react-router-dom";

import AppHeader from "../AppHeader/app-header";

import Index from '../../pages';

import styles from "./app.module.css";


// App component
export default function App() {

  return (
      <>
        <AppHeader />
        <main className={styles.main}>
          <Routes>
            <Route path='/' element={<Index />} />
          </Routes>
        </main>
      </>
  );
}
