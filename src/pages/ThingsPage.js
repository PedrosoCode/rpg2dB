import React, { useState, useEffect } from "react";
import JsonThings from "../info/things.json";
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

function ThingsPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filtersActive, setFiltersActive] = useState(false);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    // Extract all unique tags from the JSON
    const tags = Array.from(new Set(JsonThings.flatMap((thing) => thing.tags)));
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

  const filteredThings = JsonThings.filter((weapon) => {
    const nameMatch = weapon.name.toLowerCase().includes(searchText.toLowerCase());
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
                      <span className="equipsText">Custo: </span>
                      <span className="equipsJson">{json.cost}</span>
                      <br></br>
                      <span className="equipsText">Peso: </span>
                      <span className="equipsJson">{json.weight}</span>
                      <br></br>
                      <span className="equipsText">Raridade: </span>
                      <span className="equipsJson">{json.rarity}</span>
                      <br></br>
                      <span className="equipsText">Efeito: </span>
                      <span className="equipsJson">{json.effect}</span>
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
      <MasterMenu /> <br></br>
      <Footer />
    </div>
  );
}

export default ThingsPage;
