import React from "react";
import JsonWeapons from "../info/weapons.json";
import { Navbar, Footer } from "../globals/globals"; // Caminho atualizado

function EquipsPage() {
  return (
    <div>
      <Navbar />
      <h1>Página de EquipsPage</h1>
      <section className="section">
        <div className="box">
          <div className="columns is-multiline">
            {JsonWeapons.map((json, index) => (
              <div className="column is-one-quarter" key={index}>
                <div className="card equips-card"> {/* Aplicando uma classe ao card */}
                  <header className="card-header">
                    <p className="card-header-title">{json.name}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      O atributo de acerto é {json.atrAcerto}
                      <br></br>
                      O atributo Para Bonus de dano é {json.atrBonus}
                      <br></br>
                      Lançamento: {json.throw}
                      <br></br>
                      Dano: {json.damage}
                      <br></br>
                      Tipo de dano: {json.dtype}
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


export default EquipsPage;
