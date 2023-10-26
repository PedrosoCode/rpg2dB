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
          Um sistema <strong>Universal, e simples</strong>, Para a sua mesa de RPG
        </h2>
      </section>
      <section className='section'>
        <div className="box">
          <h2>Simplificando mecânicas de jogo</h2>
          <br></br>
          <p>A Principal ídeia por trás do RPG foi simplificar o RPG de mesa, para um sistema que não tenha atributos e pericías em exagero,
            como por exemplo em chamado de Cthulhu que muitas das perícias nunca são usadas na mesa
            <br></br>
            <p>Dessa forma, o RPG2D se distribui com bases no seguintes atributos principais</p>
            <br></br>
            <div id='list'>
            
            <ol>
              <li>Força</li>
              <li>Destreza</li>
              <li>Inteligência</li>
              <li>Sabedoria</li>
              <li>Carisma</li>
              <li>Constituição</li>
            </ol>
            </div>
          </p>
          <section className='section'>
            <div class="columns">
              <div class="column col-atr">
                Atributos do corpo
                <ul>
                  <li>Força</li>
                  <li>Destreza</li>
                </ul>
              </div>
              <div class="column col-atr">
                Atributos da mente
                <ul>
                  <li>Inteligêcnia</li>
                  <li>Sabedoria</li>
                </ul>
              </div>
              <div class="column col-atr">
                Atributos de força de vontade
                <ul>
                  <li>Constituição</li>
                  <li>Carisma</li>
                </ul>
              </div>
              <div class="column col-atr">
                Atributos de Combate               
                <ul>
                  <li>Armas de uma mão</li>
                  <li>Armas de duas mãos</li>
                  <li>Pontaria</li>
                </ul>
              </div>
              <div class="column col-atr">
                Atributos sem definição
                <ul>
                  <li>Força</li>
                  <li>Destreza</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
      <h1>Página Inicial</h1>
      <Link to="/contato">Ir para a página de contato</Link>
      <Link to="/teste">Ir para a página de teste</Link>
      <Link to="/WorldPage">
      <button class="button is-large is-fullwidth is-rounded is-success">Acessar página de worldbuilding</button>
      </Link>
      <br></br>
      <Link to="/SheetsPage">
      <button class="button is-large is-fullwidth is-rounded is-success">Acessar página de Fichas</button>
      </Link>
      <br></br>
      <Link to="/EquipsPage">
      <button class="button is-large is-fullwidth is-rounded is-success">Acessar página de ítens/equipamentos</button>
      </Link>
      <br></br>
      <Footer />
    </div>
  );
}

export default HomePage;
