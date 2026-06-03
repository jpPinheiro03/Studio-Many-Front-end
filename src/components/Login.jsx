import React, { useState } from 'react';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className={styles.section}>
      <h2>Login</h2>

      <div className={styles.formGroup}>
        <label>E-mail:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className={styles.formGroup}>
        <label>Senha:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button className={styles.button} onClick={() => setShowMessage(true)}>
        Entrar
      </button>

      {showMessage && <div className={styles.message}>Login realizado com sucesso</div>}
    </div>
  );
}

export default Login;