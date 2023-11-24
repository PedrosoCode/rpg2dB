/* eslint-disable no-undef */

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, MasterMenu } from "../globals/globals"; // Caminho atualizado

function CoreRules() {
  return (
    <div className="MainBG">
      <Navbar />
      <section className="section is-medium daRulesHead">
        <h1 className="headtext">Regras de jogo</h1>
        <h2 className="headtext">
          Todos os <strong>principais pontos </strong> para compreender a lógica
          de jogo
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
                Para você fazer as rolagens, vocẽ une seu dado primário (1D20)
                que é imutável (salvo em raras excessões), com o seu dado
                secundário do atributo/habilidade específica
              </p>
            </div>
            <div class="content is-medium">
              <h1>Atributos Principais</h1>
              <p>
                Os Atributos principais são o ponto fundamental da criação do
                personagem, pois a maior parte das builds e outros modificadores
                irão depender desses Atributos
              </p>
              <li>Atributos Derivados</li>
              <p>
                Os Atributos derivados são aqueles que unicamente dependem de um
                atributo principal
              </p>
              <h2>Os atributos podem ser separados nas seguintes categorias</h2>
              <h4>Atributos do corpo</h4>
              <li>Força</li>
              <li>Destreza</li>
              <h4>Atributos da mente</h4>
              <li>Inteligência</li>
              <li>sabedoria</li>
              <li>Conhecimento</li>
              <li>Percepção</li>
              <h4>Atributos de Persistência</h4>
              <li>Carisma</li>
              <li>Constituição</li>
              <h4>Atributos de Combate</h4>
              <li>Armas de uma mão</li>
              <li>Armas de duas Mãos</li>
              <li>Pontaria</li>
              <li>Furtividade</li>
              <p>
                Cada Atributo é governado por um rank (verificar tabela na home)
                <br></br> Tal rank dita o dado respectivo a ser usado, bem como
                o modificador que será incluído na rolagem
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
              <p>
                <h5>Condições</h5>
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
          <br></br>
        </div>
      </section>

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default CoreRules;
