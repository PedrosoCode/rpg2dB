/* eslint-disable no-undef */

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../globals/globals"; // Caminho atualizado

function HomePage() {
  return (
    <div>
      <Navbar />

      <section className="section is-medium mainhead">
        <h1 className="headtext">Uma Breve introdução ao sistema RPG2D</h1>
        <h2 className="headtext">
          Um sistema <strong>Universal, e simples</strong>, Para a sua mesa de
          RPG
        </h2>
        <div className="overlay"></div>
      </section>
      <section className="section">
        <div className="box">
          <h2>Simplificando mecânicas de jogo</h2>
          <br></br>
          <p>
            Por meio dessa Homepage vou lhe apresentar o sistema, e te convencer
            a dar uma chance
            <br></br>
            <p>
              Dessa forma, o RPG2D se distribui com bases no seguintes pilares
              principais
            </p>
            <br></br>
          </p>
          <section className="section">
            <div class="columns">
              <div class="column col-atr">
                Simplicidade
                <ul>
                  <p>
                    O foco Principal do RPG2D, é ser um sistema simples, com
                    coisas mais complexas sendo adicionadas a gosto da mesa
                  </p>
                </ul>
              </div>
              <div class="column col-atr">
                Builds, e Flexibilidade
                <ul>
                  <p>
                    No RPG2D não temos Classes, Pela Flexibilidade como você
                    monta seus personagens, você tem controle total sobre como
                    fazer sua build e estilo de jogo
                  </p>
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
      <Link to="/WorldPage">
        <br></br>
        <button class="button is-large is-rounded is-success">
          Acessar página de worldbuilding
        </button>
      </Link>
      <br></br>
      <Link to="/SheetsPage">
        <button class="button is-large  is-rounded is-success">
          Acessar página de Fichas
        </button>
      </Link>
      <br></br>
      <Link to="/EquipsPage">
        <button class="button is-large  is-rounded is-success">
          Acessar página de ítens/equipamentos
        </button>
      </Link>
      <br></br>
      <Footer />
    </div>
  );
}

export default HomePage;
