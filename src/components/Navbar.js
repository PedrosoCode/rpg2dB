function Navbar() {
    // Conteúdo do seu Navbar
    return (

<nav class="navbar is-transparent">
<div class="navbar-brand">
  <a class="navbar-item" href="https://bulma.io">
    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
  </a>
  <div class="navbar-burger" data-target="navbarExampleTransparentExample">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<div id="navbarExampleTransparentExample" class="navbar-menu">
  <div class="navbar-start">
    <a class="navbar-item" href="https://bulma.io/">
      Meu currículo
    </a>
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link" href="">
        Home
      </a>
      <div class="navbar-dropdown is-boxed">
        <a class="navbar-item" href="">
          ídeia do projeto
        </a>
        <a class="navbar-item" href="">
          Ficha
        </a>
        <a class="navbar-item" href="">
          Mecânicas
        </a>
        <a class="navbar-item" href="">
          Misc
        </a>
      </div>
    </div>
  </div>

  <div class="navbar-end">
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="">
            <span class="icon">
              <i class="fab fa-twitter"></i>
            </span>
            <span>
              Tweet
            </span>
          </a>
        </p>
        <p class="control">
          <a class="button is-primary" href="">
            <span class="icon">
              <i class="fas fa-download"></i>
            </span>
            <span>Worldbuilding</span>
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
</nav>
);
}

export default Navbar;