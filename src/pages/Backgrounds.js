import React, { useState } from "react";
import bgData from "../info/Backgrounds.json";
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

function Backgrounds() {
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

  const filteredBacks = bgData.filter((backs) => {
    const nameMatch = backs.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => backs.tags.includes(tag));
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
              onClick={() => handleTagSelect("todos")}
              style={{
                backgroundColor: selectedTags.includes("todos")
                  ? "green"
                  : "blue",
                color: selectedTags.includes("todos") ? "white" : "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginRight: "5px",
              }}
            >
              <br></br>
              Todos
            </button>


          </div>

          {filtersActive && (
            <button onClick={clearFilters}>Limpar Filtros</button>
          )}
          <br></br>
          <div className="columns is-multiline">
            {filteredBacks.map((backs, index) => (
              <div className="column is-one-quarter" key={index}>
                <div className="card equips-card">
                  <header className="card-header">
                    <p className="card-header-title">{backs.name}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <Tags tags={backs.tags} />
                      <br />
                      {/* Aqui vão os outros campos do seu arquivo JSON */}
                      <span className="cardDesc">você sobe o rank nos seguintes Atributos: </span>
                      <span className="cardContent">{backs.addPlusFive}</span>
                      <br></br>
                      <span className="cardDesc">você sobe o rank no seguinte Atributo: </span>
                      <span className="cardContent">{backs.addPlusTen}</span>
                      <br></br>
                      <span className="cardDesc">Escolha entre atributos para gahar +1 fixo no modificador: </span>
                      <span className="cardContent">{backs.addModifier}</span>
                      <br></br>
                      <span className="cardDesc">você ganha Proficiências em: </span>
                      <span className="cardContent">{backs.prof}</span>
                      <br></br>
                      <span className="cardDesc">Escolha um Perk que seja do seguinte atributo </span>
                      <span className="cardContent">{backs.choosePerk}</span>
                      <br></br>
                      <span className="cardDesc">você começa com os seguintes equipamentos: </span>
                      <span className="cardContent">{backs.starterPack}</span>
                      <br></br>
                      <span className="cardDesc">Efeito Adicional: </span>
                      <span className="cardContent">{backs.plusEffect}</span>
                      <br></br>
                      <span className="cardDesc">Descrição: </span>
                      <span className="cardContent">{backs.description}</span>
                      <br></br>
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

export default Backgrounds;
