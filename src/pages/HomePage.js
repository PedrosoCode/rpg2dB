// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Link to="/contato">Ir para a página de contato</Link>
    </div>
  );
}

export default HomePage;
