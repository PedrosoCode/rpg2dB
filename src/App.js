// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import './bulma/css/bulma.min.css';
import './index.css';

/* 
o comando para reverter as alterações é git reset --hard HEAD
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
