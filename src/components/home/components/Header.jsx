function Header({ onLoginClick }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Studio Many - inicio">
        <span className="brand-mark" aria-hidden="true" />
        <span>STUDIO MANY</span>
      </a>

      <nav className="main-nav" aria-label="Navegacao principal">
        <a className="nav-link active" href="#home">
          <span className="nav-icon" aria-hidden="true">
            H
          </span>
          Home
        </a>
        <a className="nav-link" href="#servicos">
          <span className="nav-icon" aria-hidden="true">
            S
          </span>
          Servicos
        </a>
      </nav>

      <div className="header-actions">
        <button className="ghost-action" type="button" onClick={onLoginClick}>
          Login
        </button>
        <a className="header-action" href="#agendar">
          <span aria-hidden="true">+</span>
          Agendar Agora
        </a>
      </div>
    </header>
  );
}

export default Header;
