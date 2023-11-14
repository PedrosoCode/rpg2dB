function Navbar() {
  // Conteúdo do seu Navbar
  return (
    <div className="mainNavbar">
      <ul>
        <li>
          <a href="https://react.gabrielribeiropedroso.com.br">Home</a>
        </li>
        <li>
          <a href="https://github.com/PedrosoCode/rpg2dB">acompanhe!</a>
        </li>
        <li style={{ float: 'right' }}><a className="active" href="https://gabrielribeiropedroso.com.br">Hire me Please!</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
