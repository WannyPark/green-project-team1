import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Sign_up';
import ViewMem from './components/View_mem';
import Board from './components/Board';
import Board_list from './components/Board_list';
import Board_list_details from './components/Board_list_details';
import Meeting_list_details from './components/Meeting_list_details';
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
          <Route path="/board_list" element={<Board_list />} />
          <Route path="/board_list_details" element={<Board_list_details />} />
          <Route path="/meeting_list_details" element={<Meeting_list_details />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
