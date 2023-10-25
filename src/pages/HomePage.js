import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importe o Navbar aqui
import Footer from './components/Footer'; // Importe o Footer aqui

function HomePage() {
  return (
    <div>
      <Navbar />
      {/* Outro conteúdo do seu aplicativo */}
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
