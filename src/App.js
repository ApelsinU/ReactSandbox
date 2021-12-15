import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthPage from './pages/auth/AuthPage'
import MainPage from './pages/main/MainPage'
import About from './pages/about/About'
import Contacts from './pages/contacts/Contacts'

import './styles.sass';

function App() {
  return (
      <Router>
        <Routes>
            {/*<AuthPage></AuthPage>*/}
            <Route path='/' element={<MainPage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
    </Router>
  );
}

export default App;
