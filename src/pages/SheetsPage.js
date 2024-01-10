import React, { useState, useEffect } from "react";
import JsonNpcs from "../info/npcs.json";
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

function SheetsPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filtersActive, setFiltersActive] = useState(false);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    // Extrair todas as tags únicas do JSON
    const tags = Array.from(new Set(JsonNpcs.flatMap((npc) => npc.tags)));
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

  const filteredNpcs = JsonNpcs.filter((npc) => {
    const nameMatch = npc.name.toLowerCase().includes(searchText.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => npc.tags.includes(tag));
    return nameMatch && tagsMatch;
  });

  return (
    <div>
      <Navbar></Navbar>

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
            <button onClick={clearFilters}>Limpar Filtros</button>
          )}
          <br></br>
          <div className="columns is-multiline">
            {filteredNpcs.map((npc, index) => (
              <div className="column is-half" key={index}>
                <div className="box centeredContainer">
                  <Tags tags={npc.tags} />
                  <br />
                  <span className="npcTextTitle">{npc.name}</span>
                  <br></br>
                  <br></br>
                  <span className="npcText">Dado de vida: </span>
                  <span className="npcJson">{npc.lifeDice}</span>
                  <br></br>
                  <span className="npcText">HP: </span>
                  <span className="npcJson">{npc.hp}</span>
                  <br></br>
                  <span className="npcText">Mana: </span>
                  <span className="npcJson">{npc.mp}</span>
                  <br></br>
                  <span className="npcText">atributo de Spellcasting: </span>
                  <span className="npcJson">{npc.atrSpell}</span>
                  <br></br>
                  <span className="npcText">Deslocamento: </span>
                  <span className="npcJson">{npc.desloc}</span>
                  <br></br>
                  <span className="npcText">Armadura: </span>
                  <span className="npcJson">{npc.armor}</span>
                  <br></br>
                  <span className="npcText">Defesa: </span>
                  <span className="npcJson">{npc.armDef}</span>
                  <br></br>
                  <span className="npcText">Absorção: </span>
                  <span className="npcJson">{npc.armAbsor}</span>
                  <br></br>
                  <span className="npcText">Penalidade de movimentação: </span>
                  <span className="npcJson">{npc.movPenalt}</span>
                  <br></br>
                  <br></br>
                  <div className="table-container">
                    <table className="table is-bordered is-striped is-hoverable" style={{ overflowX: 'auto' }}>
                      <thead>
                        <tr>
                          <th colSpan={4}>Atributos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Força: </td>
                          <td>{npc.for} </td>
                          <td>Destreza:</td>
                          <td>{npc.des} </td>
                        </tr>
                        <tr>
                          <td>Inteligência:</td>
                          <td>{npc.int} </td>
                          <td>Conhecimento:</td>
                          <td>{npc.conh} </td>
                        </tr>
                        <tr>
                          <td>Sabedoria:</td>
                          <td> {npc.sab} </td>
                          <td>Constituição:</td>
                          <td>{npc.con} </td>
                        </tr>
                        <tr>
                          <td>Percepção:</td>
                          <td>{npc.perc} </td>
                          <td>Carisma: </td>
                          <td>{npc.cari} </td>
                        </tr>
                        <tr>
                          <td>Armas de uma mão:</td>
                          <td>{npc.oneH} </td>
                          <td>Armas de duas mãos:</td>
                          <td>{npc.twoH} </td>
                        </tr>
                        <tr>
                          <td>Furtividade: </td>
                          <td>{npc.furt} </td>
                          <td>Pontaria:</td>
                          <td>{npc.pont} </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <span className="npcText">Vantagens/perks: </span>
                  <span className="npcJson">{npc.perk}</span>
                  <br></br>
                  <span className="npcText">Spell List: </span>
                  <span className="npcJson">{npc.spellList}</span>
                  <br></br>
                  <span className="npcText">Armas: </span>
                  <span className="npcJson">{npc.weapons}</span>
                  <br></br>
                  <span className="npcText">inventário: </span>
                  <span className="npcJson">{npc.inventory}</span>
                  <br></br>
                  <span className="npcText">info: </span>
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Clique para Habilitar informações adicionais
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body npcJson">
                          {npc.backstory}
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MasterMenu /> <br></br>
      <Footer></Footer>
    </div>
  );
}

export default SheetsPage;
