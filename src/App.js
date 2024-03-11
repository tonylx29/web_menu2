import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MenuItem from './components/MenuItem';
import PaginaPrincipal from './components/PaginaPrincipal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal/>} />
        <Route path="/bloques/:facultyName" element={<MenuItem/>} />
      </Routes>
    </Router>
  );
}

export default App;
