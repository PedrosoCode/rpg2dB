function LifeDice() {
    // Conteúdo do seu Navbar
    return (
        <div className="content is-medium">
            <h3>Dados de vida, HP e MP</h3>
            <p>O dado de vida é essêncial para a criação da build do seu personagem, eles definem seu HP e o seu MP</p>
            <ul>
                <li>1D8</li>
                <p>(O Número de faces do seu dado de Spellcasting x 3 para mana)</p>
                <li>1D10</li>
                <p>(O Número de faces do seu dado de Spellcasting x 2 para mana)</p>
                <li>1D12</li>
                <p> (Sem uso de mana, gasta HP no Lugar)</p>
            </ul>
            <h3>Determinando o HP</h3>
            <p>O seu HP inicial é igual o número máximo de faces do dado que você escolheu + o N do Rank do seu dado de Constituição
                <br></br>Leve em consideração que ao subir o Rank do seu dado de Constituição, você também incrementa p HP em +1
            </p>
        </div>
    );
}

export default LifeDice;