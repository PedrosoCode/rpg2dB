import React, { useState } from "react";
import JsonThings from "../info/things.json";
import { Navbar, Footer } from "../globals/globals";

// Componente Tags para exibir as tags de uma arma
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

function ThingsPage() {
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

  const filteredThings = JsonThings.filter((weapon) => {
    const nameMatch = weapon.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => weapon.tags.includes(tag));
    return nameMatch && tagsMatch;
  });

  return (
    <div>
      <Navbar />
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
            <button
              onClick={() => handleTagSelect("moderno")}
              style={{
                backgroundColor: selectedTags.includes("moderno")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("moderno") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Moderno
            </button>
            <button
              onClick={() => handleTagSelect("espada")}
              style={{
                backgroundColor: selectedTags.includes("espada")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("espada") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Espadas
            </button>
            <button
              onClick={() => handleTagSelect("adagas")}
              style={{
                backgroundColor: selectedTags.includes("adagas")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("adagas") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Adagas
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
            {filteredThings.map((json, index) => (
              <div className="column is-one-quarter" key={index}>
                <div className="card equips-card">
                  <header className="card-header">
                    <p className="card-header-title">{json.name}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <Tags tags={json.tags} />
                      <br />
                      <span className="equipsText">Nome: </span>
                      <span className="equipsJson">{json.name}</span>
                      <br></br>
                      <span className="equipsText">Tipo: </span>
                      <span className="equipsJson">{json.type}</span>
                      <br></br>
                      <span className="equipsText">custo: </span>
                      <span className="equipsJson">{json.cost}</span>
                      <br></br>
                      <span className="equipsText">Peso: </span>
                      <span className="equipsJson">{json.weight}</span>
                      <br></br>
                      <span className="equipsText">Raridade: </span>
                      <span className="equipsJson">{json.rarity}</span>
                      <br></br>
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

export default ThingsPage;
