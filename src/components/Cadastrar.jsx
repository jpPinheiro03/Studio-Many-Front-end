import React, { useState } from 'react';
import styles from './Cadastrar.module.css';

function Cadastrar() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className={styles.section}>
      <h2>Cadastro</h2>

      <div className={styles.formGroup}>
        <label>Nome:</label>
        <input type="text" onChange={(e) => setNome(e.target.value)} />
      </div>

      <div className={styles.formGroup}>
        <label>CPF:</label>
        <input type="text" onChange={(e) => setCpf(e.target.value)} />
      </div>

      <div className={styles.formGroup}>
        <label>Telefone:</label>
        <input type="text" onChange={(e) => setTelefone(e.target.value)} />
      </div>

      <div className={styles.formGroup}>
        <label>E-mail:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className={styles.formGroup}>
        <label>Senha:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button className={styles.button} onClick={() => setShowMessage(true)}>
        Cadastrar
      </button>

      {showMessage && <div className={styles.message}>Cadastro realizado com sucesso</div>}
    </div>
  );
}

export default Cadastrar;