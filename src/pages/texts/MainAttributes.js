function MainAttributes() {
    // Conteúdo do seu Navbar
    return (
        <div className="content is-medium">
            <h3>Atributos Principais</h3>
            <p>
                Os atributos principais são o ponto fundamental da criação do
                personagem, pois a maior parte das builds e outros modificadores
                irão depender desses atributos.
            </p>
            <h3>Os atributos podem ser separados nas seguintes categorias</h3>
            <h4>Atributos do corpo</h4>
            <li>Força</li>
            <li>Destreza</li>
            <br></br>
            <h4>Atributos da mente</h4>
            <li>Inteligência</li>
            <li>Sabedoria</li>
            <li>Conhecimento</li>
            <li>Percepção</li>
            <br></br>
            <h4>Atributos de Persistência</h4>
            <li>Carisma</li>
            <li>Constituição</li>
            <br></br>
            <h4>Atributos de Combate</h4>
            <li>Armas de uma mão</li>
            <li>Armas de duas mãos</li>
            <li>Pontaria</li>
            <li>Furtividade</li>
            <br></br>
            <p>
                Cada atributo é governado por um rank (verificar tabela na home).
                <br></br> Tal rank dita o dado respectivo a ser usado, bem como
                o modificador que será incluído na rolagem.
            </p>
            <li>Atributos Derivados</li>
            <p>
                Os atributos derivados são aqueles que unicamente dependem de um
                atributo principal, como por exemplo Bônus no ataque que varia de acordo com Força ou Destreza
            </p>
        </div>
    );
}

export default MainAttributes;