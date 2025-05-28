import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import UserProfileRegister from './userProfileRegister/UserProfileRegister';
// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/UserProfileRegister' element={<UserProfileRegister />} />
        </Routes>
    );
}

export default App;
