import React, {Suspense, lazy} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles.sass'

import Loading from './components/loading/Loading'
import Calculator from "./components/calculator/Calculator";

import AuthPage from './pages/auth/AuthPage'
const MainPage = lazy(() => import('./pages/main/MainPage'))
const About = lazy(() => import('./pages/about/About'))
const Contacts = lazy(() => import('./pages/contacts/Contacts'))


function App() {
  return (
      <Router>
          <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/auth' element={<AuthPage/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts />}/>
                </Routes>
          </Suspense>
    </Router>
  );
}

export default App;
