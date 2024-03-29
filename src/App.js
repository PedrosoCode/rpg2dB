// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import TestPage from './pages/TestPage';
import './bulma/css/bulma.min.css';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css'; // Importe os estilos
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importe os scripts
import axios from 'axios';

import SheetsPage from './pages/SheetsPage';
import EquipsPage from './pages/EquipsPage';
import WorldPage from './pages/WorldPage';
import SpellsPage from './pages/SpellsPage';
import PerksPage from './pages/PerksPage'
import RangedWeapons from './pages/RangedWeapons';
import ArmorsPage from './pages/ArmorsPage';
import ThingsPage from './pages/ThingsPage';
import CoreRules from './pages/CoreRules';
import Backgrounds from './pages/Backgrounds';
/* 
Aqui vem importações texts
*/

import LevellingUp from './pages/texts/LevellingUp';

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
        <Route path="/SpellsPage" element={<SpellsPage />} />
        <Route path="/PerksPage" element={<PerksPage />} />
        <Route path="/RangedWeapons" element={<RangedWeapons />} />
        <Route path="/ArmorsPage" element={<ArmorsPage />} />
        <Route path="/ThingsPage" element={<ThingsPage />} />
        <Route path="/CoreRules" element={<CoreRules />} />
        <Route path="/Backgrounds" element={<Backgrounds />} />
        <Route path="/TestPage" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
