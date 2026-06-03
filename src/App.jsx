import React from 'react';
import './style.css';
import Cadastrar from './components/Cadastrar';
import Login from './components/Login';

function App() {
  return (
    <div className="container">
      <h1>Sistema de Cadastro e Login</h1>
      <Cadastrar />
      <Login />
    </div>
  );
}

export default App;