import React, { useState, useEffect } from "react";
import spellsData from "../info/spells.json";
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

function SpellsPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filtersActive, setFiltersActive] = useState(false);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    // Extrair todas as tags únicas do JSON
    const tags = Array.from(new Set(spellsData.flatMap((spell) => spell.tags)));
    setAllTags(tags);
  }, []);

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
            {/* Criar botões dinamicamente com base nas tags do JSON */}
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagSelect(tag)}
                style={{
                  backgroundColor: selectedTags.includes(tag) ? "green" : "blue",
                  color: selectedTags.includes(tag) ? "white" : "white",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  marginRight: "5px",
                }}
              >
                <br></br>
                {tag}
              </button>
            ))}
          </div>

          {filtersActive && (
            <button onClick={clearFilters}>Limpar Filtros</button>
          )}
          <br></br>
          <div className="columns is-multiline">
            {filteredSpells.map((spell, index) => (
              <div className="column is-one-quarter" key={index}>
                <div className="card ">
                  <header className="card-header ">
                    <p className="card-header-title">{spell.name}</p>
                  </header>
                  <div className="card-content equips-card">
                    <div className="content">
                      <Tags tags={spell.tags} />
                      <br />
                      Requisitos: {spell.requisitos}
                      <br />
                      <span className="cardDesc">Custo em Mana </span>
                      <span className="cardContent">{spell.cost}</span>
                      <br />
                      <span className="cardDesc">Tempo de Casting: </span>
                      <span className="cardContent">{spell.casting}</span>
                      <br />
                      <span className="cardDesc">alcance: </span>
                      <span className="cardContent">{spell.reach}</span>
                      <br />
                      <span className="cardDesc">duração: </span>
                      <span className="cardContent">{spell.duration}</span>
                      <br />
                      <span className="cardDesc">utiliza concentração? </span>
                      <span className="cardContent">{spell.concen}</span>
                      <br />
                      <span className="cardDesc">efeito: </span>
                      <span className="cardContent">{spell.effect}</span>
                      <br />
                      <span className="cardDesc">efeito adicional 1: </span>
                      <span className="cardContent">{spell.pluseff1}</span>
                      <br />
                      <span className="cardDesc">efeito adicional 2: </span>
                      <span className="cardContent">{spell.pluseff2}</span>
                      <br />
                      <span className="cardDesc">efeito adicional 3: </span>
                      <span className="cardContent">{spell.pluseff3}</span>
                      <br />
                      <span className="cardDesc">efeito adicional 4: </span>
                      <span className="cardContent">{spell.pluseff4}</span>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MasterMenu /> <br></br>
      <Footer />
    </div>
  );
}

export default SpellsPage;
