import React, { useState } from "react";
import JsonWeapons from "../info/weapons.json";
import { Navbar, Footer } from "../globals/globals";

function EquipsPage() {
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

  const filteredWeapons = JsonWeapons.filter((weapon) => {
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
      <h1>Página de EquipsPage</h1>
      <section className="section">
        <div className="box">
          {/* Campo de pesquisa */}
          <input
            type="text"
            placeholder="Buscar por nome"
            value={searchText}
            onChange={handleSearchTextChange}
          />

          {/* Botões de filtro de tags */}
          <div>
            <button
              onClick={() => handleTagSelect("tag1")}
              style={{
                backgroundColor: selectedTags.includes("tag1")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("tag1") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              Tag 1
            </button>
            <button
              onClick={() => handleTagSelect("tag2")}
              style={{
                backgroundColor: selectedTags.includes("tag2")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("tag2") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              Tag 2
            </button>

            {/* Adicione botões para outras tags, se necessário */}
          </div>

          {/* Botão para limpar filtros */}
          {filtersActive && (
            <button onClick={clearFilters}>Limpar Filtros</button>
          )}

          <div className="columns is-multiline">
            {filteredWeapons.map((json, index) => (
              <div className="column is-one-quarter" key={index}>
                <div className="card equips-card">
                  <header className="card-header">
                    <p className="card-header-title">{json.name}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      O atributo de acerto é {json.atrAcerto}
                      <br></br>O atributo Para Bonus de dano é {json.atrBonus}
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
