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
