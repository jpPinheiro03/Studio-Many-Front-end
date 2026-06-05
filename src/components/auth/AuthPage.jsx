import { useState } from 'react';
import AuthAside from './components/AuthAside.jsx';
import AuthForm from './components/AuthForm.jsx';

function AuthPage({ initialMode = 'login', onBackHome }) {
  const [mode, setMode] = useState(initialMode);

  return (
    <main className="auth-page">
      <section className="auth-card" aria-label="Acesso a conta">
        <AuthAside />
        <div className="auth-panel">
          <button className="auth-close" type="button" onClick={onBackHome} aria-label="Voltar para home">
            x
          </button>

          <div className="auth-heading">
            <h1>Acesse sua conta</h1>
            <p>Entre ou crie sua conta para comecar.</p>
          </div>

          <div className="auth-tabs" role="tablist" aria-label="Opcoes de acesso">
            <button
              className={mode === 'login' ? 'active' : ''}
              type="button"
              role="tab"
              aria-selected={mode === 'login'}
              onClick={() => setMode('login')}
            >
              Entrar
            </button>
            <button
              className={mode === 'register' ? 'active' : ''}
              type="button"
              role="tab"
              aria-selected={mode === 'register'}
              onClick={() => setMode('register')}
            >
              Cadastrar
            </button>
          </div>

          <AuthForm mode={mode} />
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
