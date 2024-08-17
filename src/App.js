
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profiles" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
 
export default App;
