/* eslint-disable no-undef */

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, MasterMenu } from "../globals/globals"; // Caminho atualizado

function HomePage() {
  return (
    <div className="MainBG">
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
          <div class="content is-large">
            <h1>Seja bem vindo!</h1>
            <p>
              Fique a vontade para fuçar por essa página, nela estou
              documentando a maior parte das regras e recursos do meu sistema de
              RPG
            </p>
            <div class="content is-medium">
              <h1>A favor da simplicidade</h1>
              <p>
                O sistema RPG2D é baseado essencialmente no uso de dois dados
                para fazer as rolagens (dái vem o nome, RPG 2 D) <br></br>
                As rolagens são feitas juntando o dado primário, D20. Com o seu
                dado secundário, o dado secundário varia de acordo com seu nível
                no atributo que será usado
                <br></br>
                <br></br>
                Com base nesse conceito simples, unido a modificadores e perks,
                o RPG2D se torna a base perfeita para um sistema simples,
                Universal e adaptável
              </p>

              <table class="table is-bordered is-striped is-hoverable">
                <thead>
                  <tr>
                    <th>Rank do atributo</th>
                    <th>Dado a ser utilizado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>Nenhum</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1D4</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1D6</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1D8</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1D10</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>1D12</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>1D16</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>1D20</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>1D20 + 1</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>1D20 + 2</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>1D20 + 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <aside class="menu">
            <p class="menu-label">Navegação</p>
            <ul class="menu-list">
              <li>
                Links das páginas principais
                <ul>
                  <li>
                    <Link to="/WorldPage">worldbuilding</Link>
                  </li>
                  <li>
                    <Link to="/SheetsPage">Fichas</Link>
                  </li>
                  <li>
                    <Link to="/EquipsPage">Armas Brancas</Link>
                  </li>
                  <li>
                    <Link to="/RangedWeapons">Armas à distância</Link>
                  </li>
                  <li>
                    <Link to="/ArmorsPage">Armaduras</Link>
                  </li>
                  <li>
                    <Link to="/ThingsPage">items</Link>
                  </li>
                  <li>
                    <Link to="/SpellsPage">SpellCasting</Link>
                  </li>
                  <li>
                    <Link to="/PerksPage">Lista de Perks</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default HomePage;
