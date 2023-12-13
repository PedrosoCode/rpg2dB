import { Link } from "react-router-dom";



function Navbar() {
  // Conteúdo do seu Navbar
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
      
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          RPG2D
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Dark offcanvas
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <Link to="/">Página Inicial</Link>
              </li>
              <li class="nav-item">
                <Link to="/CoreRules">Core Rules</Link>
              </li>
              <li class="nav-item">
                <Link to="/CoreRules">SpellCasting</Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Equipamentos
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                  <a class="dropdown-item" href="#">
                  <Link to="/EquipsPage">Corpo a corpo</Link>
                  </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link to="/RangedWeapons">Armas à distância</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link to="/ArmorsPage">Armaduras</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link to="/ThingsPage">items</Link>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Personagens e fichas
                </a>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link to="/SheetsPage">Fichas</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link to="/Backgrounds">Backgrounds</Link>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                    <Link to="/PerksPage">Lista de Perks</Link>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
