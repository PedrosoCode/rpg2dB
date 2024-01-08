import React, { useState, useEffect } from "react";
import JsonWeapons from "../info/rangedWeapons.json";
import { Navbar, Footer, MasterMenu } from "../globals/globals";

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

function RangedWeapons() {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filtersActive, setFiltersActive] = useState(false);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    // Extrair todas as tags únicas do JSON
    const tags = Array.from(new Set(JsonWeapons.flatMap((weapon) => weapon.tags)));
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

  const filteredWeapons = JsonWeapons.filter((weapon) => {
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

          {filtersActive && (
            <div>
              <button onClick={clearFilters}>Limpar Filtros</button>
              <br></br>
            </div>
          )}
          <br></br>

          <div className="columns is-multiline">
            {filteredWeapons.map((json, index) => (
              <div className="column is-one-quarter" key={index}>
                <div className="card equips-card">
                  <header className="card-header">
                    <p className="card-header-title">{json.name}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <Tags tags={json.tags} />
                      <br />
                      <span className="cardDesc">Alcance: </span>
                      <span className="cardContent">{json.reach}</span>
                      <br></br>
                      <span className="cardDesc">Dano: </span>
                      <span className="cardContent">{json.damage}</span>
                      <br></br>
                      <span className="cardDesc">Tipo de dano: </span>
                      <span className="cardContent">{json.dtype}</span>
                      <br></br>
                      <span className="cardDesc">Rolagem: </span>
                      <span className="cardContent">{json.roll}</span>
                      <br></br>
                      <span className="cardDesc">Cadência: </span>
                      <span className="cardContent">{json.fireRate}</span>
                      <br></br>
                      <span className="cardDesc">Capacidade: </span>
                      <span className="cardContent">{json.size}</span>
                      <br></br>
                      <span className="cardDesc">Tempo de recarregar: </span>
                      <span className="cardContent">{json.reload}</span>
                      <br></br>

                      <br></br>
                      {json.teste}
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

export default RangedWeapons;
