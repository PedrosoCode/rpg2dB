function LifeDice() {
    // Conteúdo do seu Navbar
    return (
        <div className="content is-medium">
            <h3>Dados de vida</h3>
            <p>O dado de vida é essêncial para a criação da build do seu personagem, eles definem seu HP e o seu MP</p>
            <ul>
                <li>1D8</li>
                <p>(O Número de faces do seu dado de Spellcasting x 3 para mana)</p>
                <li>1D10</li>
                <p>(O Número de faces do seu dado de Spellcasting x 2 para mana)</p>
                <li>1D12</li>
                <p> (Sem uso de mana, gasta HP no Lugar)</p>
            </ul>
        </div>
    );
}

export default LifeDice;