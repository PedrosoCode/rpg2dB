import React, { useState, useEffect } from "react";
import JsonArmors from "../info/Armors.json";
import { Navbar, Footer, MasterMenu } from "../globals/globals";

// Componente Tags para exibir as tags de uma armadura
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

function ArmorsPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filtersActive, setFiltersActive] = useState(false);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    // Extrair todas as tags únicas do JSON
    const tags = Array.from(new Set(JsonArmors.flatMap((armor) => armor.tags)));
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

  const filteredArmors = JsonArmors.filter((armor) => {
    const nameMatch = armor.name.toLowerCase().includes(searchText.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => armor.tags.includes(tag));
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
            {filteredArmors.map((json, index) => (
              <div className="column is-one-quarter" key={index}>
                <div className="card equips-card">
                  <header className="card-header">
                    <p className="card-header-title">{json.name}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <Tags tags={json.tags} />
                      <br />
                      <span className="cardDesc">Nome: </span>
                      <span className="cardContent">{json.name}</span>
                      <br></br>
                      <span className="cardDesc">Tipo: </span>
                      <span className="cardContent">{json.ArmType}</span>
                      <br></br>
                      <span className="cardDesc">Defesa: </span>
                      <span className="cardContent">{json.defense}</span>
                      <br></br>
                      <span className="cardDesc">Absorção: </span>
                      <span className="cardContent">{json.absor}</span>
                      <br></br>
                      <span className="cardDesc">Penalidade de movimentação </span>
                      <span className="cardContent">{json.movPenalt}</span>
                      <br></br>
                      <span className="cardDesc">Vantagens: </span>
                      <span className="cardContent">{json.vant}</span>
                      <br></br>
                      <span className="cardDesc">Desvantagens: </span>
                      <span className="cardContent">{json.desvant}</span>
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

export default ArmorsPage;
