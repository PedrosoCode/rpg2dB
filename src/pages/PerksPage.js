import React, { useState } from "react";
import spellsData from "../info/spells.json";
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

function PerksPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filtersActive, setFiltersActive] = useState(false);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    setFiltersActive(true);
  };

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
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

  const filteredSpells = spellsData.filter((spell) => {
    const nameMatch = spell.name.toLowerCase().includes(searchText.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => spell.tags.includes(tag));
    return nameMatch && tagsMatch;
  });

  return (
    <div>
      <Navbar />
      <h1>Página de PerksPage</h1>
      <section className="section">
        <div className="box">
          <input
            type="text"
            placeholder="Buscar por nome"
            value={searchText}
            onChange={handleSearchTextChange}
          />

          <div>
            <button
              onClick={() => handleTagSelect("tag1")}
              style={{
                backgroundColor: selectedTags.includes("tag1") ? "green" : "blue",
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
                backgroundColor: selectedTags.includes("tag2") ? "green" : "blue",
                color: selectedTags.includes("tag2") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              Tag 2
            </button>
          </div>

          {filtersActive && (
            <button onClick={clearFilters}>Limpar Filtros</button>
          )}

          <div className="columns is-multiline">
            {filteredSpells.map((spell, index) => (
              <div className="column is-one-quarter" key={index}>
                <div className="card equips-card">
                  <header className="card-header">
                    <p className="card-header-title">{spell.name}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <Tags tags={spell.tags} />
                      <br />
                      {/* Aqui vão os outros campos do seu arquivo JSON */}
                      O atributo de acerto é {spell.atrAcerto}
                      <br />O atributo Para Bonus de dano é {spell.atrBonus}
                      <br />
                      Lançamento: {spell.throw}
                      <br />
                      Dano: {spell.damage}
                      <br />
                      Tipo de dano: {spell.dtype}
                      <br />
                      {/* O restante dos campos */}
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

export default PerksPage;
