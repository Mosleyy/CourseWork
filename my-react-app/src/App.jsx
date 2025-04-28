import { useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles.css'
import Navbar from './Navbar'
import MainPage from './pages/MainPage'
import About from './pages/About'
import LoginAndRegister from './pages/LoginAndRegister';
import { AuthProvider } from './authenticator/AuthContext';

function Navigator() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<LoginAndRegister/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


function App() {
  
  return (
    <>
      <Navbar/>   
      <Navigator/>
    </>
  )
}

export default App
