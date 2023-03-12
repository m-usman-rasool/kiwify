import React from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Header from "./header";
import Signin from "./signin";
import Signup from './signup';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Header />
      <Routes>
        <Route  path='/' element={<Signup />}  />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
