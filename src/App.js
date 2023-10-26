// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import TestPage from './pages/TestPage';
import './bulma/css/bulma.min.css';
import './index.css';
import SheetsPage from './pages/SheetsPage';
import EquipsPage from './pages/EquipsPage';
import WorldPage from './pages/WorldPage';

/* 
o comando para reverter as alterações é git reset --hard HEAD
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/teste" element={<TestPage />} />
        <Route path="/SheetsPage" element={<SheetsPage />} />
        <Route path="/EquipsPage" element={<EquipsPage />} />
        <Route path="/WorldPage" element={<WorldPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
