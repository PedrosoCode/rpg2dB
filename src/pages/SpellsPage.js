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

function SpellsPage() {
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

  const filteredSpells = spellsData.filter((spell) => {
    const nameMatch = spell.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => spell.tags.includes(tag));
    return nameMatch && tagsMatch;
  });

  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="box">
          <br></br>
          <input
            type="text"
            placeholder="Buscar por nome"
            value={searchText}
            onChange={handleSearchTextChange}
          />

          <div>
            <br></br>
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
              <br></br>
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
              <br></br>
              Tag 2
            </button>
          </div>

          {filtersActive && (
            <button onClick={clearFilters}>Limpar Filtros</button>
          )}
          <br></br>
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
                      {/* Aqui vão os outros campos do arquivo JSON */}
                      Requisitos: {spell.requisitos}
                      <br />
                      <span className="spellsText">Tempo de Casting: </span>
                      <span className="spellsJson">{spell.casting}</span>
                      <br />
                      <span className="spellsText">alcance: </span>
                      <span className="spellsJson">{spell.reach}</span>
                      <br />
                      <span className="spellsText">duração: </span>
                      <span className="spellsJson">{spell.duration}</span>
                      <br />
                      <span className="spellsText">utiliza concentração? </span>
                      <span className="spellsJson">{spell.concen}</span>
                      <br />
                      <span className="spellsText">efeito: </span>
                      <span className="spellsJson">{spell.effect}</span>
                      <br />
                      <span className="spellsText">efeito adicional 1: </span>
                      <span className="spellsJson">{spell.pluseff1}</span>
                      <br />
                      <span className="spellsText">efeito adicional 2: </span>
                      <span className="spellsJson">{spell.pluseff2}</span>
                      <br />
                      <span className="spellsText">efeito adicional 3: </span>
                      <span className="spellsJson">{spell.pluseff3}</span>
                      <br />
                      <span className="spellsText">efeito adicional 4: </span>
                      <span className="spellsJson">{spell.pluseff4}</span>
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

export default SpellsPage;
