import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; 
import Login from './components/Login'; 
import SignUp from './components/Sign-up'; 
import ViewMem from './components/View_mem'; 
import Board from './components/Board';  
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/view_mem" element={<ViewMem />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
