/* eslint-disable no-undef */

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, MasterMenu } from "../globals/globals"; // Caminho atualizado

function CoreRules() {
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
              Nesta Sessão iremos aprender sobre as principais regras do sistema
            </p>
            <div class="content is-medium">
              <h1>Como São feitas as Rolagens</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet lobortis lectus ut volutpat. Etiam nunc elit, gravida id
                leo vitae, commodo tempus massa. Duis eget turpis in dui
                dapibus.
              </p>
            </div>
            <div class="content is-medium">
              <h1>Atributos Principais</h1>
              <h4>O que são Atributos?</h4>
              <h4>Atributos do corpo</h4>
              <h4>Atributos da mente</h4>
              <h4>Atributos de Persistência</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet lobortis lectus ut volutpat. Etiam nunc elit, gravida id
                leo vitae, commodo tempus massa. Duis eget turpis in dui
                dapibus.
              </p>
              <h6>Modificadores</h6>
            </div>
            <div class="content is-medium">
              <h1>Atributos Derivados</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet lobortis lectus ut volutpat. Etiam nunc elit, gravida id
                leo vitae, commodo tempus massa. Duis eget turpis in dui
                dapibus.
              </p>
            </div>
            <div class="content is-medium">
              <h1>Subindo de nível</h1>
              <h4>Evolução de atributo</h4>
              <h4>Aumento de HP</h4>
              <h4>Compra de Perks</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet lobortis lectus ut volutpat. Etiam nunc elit, gravida id
                leo vitae, commodo tempus massa. Duis eget turpis in dui
                dapibus.
              </p>
            </div>
            <div class="content is-medium">
              <h1>Economia de ações</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet lobortis lectus ut volutpat. Etiam nunc elit, gravida id
                leo vitae, commodo tempus massa. Duis eget turpis in dui
                dapibus.
                <h6>O que são ações</h6>
                <h6>O que são ações menores</h6>
                <h6>O que são reações</h6>
                <h6>O que são ações livres</h6>
                <p>Lista de ações que você pode fazer</p>
                <ul>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
                <p>Lista de ações Menores que você pode fazer</p>
                <ul>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
                <p>Lista de areações que você pode fazer</p>
                <ul>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
                <p>Lista de ações livres que você pode fazer</p>
                <ul>
                  <li>Coffee</li>
                  <li>Tea</li>
                  <li>Milk</li>
                </ul>
              </p>
            </div>
            <div class="content is-medium">
              <h1>Combate</h1>
              <p>
                <li>Tipos de dano</li>
              </p>
            </div>
            <div class="content is-medium">
              <h1>Conjurando Spells</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet lobortis lectus ut volutpat. Etiam nunc elit, gravida id
                leo vitae, commodo tempus massa. Duis eget turpis in dui
                dapibus.
              </p>
            </div>
            <div class="content is-medium">
              <h1>Proficiências</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet lobortis lectus ut volutpat. Etiam nunc elit, gravida id
                leo vitae, commodo tempus massa. Duis eget turpis in dui
                dapibus.
              </p>
            </div>
            <div class="content is-medium">
              <h1>Criando sua Build e seu Personagem</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet lobortis lectus ut volutpat. Etiam nunc elit, gravida id
                leo vitae, commodo tempus massa. Duis eget turpis in dui
                dapibus.
              </p>
            </div>
            <div class="content is-medium">
              <h1>Utilizando Perks</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet lobortis lectus ut volutpat. Etiam nunc elit, gravida id
                leo vitae, commodo tempus massa. Duis eget turpis in dui
                dapibus.
              </p>
            </div>
          </div>

          <MasterMenu />
        </div>
      </section>

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default CoreRules;
