// ContactPage.js
import React, { useState } from "react";
import JsonNpcs from "../info/npcs.json";
import { Navbar, Footer, MasterMenu } from "../globals/globals";

function Tags({ tags }) {
  return (
    <div>
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

function SheetsPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filtersActive, setFiltersActive] = useState(false);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    setFiltersActive(true);
  };

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setFiltersActive(true);
  };

  const clearFilters = () => {
    setSearchText("");
    setSelectedTags([]);
    setFiltersActive(false);
  };

  const filteredNpcs = JsonNpcs.filter((Npcs) => {
    const nameMatch = Npcs.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => Npcs.tags.includes(tag));
    return nameMatch && tagsMatch;
  });
  return (
    <div>
      <Navbar></Navbar>

      <section className="section">
        <div className="box">
          <br></br>
          {/* Campo de pesquisa */}
          <input
            type="text"
            placeholder="Buscar por nome"
            value={searchText}
            onChange={handleSearchTextChange}
          />

          <div>
            <br></br>
            {/* Começo de um botão de filtro de tags */}
            <button
              onClick={() => handleTagSelect("padrao")}
              style={{
                backgroundColor: selectedTags.includes("padrao")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("padrao") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Padrão
            </button>
            {/* fim de um botão de filtro de tags */}
            <button
              onClick={() => handleTagSelect("medieval")}
              style={{
                backgroundColor: selectedTags.includes("medieval")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("medieval") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Medieval
            </button>
          </div>

          {/* Botão para limpar filtros */}
          {filtersActive && (
            <div>
              <button onClick={clearFilters}>Limpar Filtros</button>
              <br></br>
            </div>
          )}
          <br></br>
          <div className="columns is-multiline">
            {filteredNpcs.map((json, index) => (
              <div className="column is-half" key={index}>
                <div className="box">
                  <Tags tags={json.tags} />
                  <br />
                  <span className="npcText">Nome do personagem </span>
                  <span className="npcJson">{json.name}</span>
                  <br></br>
                  <span className="npcText">Dado de vida: </span>
                  <span className="npcJson">{json.lifeDice}</span>
                  <br></br>
                  <span className="npcText">HP: </span>
                  <span className="npcJson">{json.hp}</span>
                  <br></br>
                  <span className="npcText">Mana: </span>
                  <span className="npcJson">{json.mp}</span>
                  <br></br>
                  <span className="npcText">atributo de Spellcasting: </span>
                  <span className="npcJson">{json.atrSpell}</span>
                  <br></br>
                  <span className="npcText">Deslocamento: </span>
                  <span className="npcJson">{json.desloc}</span>
                  <br></br>
                  <span className="npcText">Armadura: </span>
                  <span className="npcJson">{json.armor}</span>
                  <br></br>
                  <span className="npcText">Defesa: </span>
                  <span className="npcJson">{json.armDef}</span>
                  <br></br>
                  <span className="npcText">Absorção: </span>
                  <span className="npcJson">{json.armAbsor}</span>
                  <br></br>
                  <span className="npcText">Penalidade de movimentação: </span>
                  <span className="npcJson">{json.movPenalt}</span>
                  <br></br>
                  <table class="table is-bordered is-striped is-hoverable">
                    <thead>
                      <tr>
                        <th colSpan={2}>Atributos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Força: {json.for} </td>
                        <td>Destreza: {json.des} </td>
                      </tr>
                      <tr>
                        <td>Inteligência: {json.int} </td>
                        <td>Conhecimento: {json.conh} </td>
                      </tr>
                      <tr>
                        <td>Sabedoria: {json.sab} </td>
                        <td>Constituição: {json.con} </td>
                      </tr>
                      <tr>
                        <td>Percepção: {json.perc} </td>
                        <td>Carisma: {json.cari} </td>
                      </tr>
                      <tr>
                        <td>Armas de uma mão: {json.oneH} </td>
                        <td>Armas de duas mãos: {json.twoH} </td>
                      </tr>
                      <tr>
                        <td>Furtividade: {json.furt} </td>
                        <td>Pontaria: {json.pont} </td>
                      </tr>
                    </tbody>
                  </table>
                  <span className="npcText">Vantagens/perks </span> 
                  <span className="npcJson">{json.perk}</span>
                  <br></br>
                  <span className="npcText">Spell List </span> 
                  <span className="npcJson">{json.spellList}</span>
                  <br></br>
                  <span className="npcText">Armas </span> 
                  <span className="npcJson">{json.weapons}</span>
                  <br></br>
                  <span className="npcText">inventário </span> 
                  <span className="npcJson">{json.inventory}</span>
                  <br></br>
                  <span className="npcText">backstory </span> 
                  <span className="npcJson">{json.backstory}</span>
                </div>
              </div>
            ))}
            {/* fim do card examplo*/}
          </div>
        </div>
      </section>
      <MasterMenu /> <br></br>
      <Footer></Footer>
    </div>
  );
}

export default SheetsPage;
