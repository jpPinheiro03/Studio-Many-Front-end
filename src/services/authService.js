import api from "./api";

const CLIENTE_PERFIL_ID = 3;

function onlyDigits(value) {
  return value.replace(/\D/g, "");
}

export async function login({ email, senha }) {
  const { data } = await api.post("/usuarios/login", {
    email: email.trim(),
    senha,
  });

  return data;
}

export async function register({ nome, documento, telefone, email, senha }) {
  await api.post("/usuarios/cadastrar", {
    nome: nome.trim(),
    documento: onlyDigits(documento),
    telefone: onlyDigits(telefone),
    email: email.trim(),
    senha,
    perfilId: CLIENTE_PERFIL_ID,
  });
}

export async function logout() {
  await api.post("/usuarios/logout");
}
