import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import TeamPage from './pages/Team/TeamPage';
import TeamCreateUserPage from './pages/Team/TeamCreateUserPage';
import TeamUpdateUserPage from './pages/Team/TeamUpdateUserPage';

import LoginPage from './pages/Login/LoginPage';
import ForgotPasswordPage from './pages/Login/ForgotPasswordPage';
import RegisterPage from './pages/Login/RegisterPage';
import Navigation from './components/Navigation';

function App() {

  return (
    <Router>
        <Navigation  />
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/dashboard" element={<MainLayout />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
            <Route path="/register" element={<RegisterPage />} />


            <Route path="/team" element={<TeamPage />} />
            <Route path="/team/usuario/novo" element={<TeamCreateUserPage />} />
            <Route path="/team/usuario/editar" element={<TeamUpdateUserPage />} />

          </Routes>        
      </Router>
  );
}

export default App;
