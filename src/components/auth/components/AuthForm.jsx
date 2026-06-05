const registerFields = [
  { id: 'name', label: 'Nome', type: 'text', autoComplete: 'name' },
  { id: 'cpf', label: 'CPF', type: 'text', autoComplete: 'off' },
  { id: 'phone', label: 'Telefone', type: 'tel', autoComplete: 'tel' },
  { id: 'register-email', label: 'E-mail', type: 'email', autoComplete: 'email' },
  { id: 'register-password', label: 'Senha', type: 'password', autoComplete: 'new-password' },
];

function FormField({ id, label, type, autoComplete }) {
  return (
    <label className="form-field" htmlFor={id}>
      <span>{label}</span>
      <input id={id} type={type} autoComplete={autoComplete} />
    </label>
  );
}

function AuthForm({ mode }) {
  const isRegister = mode === 'register';

  return (
    <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
      {isRegister ? (
        registerFields.map((field) => <FormField key={field.id} {...field} />)
      ) : (
        <>
          <FormField id="email" label="E-mail" type="email" autoComplete="email" />
          <FormField id="password" label="Senha" type="password" autoComplete="current-password" />
        </>
      )}

      <div className="auth-warning">
        Senha incorreta. Tente novamente.
      </div>

      {!isRegister && (
        <div className="auth-options">
          <label>
            <input type="checkbox" defaultChecked />
            Lembrar de mim
          </label>
          <a href="#forgot-password">Esqueci minha senha</a>
        </div>
      )}

      <button className="auth-submit" type="submit">
        {isRegister ? 'Cadastrar-se' : 'Entrar'}
        <span aria-hidden="true">-&gt;</span>
      </button>

      {!isRegister && (
        <>
          <div className="auth-divider">ou continue com</div>
          <button className="google-button" type="button">
            Google
          </button>
        </>
      )}

      <p className="auth-terms">
        Ao continuar, voce concorda com nossos <a href="#terms">Termos</a> e{' '}
        <a href="#privacy">Politica de Privacidade</a>
      </p>
    </form>
  );
}

export default AuthForm;
