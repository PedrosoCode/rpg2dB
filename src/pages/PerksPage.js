import React, { useState } from "react";
import perksData from "../info/Perks.json";
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

  const filteredPerks = perksData.filter((perks) => {
    const nameMatch = perks.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => perks.tags.includes(tag));
    return nameMatch && tagsMatch;
  });

  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="box">
          <input
            type="text"
            placeholder="Buscar por nome"
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <div>
            <br></br>
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
            <button
              onClick={() => handleTagSelect("for")}
              style={{
                backgroundColor: selectedTags.includes("for")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("for") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Força
            </button>

            <button
              onClick={() => handleTagSelect("des")}
              style={{
                backgroundColor: selectedTags.includes("des")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("des") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Destreza
            </button>
            <button
              onClick={() => handleTagSelect("int")}
              style={{
                backgroundColor: selectedTags.includes("int")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("int") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Inteligência
            </button>
            <button
              onClick={() => handleTagSelect("conh")}
              style={{
                backgroundColor: selectedTags.includes("conh")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("conh") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Conhecimento
            </button>
            <button
              onClick={() => handleTagSelect("sab")}
              style={{
                backgroundColor: selectedTags.includes("sab")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("sab") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Sabedoria
            </button>
            <button
              onClick={() => handleTagSelect("con")}
              style={{
                backgroundColor: selectedTags.includes("con")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("con") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Constituição
            </button>
            <button
              onClick={() => handleTagSelect("perc")}
              style={{
                backgroundColor: selectedTags.includes("perc")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("perc") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Percepção
            </button>
            <button
              onClick={() => handleTagSelect("cari")}
              style={{
                backgroundColor: selectedTags.includes("cari")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("cari") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Carisma
            </button>
            <button
              onClick={() => handleTagSelect("oneH")}
              style={{
                backgroundColor: selectedTags.includes("oneH")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("oneH") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Armas de uma mão
            </button>
            <button
              onClick={() => handleTagSelect("twoH")}
              style={{
                backgroundColor: selectedTags.includes("twoH")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("twoH") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Armas de duas mãos
            </button>
            <button
              onClick={() => handleTagSelect("furt")}
              style={{
                backgroundColor: selectedTags.includes("furt")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("furt") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Furtividade
            </button>
            <button
              onClick={() => handleTagSelect("pont")}
              style={{
                backgroundColor: selectedTags.includes("pont")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("pont") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Pontaria
            </button>
          </div>

          {filtersActive && (
            <button onClick={clearFilters}>Limpar Filtros</button>
          )}
          <br></br>
          <div className="columns is-multiline">
            {filteredPerks.map((perks, index) => (
              <div className="column is-one-quarter" key={index}>
                <div className="card equips-card">
                  <header className="card-header">
                    <p className="card-header-title">{perks.name}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <Tags tags={perks.tags} />
                      <br />
                      {/* Aqui vão os outros campos do seu arquivo JSON */}
                      <span className="perksName">{perks.name}</span>
                      <br></br>
                      <span className="perksEffect">{perks.efeito}</span>
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
