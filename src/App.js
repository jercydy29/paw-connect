import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import UserProfileRegister from './userProfileRegister/UserProfileRegister';
import UserBasic from './userBasic/userBasic';
// import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/userProfileRegister' element={<UserProfileRegister />} />
            <Route path='/userBasic' element={<UserBasic />} />
        </Routes>
    );
}

export default App;
