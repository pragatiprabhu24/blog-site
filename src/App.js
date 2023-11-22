import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import './asset/style.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
}

export default App;