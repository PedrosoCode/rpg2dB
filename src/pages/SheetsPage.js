// ContactPage.js
import React, { useState } from "react";
import JsonNpcs from "../info/npcs.json";
import { Navbar, Footer } from "../globals/globals";


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
            backgroundColor: selectedTags.includes("padrao") ? "green" : "blue",
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

      <section className="section">
        <div className="box">
          <div className="columns is-multiline">
          {filteredNpcs.map((json, index) => (
            <div className="column is-half" key={index}>
              <div className="box">
                Nome do personagem {json.name} {json.efeito} {json.tags}
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
                ))}
            {/* fim do card examplo*/}

          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default SheetsPage;
