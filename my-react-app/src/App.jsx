import { useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './CSS/Styles.css'
import Navbar from './assets/Navbar'
import MainPage from './pages/MainPage'
import Sofia from './pages/Sofia'
import Plovdiv from './pages/Plovdiv'
import Varna from './pages/Varna'
import LoginAndRegister from './pages/LoginAndRegister';
import { AuthProvider } from './authenticator/AuthContext';

function Navigator() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/Sofia" element={<Sofia />} />
          <Route path="/Plovdiv" element={<Plovdiv />} />
          <Route path="/Varna" element={<Varna />} />
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
