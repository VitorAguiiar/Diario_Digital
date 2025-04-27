import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../src/pages/Inicio';
import Nova from '../src/pages/Nova';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nova" element={<Nova />} />
        <Route path="/nova/:id" element={<Nova />} />
      </Routes>
    </Router>
  );
}
