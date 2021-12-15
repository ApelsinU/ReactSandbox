import React from "react";
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

import './styles.sass';

function App() {
  return (
    <div className='wrapper'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  );
}

export default App;
