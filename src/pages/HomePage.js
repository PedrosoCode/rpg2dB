import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../globals/globals'; // Caminho atualizado




function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="section is-medium">
        <h1 className="title">Uma Breve introdução ao sistema RPG2D</h1>
        <h2 className="subtitle">
          Um sistema <strong>Universal, e simples</strong>, Para a sua mesa de RPG teste
        </h2>
      </section>
      <Footer />
      <h1>Página Inicial</h1>
      <Link to="/contato">Ir para a página de contato</Link>
    </div>
  );
}

export default HomePage;
