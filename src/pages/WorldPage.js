/* eslint-disable no-undef */

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, MasterMenu } from "../globals/globals"; // Caminho atualizado

function WorldPage() {
  return (
    <div className="MainBG">
      <Navbar />
      <section className="section is-medium mainWorldHead">
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
            </div>
          </div>

          <MasterMenu /><br></br>
        </div>
      </section>

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default WorldPage;
