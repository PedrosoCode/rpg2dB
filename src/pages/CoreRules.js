/* eslint-disable no-undef */

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, MasterMenu } from "../globals/globals"; // Caminho atualizado

import Welcome from "./texts/Welcome";
import LevellingUp from "./texts/LevellingUp";
import LifeDice from "./texts/LifeDice";
import MainAttributes from "./texts/MainAttributes";

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
          <div className="content is-large">
            <h1>Seja bem-vindo!</h1>
            <p>
              Nesta sessão, iremos aprender sobre as principais regras do sistema.
            </p>
            <div className="content is-medium">
              <h1>Como são feitas as rolagens</h1>
              <p>
                Para fazer as rolagens, você une seu dado primário (1D20), que é
                imutável (salvo em raras exceções), com o seu dado secundário do
                atributo/habilidade específica.
              </p>
            </div>
            <MainAttributes />
            <div className="content is-medium">
              <h1>Combate</h1>
              <p>
                <li>Tipos de dano</li>
              </p>
              <p>
                <h5>Condições</h5>
              </p>
            </div>
            <LifeDice />
            <LevellingUp />
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
