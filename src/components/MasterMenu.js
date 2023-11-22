function MasterMenu() {
  // Conteúdo do seu Navbar
  return (
    <div className="MasterMenu">
      <aside class="menu">
        <p class="menu-label">Navegação</p>
        <ul class="menu-list">
          <li>
            Links das páginas principais
            <ul>
              <li>
                <Link to="/WorldPage">worldbuilding</Link>
              </li>
              <li>
                <Link to="/SheetsPage">Fichas</Link>
              </li>
              <li>
                <Link to="/EquipsPage">Armas Brancas</Link>
              </li>
              <li>
                <Link to="/RangedWeapons">Armas à distância</Link>
              </li>
              <li>
                <Link to="/ArmorsPage">Armaduras</Link>
              </li>
              <li>
                <Link to="/ThingsPage">items</Link>
              </li>
              <li>
                <Link to="/SpellsPage">SpellCasting</Link>
              </li>
              <li>
                <Link to="/PerksPage">Lista de Perks</Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default MasterMenu;
