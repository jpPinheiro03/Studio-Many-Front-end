import { useState } from "react";
import { useAuth } from "../../../context/useAuth";
import LogoutModal from "./LogoutModal.jsx";

function Header({ onLoginClick }) {
  const { user, logout, isAuthenticated } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutConfirm = async () => {
    setShowLogoutModal(false);
    await logout();
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Studio Many - início">
          <span className="brand-mark" aria-hidden="true" />
          <span>STUDIO MANY</span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a className="nav-link active" href="#home">
            <span className="nav-icon" aria-hidden="true">H</span>
            Home
          </a>
          <a className="nav-link" href="#servicos">
            <span className="nav-icon" aria-hidden="true">S</span>
            Serviços
          </a>
        </nav>

        <div className="header-actions">
          {isAuthenticated ? (
            <div className="user-info">
              <span className="user-name">{user?.nome}</span>
              <button
                className="ghost-action"
                type="button"
                onClick={() => setShowLogoutModal(true)}
              >
                Sair
              </button>
              <a className="header-action" href="#agendar">
                <span aria-hidden="true">+</span>
                Agendar Agora
              </a>
            </div>
          ) : (
            <>
              <button className="ghost-action" type="button" onClick={onLoginClick}>
                Login
              </button>
              <a className="header-action" href="#agendar">
                <span aria-hidden="true">+</span>
                Agendar Agora
              </a>
            </>
          )}
        </div>
      </header>

      {showLogoutModal && (
        <LogoutModal
          onConfirm={handleLogoutConfirm}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </>
  );
}

export default Header;
