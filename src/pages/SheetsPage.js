// ContactPage.js
import React from "react";
import JsonWeapons from "../info/npcs.json";
import { Navbar, Footer } from "../globals/globals";

function SheetsPage() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="section">
        <div className="box">
          <div className="columns is-multiline">
            <div className="column is-half">
              <div className="box">
                Nome do personagem
                <br></br>
                Dado de vida:
                <br></br>
                HP:
                <br></br>
                Mana:
                <br></br>
                atributo de Spellcasting:
                <br></br>
                Deslocamento:
                <br></br>
                Armadura:
                <br></br>
                Defesa:
                <br></br>
                Absorção:
                <br></br>
                Penalidade de movimentação:
                <br></br>
                <table class="table is-bordered is-striped is-hoverable">
                  <thead>
                    <tr>
                      <th colSpan={2}>Atributos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Força 1d20</td>
                      <td>Destreza 1d20</td>
                    </tr>
                    <tr>
                      <td>Inteligência 1d20</td>
                      <td>Conhecimento 1d20</td>
                    </tr>
                    <tr>
                      <td>Sabedoria 1d20</td>
                      <td>Constituição 1d20</td>
                    </tr>
                    <tr>
                      <td>Percepção 1d20</td>
                      <td>Carisma 1d20</td>
                    </tr>
                    <tr>
                      <td>Armas de uma mão 1d20</td>
                      <td>Armas de duas mãos 1d20</td>
                    </tr>
                    <tr>
                      <td>Furtividade 1d20</td>
                      <td>Pontaria 1d20</td>
                    </tr>
                  </tbody>
                </table>
                Vantagens/perks
                <br></br>
                Spelllist
                <br></br>
                Armas
                <br></br>
                inventário
                <br></br>
                backstory
              </div>
            </div>
            {/* fim do card examplo*/}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default SheetsPage;
